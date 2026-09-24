import { NextResponse } from "next/server";
import { getSiteUrl, getWebhookUrl } from "@/lib/site-url";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const REQUIRED_PATHS = ["/", "/pricing", "/terms", "/privacy", "/refund"];

export async function GET(): Promise<Response> {
  const siteUrl = getSiteUrl();
  const checks: Array<{ path: string; ok: boolean; status: number | null }> = [];

  for (const path of REQUIRED_PATHS) {
    try {
      const response = await fetch(`${siteUrl}${path}`, {
        method: "GET",
        redirect: "follow",
      });
      checks.push({ path, ok: response.ok, status: response.status });
    } catch {
      checks.push({ path, ok: false, status: null });
    }
  }

  let applePayFileOk = false;
  try {
    const response = await fetch(
      `${siteUrl}/.well-known/apple-developer-merchantid-domain-association`,
      { method: "GET", redirect: "follow" },
    );
    applePayFileOk = response.ok;
  } catch {
    applePayFileOk = false;
  }

  const pagesOk = checks.every((check) => check.ok);

  return NextResponse.json({
    ok: pagesOk,
    siteUrl,
    webhookUrl: getWebhookUrl(),
    pages: checks,
    applePayDomainAssociation: {
      path: "/.well-known/apple-developer-merchantid-domain-association",
      ok: applePayFileOk,
      requiredForApplePay: false,
    },
    paddleVerification: {
      dashboardPath: "Checkout → Website approval → Domain approval",
      note:
        "Add both www.iagodigital.com and iagodigital.com separately if checkout runs on both.",
    },
  });
}
