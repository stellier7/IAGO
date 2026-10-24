export type ServiceSlug = "web" | "seo" | "automatizaciones";

export type ServicePage = {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  intro: string;
  outcomes: string[];
  includes: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "web",
    title: "Diseño y desarrollo web",
    eyebrow: "Servicio · Web",
    headline: "Sitios web que convierten, no solo se ven bien",
    description:
      "Diseño y desarrollo web en Honduras: landing pages, sitios corporativos y e-commerce con Next.js, performance y foco en conversión.",
    intro:
      "Construimos sitios rápidos, claros y listos para vender o captar leads. Diseño premium, código moderno y una base sólida para SEO.",
    outcomes: [
      "Más claridad en tu oferta y llamadas a la acción",
      "Carga rápida en móvil (Core Web Vitals)",
      "Base técnica lista para posicionar en Google",
      "Diseño alineado a tu marca, sin plantillas genéricas",
    ],
    includes: [
      "Landing pages y sitios corporativos",
      "E-commerce y catálogos",
      "Diseño responsive y accesible",
      "Integración con WhatsApp, formularios y analytics",
      "Despliegue en Vercel / hosting administrado",
    ],
    faqs: [
      {
        question: "¿Cuánto tarda un sitio?",
        answer:
          "Depende del alcance. Una landing sólida suele tomar pocas semanas; un sitio corporativo o e-commerce se planifica por fases con entregables claros.",
      },
      {
        question: "¿Puedo actualizar el contenido después?",
        answer:
          "Sí. Definimos qué partes editas tú (textos, fotos, casos) y qué queda en el código para no romper diseño ni velocidad.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO y posicionamiento en Google",
    eyebrow: "Servicio · SEO",
    headline: "Visibilidad orgánica con trabajo técnico y contenido",
    description:
      "SEO en Honduras: auditorías técnicas, Search Console, contenido y optimización on-page para que tu negocio aparezca en Google.",
    intro:
      "No vendemos “primer lugar garantizado”. Montamos la base correcta (técnica + páginas útiles + medición) para que Google pueda entenderte y rankearte con el tiempo.",
    outcomes: [
      "Sitio verificable en Google Search Console y Bing",
      "Sitemap, indexación y datos estructurados",
      "Páginas pensadas para búsquedas reales de clientes",
      "Reportes claros de qué funciona y qué mejorar",
    ],
    includes: [
      "Auditoría técnica (velocidad, indexación, errores)",
      "On-page: títulos, meta, headings, enlaces internos",
      "Schema / markup cuando aporta",
      "Estrategia de contenido alineada a tu oferta",
      "Seguimiento en Search Console y Analytics",
    ],
    faqs: [
      {
        question: "¿En cuánto tiempo se ven resultados?",
        answer:
          "El SEO es acumulativo. Suele haber señales en semanas (indexación, impresiones); tráfico estable suele tomar meses según competencia y contenido.",
      },
      {
        question: "¿SEO local o nacional?",
        answer:
          "Ambos son posibles. En Honduras trabajamos búsquedas locales (ciudad / servicio) y de marca según tu mercado objetivo.",
      },
    ],
  },
  {
    slug: "automatizaciones",
    title: "Automatizaciones con IA",
    eyebrow: "Servicio · Automatizaciones",
    headline: "Menos trabajo repetitivo, más tiempo para vender",
    description:
      "Automatizaciones con IA para negocios en Honduras: chatbots, flujos, integraciones y dashboards que eliminan tareas manuales.",
    intro:
      "Conectamos las herramientas que ya usas (WhatsApp, email, CRM, hojas de cálculo) y añadimos IA donde realmente ahorra tiempo: respuestas, clasificación, seguimiento y reportes.",
    outcomes: [
      "Menos mensajes y tareas hechas a mano",
      "Respuestas más rápidas a prospectos",
      "Procesos repetibles y documentados",
      "Integraciones entre las apps de tu operación",
    ],
    includes: [
      "Chatbots y asistentes con IA",
      "Flujos (Zapier / Make / APIs a medida)",
      "Captura y enrutamiento de leads",
      "Dashboards y alertas operativas",
      "Capacitación breve para tu equipo",
    ],
    faqs: [
      {
        question: "¿Necesito cambiar todas mis herramientas?",
        answer:
          "No. Empezamos con lo que ya usas y automatizamos el cuello de botella más caro en tiempo.",
      },
      {
        question: "¿La IA reemplaza a mi equipo?",
        answer:
          "No. Quita lo repetitivo para que tu equipo se enfoque en ventas, atención y decisiones.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}
