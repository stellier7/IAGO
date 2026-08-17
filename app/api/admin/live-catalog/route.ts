import { NextResponse } from "next/server";
import { getPaddleApiKey, getPaddleEnvironmentName } from "@/lib/paddle/server";
import {
  catalogToJsonEnvValue,
  catalogToPriceEnvVars,
  ensureLiveCatalog,
  formatEnvLines,
  readLiveCatalog,
} from "@/lib/paddle/live-catalog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function authorize(request: Request): boolean {
  const secret = process.env.SYNC_SECRET?.trim();
  if (!secret) {
    return false;
  }

  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(request: Request): Promise<Response> {
  if (!authorize(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (getPaddleEnvironmentName() !== "production") {
    return NextResponse.json(
      {
        error:
          "This endpoint only runs when PADDLE_ENVIRONMENT=production on Vercel Production.",
      },
      { status: 400 },
    );
  }

  try {
    const apiKey = getPaddleApiKey();
    const partial = await readLiveCatalog(apiKey);
    return NextResponse.json({
      ok: true,
      partialCatalog: partial,
      complete: Boolean(partial.basico && partial.seo && partial.ia),
    });
  } catch (error) {
    console.error("[live-catalog] Read failed:", error);
    return NextResponse.json(
      {
        error: "Failed to read live catalog",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request): Promise<Response> {
  if (!authorize(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (getPaddleEnvironmentName() !== "production") {
    return NextResponse.json(
      {
        error:
          "This endpoint only runs when PADDLE_ENVIRONMENT=production on Vercel Production.",
      },
      { status: 400 },
    );
  }

  try {
    const apiKey = getPaddleApiKey();
    const result = await ensureLiveCatalog(apiKey);
    const envVars = catalogToPriceEnvVars(result.catalog);

    return NextResponse.json({
      ok: true,
      reusedExisting: result.reusedExisting,
      createdProductIds: result.createdProductIds,
      createdPriceIds: result.createdPriceIds,
      catalog: result.catalog,
      paddleLiveCatalogJson: catalogToJsonEnvValue(result.catalog),
      vercelEnvLines: formatEnvLines(envVars),
      singleEnvVar: {
        key: "PADDLE_LIVE_CATALOG_JSON",
        value: catalogToJsonEnvValue(result.catalog),
      },
    });
  } catch (error) {
    console.error("[live-catalog] Ensure failed:", error);
    return NextResponse.json(
      {
        error: "Failed to ensure live catalog",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
