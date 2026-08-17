CREATE TABLE IF NOT EXISTS customers (
  customer_id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_customers_email ON customers (email);

CREATE TABLE IF NOT EXISTS subscriptions (
  subscription_id TEXT PRIMARY KEY,
  customer_id TEXT NOT NULL REFERENCES customers (customer_id),
  status TEXT NOT NULL,
  price_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  scheduled_change_action TEXT,
  scheduled_change_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_customer_id ON subscriptions (customer_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions (status);
