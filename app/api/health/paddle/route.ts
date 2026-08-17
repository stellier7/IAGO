import { NextResponse } from "next/server";
import { verifyPaddleApiAccess } from "@/lib/paddle/errors";
import { isPaddleServerConfigured } from "@/lib/paddle/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  if (!isPaddleServerConfigured()) {
    return NextResponse.json({
      ok: false,
      reason: "PADDLE_API_KEY or PADDLE_ENVIRONMENT is not configured.",
    });
  }

  const result = await verifyPaddleApiAccess();

  return NextResponse.json({
    ok: result.ok,
    environment: result.environment,
    error: result.error?.message ?? null,
  });
}
