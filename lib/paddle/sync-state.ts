import {
  getPaddleServerClient,
  getPaddleEnvironmentName,
  isPaddleServerConfigured,
} from "@/lib/paddle/server";
import { findPaddleCustomerByEmail } from "@/lib/paddle/find-customer";
import { describePaddleSyncError, type PaddleSyncError } from "@/lib/paddle/errors";
import {
  getCustomerByEmail,
  upsertCustomerRecord,
  upsertSubscriptionRecord,
  type CustomerRow,
} from "@/lib/subscriptions/repository";

export interface SubscriptionMirrorSource {
  id: string;
  customerId: string;
  status: string;
  items: ReadonlyArray<{
    recurring?: boolean;
    price?: { id?: string; productId?: string } | null;
    product?: { id?: string } | null;
  }>;
  scheduledChange?: {
    action?: string | null;
    effectiveAt?: string | null;
  } | null;
}

export async function mirrorPaddleCustomer(
  customerId: string,
  email: string,
): Promise<void> {
  await upsertCustomerRecord(customerId, email);
}

export async function mirrorPaddleSubscription(
  subscription: SubscriptionMirrorSource,
): Promise<void> {
  const item =
    subscription.items.find((entry) => entry.recurring) ??
    subscription.items[0];

  const priceId = item?.price?.id;
  const productId = item?.price?.productId ?? item?.product?.id;

  if (!priceId || !productId) {
    throw new Error(
      `Subscription ${subscription.id} is missing price/product on primary item`,
    );
  }

  await upsertSubscriptionRecord({
    id: subscription.id,
    customerId: subscription.customerId,
    status: subscription.status,
    priceId,
    productId,
    scheduledChangeAction: subscription.scheduledChange?.action ?? null,
    scheduledChangeEffectiveAt:
      subscription.scheduledChange?.effectiveAt ?? null,
  });
}

export async function ensureCustomerRecord(customerId: string): Promise<void> {
  const paddle = getPaddleServerClient();
  const customer = await paddle.customers.get(customerId);
  await mirrorPaddleCustomer(customer.id, customer.email);
}

export async function mirrorSubscriptionById(
  subscriptionId: string,
): Promise<void> {
  const paddle = getPaddleServerClient();
  const subscription = await paddle.subscriptions.get(subscriptionId);
  await ensureCustomerRecord(subscription.customerId);
  await mirrorPaddleSubscription(subscription);
}

async function mirrorSubscriptionsForCustomer(
  customerId: string,
): Promise<void> {
  const paddle = getPaddleServerClient();

  for await (const subscription of paddle.subscriptions.list({
    customerId: [customerId],
  })) {
    try {
      await mirrorPaddleSubscription(subscription);
    } catch (error) {
      console.warn(
        `[paddle/sync] Skipping subscription ${subscription.id}:`,
        error,
      );
    }
  }
}

export interface SyncCustomerResult {
  customer: CustomerRow | null;
  diagnostic: {
    environment: string;
    paddleCustomerCount: number;
    syncedCustomers: number;
    syncedSubscriptions: number;
  } | null;
  syncError: PaddleSyncError | null;
}

/**
 * Pull a Paddle customer (and their subscriptions) into Postgres by email.
 * Used when webhooks missed the initial checkout sync.
 */
export async function syncCustomerByEmail(
  email: string,
): Promise<CustomerRow | null> {
  const result = await syncCustomerByEmailDetailed(email);
  return result.customer;
}

export async function syncCustomerByEmailDetailed(
  email: string,
): Promise<SyncCustomerResult> {
  if (!isPaddleServerConfigured()) {
    console.warn("[paddle/sync] Skipping sync — Paddle server env is not configured");
    return {
      customer: null,
      diagnostic: null,
      syncError: {
        kind: "config",
        message:
          "PADDLE_API_KEY o PADDLE_ENVIRONMENT no están configurados en el servidor.",
      },
    };
  }

  let environment: string;
  try {
    environment = getPaddleEnvironmentName();
    getPaddleServerClient();
  } catch (error) {
    return {
      customer: null,
      diagnostic: null,
      syncError: describePaddleSyncError(error),
    };
  }

  let syncStats = { customers: 0, subscriptions: 0 };
  try {
    syncStats = await syncAllPaddleState();
  } catch (error) {
    console.error("[paddle/sync] Paddle API sync failed:", error);
    return {
      customer: null,
      diagnostic: {
        environment,
        paddleCustomerCount: 0,
        syncedCustomers: 0,
        syncedSubscriptions: 0,
      },
      syncError: describePaddleSyncError(error),
    };
  }

  const diagnostic = {
    environment,
    paddleCustomerCount: syncStats.customers,
    syncedCustomers: syncStats.customers,
    syncedSubscriptions: syncStats.subscriptions,
  };

  try {
    let customer = await getCustomerByEmail(email);

    if (customer) {
      return { customer, diagnostic, syncError: null };
    }

    const paddle = getPaddleServerClient();
    const matchedCustomer = await findPaddleCustomerByEmail(paddle, email);

    if (matchedCustomer) {
      await mirrorPaddleCustomer(matchedCustomer.id, matchedCustomer.email);
      await mirrorSubscriptionsForCustomer(matchedCustomer.id);
      customer = await getCustomerByEmail(email);
      return { customer, diagnostic, syncError: null };
    }

    console.warn(
      `[paddle/sync] No Paddle customer for ${email} after syncing ${syncStats.customers} customers in ${environment}`,
    );

    return { customer: null, diagnostic, syncError: null };
  } catch (error) {
    console.error("[paddle/sync] Post-sync database lookup failed:", error);
    return {
      customer: null,
      diagnostic,
      syncError: describePaddleSyncError(error),
    };
  }
}

export async function syncAllPaddleState(): Promise<{
  customers: number;
  subscriptions: number;
}> {
  const paddle = getPaddleServerClient();
  let customers = 0;
  let subscriptions = 0;

  try {
    for await (const customer of paddle.customers.list({ perPage: 200 })) {
      try {
        await mirrorPaddleCustomer(customer.id, customer.email);
        customers += 1;
      } catch (error) {
        console.warn(`[paddle/sync] Skipping customer ${customer.id}:`, error);
      }
    }
  } catch (error) {
    console.error("[paddle/sync] Failed to list Paddle customers:", error);
    throw error;
  }

  try {
    for await (const subscription of paddle.subscriptions.list({ perPage: 200 })) {
      try {
        await ensureCustomerRecord(subscription.customerId);
        await mirrorPaddleSubscription(subscription);
        subscriptions += 1;
      } catch (error) {
        console.warn(
          `[paddle/sync] Skipping subscription ${subscription.id}:`,
          error,
        );
      }
    }
  } catch (error) {
    console.error("[paddle/sync] Failed to list Paddle subscriptions:", error);
    throw error;
  }

  return { customers, subscriptions };
}
