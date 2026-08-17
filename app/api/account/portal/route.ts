import { NextResponse } from "next/server";
import { getUserSession } from "@/lib/auth/session";
import {
  getCustomerByEmail,
  getSubscriptionsForCustomer,
} from "@/lib/subscriptions/repository";
import { getPaddleServerClient } from "@/lib/paddle/server";
import { syncCustomerByEmail } from "@/lib/paddle/sync-state";

export async function GET(request: Request): Promise<Response> {
  const origin = new URL(request.url).origin;
  const session = await getUserSession();

  if (!session) {
    return NextResponse.redirect(new URL("/login?next=/account", origin));
  }

  let customer = await getCustomerByEmail(session.email);

  if (!customer) {
    customer = await syncCustomerByEmail(session.email);
  }

  if (!customer) {
    return NextResponse.redirect(new URL("/account?error=no-customer", origin));
  }

  const subscriptions = await getSubscriptionsForCustomer(
    customer.customer_id,
  );
  const subscriptionIds = subscriptions.map(
    (subscription) => subscription.subscription_id,
  );

  const paddle = getPaddleServerClient();
  const portalSession = await paddle.customerPortalSessions.create(
    customer.customer_id,
    subscriptionIds,
  );

  return NextResponse.redirect(portalSession.urls.general.overview);
}
