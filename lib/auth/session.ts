import { cookies } from "next/headers";

/**
 * Returns the signed-in customer's email when available.
 * Wire this up to your auth provider (NextAuth, Clerk, etc.) when you add sign-in.
 */
export function getSignedInCustomerEmail(): string | undefined {
  const sessionEmail = cookies().get("iago_customer_email")?.value;
  if (!sessionEmail) {
    return undefined;
  }
  return sessionEmail;
}
