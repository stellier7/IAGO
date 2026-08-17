import { getPlanPriceIds, type PlanKey } from "@/lib/pricing/price-ids";

export interface Tier {
  name: "Basico" | "SEO" | "Automatizado con IA";
  displayName: string;
  description: string;
  features: string[];
  priceId: { month: string; year: string };
  developmentFeePriceId: string;
  highlighted?: boolean;
}

export interface ContactTier {
  name: "A medida";
  displayName: string;
  description: string;
  features: string[];
  contactHref: string;
  contactLabel: string;
}

const TIER_DEFINITIONS: Array<{
  planKey: PlanKey;
  name: Tier["name"];
  displayName: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}> = [
  {
    planKey: "basico",
    name: "Basico",
    displayName: "Básico",
    description: "Sitio web esencial con hosting y soporte continuo.",
    features: [
      "Sitio web responsivo de hasta 5 páginas",
      "Hosting y SSL incluidos",
      "Formulario de contacto",
      "Soporte por email",
    ],
  },
  {
    planKey: "seo",
    name: "SEO",
    displayName: "SEO",
    description: "Sitio optimizado para buscadores y mayor visibilidad.",
    features: [
      "Todo lo de Básico",
      "Optimización SEO on-page",
      "Google Search Console y Analytics",
      "Informe mensual de rendimiento",
    ],
    highlighted: true,
  },
  {
    planKey: "ia",
    name: "Automatizado con IA",
    displayName: "Automatizado con IA",
    description: "Sitio inteligente con automatización y flujos con IA.",
    features: [
      "Todo lo de SEO",
      "Chatbot con IA integrado",
      "Automatización de leads y CRM",
      "Integraciones personalizadas",
    ],
  },
];

export function getPricingTiers(): Tier[] {
  return TIER_DEFINITIONS.map((definition) => {
    const priceIds = getPlanPriceIds(definition.planKey);
    return {
      name: definition.name,
      displayName: definition.displayName,
      description: definition.description,
      features: definition.features,
      highlighted: definition.highlighted,
      priceId: {
        month: priceIds.month,
        year: priceIds.year,
      },
      developmentFeePriceId: priceIds.developmentFee,
    };
  });
}

export const CONTACT_TIER: ContactTier = {
  name: "A medida",
  displayName: "A medida",
  description:
    "¿Proyecto grande, varios sitios o necesidades especiales? Armemos un plan juntos.",
  features: [
    "Alcance y presupuesto personalizados",
    "Integraciones a la medida",
    "Soporte prioritario",
    "Facturación flexible",
  ],
  contactHref: "https://wa.me/50496784674?text=Hola%20IAGO%2C%20me%20interesa%20un%20plan%20a%20medida.",
  contactLabel: "Contáctanos",
};

export type BillingCycle = "month" | "year";

/** Free hosting months before the first subscription charge (Paddle trial_period). */
export const SUBSCRIPTION_TRIAL_MONTHS = 2;

export function getPriceIdsForCycle(
  tiers: Tier[],
  cycle: BillingCycle,
): string[] {
  return tiers.flatMap((tier) => [
    cycle === "month" ? tier.priceId.month : tier.priceId.year,
    tier.developmentFeePriceId,
  ]);
}

export function getSubscriptionPriceId(
  tier: Tier,
  cycle: BillingCycle,
): string {
  return cycle === "month" ? tier.priceId.month : tier.priceId.year;
}

export function findTierByPriceId(
  tiers: Tier[],
  priceId: string,
): Tier | undefined {
  return tiers.find(
    (tier) =>
      tier.priceId.month === priceId ||
      tier.priceId.year === priceId ||
      tier.developmentFeePriceId === priceId,
  );
}
