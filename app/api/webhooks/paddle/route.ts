import { NextResponse } from "next/server";
import { dispatchPaddleWebhookEvent } from "@/lib/paddle/webhooks/router";
import {
  getPaddleServerClient,
  getPaddleWebhookSecret,
} from "@/lib/paddle/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
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
