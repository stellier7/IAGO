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

function readProductionPriceId(envKey: string, label: string): string {
  const value = process.env[envKey]?.trim();
  if (!value) {
    throw new Error(
      `${envKey} is required when PADDLE_ENVIRONMENT=production (${label}). ` +
        "Run scripts/create-paddle-catalog-live.sh and add the printed price IDs to Vercel.",
    );
  }
  return value;
}

export function getPlanPriceIds(plan: PlanKey): PlanPriceIds {
  if (resolvePaddleBillingEnvironment() === "sandbox") {
    return SANDBOX_PRICE_IDS[plan];
  }

  const keys = PRODUCTION_ENV_KEYS[plan];
  return {
    month: readProductionPriceId(keys.month, `${plan} monthly`),
    year: readProductionPriceId(keys.year, `${plan} annual`),
    developmentFee: readProductionPriceId(
      keys.developmentFee,
      `${plan} development fee`,
    ),
  };
}

export function getAllPlanPriceIds(): Record<PlanKey, PlanPriceIds> {
  return {
    basico: getPlanPriceIds("basico"),
    seo: getPlanPriceIds("seo"),
    ia: getPlanPriceIds("ia"),
  };
}

export { SANDBOX_PRICE_IDS };
