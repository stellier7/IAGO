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
    developmentFeePriceId: "pri_01m06ra70eba00jzjwd2v9dfzm",
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
    developmentFeePriceId: "pri_01m06ra7depc2jhfjh9nf1sh9x",
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
    developmentFeePriceId: "pri_01m06ra7stggeyg67c6j9rhw5k",
  },
];

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

export function getPriceIdsForCycle(cycle: BillingCycle): string[] {
  return PRICING_TIERS.flatMap((tier) => [
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

export function findTierByPriceId(priceId: string): Tier | undefined {
  return PRICING_TIERS.find(
    (tier) =>
      tier.priceId.month === priceId ||
      tier.priceId.year === priceId ||
      tier.developmentFeePriceId === priceId,
  );
}
