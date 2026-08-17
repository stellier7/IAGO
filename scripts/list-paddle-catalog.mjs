#!/usr/bin/env node
/**
 * Lists Paddle products and prices for audit (sandbox or live).
 *
 * Usage:
 *   PADDLE_API_KEY=... PADDLE_ENVIRONMENT=production node scripts/list-paddle-catalog.mjs
 */
const apiKey = process.env.PADDLE_API_KEY;
const environmentName = process.env.PADDLE_ENVIRONMENT ?? "sandbox";

if (!apiKey) {
  console.error("PADDLE_API_KEY is required");
  process.exit(1);
}

const apiBase =
  environmentName === "production"
    ? "https://api.paddle.com"
    : "https://sandbox-api.paddle.com";

async function paddleGet(path) {
  const response = await fetch(`${apiBase}${path}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(JSON.stringify(payload));
  }
  return payload.data ?? [];
}

const products = await paddleGet("/products?status=active&per_page=50");
const catalog = [];

for (const product of products) {
  const prices = await paddleGet(
    `/prices?product_id=${product.id}&status=active&per_page=20`,
  );
  catalog.push({
    product: {
      id: product.id,
      name: product.name,
      custom_data: product.custom_data,
    },
    prices: prices.map((price) => ({
      id: price.id,
      name: price.name,
      billing_cycle: price.billing_cycle,
      unit_price: price.unit_price,
      custom_data: price.custom_data,
    })),
  });
}

console.log(JSON.stringify({ environment: environmentName, apiBase, catalog }, null, 2));
