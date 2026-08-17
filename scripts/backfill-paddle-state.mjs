#!/usr/bin/env node
/**
 * Backfill customers and subscriptions from Paddle into Postgres.
 * Useful after the first checkout if webhooks were not configured yet.
 *
 * Usage: PADDLE_API_KEY=... PADDLE_ENVIRONMENT=sandbox POSTGRES_URL=... node scripts/backfill-paddle-state.mjs
 */
import { Environment, Paddle } from "@paddle/paddle-node-sdk";
import { sql } from "@vercel/postgres";

const apiKey = process.env.PADDLE_API_KEY;
const environmentName = process.env.PADDLE_ENVIRONMENT ?? "sandbox";

if (!apiKey) {
  console.error("PADDLE_API_KEY is required");
  process.exit(1);
}

const paddle = new Paddle(apiKey, {
  environment:
    environmentName === "production"
      ? Environment.production
      : Environment.sandbox,
});

async function upsertCustomer(customer) {
  await sql`
    INSERT INTO customers (customer_id, email, updated_at)
    VALUES (${customer.id}, ${customer.email}, NOW())
    ON CONFLICT (customer_id) DO UPDATE SET
      email = EXCLUDED.email,
      updated_at = NOW()
  `;
}

async function upsertSubscription(subscription) {
  const item =
    subscription.items?.find((entry) => entry.recurring) ??
    subscription.items?.[0];
  const priceId = item?.price?.id;
  const productId = item?.price?.productId ?? item?.product?.id;

  if (!priceId || !productId) {
    console.warn(`Skipping subscription ${subscription.id} — missing price/product`);
    return;
  }

  await sql`
    INSERT INTO subscriptions (
      subscription_id,
      customer_id,
      status,
      price_id,
      product_id,
      scheduled_change_action,
      scheduled_change_at,
      updated_at
    )
    VALUES (
      ${subscription.id},
      ${subscription.customerId},
      ${subscription.status},
      ${priceId},
      ${productId},
      ${subscription.scheduledChange?.action ?? null},
      ${subscription.scheduledChange?.effectiveAt ?? null},
      NOW()
    )
    ON CONFLICT (subscription_id) DO UPDATE SET
      customer_id = EXCLUDED.customer_id,
      status = EXCLUDED.status,
      price_id = EXCLUDED.price_id,
      product_id = EXCLUDED.product_id,
      scheduled_change_action = EXCLUDED.scheduled_change_action,
      scheduled_change_at = EXCLUDED.scheduled_change_at,
      updated_at = NOW()
  `;
}

async function main() {
  const customerCollection = paddle.customers.list();
  for await (const customer of customerCollection) {
    await upsertCustomer(customer);
    console.log(`Customer ${customer.id} ${customer.email}`);
  }

  const subscriptionCollection = paddle.subscriptions.list();
  for await (const subscription of subscriptionCollection) {
    await upsertCustomer(await paddle.customers.get(subscription.customerId));
    await upsertSubscription(subscription);
    console.log(`Subscription ${subscription.id} ${subscription.status}`);
  }

  console.log("Backfill complete.");
}

main().catch((error) => {
  console.error("Backfill failed:", error);
  process.exit(1);
});
