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
    description:
      "Pago único: sitio esencial. Suscripción: hosting, SSL y soporte.",
    features: [
      "Hasta 5 páginas responsivas (pago único)",
      "Formulario de contacto (pago único)",
      "Hosting + SSL en la suscripción",
      "Soporte por email mientras la suscripción esté activa",
    ],
  },
  {
    planKey: "seo",
    name: "SEO",
    displayName: "SEO",
    description:
      "Pago único: sitio + setup SEO. Suscripción: hosting e informe mensual.",
    features: [
      "Todo lo de Básico",
      "SEO on-page inicial + Search Console / Analytics (pago único)",
      "Tarjeta de presentación NFC (pago único)",
      "Informe mensual de rendimiento (suscripción)",
      "Hosting + SSL en la suscripción",
    ],
    highlighted: true,
  },
  {
    planKey: "ia",
    name: "Automatizado con IA",
    displayName: "Automatizado con IA",
    description:
      "Pago único: sitio + SEO + flujos IA. Suscripción: hosting y operación del plan.",
    features: [
      "Todo lo de SEO",
      "Chatbot con IA integrado (pago único + operación en suscripción)",
      "Automatización de leads / CRM según alcance acordado",
      "Integraciones personalizadas cotizadas en el alcance",
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
    "Varios sitios, e-commerce, o automatizaciones fuera de los planes fijos. Cotizamos desarrollo y, si aplica, un retainer aparte.",
  features: [
    "Alcance con entregables y precios por fase",
    "Integraciones y flujos a la medida",
    "Soporte prioritario",
    "Facturación flexible (proyecto y/o mensual)",
  ],
  contactHref: "https://wa.me/50489809800?text=Hola%20IAGO%2C%20me%20interesa%20un%20plan%20a%20medida.",
  contactLabel: "Contáctanos",
};

export type BillingCycle = "month" | "year";

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
