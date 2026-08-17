import { cookies } from "next/headers";

/**
 * Returns the signed-in customer's email when available.
 * Wire this to your auth provider (Clerk, NextAuth, etc.) when ready.
 */
export async function getSignedInCustomerEmail(): Promise<string | null> {
  const cookieStore = cookies();
  const email = cookieStore.get("customer_email")?.value?.trim();
  if (!email || !email.includes("@")) {
    return null;
  }
  return email;
}
