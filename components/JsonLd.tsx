import { FOUNDER, organizationSameAs } from "@/lib/social/profiles";

const siteUrl = "https://www.iagodigital.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "IAGO Digital",
      legalName: "iAGO Digital",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.png`,
        width: 512,
        height: 512,
      },
      email: "info@iagodigital.com",
      telephone: "+50489809800",
      description:
        "Agencia digital para negocios en Centroamérica y Latam: sitios que convierten, SEO con reportes y automatizaciones con IA para no perder leads.",
      sameAs: organizationSameAs,
      founder: {
        "@id": `${siteUrl}/#founder`,
      },
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
      "@id": `${siteUrl}/#founder`,
      name: FOUNDER.name,
      jobTitle: FOUNDER.jobTitle,
      url: FOUNDER.linkedIn,
      sameAs: [FOUNDER.linkedIn],
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "IAGO Digital",
      description:
        "Web, SEO e IA para negocios que quieren más consultas — no solo tener página.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "es",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "IAGO Digital",
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      priceRange: "$$",
      sameAs: organizationSameAs,
      areaServed: [
        { "@type": "Country", name: "Honduras" },
        { "@type": "Place", name: "Central America" },
        { "@type": "Place", name: "Latin America" },
      ],
      parentOrganization: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
