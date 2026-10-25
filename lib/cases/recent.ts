export type CaseItem = {
  slug: string;
  client: string;
  type: string;
  result: string;
  href: string;
  location: string;
  businessType: string;
  summary: string;
  challenge: string;
  solution: string;
  implementation: string[];
  outcome: string;
  evidence: string;
  deliverables: string[];
  stack: string[];
};

export const recentCases: CaseItem[] = [
  {
    slug: "bienes-raices-altair",
    client: "Bienes Raíces Altair",
    type: "Web · Inmobiliaria",
    result: "Compra y alquiler · Tegucigalpa",
    href: "https://www.bienesraicesaltair.com",
    location: "Tegucigalpa, Honduras",
    businessType:
      "Inmobiliaria local enfocada en compra y alquiler de propiedades en Tegucigalpa.",
    summary:
      "Sitio inmobiliario para organizar propiedades, presentar servicios y facilitar el contacto con personas interesadas en comprar o alquilar.",
    challenge:
      "Necesitaban una presencia web profesional: inventario claro, confianza de marca y un camino rápido a consulta — sin depender solo de redes sociales.",
    solution:
      "Diseñamos y desarrollamos un sitio centrado en descubrimiento de propiedades, servicios y llamadas a la acción hacia WhatsApp/contacto, optimizado para móvil.",
    implementation: [
      "Estructura de páginas para compra y alquiler",
      "Diseño visual alineado a marca inmobiliaria",
      "CTAs de contacto visibles en momentos clave",
      "Base SEO on-page y experiencia responsive",
    ],
    outcome:
      "El negocio cuenta con un canal propio donde puede mostrar inventario y servicios de forma ordenada, y donde un visitante puede iniciar contacto sin fricción. No reportamos un número de leads adicionales sin medición compartida por el cliente.",
    evidence:
      "Sitio público en producción: bienesraicesaltair.com. Revisa la organización de propiedades, servicios y contacto en vivo.",
    deliverables: [
      "Diseño y desarrollo del sitio",
      "Secciones de compra / alquiler / servicios",
      "Integración de contacto / WhatsApp",
      "Despliegue en producción",
    ],
    stack: ["Next.js", "Responsive", "SEO on-page"],
  },
  {
    slug: "vulcanox",
    client: "Vulcanox",
    type: "Web corporativa",
    result: "Investment-driven general contracting · Florida",
    href: "https://vulcanox.vercel.app",
    location: "Florida, USA",
    businessType:
      "General contractor B2B orientado a proyectos e inversión en Florida.",
    summary:
      "Web corporativa premium para comunicar capacidades, credibilidad y servicios técnicos a prospectos e inversionistas.",
    challenge:
      "Diferenciarse de sitios genéricos de construcción y transmitir un servicio B2B serio con narrativa clara.",
    solution:
      "Sitio multi-sección con storytelling de marca, presentación de capacidades y diseño sobrio orientado a confianza.",
    implementation: [
      "Arquitectura corporativa multi-sección",
      "Mensajería B2B y tipografía fuerte",
      "Motion ligero para presencia de marca",
      "Despliegue en Vercel con base para analítica",
    ],
    outcome:
      "La marca dispone de una web alineada a su posicionamiento investment-driven, útil para presentaciones y primeros contactos. No inventamos métricas de pipeline sin datos del cliente.",
    evidence:
      "Sitio público: vulcanox.vercel.app — puedes evaluar tono, estructura y claridad del mensaje.",
    deliverables: [
      "Diseño UI corporativo",
      "Desarrollo front-end",
      "Copy de secciones clave",
      "Go-live",
    ],
    stack: ["Next.js", "Framer Motion", "Vercel"],
  },
  {
    slug: "amani-joyeria",
    client: "Amani Joyería",
    type: "E-commerce · Web",
    result: "Plata 925 · Honduras",
    href: "https://www.amanijoyeria.com",
    location: "Honduras",
    businessType: "Marca de joyería en plata 925 con venta online.",
    summary:
      "Experiencia e-commerce / catálogo para mostrar producto con estética premium y recorrido de compra pensado para móvil.",
    challenge:
      "Pasar de vender principalmente por redes a un canal propio donde el catálogo y la marca se vean a la altura del producto.",
    solution:
      "Tienda/catálogo enfocado en fotografía, claridad de producto y conversión en celular, manteniendo una estética delicada.",
    implementation: [
      "Catálogo de producto orientado a móvil",
      "Diseño de marca joyera",
      "Flujo hacia compra / consulta",
      "Páginas de confianza y contacto",
    ],
    outcome:
      "La marca tiene un destino propio para mostrar colección y captar interés fuera del feed de Instagram. Resultados de ventas dependen de operación y tráfico del cliente; no los extrapolamos aquí.",
    evidence:
      "Sitio en vivo: amanijoyeria.com — revisa presentación de producto y experiencia móvil.",
    deliverables: [
      "Diseño e implementación e-commerce/catálogo",
      "Páginas de marca y contacto",
      "Optimización móvil",
    ],
    stack: ["E-commerce", "Next.js", "Responsive"],
  },
  {
    slug: "vanessa-pacheco-studio",
    client: "Vanessa Pacheco Studio",
    type: "Web · Estudio",
    result: "Maquillaje & cuidado capilar · Tegucigalpa",
    href: "https://www.vanessapachecostudio.com",
    location: "Tegucigalpa, Honduras",
    businessType:
      "Estudio de belleza (maquillaje y cuidado capilar) en Tegucigalpa.",
    summary:
      "Sitio de estudio para presentar servicios y facilitar el contacto / reserva de interesados.",
    challenge:
      "Transmitir profesionalismo y oferta de servicios en un solo lugar, más allá del perfil de Instagram.",
    solution:
      "Web limpia con servicios claros, presencia visual fuerte y rutas rápidas a WhatsApp/contacto.",
    implementation: [
      "Landing / sitio de servicios",
      "Secciones de oferta y marca",
      "Diseño mobile-first",
      "CTA de contacto / WhatsApp",
    ],
    outcome:
      "El estudio puede enviar a un enlace propio que explica servicios y cómo contactar. No afirmamos un aumento de reservas sin datos del estudio.",
    evidence:
      "Sitio público: vanessapachecostudio.com.",
    deliverables: [
      "Diseño y desarrollo",
      "Páginas de servicios",
      "Integración de contacto",
    ],
    stack: ["Next.js", "UI design", "SEO local"],
  },
  {
    slug: "ichiban-bjj",
    client: "Ichiban BJJ",
    type: "Web · Academia",
    result: "Jiu Jitsu & Muay Thai · Tegucigalpa",
    href: "https://www.ichibanbjj.com/",
    location: "Tegucigalpa, Honduras",
    businessType:
      "Academia de artes marciales (Jiu Jitsu y Muay Thai) en Tegucigalpa.",
    summary:
      "Web de academia para presentar disciplinas y dar un camino claro a nuevos alumnos interesados en probar una clase.",
    challenge:
      "Convertir interés de redes en visitas al dojo con información clara de disciplinas y contacto.",
    solution:
      "Sitio enérgico y directo, con foco en disciplinas, comunidad y CTAs para nuevos alumnos.",
    implementation: [
      "Páginas de disciplinas (BJJ / Muay Thai)",
      "Mensaje orientado a probar clase",
      "Diseño responsive",
      "Base para SEO local",
    ],
    outcome:
      "La academia tiene una base web clara para explicar la oferta y captar interés. No publicamos KPIs de matrícula sin confirmación del cliente.",
    evidence: "Sitio público: ichibanbjj.com.",
    deliverables: [
      "Diseño y desarrollo del sitio",
      "Contenido de disciplinas",
      "CTAs de contacto",
    ],
    stack: ["Next.js", "Responsive", "SEO local"],
  },
  {
    slug: "megawatt",
    client: "MegaWatt",
    type: "Catálogo · Web",
    result: "Iluminación LED · El Jordán",
    href: "https://megawatt-eljordan.vercel.app",
    location: "El Jordán",
    businessType: "Negocio de iluminación LED con catálogo de productos.",
    summary:
      "Catálogo web para mostrar productos LED y facilitar cotizaciones por WhatsApp/contacto.",
    challenge:
      "Organizar una oferta técnica de productos de forma simple para quien quiere cotizar rápido.",
    solution:
      "Catálogo visual claro, navegación sencilla y rutas de contacto para cerrar cotizaciones.",
    implementation: [
      "Listado / catálogo de productos",
      "Diseño limpio orientado a consulta",
      "Experiencia responsive",
      "CTAs de cotización / WhatsApp",
    ],
    outcome:
      "Los productos están organizados en un destino compartible. No atribuimos volumen de cotizaciones sin datos del negocio.",
    evidence: "Sitio público: megawatt-eljordan.vercel.app.",
    deliverables: [
      "Diseño y desarrollo del catálogo",
      "Páginas de producto / categorías según alcance",
      "Integración de contacto",
    ],
    stack: ["Next.js", "Catálogo", "Vercel"],
  },
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return recentCases.find((item) => item.slug === slug);
}
