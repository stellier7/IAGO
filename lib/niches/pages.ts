export type NicheSlug =
  | "diseno-web-inmobiliarias"
  | "diseno-web-clinicas-salud"
  | "diseno-web-estudios-belleza"
  | "diseno-web-servicios-locales"
  | "whatsapp-automatizacion-citas";

export type NicheCategoryId =
  | "propiedad-construccion"
  | "salud"
  | "belleza"
  | "servicios-locales"
  | "citas";

export type NicheCategory = {
  id: NicheCategoryId;
  title: string;
  summary: string;
};

export const nicheCategories: NicheCategory[] = [
  {
    id: "propiedad-construccion",
    title: "Propiedad y construcción",
    summary:
      "Inmobiliarias, constructoras, contractors y negocios que venden proyectos o inventario.",
  },
  {
    id: "salud",
    title: "Salud y estética clínica",
    summary:
      "Dentistas, clínicas médicas, esteticistas y centros que viven de citas y confianza.",
  },
  {
    id: "belleza",
    title: "Belleza y cuidado personal",
    summary:
      "Barberías, salones y estudios orientados a reserva por WhatsApp.",
  },
  {
    id: "servicios-locales",
    title: "Servicios locales",
    summary:
      "Limpieza, car wash, mantenimiento y oficios que cotizan rápido por chat.",
  },
  {
    id: "citas",
    title: "Automatización de citas",
    summary:
      "WhatsApp para calificar consultas cuando el inbox es el canal de ventas.",
  },
];

