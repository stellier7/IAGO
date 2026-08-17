import { getPaddleServerClient } from "@/lib/paddle/server";
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

/**
 * Pull a Paddle customer (and their subscriptions) into Postgres by email.
 * Used when webhooks missed the initial checkout sync.
 */
export async function syncCustomerByEmail(
  email: string,
): Promise<CustomerRow | null> {
  const paddle = getPaddleServerClient();
  const normalizedEmail = email.trim().toLowerCase();

  let matchedCustomer: { id: string; email: string } | null = null;

  for await (const customer of paddle.customers.list({
    email: [normalizedEmail],
  })) {
    if (customer.email.toLowerCase() === normalizedEmail) {
      matchedCustomer = customer;
      break;
    }
  }

  if (!matchedCustomer) {
    return null;
  }

  await mirrorPaddleCustomer(matchedCustomer.id, matchedCustomer.email);

  for await (const subscription of paddle.subscriptions.list({
    customerId: [matchedCustomer.id],
  })) {
    await mirrorPaddleSubscription(subscription);
  }

  return getCustomerByEmail(email);
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
