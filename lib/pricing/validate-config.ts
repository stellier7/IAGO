import { getPaddleEnvironment } from "@/lib/paddle/config";
import { SANDBOX_PRICE_IDS } from "@/lib/pricing/price-ids";
import { getPricingTiers, type Tier } from "@/lib/pricing/tiers";

const SANDBOX_PRICE_ID_SET = new Set(
  Object.values(SANDBOX_PRICE_IDS).flatMap((plan) => [
    plan.month,
    plan.year,
    plan.developmentFee,
  ]),
);

export interface PricingConfigIssue {
  code: "sandbox_ids_in_production" | "missing_live_price_ids" | "invalid_live_price_ids";
  message: string;
  detail: string;
}

export function collectTierPriceIds(tiers: Tier[]): string[] {
  return tiers.flatMap((tier) => [
    tier.priceId.month,
    tier.priceId.year,
    tier.developmentFeePriceId,
  ]);
}

export function getPricingConfigIssue(): PricingConfigIssue | null {
  let environment: "sandbox" | "production";
  try {
    environment = getPaddleEnvironment();
  } catch {
    return null;
  }

  if (environment !== "production") {
    return null;
  }

  const requiredEnvKeys = [
    "PADDLE_PRICE_BASICO_MONTH",
    "PADDLE_PRICE_BASICO_YEAR",
    "PADDLE_PRICE_BASICO_DEV",
    "PADDLE_PRICE_SEO_MONTH",
    "PADDLE_PRICE_SEO_YEAR",
    "PADDLE_PRICE_SEO_DEV",
    "PADDLE_PRICE_IA_MONTH",
    "PADDLE_PRICE_IA_YEAR",
    "PADDLE_PRICE_IA_DEV",
  ];

  const missingKeys = requiredEnvKeys.filter((key) => !process.env[key]?.trim());
  if (missingKeys.length > 0) {
    return {
      code: "missing_live_price_ids",
      message: "Faltan los price IDs de Paddle live en el servidor.",
      detail:
        `Agrega estas variables en Vercel Production y redeploy: ${missingKeys.join(", ")}. ` +
        "Créalas con: PADDLE_API_KEY=pdl_live_apikey_... bash scripts/create-paddle-catalog-live.sh",
    };
  }

  let tiers: Tier[];
  try {
    tiers = getPricingTiers();
  } catch (error) {
    return {
      code: "missing_live_price_ids",
      message: "No se pudieron resolver los price IDs de Paddle live.",
      detail: error instanceof Error ? error.message : "Revisa PADDLE_PRICE_* en Vercel.",
    };
  }

  const priceIds = collectTierPriceIds(tiers);
  const sandboxIdsInUse = priceIds.filter((id) => SANDBOX_PRICE_ID_SET.has(id));
  if (sandboxIdsInUse.length > 0) {
    return {
      code: "sandbox_ids_in_production",
      message: "El sitio apunta a Paddle live pero aún usa price IDs de sandbox.",
      detail:
        "Crea el catálogo live y actualiza PADDLE_PRICE_* en Vercel Production, luego redeploy. " +
        `IDs de sandbox detectados: ${sandboxIdsInUse.slice(0, 3).join(", ")}…`,
    };
  }

  const placeholderIds = priceIds.filter(
    (id) => id.includes("pri_live_") || !id.startsWith("pri_"),
  );
  if (placeholderIds.length > 0) {
    return {
      code: "invalid_live_price_ids",
      message: "Los price IDs de Paddle live no son válidos.",
      detail:
        "Reemplaza los placeholders de .env.example por los pri_... reales del script create-paddle-catalog-live.sh.",
    };
  }

  return null;
}

export function getPricingTiersOrNull(): Tier[] | null {
  if (getPricingConfigIssue()) {
    return null;
  }

  return getPricingTiers();
}
