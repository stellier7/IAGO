import { EventName, type EventEntity } from "@paddle/paddle-node-sdk";
import {
  handleCustomerCreated,
  handleCustomerUpdated,
  handleSubscriptionCanceled,
  handleSubscriptionCreated,
  handleSubscriptionUpdated,
  handleTransactionCompleted,
} from "@/lib/paddle/webhooks/handlers";

export async function dispatchPaddleWebhookEvent(
  event: EventEntity,
): Promise<void> {
  switch (event.eventType) {
    case EventName.CustomerCreated:
      await handleCustomerCreated(event);
      return;
    case EventName.CustomerUpdated:
      await handleCustomerUpdated(event);
      return;
    case EventName.SubscriptionCreated:
      await handleSubscriptionCreated(event);
      return;
    case EventName.SubscriptionUpdated:
      await handleSubscriptionUpdated(event);
      return;
    case EventName.SubscriptionCanceled:
      await handleSubscriptionCanceled(event);
      return;
    case EventName.TransactionCompleted:
      await handleTransactionCompleted(event);
      return;
    default:
      console.info(`[paddle] Ignoring unsupported event ${event.eventType}`);
  }
}
