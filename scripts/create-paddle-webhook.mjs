#!/usr/bin/env node
/**
 * Creates a Paddle webhook notification destination when none exists.
 * Prints endpoint_secret_key only for newly created destinations.
 *
 * Usage:
 *   PADDLE_API_KEY=... PADDLE_ENVIRONMENT=production \
 *   WEBHOOK_URL=https://iagodigital.vercel.app/api/webhooks/paddle \
 *   node scripts/create-paddle-webhook.mjs
 */
const apiKey = process.env.PADDLE_API_KEY;
const environmentName = process.env.PADDLE_ENVIRONMENT ?? "sandbox";
const webhookUrl =
  process.env.WEBHOOK_URL ??
  "https://iagodigital.vercel.app/api/webhooks/paddle";

if (!apiKey) {
  console.error("PADDLE_API_KEY is required");
  process.exit(1);
}

const apiBase =
  environmentName === "production"
    ? "https://api.paddle.com"
    : "https://sandbox-api.paddle.com";

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

const subscribedEvents = [
  "customer.created",
  "customer.updated",
  "subscription.created",
  "subscription.updated",
  "subscription.canceled",
  "transaction.completed",
];

const listResponse = await fetch(`${apiBase}/notification-settings?per_page=50`, {
  headers,
});
const listPayload = await listResponse.json();

if (!listResponse.ok) {
  console.error("Failed to list notification destinations:", listPayload);
  process.exit(1);
}

const existing = (listPayload.data ?? []).find(
  (destination) => destination.destination === webhookUrl,
);

if (existing) {
  console.log(
    JSON.stringify(
      {
        reused: true,
        message:
          "A notification destination for this URL already exists. Reusing it — do not recreate (rotates endpoint_secret_key).",
        destination: existing,
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

const body = {
  description: "IAGO Digital fulfillment webhook",
  type: "url",
  destination: webhookUrl,
  subscribed_events: subscribedEvents,
};

const response = await fetch(`${apiBase}/notification-settings`, {
  method: "POST",
  headers,
  body: JSON.stringify(body),
});

const payload = await response.json();

if (!response.ok) {
  console.error("Failed to create notification destination:", payload);
  process.exit(1);
}

console.log(JSON.stringify(payload.data, null, 2));
console.log("\nSet PADDLE_WEBHOOK_SECRET to endpoint_secret_key above.");
