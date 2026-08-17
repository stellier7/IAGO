export interface Tier {
  name: "Basico" | "SEO" | "Automatizado con IA";
  displayName: string;
  description: string;
  features: string[];
  priceId: { month: string; year: string };
  highlighted?: boolean;
}

export const PRICING_TIERS: Tier[] = [
  {
    name: "Basico",
    displayName: "Básico",
    description: "Sitio web esencial con hosting y soporte continuo.",
    features: [
      "Sitio web responsivo de hasta 5 páginas",
      "Hosting y SSL incluidos",
      "Formulario de contacto",
      "Soporte por email",
    ],
    priceId: {
      month: "pri_01m06ra6ta5hf6s6yt1rpavre4",
      year: "pri_01m06ra6xj3r9fx0t98jvswfzp",
    },
  },
  {
    name: "SEO",
    displayName: "SEO",
    description: "Sitio optimizado para buscadores y mayor visibilidad.",
    features: [
      "Todo lo de Básico",
      "Optimización SEO on-page",
      "Google Search Console y Analytics",
      "Informe mensual de rendimiento",
    ],
    priceId: {
      month: "pri_01m06ra77pdkpdc70t9rsjt8n9",
      year: "pri_01m06ra7ahhj5kdkbhwj3krxnm",
    },
    highlighted: true,
  },
  {
    name: "Automatizado con IA",
    displayName: "Automatizado con IA",
    description: "Sitio inteligente con automatización y flujos con IA.",
    features: [
      "Todo lo de SEO",
      "Chatbot con IA integrado",
      "Automatización de leads y CRM",
      "Integraciones personalizadas",
    ],
    priceId: {
      month: "pri_01m06ra7m02aedptextmasy2t6",
      year: "pri_01m06ra7q0bdygh9ny3hqmfrxh",
    },
  },
];

export type BillingCycle = "month" | "year";

export function getPriceIdsForCycle(cycle: BillingCycle): string[] {
  return PRICING_TIERS.map((tier) =>
    cycle === "month" ? tier.priceId.month : tier.priceId.year,
  );
}

export function findTierByPriceId(priceId: string): Tier | undefined {
  return PRICING_TIERS.find(
    (tier) => tier.priceId.month === priceId || tier.priceId.year === priceId,
  );
}
