import { getUserSession } from "@/lib/auth/session";
import { getCustomerByEmail } from "@/lib/subscriptions/repository";

/**
 * Returns the signed-in customer's Paddle customer ID (ctm_...) when known.
 */
export async function getSignedInPaddleCustomerId(): Promise<string | null> {
  const session = await getUserSession();
  if (!session?.email) {
    return null;
  }

  try {
    const customer = await getCustomerByEmail(session.email);
    return customer?.customer_id ?? null;
  } catch (error) {
    console.error("[auth] Paddle customer lookup failed:", error);
    return null;
  }
}
