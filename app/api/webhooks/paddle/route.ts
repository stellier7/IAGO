import { NextResponse } from "next/server";
import { dispatchPaddleWebhookEvent } from "@/lib/paddle/webhooks/router";
import {
  getPaddleEnvironmentName,
  getPaddleServerClient,
  getPaddleWebhookSecret,
} from "@/lib/paddle/server";
import {
  getClientIpFromRequest,
  isAllowedPaddleWebhookIp,
} from "@/lib/paddle/webhook-ip-allowlist";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  if (getPaddleEnvironmentName() === "production") {
    const clientIp = getClientIpFromRequest(request);

    if (!clientIp) {
      return NextResponse.json({ error: "Unable to determine client IP" }, {
        status: 403,
      });
    }

    try {
      const allowed = await isAllowedPaddleWebhookIp(clientIp);
      if (!allowed) {
        console.warn("[paddle] Rejected webhook from non-Paddle IP:", clientIp);
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch (error) {
      console.error("[paddle] Webhook IP allowlist check failed:", error);
      return NextResponse.json({ error: "Webhook IP verification failed" }, {
        status: 503,
      });
    }
  }

  const signature = request.headers.get("paddle-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Paddle-Signature header" }, {
      status: 401,
    });
  }

  const rawBody = await request.text();

  if (!rawBody) {
    return NextResponse.json({ error: "Empty webhook body" }, { status: 400 });
  }

  const paddle = getPaddleServerClient();

  let event;
  try {
    event = await paddle.webhooks.unmarshal(
      rawBody,
      getPaddleWebhookSecret(),
      signature,
    );
  } catch (error) {
    console.error("[paddle] Webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid webhook signature" }, {
      status: 401,
    });
  }

  try {
    await dispatchPaddleWebhookEvent(event);
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(`[paddle] Handler failed for ${event.eventType}:`, error);
    return NextResponse.json({ error: "Webhook handler failed" }, {
      status: 500,
    });
  }
}
