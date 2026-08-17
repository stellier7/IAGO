import type { Customer } from "@paddle/paddle-node-sdk";
import type { Paddle } from "@paddle/paddle-node-sdk";

const CUSTOMER_STATUSES = ["active", "archived"] as const;

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
  const baseQuery = { status: [...CUSTOMER_STATUSES], perPage: 200 as const };

  const exactCandidates = new Set(
    [trimmedEmail, normalizedEmail].filter(Boolean),
  );

  for (const candidate of exactCandidates) {
    const match = await scanCustomerCollection(
      paddle,
      { ...baseQuery, email: [candidate] },
      sessionEmail,
    );
    if (match) {
      return match;
    }
  }

  const searchMatch = await scanCustomerCollection(
    paddle,
    { ...baseQuery, search: normalizedEmail },
    sessionEmail,
  );
  if (searchMatch) {
    return searchMatch;
  }

  const fullScanMatch = await scanCustomerCollection(
    paddle,
    baseQuery,
    sessionEmail,
  );
  if (fullScanMatch) {
    return fullScanMatch;
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

  for await (const transaction of paddle.transactions.list({
    include: ["customer"],
    perPage: 200,
  })) {
    if (
      transaction.customer &&
      matchesSessionEmail(transaction.customer, sessionEmail)
    ) {
      return transaction.customer;
    }
  }

  return null;
}

export async function countPaddleCustomers(paddle: Paddle): Promise<number> {
  let count = 0;

  for await (const _customer of paddle.customers.list({
    status: [...CUSTOMER_STATUSES],
    perPage: 200,
  })) {
    count += 1;
  }

  return count;
}

export interface PaddleSyncDiagnostic {
  environment: string;
  paddleCustomerCount: number;
}

export async function getPaddleSyncDiagnostic(
  paddle: Paddle,
  environment: string,
): Promise<PaddleSyncDiagnostic> {
  return {
    environment,
    paddleCustomerCount: await countPaddleCustomers(paddle),
  };
}
