import {
  getPaddleServerClient,
  getPaddleEnvironmentName,
  isPaddleServerConfigured,
} from "@/lib/paddle/server";
import {
  findPaddleCustomerByEmail,
  getPaddleSyncDiagnostic,
} from "@/lib/paddle/find-customer";
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

export interface SyncCustomerResult {
  customer: CustomerRow | null;
  diagnostic: {
    environment: string;
    paddleCustomerCount: number;
  } | null;
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
    return { customer: null, diagnostic: null };
  }

  try {
    const paddle = getPaddleServerClient();
    const environment = getPaddleEnvironmentName();
    const matchedCustomer = await findPaddleCustomerByEmail(paddle, email);
    const diagnostic = await getPaddleSyncDiagnostic(paddle, environment);

    if (!matchedCustomer) {
      console.warn(
        `[paddle/sync] No Paddle customer for ${email} (${diagnostic.paddleCustomerCount} customers in ${environment})`,
      );
      return { customer: null, diagnostic };
    }

    await mirrorPaddleCustomer(matchedCustomer.id, matchedCustomer.email);

    for await (const subscription of paddle.subscriptions.list({
      customerId: [matchedCustomer.id],
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

    const customer = await getCustomerByEmail(email);
    return { customer, diagnostic };
  } catch (error) {
    console.error("[paddle/sync] Failed to sync customer by email:", error);
    return { customer: null, diagnostic: null };
  }
}

export async function syncAllPaddleState(): Promise<{
  customers: number;
  subscriptions: number;
}> {
  const paddle = getPaddleServerClient();
  let customers = 0;
  let subscriptions = 0;

  for await (const customer of paddle.customers.list()) {
    await mirrorPaddleCustomer(customer.id, customer.email);
    customers += 1;
  }

  for await (const subscription of paddle.subscriptions.list()) {
    await ensureCustomerRecord(subscription.customerId);
    await mirrorPaddleSubscription(subscription);
    subscriptions += 1;
  }

  return { customers, subscriptions };
}
