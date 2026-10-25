export type NicheSlug =
  | "diseno-web-inmobiliarias"
  | "diseno-web-estudios-belleza"
  | "whatsapp-automatizacion-citas";

export type NichePage = {
  slug: NicheSlug;
  navLabel: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  intro: string;
  /** Keyword hypotheses for research — not claimed search volumes */
  keywordHypotheses: string[];
  whoFor: string[];
  problems: { title: string; detail: string }[];
  process: string[];
  includes: string[];
  proof: {
    title: string;
    detail: string;
    caseHref: string;
    caseLabel: string;
    liveHref?: string;
  }[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export const nichePages: NichePage[] = [
  {
    slug: "diseno-web-inmobiliarias",
    navLabel: "Web inmobiliarias",
    title: "Diseño web para inmobiliarias",
    eyebrow: "Industria · Inmobiliarias",
    headline:
      "Sitios web para inmobiliarias: inventario claro y contacto sin fricción",
    description:
      "Diseño web para inmobiliarias y bienes raíces en Honduras: propiedades organizadas, confianza de marca y WhatsApp/consulta listos — no plantillas genéricas.",
    intro:
      "Una inmobiliaria no necesita “una página bonita”. Necesita que quien busca comprar o alquilar entienda la oferta, filtre por intención y pueda contactar ya. Construimos sitios con estructura de inventario, servicios y CTAs pensados para ese recorrido — con prueba en un caso real en Tegucigalpa.",
    keywordHypotheses: [
      "diseño web inmobiliaria",
      "página web bienes raíces Honduras",
      "sitio web inmobiliaria Tegucigalpa",
      "desarrollo web para agentes inmobiliarios",
    ],
    whoFor: [
      "Inmobiliarias locales con inventario de compra y alquiler",
      "Agentes que hoy dependen solo de Instagram o Facebook",
      "Equipos que quieren un canal propio para compartir propiedades",
      "Negocios en Tegucigalpa y otras ciudades de Honduras",
    ],
    problems: [
      {
        title: "Las propiedades viven en el feed y se pierden",
        detail:
          "Organizamos compra/alquiler (o categorías que uses) en un destino estable que puedes compartir en WhatsApp o Google.",
      },
      {
        title: "El visitante no confía ni sabe cómo contactar",
        detail:
          "Diseño, prueba social y CTAs a WhatsApp/formulario en los momentos clave del recorrido.",
      },
      {
        title: "La web genérica no habla el idioma del rubro",
        detail:
          "Mensaje, secciones y SEO on-page orientados a búsquedas de bienes raíces — no a un template de “agencia creativa”.",
      },
    ],
    process: [
      "Entendemos cómo vendes hoy (compra, alquiler, zonas, WhatsApp).",
      "Definimos arquitectura: home, listados, servicios, contacto.",
      "Diseño y desarrollo mobile-first con CTAs claros.",
      "Go-live, Analytics y base SEO on-page.",
    ],
    includes: [
      "UX/UI y desarrollo (Next.js)",
      "Estructura para propiedades / servicios",
      "Integración WhatsApp o formulario",
      "SEO on-page inicial del rubro",
      "Lanzamiento y handoff",
    ],
    proof: [
      {
        title: "Caso: Bienes Raíces Altair",
        detail:
          "Sitio inmobiliario en Tegucigalpa para organizar compra y alquiler, presentar servicios y facilitar contacto. En producción y revisable en vivo.",
        caseHref: "/casos/bienes-raices-altair",
        caseLabel: "Ver caso Altair",
        liveHref: "https://www.bienesraicesaltair.com",
      },
    ],
    faqs: [
      {
        question: "¿Incluye CRM o MLS?",
        answer:
          "El alcance base es web + contacto. Integraciones con CRM o portales se cotizan según tus herramientas. Empezamos con lo que ya usas.",
      },
      {
        question: "¿Sirve si solo tengo pocas propiedades?",
        answer:
          "Sí. Aun con inventario pequeño, un sitio claro supera un perfil de Instagram para generar confianza y consultas.",
      },
    ],
    related: [
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "WhatsApp para citas", href: "/whatsapp-automatizacion-citas" },
      { label: "Casos", href: "/case-studies" },
    ],
  },
  {
    slug: "diseno-web-estudios-belleza",
    navLabel: "Web belleza",
    title: "Diseño web para salones y estudios de belleza",
    eyebrow: "Industria · Belleza",
    headline:
      "Web para salones y estudios: servicios claros y reserva por WhatsApp",
    description:
      "Diseño web para salones, barberías y estudios de belleza: servicios, confianza visual y camino rápido a WhatsApp o cita — pensado para móvil.",
    intro:
      "Quien busca un salón o estudio en Google o Instagram quiere ver servicios, estilo y cómo agendar — no un menú de 12 páginas. Diseñamos sitios cortos, visuales y orientados a contacto, con un caso real de estudio de belleza en Tegucigalpa.",
    keywordHypotheses: [
      "página web salón de belleza",
      "diseño web barbería",
      "sitio web estudio de maquillaje",
      "página web salón Tegucigalpa",
    ],
    whoFor: [
      "Salones, barberías y estudios de maquillaje / cabello",
      "Negocios que agendan por Instagram DM y pierden mensajes",
      "Marcas de belleza que quieren un enlace propio serio",
      "Estudios en Tegucigalpa y Centroamérica",
    ],
    problems: [
      {
        title: "Instagram no explica bien la oferta",
        detail:
          "Servicios, precios base o paquetes, y tono de marca en un solo lugar compartible.",
      },
      {
        title: "Reservar es un ida y vuelta eterno",
        detail:
          "CTA a WhatsApp con contexto (servicio, zona) para acortar la conversación.",
      },
      {
        title: "Se ve amateur en el celular",
        detail:
          "Mobile-first: fotos, tipografía y velocidad pensadas para quien decide desde el teléfono.",
      },
    ],
    process: [
      "Alineamos servicios, fotos y cómo agendan hoy.",
      "Estructura corta: home, servicios, contacto/reserva.",
      "Diseño con presencia visual fuerte sin saturar.",
      "Publicación + base SEO local del rubro.",
    ],
    includes: [
      "Diseño y desarrollo del sitio",
      "Páginas de servicios",
      "CTA WhatsApp / contacto",
      "SEO on-page inicial",
      "Go-live",
    ],
    proof: [
      {
        title: "Caso: Vanessa Pacheco Studio",
        detail:
          "Web de estudio de maquillaje y cuidado capilar en Tegucigalpa: servicios claros y contacto rápido. Sitio público para evaluar.",
        caseHref: "/casos/vanessa-pacheco-studio",
        caseLabel: "Ver caso Vanessa Pacheco",
        liveHref: "https://www.vanessapachecostudio.com",
      },
    ],
    faqs: [
      {
        question: "¿Incluye sistema de citas online?",
        answer:
          "El alcance típico es web + WhatsApp. Si quieres agenda (Calendly, Booksy, etc.), lo integramos como fase o add-on.",
      },
      {
        question: "¿Y si también quiero automatizar WhatsApp?",
        answer:
          "Sí — ve la página de WhatsApp para negocios con citas. Muchos estudios combinan web + flujo de calificación.",
      },
    ],
    related: [
      { label: "Diseño web", href: "/website-design-honduras" },
      {
        label: "WhatsApp para citas",
        href: "/whatsapp-automatizacion-citas",
      },
      { label: "Casos", href: "/case-studies" },
    ],
  },
  {
    slug: "whatsapp-automatizacion-citas",
    navLabel: "WhatsApp citas",
    title: "WhatsApp automation para negocios con citas",
    eyebrow: "Industria · Citas / agenda",
    headline:
      "Automatiza WhatsApp cuando tu negocio vive de citas y consultas",
    description:
      "WhatsApp automation para clínicas, estudios, academias y comercios con agenda: primera respuesta, calificación y aviso al humano — con límites claros.",
    intro:
      "Si tu ingreso depende de citas o clases de prueba, cada mensaje sin respuesta es dinero perdido. Diseñamos flujos de WhatsApp para calificar (servicio, horario, zona) y pasar un resumen a tu equipo — no un bot que improvisa diagnósticos o cierra ventas complejas solo.",
    keywordHypotheses: [
      "automatizar WhatsApp citas",
      "bot WhatsApp clínica",
      "WhatsApp Business agenda",
      "automatización WhatsApp salón",
    ],
    whoFor: [
      "Clínicas, estudios de belleza y academias con alto volumen de chat",
      "Negocios que agendan por WhatsApp y responden tarde",
      "Equipos que quieren filtrar curiosos vs listos para reservar",
      "Quienes ya tienen web y quieren cerrar en el chat",
    ],
    problems: [
      {
        title: "“¿Tienen espacio?” se pierde en el inbox",
        detail:
          "Primera respuesta + preguntas mínimas (servicio, día preferido) + aviso a recepción o coach.",
      },
      {
        title: "Las mismas FAQs una y otra vez",
        detail:
          "Horarios, ubicación, requisitos o precios base automatizados, con salida a persona.",
      },
      {
        title: "Miedo a un bot que daña la marca",
        detail:
          "Guion con tu tono, límites (qué no responde) y handoff humano obligatorio en temas sensibles.",
      },
    ],
    process: [
      "Mapeamos cómo llega una cita hoy (web, IG, referido → WhatsApp).",
      "Escribimos guion de calificación y reglas de handoff.",
      "Implementamos con la herramienta mínima según volumen (app vs API).",
      "Probamos escenarios reales y capacitamos al equipo.",
    ],
    includes: [
      "Diseño del flujo / guion",
      "Implementación e integración al número",
      "Pruebas con escenarios de cita",
      "Documentación breve para el equipo",
    ],
    proof: [
      {
        title: "Contexto de clientes con agenda",
        detail:
          "Hemos construido webs para estudios y academias en Tegucigalpa donde el contacto/WhatsApp es el cierre (belleza y artes marciales). La automatización de chat se diseña encima de ese mismo recorrido de citas.",
        caseHref: "/casos/vanessa-pacheco-studio",
        caseLabel: "Caso estudio de belleza",
      },
      {
        title: "Caso: Ichiban BJJ",
        detail:
          "Academia con camino claro a probar clase. Ideal para combinar web + flujo WhatsApp de nuevos alumnos.",
        caseHref: "/casos/ichiban-bjj",
        caseLabel: "Ver caso Ichiban",
        liveHref: "https://www.ichibanbjj.com/",
      },
    ],
    faqs: [
      {
        question: "¿Esto es lo mismo que AI automation general?",
        answer:
          "Es un caso específico de WhatsApp. Si también quieres unir web, CRM y email, mira Automatización con IA.",
      },
      {
        question: "¿Qué no hacemos?",
        answer:
          "Spam masivo, promesas de cierre 100% sin humano, ni atención médica/legal sin supervisión. Te lo decimos antes de cotizar.",
      },
    ],
    related: [
      { label: "WhatsApp automation", href: "/whatsapp-automation" },
      { label: "AI automation", href: "/ai-automation-honduras" },
      { label: "Web belleza", href: "/diseno-web-estudios-belleza" },
    ],
  },
];

export function getNichePage(slug: string): NichePage | undefined {
  return nichePages.find((page) => page.slug === slug);
}

export const nicheSlugs: NicheSlug[] = nichePages.map((page) => page.slug);
