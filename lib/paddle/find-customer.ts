import type { Customer } from "@paddle/paddle-node-sdk";
import type { Paddle } from "@paddle/paddle-node-sdk";

function emailsMatch(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}

function matchesSessionEmail(customer: Customer, sessionEmail: string): boolean {
  return emailsMatch(customer.email, sessionEmail);
}

async function scanCustomerCollection(
  paddle: Paddle,
  queryParams: Parameters<Paddle["customers"]["list"]>[0],
  sessionEmail: string,
): Promise<Customer | null> {
  for await (const customer of paddle.customers.list(queryParams)) {
    if (matchesSessionEmail(customer, sessionEmail)) {
      return customer;
    }
  }

  return null;
}

async function findViaTransactionCustomerIds(
  paddle: Paddle,
  sessionEmail: string,
): Promise<Customer | null> {
  const seenCustomerIds = new Set<string>();

  for await (const transaction of paddle.transactions.list({ perPage: 200 })) {
    if (!transaction.customerId || seenCustomerIds.has(transaction.customerId)) {
      continue;
    }

    seenCustomerIds.add(transaction.customerId);

    try {
      const customer = await paddle.customers.get(transaction.customerId);
      if (matchesSessionEmail(customer, sessionEmail)) {
        return customer;
      }
    } catch {
      // Skip missing customers
    }
  }

  return null;
}

/**
 * Paddle's `email` filter requires an exact case match. Login stores email
 * lowercased, so we try several lookup strategies before giving up.
 */
export async function findPaddleCustomerByEmail(
  paddle: Paddle,
  sessionEmail: string,
): Promise<Customer | null> {
  const trimmedEmail = sessionEmail.trim();
  const normalizedEmail = trimmedEmail.toLowerCase();

  for (const candidate of new Set([trimmedEmail, normalizedEmail])) {
    const exactMatch = await scanCustomerCollection(
      paddle,
      { email: [candidate], perPage: 200 },
      sessionEmail,
    );
    if (exactMatch) {
      return exactMatch;
    }
  }

  const searchMatch = await scanCustomerCollection(
    paddle,
    { search: normalizedEmail, perPage: 200 },
    sessionEmail,
  );
  if (searchMatch) {
    return searchMatch;
  }

  const defaultListMatch = await scanCustomerCollection(
    paddle,
    { perPage: 200 },
    sessionEmail,
  );
  if (defaultListMatch) {
    return defaultListMatch;
  }

  for await (const subscription of paddle.subscriptions.list({ perPage: 200 })) {
    try {
      const customer = await paddle.customers.get(subscription.customerId);
      if (matchesSessionEmail(customer, sessionEmail)) {
        return customer;
      }
    } catch {
      // Skip broken customer references
    }
  }

  const transactionMatch = await findViaTransactionCustomerIds(
    paddle,
    sessionEmail,
  );
  if (transactionMatch) {
    return transactionMatch;
  }

  return null;
}

export async function countPaddleCustomers(paddle: Paddle): Promise<number> {
  let count = 0;

  for await (const _customer of paddle.customers.list({ perPage: 200 })) {
    count += 1;
  }

  return count;
}

export interface PaddleSyncDiagnostic {
  environment: string;
  paddleCustomerCount: number;
  syncedCustomers: number;
  syncedSubscriptions: number;
}

export async function getPaddleSyncDiagnostic(
  paddle: Paddle,
  environment: string,
  syncStats?: { customers: number; subscriptions: number },
): Promise<PaddleSyncDiagnostic> {
  return {
    environment,
    paddleCustomerCount: syncStats?.customers ?? (await countPaddleCustomers(paddle)),
    syncedCustomers: syncStats?.customers ?? 0,
    syncedSubscriptions: syncStats?.subscriptions ?? 0,
  };
}
