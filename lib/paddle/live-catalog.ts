import type { PlanKey, PlanPriceIds } from "@/lib/pricing/price-ids";

type OverrideKind = "monthly" | "annual" | "dev";

const PLAN_DEFINITIONS: Array<{
  key: PlanKey;
  name: string;
  monthlyUsd: string;
  annualUsd: string;
  devUsd: string;
  tier: number;
  description: string;
}> = [
  {
    key: "basico",
    name: "Básico",
    monthlyUsd: "3500",
    annualUsd: "35000",
    devUsd: "40000",
    tier: 1,
    description: "Plan Básico — sitio web esencial con hosting y soporte.",
  },
  {
    key: "seo",
    name: "SEO",
    monthlyUsd: "5500",
    annualUsd: "55000",
    devUsd: "80000",
    tier: 2,
    description: "Plan SEO — sitio optimizado para buscadores y visibilidad.",
  },
  {
    key: "ia",
    name: "Automatizado con IA",
    monthlyUsd: "12000",
    annualUsd: "120000",
    devUsd: "120000",
    tier: 3,
    description:
      "Plan Automatizado con IA — sitio inteligente con automatización avanzada.",
  },
];

const REGIONAL_OVERRIDES: Record<
  PlanKey,
  Record<OverrideKind, { gbp: string; eur: string; aud: string }>
> = {
  basico: {
    monthly: { gbp: "2800", eur: "3200", aud: "5200" },
    annual: { gbp: "28000", eur: "32000", aud: "52000" },
    dev: { gbp: "32000", eur: "37000", aud: "60000" },
  },
  seo: {
    monthly: { gbp: "4400", eur: "5000", aud: "8200" },
    annual: { gbp: "44000", eur: "50000", aud: "82000" },
    dev: { gbp: "64000", eur: "74000", aud: "120000" },
  },
  ia: {
    monthly: { gbp: "9500", eur: "11000", aud: "17500" },
    annual: { gbp: "95000", eur: "110000", aud: "175000" },
    dev: { gbp: "95000", eur: "110000", aud: "175000" },
  },
};

interface PaddleProduct {
  id: string;
  name: string;
  custom_data?: { plan?: string; tier?: number } | null;
}

interface PaddlePrice {
  id: string;
  name: string;
  billing_cycle?: { interval: string; frequency: number } | null;
  custom_data?: { type?: string } | null;
}

export interface LiveCatalogPlan extends PlanPriceIds {
  productId: string;
}

export type LiveCatalog = Record<PlanKey, LiveCatalogPlan>;

export interface LiveCatalogResult {
  catalog: LiveCatalog;
  createdProductIds: string[];
  createdPriceIds: string[];
  reusedExisting: boolean;
}

function buildOverrides(plan: PlanKey, kind: OverrideKind) {
  const amounts = REGIONAL_OVERRIDES[plan][kind];
  return [
    {
      country_codes: ["GB"],
      unit_price: { amount: amounts.gbp, currency_code: "GBP" },
    },
    {
      country_codes: ["IE"],
      unit_price: { amount: amounts.eur, currency_code: "EUR" },
    },
    {
      country_codes: ["AU"],
      unit_price: { amount: amounts.aud, currency_code: "AUD" },
    },
  ];
}

function isLiveApiKey(apiKey: string): boolean {
  return apiKey.startsWith("pdl_live_");
}

