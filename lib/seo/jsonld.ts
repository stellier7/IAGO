import { absoluteUrl, SITE_URL } from "@/lib/seo/site";
import { FOUNDER, organizationSameAs } from "@/lib/social/profiles";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Core services offered — matches visible service architecture pages */
export const CORE_SERVICES = [
  {
    id: `${SITE_URL}/#service-website-design`,
    name: "Diseño y desarrollo web",
    description:
      "Sitios de negocio rápidos en móvil, orientados a conversión, WhatsApp y base SEO.",
    path: "/website-design-honduras",
  },
  {
    id: `${SITE_URL}/#service-seo`,
    name: "Servicios SEO",
    description:
      "SEO técnico, contenido útil e informes — sin promesas de posiciones mágicas.",
    path: "/seo-services-honduras",
  },
  {
    id: `${SITE_URL}/#service-ai-seo`,
    name: "AI SEO y GEO",
    description:
      "Claridad de entidad y contenido citable para buscadores y respuestas con IA.",
    path: "/ai-seo-honduras",
  },
  {
    id: `${SITE_URL}/#service-ai-automation`,
    name: "Automatización con IA",
    description:
      "Flujos que automatizan tareas repetitivas con handoff humano cuando importa.",
    path: "/ai-automation-honduras",
  },
  {
    id: `${SITE_URL}/#service-whatsapp`,
    name: "Automatización de WhatsApp",
    description:
      "Calificación de leads y primeras respuestas por WhatsApp con límites claros.",
    path: "/whatsapp-automation",
  },
  {
    id: `${SITE_URL}/#service-maintenance`,
    name: "Mantenimiento web",
    description:
      "Actualizaciones, monitoreo y mejoras menores para sitios en producción.",
    path: "/website-maintenance",
  },
] as const;

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildArticleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  tags?: string[];
}) {
  return {
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      "@id": FOUNDER_ID,
    },
    publisher: {
      "@id": ORG_ID,
    },
    image: absoluteUrl("/og-image.png"),
    inLanguage: "es",
    ...(input.tags?.length
      ? { keywords: input.tags.join(", ") }
      : {}),
  };
}

export function buildServiceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  id?: string;
}) {
  return {
    "@type": "Service",
    ...(input.id ? { "@id": input.id } : {}),
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@id": ORG_ID,
    },
    areaServed: [
      { "@type": "Country", name: "Honduras" },
      { "@type": "Place", name: "Central America" },
      { "@type": "Place", name: "Latin America" },
    ],
  };
}

export function buildSiteGraph() {
  const services = CORE_SERVICES.map((service) =>
    buildServiceJsonLd({
      id: service.id,
      name: service.name,
      description: service.description,
      path: service.path,
    }),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "IAGO Digital",
        legalName: "iAGO Digital",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/icon.png"),
          width: 512,
          height: 512,
        },
        email: "info@iagodigital.com",
        telephone: "+50489809800",
        description:
          "Agencia digital para negocios en Centroamérica y Latam: sitios que convierten, SEO con reportes y automatizaciones con IA para no perder leads.",
        sameAs: organizationSameAs,
        founder: { "@id": FOUNDER_ID },
        knowsAbout: CORE_SERVICES.map((service) => service.name),
        makesOffer: CORE_SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@id": service.id },
        })),
        areaServed: [
          { "@type": "Country", name: "Honduras" },
          { "@type": "Place", name: "Central America" },
          { "@type": "Place", name: "Latin America" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "info@iagodigital.com",
          telephone: "+50489809800",
          availableLanguage: ["Spanish", "English", "es", "en"],
        },
      },
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        name: FOUNDER.name,
        jobTitle: FOUNDER.jobTitle,
        url: absoluteUrl("/about"),
        sameAs: [FOUNDER.linkedIn],
        worksFor: { "@id": ORG_ID },
        description:
          "Fundador y CEO de iAGO Digital. Ayuda a negocios a conseguir consultas con web, SEO y automatizaciones.",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "IAGO Digital",
        description:
          "Web, SEO e IA para negocios que quieren más consultas — no solo tener página.",
        publisher: { "@id": ORG_ID },
        inLanguage: "es",
      },
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: "IAGO Digital",
        url: SITE_URL,
        image: absoluteUrl("/og-image.png"),
        priceRange: "$$",
        sameAs: organizationSameAs,
        provider: { "@id": ORG_ID },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios iAGO Digital",
          itemListElement: CORE_SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@id": service.id },
          })),
        },
        areaServed: [
          { "@type": "Country", name: "Honduras" },
          { "@type": "Place", name: "Central America" },
          { "@type": "Place", name: "Latin America" },
        ],
        parentOrganization: { "@id": ORG_ID },
      },
      ...services,
    ],
  };
}