export type NichePage = {
  slug: NicheSlug;
  categoryId: NicheCategoryId;
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
    categoryId: "propiedad-construccion",
    navLabel: "Inmobiliarias y construcción",
    title: "Diseño web para inmobiliarias, constructoras y contractors",
    eyebrow: "Industria · Propiedad y construcción",
    headline:
      "Web para inmobiliarias y constructoras: proyectos claros y consultas serias",
    description:
      "Diseño web para inmobiliarias, bienes raíces, constructoras y contractors: inventario o proyectos organizados, confianza B2B/B2C y WhatsApp/consulta listos.",
    intro:
      "Inmobiliarias, constructoras y contractors comparten un problema: el cliente necesita ver oferta (propiedades, proyectos, capacidades) y un camino claro a cotizar. No basta un Instagram. Diseñamos sitios con estructura de inventario o servicios de obra, prueba de confianza y CTAs — con casos en bienes raíces (Tegucigalpa) y contracting (Florida).",
    keywordHypotheses: [
      "diseño web inmobiliaria",
      "página web constructora Honduras",
      "sitio web contractor",
      "desarrollo web bienes raíces Tegucigalpa",
      "web para empresa de construcción",
    ],
    whoFor: [
      "Inmobiliarias y agentes con compra / alquiler",
      "Constructoras y desarrolladoras con proyectos que mostrar",
      "Contractors y general contractors (incl. equipos bilingües / EE.UU.)",
      "Negocios de remodelación o ingeniería que cotizan por WhatsApp o propuesta",
    ],
    problems: [
      {
        title: "Propiedades o proyectos viven en el feed y se pierden",
        detail:
          "Organizamos compra/alquiler, fichas de proyecto o capacidades de obra en un destino estable para compartir en WhatsApp, Google o propuestas.",
      },
      {
        title: "Poca confianza frente a un competidor serio",
        detail:
          "Diseño, casos/proyectos y CTAs en los momentos clave — especialmente crítico en construcción y B2B.",
      },
      {
        title: "La web genérica no habla el idioma del rubro",
        detail:
          "Mensaje y SEO on-page orientados a inmobiliaria, constructora o contractor — no a un template de “agencia creativa”.",
      },
    ],
    process: [
      "Entendemos si vendes inventario, proyectos o capacidad de obra.",
      "Arquitectura: home, listados/proyectos, servicios, contacto.",
      "Diseño mobile-first con CTAs a WhatsApp, formulario o propuesta.",
      "Go-live, Analytics y base SEO on-page del rubro.",
    ],
    includes: [
      "UX/UI y desarrollo (Next.js)",
      "Estructura para propiedades, proyectos o servicios de obra",
      "Integración WhatsApp o formulario",
      "SEO on-page inicial del rubro",
      "Lanzamiento y handoff",
    ],
    proof: [
      {
        title: "Caso: Bienes Raíces Altair",
        detail:
          "Sitio inmobiliario en Tegucigalpa para compra y alquiler, servicios y contacto. En producción.",
        caseHref: "/casos/bienes-raices-altair",
        caseLabel: "Ver caso Altair",
        liveHref: "https://www.bienesraicesaltair.com",
      },
      {
        title: "Caso: Vulcanox (contractor / EE.UU.)",
        detail:
          "Web corporativa para general contractor en Florida: credibilidad B2B, capacidades y narrativa de proyecto. Útil como referencia de tono para constructoras y contractors.",
        caseHref: "/casos/vulcanox",
        caseLabel: "Ver caso Vulcanox",
        liveHref: "https://vulcanox.vercel.app",
      },
    ],
    faqs: [
      {
        question: "¿Es lo mismo una web de inmobiliaria que de constructora?",
        answer:
          "Comparten base (confianza + contacto), pero el contenido cambia: inventario vs proyectos/capacidades. Ajustamos la arquitectura a tu modelo.",
      },
      {
        question: "¿Incluye CRM, MLS o software de obra?",
        answer:
          "El alcance base es web + contacto. Integraciones se cotizan según tus herramientas.",
      },
      {
        question: "¿Trabajan contractors en inglés?",
        answer:
          "Sí. Vulcanox es un ejemplo en inglés. También puedes ver el hub /en.",
      },
    ],
    related: [
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Servicios locales", href: "/diseno-web-servicios-locales" },
      { label: "English web", href: "/en/website-design" },
      { label: "Casos", href: "/case-studies" },
    ],
  },
  {
    slug: "diseno-web-clinicas-salud",
    categoryId: "salud",
    navLabel: "Clínicas y salud",
    title: "Diseño web para clínicas, dentistas y estética",
    eyebrow: "Industria · Salud",
    headline:
      "Web para dentistas, clínicas y esteticistas: confianza y agenda clara",
    description:
      "Diseño web para dentistas, clínicas médicas, esteticistas y centros de salud/estética: servicios claros, confianza y camino a WhatsApp o cita — con límites serios en automatización clínica.",
    intro:
      "En salud y estética clínica la web tiene un trabajo concreto: explicar tratamientos o especialidades, generar confianza y facilitar la agenda sin fricción. Diseñamos sitios mobile-first para dentistas, consultorios, clínicas y esteticistas. La automatización de WhatsApp, si aplica, califica y agenda — nunca sustituye criterio médico.",
    keywordHypotheses: [
      "página web dentista",
      "diseño web clínica Honduras",
      "sitio web consultorio médico",
      "página web estética / esteticista",
      "web clínica dental Tegucigalpa",
    ],
    whoFor: [
      "Clínicas dentales y odontólogos",
      "Consultorios y centros médicos",
      "Esteticistas y estética médica / facial",
      "Equipos que agendan por WhatsApp o Instagram y pierden mensajes",
    ],
    problems: [
      {
        title: "Nadie entiende qué tratamientos ofreces",
        detail:
          "Servicios, especialidades y FAQs en lenguaje claro — sin promesas médicas irresponsables.",
      },
      {
        title: "La cita se negocia a ciegas en el chat",
        detail:
          "CTA a WhatsApp o formulario con contexto (servicio, zona, horario preferido) para acortar idas y vueltas.",
      },
      {
        title: "Poca confianza vs. la clínica de al lado",
        detail:
          "Diseño serio, ubicación/área, equipo si aplica, y velocidad en móvil — donde decide la mayoría.",
      },
    ],
    process: [
      "Alineamos servicios, tono (confianza, no hype) y cómo agendan hoy.",
      "Arquitectura corta: home, servicios/tratamientos, FAQ, contacto.",
      "Diseño mobile-first + CTAs de agenda.",
      "Go-live, base SEO local del rubro; WhatsApp automation opcional con handoff humano.",
    ],
    includes: [
      "Diseño y desarrollo del sitio",
      "Páginas de servicios / especialidades",
      "CTA WhatsApp o formulario de cita",
      "SEO on-page inicial",
      "Opcional: flujo WhatsApp de calificación (sin consejo clínico automatizado)",
    ],
    proof: [
      {
        title: "Recorrido de citas (casos adyacentes)",
        detail:
          "Hemos lanzado webs para negocios en Tegucigalpa cuyo cierre es agenda/contacto (estudio de belleza y academia). El mismo patrón — servicios claros + WhatsApp — se adapta a clínicas y dentistas; el tono y los límites de contenido son específicos de salud.",
        caseHref: "/casos/vanessa-pacheco-studio",
        caseLabel: "Ver caso de agenda / contacto",
      },
      {
        title: "WhatsApp para negocios con citas",
        detail:
          "Si el dolor es el inbox, combinamos la web con automatización de calificación. No automatizamos diagnósticos ni consejo médico.",
        caseHref: "/whatsapp-automatizacion-citas",
        caseLabel: "Ver WhatsApp para citas",
      },
    ],
    faqs: [
      {
        question: "¿Puede un bot dar información de tratamientos?",
        answer:
          "Solo FAQs generales que tú apruebes (horarios, ubicación, “cómo agendar”). Nada de diagnóstico, dosis ni promesas de resultado. Handoff a humano siempre disponible.",
      },
      {
        question: "¿Esteticista va aquí o en belleza?",
        answer:
          "Estética clínica / tratamientos van aquí. Salón, barbería o maquillaje social → página de belleza. Si haces ambos, lo resolvemos en el alcance.",
      },
      {
        question: "¿Tienen un caso dental publicado?",
        answer:
          "Aún no un caso dental público con métricas. Sí proceso, estructura y límites claros — y prueba de sitios orientados a cita. Podemos mostrarte demos y referencias al cotizar.",
      },
    ],
    related: [
      { label: "WhatsApp para citas", href: "/whatsapp-automatizacion-citas" },
      {
        label: "Barberías y belleza",
        href: "/diseno-web-estudios-belleza",
      },
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  {
    slug: "diseno-web-estudios-belleza",
    categoryId: "belleza",
    navLabel: "Barberías y belleza",
    title: "Diseño web para barberías, salones y estudios",
    eyebrow: "Industria · Belleza y cuidado personal",
    headline:
      "Web para barberías y salones: cortes, servicios y reserva por WhatsApp",
    description:
      "Diseño web para barberías, salones y estudios de belleza: servicios (corte, barba, color, etc.), confianza visual y camino rápido a WhatsApp o cita — pensado para móvil.",
    intro:
      "Una barbería o salón que vive de Instagram pierde citas cuando el DM se satura. Quien busca “barbería cerca” o un salón quiere ver estilo, servicios (corte, barba, combo, color) y cómo agendar — en el celular, en segundos. Diseñamos sitios cortos y orientados a reserva, con un caso real de estudio de belleza en Tegucigalpa; el mismo patrón aplica a barberías con tono y oferta propios.",
    keywordHypotheses: [
      "página web barbería",
      "diseño web barbería Honduras",
      "sitio web salón de belleza",
      "página web barbería Tegucigalpa",
      "diseño web salón / estudio de maquillaje",
    ],
    whoFor: [
      "Barberías y barbershops (corte, barba, combos)",
      "Salones de belleza y color",
      "Estudios de maquillaje y cuidado capilar",
      "Negocios que agendan por Instagram DM y pierden mensajes",
    ],
    problems: [
      {
        title: "La barra o el sillón se llenan por DM… hasta que no",
        detail:
          "Servicios, precios base o combos (corte + barba, etc.) y CTA a WhatsApp con contexto para agendar sin 20 mensajes.",
      },
      {
        title: "Instagram no explica bien la oferta",
        detail:
          "Estilo de la barbería o del salón, servicios y tono de marca en un enlace propio compartible.",
      },
      {
        title: "Se ve amateur o lento en el celular",
        detail:
          "Mobile-first: fotos, tipografía y velocidad pensadas para quien decide desde el teléfono.",
      },
    ],
    process: [
      "Alineamos servicios (corte, barba, color…), fotos y cómo agendan hoy.",
      "Estructura corta: home, servicios/menú, contacto/reserva.",
      "Diseño con presencia visual fuerte (barbería o salón) sin saturar.",
      "Publicación + base SEO local (“barbería / salón” + ciudad cuando aplica).",
    ],
    includes: [
      "Diseño y desarrollo del sitio",
      "Páginas o secciones de servicios / menú",
      "CTA WhatsApp / contacto",
      "SEO on-page inicial del rubro",
      "Go-live",
    ],
    proof: [
      {
        title: "Caso: Vanessa Pacheco Studio",
        detail:
          "Web de estudio de maquillaje y cuidado capilar en Tegucigalpa: servicios claros y contacto rápido. Misma lógica de agenda para una barbería (menú de servicios + WhatsApp), con estética distinta.",
        caseHref: "/casos/vanessa-pacheco-studio",
        caseLabel: "Ver caso Vanessa Pacheco",
        liveHref: "https://www.vanessapachecostudio.com",
      },
    ],
    faqs: [
      {
        question: "¿Hacen webs específicas para barberías?",
        answer:
          "Sí. Misma base (móvil, servicios, WhatsApp), tono y menú pensados para barbería — no un template de salón genérico con el logo cambiado.",
      },
      {
        question: "¿Incluye sistema de citas online?",
        answer:
          "El alcance típico es web + WhatsApp. Si quieres agenda (Calendly, Booksy, etc.), lo integramos como fase o add-on.",
      },
      {
        question: "¿Estética médica o dentista?",
        answer:
          "Eso va en clínicas y salud. Aquí: barbería, salón y estudio de belleza.",
      },
    ],
    related: [
      { label: "Clínicas y salud", href: "/diseno-web-clinicas-salud" },
      {
        label: "WhatsApp para citas",
        href: "/whatsapp-automatizacion-citas",
      },
      { label: "Diseño web", href: "/website-design-honduras" },
    ],
  },
  {
    slug: "diseno-web-servicios-locales",
    categoryId: "servicios-locales",
    navLabel: "Servicios locales",
    title: "Diseño web para servicios locales (limpieza, car wash y más)",
    eyebrow: "Industria · Servicios locales",
    headline:
      "Web para limpieza, car wash y oficios: cotiza más, explica menos",
    description:
      "Diseño web para negocios de servicios: limpieza, car wash, mantenimiento, oficios. Oferta clara, zonas, precios base o paquetes, y WhatsApp para cotizar.",
    intro:
      "Quien busca limpieza, car wash o un oficio no quiere un brochure largo: quiere saber si atiendes su zona, qué incluye el servicio y cómo pedir cotización hoy. Diseñamos landing o sitios cortos orientados a WhatsApp, con SEO local del rubro — sin inventar decenas de páginas de ciudad vacías.",
    keywordHypotheses: [
      "página web empresa de limpieza",
      "diseño web car wash",
      "sitio web servicios de limpieza Honduras",
      "web lavado de autos",
      "página web mantenimiento / oficios",
    ],
    whoFor: [
      "Empresas de limpieza del hogar u oficinas",
      "Car wash, detailing y lavado de autos",
      "Mantenimiento, jardinería, plomería y oficios similares",
      "Negocios que hoy cotizan solo por Instagram o referidos",
    ],
    problems: [
      {
        title: "“¿Dan servicio en mi colonia?” no tiene respuesta clara",
        detail:
          "Zonas, horarios y tipos de servicio visibles desde el celular.",
      },
      {
        title: "Cada cotización empieza de cero en el chat",
        detail:
          "Paquetes o preguntas guía + CTA a WhatsApp con contexto para acelerar la cotización.",
      },
      {
        title: "No apareces cuando buscan el servicio + ciudad",
        detail:
          "Base SEO local útil (una página fuerte del rubro). No spameamos 30 URLs de colonia casi iguales.",
      },
    ],
    process: [
      "Listamos servicios, zonas y cómo cotizas hoy.",
      "Landing o sitio corto: oferta, zonas, FAQ, WhatsApp.",
      "Diseño claro y rápido en móvil.",
      "Go-live + on-page local; automatización de chat opcional.",
    ],
    includes: [
      "Diseño y desarrollo (landing o sitio corto)",
      "Secciones de servicios / paquetes / zonas",
      "CTA WhatsApp o formulario",
      "SEO on-page inicial del rubro",
      "Handoff y medición básica",
    ],
    proof: [
      {
        title: "Patrón de catálogo + cotización",
        detail:
          "En MegaWatt organizamos oferta de producto con ruta a cotización por WhatsApp. Para limpieza o car wash aplicamos el mismo principio: oferta escaneable + contacto inmediato (contenido del rubro distinto).",
        caseHref: "/casos/megawatt",
        caseLabel: "Ver caso MegaWatt",
        liveHref: "https://megawatt-eljordan.vercel.app",
      },
      {
        title: "WhatsApp que califica pedidos",
        detail:
          "Si el volumen de chat es alto, sumamos flujo de primera respuesta y datos mínimos (zona, tipo de servicio, horario).",
        caseHref: "/whatsapp-automatizacion-citas",
        caseLabel: "Ver automatización WhatsApp",
      },
    ],
    faqs: [
      {
        question: "¿Hacen una página por cada colonia?",
        answer:
          "No por defecto. Preferimos una página de servicio sólida y, solo si hay demanda real y contenido distinto, ampliar. Más páginas no es automáticamente mejor SEO.",
      },
      {
        question: "¿Sirve para un solo servicio (solo car wash)?",
        answer:
          "Sí. A menudo una landing fuerte convierte mejor que un sitio de 10 páginas vacías.",
      },
    ],
    related: [
      { label: "Diseño web", href: "/website-design-honduras" },
      {
        label: "Inmobiliarias y construcción",
        href: "/diseno-web-inmobiliarias",
      },
      { label: "WhatsApp", href: "/whatsapp-automation" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  {
    slug: "whatsapp-automatizacion-citas",
    categoryId: "citas",
    navLabel: "WhatsApp citas",
    title: "WhatsApp automation para negocios con citas",
    eyebrow: "Industria · Citas / agenda",
    headline:
      "Automatiza WhatsApp cuando tu negocio vive de citas y consultas",
    description:
      "WhatsApp automation para clínicas, estudios, academias y servicios con agenda: primera respuesta, calificación y aviso al humano — con límites claros.",
    intro:
      "Si tu ingreso depende de citas, clases de prueba o cotizaciones rápidas, cada mensaje sin respuesta es dinero perdido. Diseñamos flujos de WhatsApp para calificar (servicio, horario, zona) y pasar un resumen a tu equipo — no un bot que improvisa diagnósticos o cierra ventas complejas solo.",
    keywordHypotheses: [
      "automatizar WhatsApp citas",
      "bot WhatsApp clínica",
      "WhatsApp Business agenda",
      "automatización WhatsApp salón",
    ],
    whoFor: [
      "Clínicas, dentistas, estética y academias con alto volumen de chat",
      "Salones y estudios que agendan por WhatsApp",
      "Servicios locales que cotizan todo el día por mensaje",
      "Quienes ya tienen web y quieren cerrar en el chat",
    ],
    problems: [
      {
        title: "“¿Tienen espacio?” se pierde en el inbox",
        detail:
          "Primera respuesta + preguntas mínimas (servicio, día preferido) + aviso a recepción o ventas.",
      },
      {
        title: "Las mismas FAQs una y otra vez",
        detail:
          "Horarios, ubicación, requisitos o precios base automatizados, con salida a persona.",
      },
      {
        title: "Miedo a un bot que daña la marca",
        detail:
          "Guion con tu tono, límites (qué no responde) y handoff humano — obligatorio en temas de salud.",
      },
    ],
    process: [
      "Mapeamos cómo llega una cita o cotización hoy.",
      "Escribimos guion de calificación y reglas de handoff.",
      "Implementamos con la herramienta mínima según volumen.",
      "Probamos escenarios reales y capacitamos al equipo.",
    ],
    includes: [
      "Diseño del flujo / guion",
      "Implementación e integración al número",
      "Pruebas con escenarios de cita o cotización",
      "Documentación breve para el equipo",
    ],
    proof: [
      {
        title: "Contexto de clientes con agenda",
        detail:
          "Webs para estudios y academias en Tegucigalpa donde el contacto/WhatsApp es el cierre. La automatización se diseña encima de ese recorrido.",
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
          "Spam masivo, promesas de cierre 100% sin humano, ni atención médica/legal sin supervisión.",
      },
    ],
    related: [
      { label: "Clínicas y salud", href: "/diseno-web-clinicas-salud" },
      { label: "Servicios locales", href: "/diseno-web-servicios-locales" },
      { label: "WhatsApp automation", href: "/whatsapp-automation" },
      { label: "AI automation", href: "/ai-automation-honduras" },
    ],
  },
];

export function getNichePage(slug: string): NichePage | undefined {
  return nichePages.find((page) => page.slug === slug);
}

export function getNichesByCategory(categoryId: NicheCategoryId): NichePage[] {
  return nichePages.filter((page) => page.categoryId === categoryId);
}

export const nicheSlugs: NicheSlug[] = nichePages.map((page) => page.slug);