async function paddleRequest<T>(
  apiKey: string,
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`https://api.paddle.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(JSON.stringify(payload));
  }

  return payload as T;
}

async function listProducts(apiKey: string): Promise<PaddleProduct[]> {
  const payload = await paddleRequest<{ data: PaddleProduct[] }>(
    apiKey,
    "/products?status=active&per_page=50",
  );
  return payload.data ?? [];
}

async function listPrices(
  apiKey: string,
  productId: string,
): Promise<PaddlePrice[]> {
  const payload = await paddleRequest<{ data: PaddlePrice[] }>(
    apiKey,
    `/prices?product_id=${productId}&status=active&per_page=20`,
  );
  return payload.data ?? [];
}

function mapPricesToPlan(
  productId: string,
  prices: PaddlePrice[],
): LiveCatalogPlan | null {
  const monthly = prices.find((price) => price.billing_cycle?.interval === "month");
  const annual = prices.find((price) => price.billing_cycle?.interval === "year");
  const developmentFee = prices.find(
    (price) =>
      !price.billing_cycle &&
      (price.custom_data?.type === "development_fee" ||
        price.name.toLowerCase().includes("development")),
  );

  if (!monthly || !annual || !developmentFee) {
    return null;
  }

  return {
    productId,
    month: monthly.id,
    year: annual.id,
    developmentFee: developmentFee.id,
  };
}

export async function readLiveCatalog(apiKey: string): Promise<Partial<LiveCatalog>> {
  const products = await listProducts(apiKey);
  const catalog: Partial<LiveCatalog> = {};

  for (const definition of PLAN_DEFINITIONS) {
    const product = products.find(
      (entry) => entry.custom_data?.plan === definition.key,
    );
    if (!product) {
      continue;
    }

    const prices = await listPrices(apiKey, product.id);
    const mapped = mapPricesToPlan(product.id, prices);
    if (mapped) {
      catalog[definition.key] = mapped;
    }
  }

  return catalog;
}

function isCatalogComplete(catalog: Partial<LiveCatalog>): catalog is LiveCatalog {
  return Boolean(catalog.basico && catalog.seo && catalog.ia);
}

async function createProduct(
  apiKey: string,
  definition: (typeof PLAN_DEFINITIONS)[number],
): Promise<string> {
  const payload = await paddleRequest<{ data: { id: string } }>(
    apiKey,
    "/products",
    {
      method: "POST",
      body: JSON.stringify({
        name: definition.name,
        tax_category: "saas",
        description: definition.description,
        custom_data: { plan: definition.key, tier: definition.tier },
      }),
    },
  );

  return payload.data.id;
}

async function createRecurringPrice(
  apiKey: string,
  productId: string,
  definition: (typeof PLAN_DEFINITIONS)[number],
  interval: "month" | "year",
  amount: string,
  kind: "monthly" | "annual",
): Promise<string> {
  const payload = await paddleRequest<{ data: { id: string } }>(
    apiKey,
    "/prices",
    {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        name: interval === "month" ? "Monthly" : "Annual",
        description: `${definition.name} — ${interval}ly subscription`,
        unit_price: { amount, currency_code: "USD" },
        billing_cycle: { interval, frequency: 1 },
        trial_period: { interval: "month", frequency: 2 },
        unit_price_overrides: buildOverrides(definition.key, kind),
      }),
    },
  );

  return payload.data.id;
}

async function createDevelopmentFeePrice(
  apiKey: string,
  productId: string,
  definition: (typeof PLAN_DEFINITIONS)[number],
): Promise<string> {
  const payload = await paddleRequest<{ data: { id: string } }>(
    apiKey,
    "/prices",
    {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        name: "Development fee",
        description: `${definition.name} — one-time development fee`,
        unit_price: { amount: definition.devUsd, currency_code: "USD" },
        billing_cycle: null,
        unit_price_overrides: buildOverrides(definition.key, "dev"),
        custom_data: { type: "development_fee" },
      }),
    },
  );

  return payload.data.id;
}

export async function ensureLiveCatalog(apiKey: string): Promise<LiveCatalogResult> {
  if (!isLiveApiKey(apiKey)) {
    throw new Error(
      "PADDLE_API_KEY must be a live key (pdl_live_apikey_...) to manage the live catalog.",
    );
  }

  const existing = await readLiveCatalog(apiKey);
  if (isCatalogComplete(existing)) {
    return {
      catalog: existing,
      createdProductIds: [],
      createdPriceIds: [],
      reusedExisting: true,
    };
  }

  const catalog: Partial<LiveCatalog> = { ...existing };
  const createdProductIds: string[] = [];
  const createdPriceIds: string[] = [];

  for (const definition of PLAN_DEFINITIONS) {
    if (catalog[definition.key]) {
      continue;
    }

    const productId = await createProduct(apiKey, definition);
    createdProductIds.push(productId);

    const month = await createRecurringPrice(
      apiKey,
      productId,
      definition,
      "month",
      definition.monthlyUsd,
      "monthly",
    );
    const year = await createRecurringPrice(
      apiKey,
      productId,
      definition,
      "year",
      definition.annualUsd,
      "annual",
    );
    const developmentFee = await createDevelopmentFeePrice(
      apiKey,
      productId,
      definition,
    );

    createdPriceIds.push(month, year, developmentFee);
    catalog[definition.key] = {
      productId,
      month,
      year,
      developmentFee,
    };
  }

  if (!isCatalogComplete(catalog)) {
    throw new Error("Live catalog setup incomplete after create attempt.");
  }

  return {
    catalog,
    createdProductIds,
    createdPriceIds,
    reusedExisting: false,
  };
}

export function catalogToPriceEnvVars(catalog: LiveCatalog): Record<string, string> {
  return {
    PADDLE_PRICE_BASICO_MONTH: catalog.basico.month,
    PADDLE_PRICE_BASICO_YEAR: catalog.basico.year,
    PADDLE_PRICE_BASICO_DEV: catalog.basico.developmentFee,
    PADDLE_PRICE_SEO_MONTH: catalog.seo.month,
    PADDLE_PRICE_SEO_YEAR: catalog.seo.year,
    PADDLE_PRICE_SEO_DEV: catalog.seo.developmentFee,
    PADDLE_PRICE_IA_MONTH: catalog.ia.month,
    PADDLE_PRICE_IA_YEAR: catalog.ia.year,
    PADDLE_PRICE_IA_DEV: catalog.ia.developmentFee,
  };
}

export function catalogToJsonEnvValue(catalog: LiveCatalog): string {
  const compact: Record<PlanKey, PlanPriceIds> = {
    basico: {
      month: catalog.basico.month,
      year: catalog.basico.year,
      developmentFee: catalog.basico.developmentFee,
    },
    seo: {
      month: catalog.seo.month,
      year: catalog.seo.year,
      developmentFee: catalog.seo.developmentFee,
    },
    ia: {
      month: catalog.ia.month,
      year: catalog.ia.year,
      developmentFee: catalog.ia.developmentFee,
    },
  };

  return JSON.stringify(compact);
}

export function formatEnvLines(values: Record<string, string>): string[] {
  return Object.entries(values).map(([key, value]) => `${key}=${value}`);
}
