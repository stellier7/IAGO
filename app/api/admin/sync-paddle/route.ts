import { NextResponse } from "next/server";
import { syncAllPaddleState } from "@/lib/paddle/sync-state";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.SYNC_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "SYNC_SECRET is not configured on this deployment" },
      { status: 503 },
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await syncAllPaddleState();
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("[sync-paddle] Full sync failed:", error);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
