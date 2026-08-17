#!/usr/bin/env node
/**
 * Creates the Paddle sandbox webhook notification destination.
 * Prints endpoint_secret_key — store it as PADDLE_WEBHOOK_SECRET in Vercel.
 *
 * Usage:
 *   PADDLE_API_KEY=... WEBHOOK_URL=https://iagodigital.vercel.app/api/webhooks/paddle node scripts/create-paddle-webhook.mjs
 */
const apiKey = process.env.PADDLE_API_KEY;
const webhookUrl =
  process.env.WEBHOOK_URL ??
  "https://iagodigital.vercel.app/api/webhooks/paddle";

if (!apiKey) {
  console.error("PADDLE_API_KEY is required");
  process.exit(1);
}

const body = {
  description: "IAGO Digital fulfillment webhook",
  type: "url",
  destination: webhookUrl,
  subscribed_events: [
    "customer.created",
    "customer.updated",
    "subscription.created",
    "subscription.updated",
    "subscription.canceled",
    "transaction.completed",
  ],
};

const response = await fetch(
  "https://sandbox-api.paddle.com/notification-settings",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  },
);

const payload = await response.json();

if (!response.ok) {
  console.error("Failed to create notification destination:", payload);
  process.exit(1);
}

console.log(JSON.stringify(payload.data, null, 2));
console.log("\nSet PADDLE_WEBHOOK_SECRET to endpoint_secret_key above.");
