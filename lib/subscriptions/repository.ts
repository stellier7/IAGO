import { sql } from "@/lib/db/client";

export interface CustomerRow {
  customer_id: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface SubscriptionRow {
  subscription_id: string;
  customer_id: string;
  status: string;
  price_id: string;
  product_id: string;
  scheduled_change_action: string | null;
  scheduled_change_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export async function upsertCustomerRecord(
  customerId: string,
  email: string,
): Promise<void> {
  await sql`
    INSERT INTO customers (customer_id, email, updated_at)
    VALUES (${customerId}, ${email}, NOW())
    ON CONFLICT (customer_id) DO UPDATE SET
      email = EXCLUDED.email,
      updated_at = NOW()
  `;
}

interface SubscriptionMirrorInput {
  id: string;
  customerId: string;
  status: string;
  priceId: string;
  productId: string;
  scheduledChangeAction: string | null;
  scheduledChangeEffectiveAt: string | null;
}

export async function upsertSubscriptionRecord(
  subscription: SubscriptionMirrorInput,
): Promise<void> {
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
      ${subscription.priceId},
      ${subscription.productId},
      ${subscription.scheduledChangeAction},
      ${subscription.scheduledChangeEffectiveAt},
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

export async function getCustomerByEmail(
  email: string,
): Promise<CustomerRow | null> {
  const result = await sql`
    SELECT customer_id, email, created_at, updated_at
    FROM customers
    WHERE LOWER(email) = LOWER(${email})
    LIMIT 1
  `;

  return (result.rows[0] as CustomerRow | undefined) ?? null;
}

export async function getCustomerById(
  customerId: string,
): Promise<CustomerRow | null> {
  const result = await sql`
    SELECT customer_id, email, created_at, updated_at
    FROM customers
    WHERE customer_id = ${customerId}
    LIMIT 1
  `;

  return (result.rows[0] as CustomerRow | undefined) ?? null;
}

export async function getSubscriptionsForCustomer(
  customerId: string,
): Promise<SubscriptionRow[]> {
  const result = await sql`
    SELECT
      subscription_id,
      customer_id,
      status,
      price_id,
      product_id,
      scheduled_change_action,
      scheduled_change_at,
      created_at,
      updated_at
    FROM subscriptions
    WHERE customer_id = ${customerId}
    ORDER BY updated_at DESC
  `;

  return result.rows as SubscriptionRow[];
}

export async function customerHasAccess(customerId: string): Promise<boolean> {
  const result = await sql`
    SELECT EXISTS (
      SELECT 1
      FROM subscriptions
      WHERE customer_id = ${customerId}
        AND status IN ('active', 'trialing')
    ) AS has_access
  `;

  return Boolean(result.rows[0]?.has_access);
}
