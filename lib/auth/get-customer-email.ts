import { cookies } from "next/headers";
import { getUserSession } from "@/lib/auth/session";

/**
 * Returns the signed-in customer's email when available.
 * Prefers the signed session cookie; falls back to legacy customer_email cookie.
 */
export async function getSignedInCustomerEmail(): Promise<string | null> {
  const session = await getUserSession();
  if (session?.email) {
    return session.email;
  }

  const cookieStore = cookies();
  const email = cookieStore.get("customer_email")?.value?.trim();
  if (!email || !email.includes("@")) {
    return null;
  }
  return email;
}
