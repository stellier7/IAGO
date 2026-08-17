import { NextResponse } from "next/server";
import { getPaddleEnvironment } from "@/lib/paddle/config";
import {
  collectTierPriceIds,
  getPricingConfigIssue,
  getPricingTiersOrNull,
} from "@/lib/pricing/validate-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  let clientEnvironment: string | null = null;
  try {
    clientEnvironment = getPaddleEnvironment();
  } catch (error) {
    return NextResponse.json({
      ok: false,
      reason: error instanceof Error ? error.message : "Paddle client env not configured.",
    });
  }

  const issue = getPricingConfigIssue();
  const tiers = getPricingTiersOrNull();

  return NextResponse.json({
    ok: !issue && tiers !== null,
    clientEnvironment,
    serverEnvironment:
      process.env.PADDLE_ENVIRONMENT ??
      process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT ??
      null,
    priceIds: tiers ? collectTierPriceIds(tiers) : null,
    issue,
  });
}
