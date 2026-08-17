export type PlanKey = "basico" | "seo" | "ia";

export interface PlanPriceIds {
  month: string;
  year: string;
  developmentFee: string;
}

const SANDBOX_PRICE_IDS: Record<PlanKey, PlanPriceIds> = {
  basico: {
    month: "pri_01m06ra6ta5hf6s6yt1rpavre4",
    year: "pri_01m06ra6xj3r9fx0t98jvswfzp",
    developmentFee: "pri_01m06ra70eba00jzjwd2v9dfzm",
  },
  seo: {
    month: "pri_01m06ra77pdkpdc70t9rsjt8n9",
    year: "pri_01m06ra7ahhj5kdkbhwj3krxnm",
    developmentFee: "pri_01m06ra7depc2jhfjh9nf1sh9x",
  },
  ia: {
    month: "pri_01m06ra7m02aedptextmasy2t6",
    year: "pri_01m06ra7q0bdygh9ny3hqmfrxh",
    developmentFee: "pri_01m06ra7stggeyg67c6j9rhw5k",
  },
};

const PRODUCTION_ENV_KEYS: Record<PlanKey, Record<keyof PlanPriceIds, string>> =
  {
    basico: {
      month: "PADDLE_PRICE_BASICO_MONTH",
      year: "PADDLE_PRICE_BASICO_YEAR",
      developmentFee: "PADDLE_PRICE_BASICO_DEV",
    },
    seo: {
      month: "PADDLE_PRICE_SEO_MONTH",
      year: "PADDLE_PRICE_SEO_YEAR",
      developmentFee: "PADDLE_PRICE_SEO_DEV",
    },
    ia: {
      month: "PADDLE_PRICE_IA_MONTH",
      year: "PADDLE_PRICE_IA_YEAR",
      developmentFee: "PADDLE_PRICE_IA_DEV",
    },
  };

function resolvePaddleBillingEnvironment(): "sandbox" | "production" {
  const environment =
    process.env.PADDLE_ENVIRONMENT ??
    process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT ??
    "sandbox";

  return environment === "production" ? "production" : "sandbox";
}

function readProductionPriceId(envKey: string): string | null {
  const value = process.env[envKey]?.trim();
  return value || null;
}

function readLiveCatalogJson(): Record<PlanKey, PlanPriceIds> | null {
  const raw = process.env.PADDLE_LIVE_CATALOG_JSON?.trim();
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Record<string, Partial<PlanPriceIds>>;
    const plans: PlanKey[] = ["basico", "seo", "ia"];
    const catalog = {} as Record<PlanKey, PlanPriceIds>;

    for (const plan of plans) {
      const entry = parsed[plan];
      if (!entry?.month || !entry?.year || !entry?.developmentFee) {
        return null;
      }
      catalog[plan] = {
        month: entry.month,
        year: entry.year,
        developmentFee: entry.developmentFee,
      };
    }

    return catalog;
  } catch {
    return null;
  }
}

function readProductionPriceIdsFromEnv(): Record<PlanKey, PlanPriceIds> | null {
  const jsonCatalog = readLiveCatalogJson();
  if (jsonCatalog) {
    return jsonCatalog;
  }

  const catalog = {} as Record<PlanKey, PlanPriceIds>;
  for (const plan of Object.keys(PRODUCTION_ENV_KEYS) as PlanKey[]) {
    const keys = PRODUCTION_ENV_KEYS[plan];
    const month = readProductionPriceId(keys.month);
    const year = readProductionPriceId(keys.year);
    const developmentFee = readProductionPriceId(keys.developmentFee);

    if (!month || !year || !developmentFee) {
      return null;
    }

    catalog[plan] = { month, year, developmentFee };
  }

  return catalog;
}

export function getPlanPriceIds(plan: PlanKey): PlanPriceIds {
  if (resolvePaddleBillingEnvironment() === "sandbox") {
    return SANDBOX_PRICE_IDS[plan];
  }

  const productionCatalog = readProductionPriceIdsFromEnv();
  if (!productionCatalog) {
    throw new Error(
      "Live price IDs are not configured. Set PADDLE_LIVE_CATALOG_JSON or the nine PADDLE_PRICE_* variables in Vercel Production.",
    );
  }

  return productionCatalog[plan];
}

export function hasProductionPriceIdsConfigured(): boolean {
  if (resolvePaddleBillingEnvironment() !== "production") {
    return true;
  }

  return readProductionPriceIdsFromEnv() !== null;
}

export function getAllPlanPriceIds(): Record<PlanKey, PlanPriceIds> {
  return {
    basico: getPlanPriceIds("basico"),
    seo: getPlanPriceIds("seo"),
    ia: getPlanPriceIds("ia"),
  };
}

export { SANDBOX_PRICE_IDS };
