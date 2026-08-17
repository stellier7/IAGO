import type { EventEntity } from "@paddle/paddle-node-sdk";
import {
  ensureCustomerRecord,
  mirrorPaddleCustomer,
  mirrorPaddleSubscription,
  mirrorSubscriptionById,
} from "@/lib/paddle/sync-state";

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
  await mirrorPaddleCustomer(event.data.id, event.data.email);
}

export async function handleCustomerUpdated(
  event: Extract<EventEntity, { eventType: "customer.updated" }>,
): Promise<void> {
  await mirrorPaddleCustomer(event.data.id, event.data.email);
}

async function handleSubscriptionEvent(event: SubscriptionEvent): Promise<void> {
  await ensureCustomerRecord(event.data.customerId);
  await mirrorPaddleSubscription(event.data);
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

  if (transaction.subscriptionId) {
    await mirrorSubscriptionById(transaction.subscriptionId);
  }

  console.info(
    `[paddle] transaction.completed ${transaction.id} customer=${transaction.customerId ?? "none"} subscription=${transaction.subscriptionId ?? "none"}`,
  );
}
