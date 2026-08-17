import type { EventEntity } from "@paddle/paddle-node-sdk";
import {
  upsertCustomerRecord,
  upsertSubscriptionRecord,
} from "@/lib/subscriptions/repository";
import { getPaddleServerClient } from "@/lib/paddle/server";

type SubscriptionEvent = Extract<
  EventEntity,
  {
    eventType:
      | "subscription.created"
      | "subscription.updated"
      | "subscription.canceled";
  }
>;

export async function handleCustomerCreated(
  event: Extract<EventEntity, { eventType: "customer.created" }>,
): Promise<void> {
  await upsertCustomerRecord(event.data.id, event.data.email);
}

export async function handleCustomerUpdated(
  event: Extract<EventEntity, { eventType: "customer.updated" }>,
): Promise<void> {
  await upsertCustomerRecord(event.data.id, event.data.email);
}

async function ensureCustomerRecord(customerId: string): Promise<void> {
  const paddle = getPaddleServerClient();
  const customer = await paddle.customers.get(customerId);
  await upsertCustomerRecord(customer.id, customer.email);
}

async function mirrorSubscription(
  subscription: SubscriptionEvent["data"],
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

async function handleSubscriptionEvent(event: SubscriptionEvent): Promise<void> {
  await ensureCustomerRecord(event.data.customerId);
  await mirrorSubscription(event.data);
}

export async function handleSubscriptionCreated(
  event: Extract<EventEntity, { eventType: "subscription.created" }>,
): Promise<void> {
  await handleSubscriptionEvent(event);
}

export async function handleSubscriptionUpdated(
  event: Extract<EventEntity, { eventType: "subscription.updated" }>,
): Promise<void> {
  await handleSubscriptionEvent(event);
}

export async function handleSubscriptionCanceled(
  event: Extract<EventEntity, { eventType: "subscription.canceled" }>,
): Promise<void> {
  await handleSubscriptionEvent(event);
}

export async function handleTransactionCompleted(
  event: Extract<EventEntity, { eventType: "transaction.completed" }>,
): Promise<void> {
  const transaction = event.data;

  if (transaction.customerId) {
    await ensureCustomerRecord(transaction.customerId);
  }

  console.info(
    `[paddle] transaction.completed ${transaction.id} customer=${transaction.customerId ?? "none"} subscription=${transaction.subscriptionId ?? "none"}`,
  );
}
