export interface Tier {
  name: "Basica" | "SEO" | "Automatizar";
  description: string;
  features: string[];
  priceId: { month: string; year: string };
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set. Add it to your environment (see .env.example).`);
  }
  return value;
}

/** Edit tier copy here; price IDs come from environment variables. */
export const tiers: Tier[] = [
  {
    name: "Basica",
    description: "Landing page o sitio web básico con diseño premium, hosting y mantenimiento.",
    features: [
      "Sitio responsive",
      "Hosting incluido",
      "CMS para contenido",
      "7 días de prueba gratis",
    ],
    priceId: {
      month: requireEnv("NEXT_PUBLIC_PADDLE_PRICE_BASICA_MONTH"),
      year: requireEnv("NEXT_PUBLIC_PADDLE_PRICE_BASICA_YEAR"),
    },
  },
  {
    name: "SEO",
    description: "Auditorías técnicas, optimización on-page y estrategia de contenido orgánico.",
    features: [
      "Auditoría técnica mensual",
      "Core Web Vitals",
      "Schema y meta tags",
      "7 días de prueba gratis",
    ],
    priceId: {
      month: requireEnv("NEXT_PUBLIC_PADDLE_PRICE_SEO_MONTH"),
      year: requireEnv("NEXT_PUBLIC_PADDLE_PRICE_SEO_YEAR"),
    },
  },
  {
    name: "Automatizar",
    description: "Chatbots, flujos con IA e integraciones que eliminan trabajo manual.",
    features: [
      "Automatizaciones con IA",
      "Integraciones (Zapier, APIs)",
      "Dashboards personalizados",
      "7 días de prueba gratis",
    ],
    priceId: {
      month: requireEnv("NEXT_PUBLIC_PADDLE_PRICE_AUTOMATIZAR_MONTH"),
      year: requireEnv("NEXT_PUBLIC_PADDLE_PRICE_AUTOMATIZAR_YEAR"),
    },
  },
];
