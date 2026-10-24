export type CaseItem = {
  slug: string;
  client: string;
  type: string;
  result: string;
  href: string;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
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
    summary:
      "Sitio inmobiliario para explorar propiedades en compra y alquiler, con una experiencia clara en móvil y listo para captar consultas.",
    challenge:
      "El negocio necesitaba una presencia web profesional que mostrara inventario de forma confiable y empujara a contacto rápido, sin depender solo de redes sociales.",
    solution:
      "Diseñamos y desarrollamos un sitio enfocado en descubrimiento de propiedades, confianza de marca y llamadas a la acción hacia WhatsApp/contacto, con performance pensada para usuarios en móvil.",
    deliverables: [
      "Diseño visual alineado a marca inmobiliaria",
      "Estructura de páginas para compra y alquiler",
      "Experiencia responsive optimizada para móvil",
      "CTAs de contacto para cerrar consultas",
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
    summary:
      "Web corporativa para un general contractor orientado a inversión, con narrativa premium y foco en credibilidad.",
    challenge:
      "Comunicar un servicio B2B técnico de forma clara y premium, diferenciándose de sitios genéricos de construcción.",
    solution:
      "Construimos una web corporativa con storytelling de marca, secciones de capacidad/servicios y una presentación visual sobria para prospectos e inversionistas.",
    deliverables: [
      "Sitio corporativo multi-sección",
      "Mensajería orientada a confianza B2B",
      "Diseño premium y tipografía fuerte",
      "Base lista para SEO y analítica",
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
    summary:
      "Tienda online para joyería en plata 925, con catálogo atractivo y recorrido de compra pensado para móvil.",
    challenge:
      "Pasar de vender principalmente por redes a un canal propio donde el catálogo y la marca se vean premium.",
    solution:
      "Desarrollamos una experiencia e-commerce enfocada en producto, fotos y conversión, manteniendo la estética delicada de la marca.",
    deliverables: [
      "Catálogo / e-commerce de producto",
      "Diseño visual de marca joyera",
      "Flujo de compra en móvil",
      "Páginas de confianza y contacto",
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
    summary:
      "Sitio de estudio de belleza para presentar servicios, portafolio y facilitar reservas/contacto.",
    challenge:
      "Transmitir profesionalismo y agenda de servicios en un solo lugar, más allá de Instagram.",
    solution:
      "Creamos una web de estudio limpia, con servicios claros, presencia visual fuerte y rutas rápidas a contacto.",
    deliverables: [
      "Landing / sitio de servicios de belleza",
      "Secciones de oferta y presentación de marca",
      "Diseño mobile-first",
      "Integración de contacto / WhatsApp",
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
    summary:
      "Web para academia de artes marciales: horarios, disciplinas y un camino claro para nuevos alumnos.",
    challenge:
      "Convertir el interés en redes en visitas al dojo con información clara de disciplinas y contacto.",
    solution:
      "Diseñamos un sitio enérgico y directo, con foco en disciplinas, comunidad y llamadas a acción para probar una clase.",
    deliverables: [
      "Sitio de academia deportiva",
      "Presentación de disciplinas (BJJ / Muay Thai)",
      "CTAs para nuevos alumnos",
      "Base para SEO local en Tegucigalpa",
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
    summary:
      "Catálogo web de iluminación LED para mostrar productos y facilitar cotizaciones.",
    challenge:
      "Organizar una oferta de productos técnica de forma simple para clientes que quieren cotizar rápido.",
    solution:
      "Armamos un catálogo visual claro, con navegación sencilla y rutas de contacto para cerrar cotizaciones.",
    deliverables: [
      "Catálogo de productos LED",
      "Diseño limpio orientado a consulta",
      "Experiencia responsive",
      "CTAs de cotización / WhatsApp",
    ],
    stack: ["Next.js", "Catálogo", "Vercel"],
  },
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return recentCases.find((item) => item.slug === slug);
}
