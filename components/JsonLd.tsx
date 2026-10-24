const siteUrl = "https://www.iagodigital.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "IAGO Digital",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.png`,
        width: 512,
        height: 512,
      },
      email: "iagodigitalweb@gmail.com",
      telephone: "+50489809800",
      description:
        "Agencia digital en Honduras. Diseñamos sitios web, optimizamos SEO y automatizamos procesos con inteligencia artificial.",
      areaServed: {
        "@type": "Country",
        name: "Honduras",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "iagodigitalweb@gmail.com",
        telephone: "+50489809800",
        availableLanguage: ["Spanish", "es"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "IAGO Digital",
      description:
        "Web, SEO y automatizaciones con IA para marcas que quieren crecer.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "es-HN",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "IAGO Digital",
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Honduras",
      },
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
