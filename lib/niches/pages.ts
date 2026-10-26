export type NicheSlug =
  | "diseno-web-inmobiliarias"
  | "diseno-web-clinicas-salud"
  | "diseno-web-estudios-belleza"
  | "diseno-web-servicios-locales"
  | "diseno-web-academias-gym"
  | "diseno-web-restaurantes"
  | "diseno-web-ecommerce-retail"
  | "diseno-web-hoteles-turismo"
  | "diseno-web-profesionales"
  | "diseno-web-automotriz"
  | "whatsapp-automatizacion-citas";

export type NicheCategoryId =
  | "propiedad-construccion"
  | "salud"
  | "belleza"
  | "servicios-locales"
  | "academias-deporte"
  | "gastronomia"
  | "retail-ecommerce"
  | "turismo"
  | "profesionales"
  | "automotriz"
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
    id: "academias-deporte",
    title: "Academias, gym y deporte",
    summary:
      "Artes marciales, gimnasios y academias que convierten interés en clase de prueba.",
  },
  {
    id: "gastronomia",
    title: "Restaurantes y comida",
    summary:
      "Restaurantes, cafés y food que necesitan menú claro y pedido o reserva por WhatsApp.",
  },
  {
    id: "retail-ecommerce",
    title: "Retail y e-commerce",
    summary:
      "Tiendas, joyería y catálogos que venden fuera del feed de Instagram.",
  },
  {
    id: "turismo",
    title: "Hoteles y turismo",
    summary:
      "Hoteles, tours y experiencias con reservas y confianza para viajeros.",
  },
  {
    id: "profesionales",
    title: "Profesionales y despachos",
    summary:
      "Abogados, contadores y consultorios que venden confianza y una primera consulta.",
  },
  {
    id: "automotriz",
    title: "Automotriz",
    summary:
      "Talleres, enderezado, lubricentros y servicios al auto (más allá del car wash).",
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
      { label: "Automotriz", href: "/diseno-web-automotriz" },
      {
        label: "Inmobiliarias y construcción",
        href: "/diseno-web-inmobiliarias",
      },
      { label: "WhatsApp", href: "/whatsapp-automation" },
    ],
  },
  {
    slug: "diseno-web-academias-gym",
    categoryId: "academias-deporte",
    navLabel: "Academias y gym",
    title: "Diseño web para academias, gym y deporte",
    eyebrow: "Industria · Academias y deporte",
    headline:
      "Web para academias y gym: disciplinas claras y camino a probar clase",
    description:
      "Diseño web para academias de artes marciales, gyms y deporte: disciplinas, horarios y CTA a clase de prueba o WhatsApp — con caso real en Tegucigalpa.",
    intro:
      "Una academia o gym no vende “una web”: vende la primera visita. Quien llega desde Instagram o Google quiere ver disciplinas, ambiente y cómo probar una clase sin fricción. Diseñamos sitios enérgicos y directos, con prueba en Ichiban BJJ (Jiu Jitsu y Muay Thai en Tegucigalpa).",
    keywordHypotheses: [
      "página web academia de jiu jitsu",
      "diseño web gimnasio Honduras",
      "sitio web academia artes marciales",
      "página web gym Tegucigalpa",
    ],
    whoFor: [
      "Academias de artes marciales, BJJ, Muay Thai, boxeo",
      "Gimnasios y centros de entrenamiento",
      "Escuelas deportivas que viven de matrícula o clase de prueba",
      "Equipos que hoy captan alumnos solo por redes",
    ],
    problems: [
      {
        title: "El interés de redes no llega al dojo o al gym",
        detail:
          "Disciplinas, horarios y CTA “probar clase” / WhatsApp en un enlace propio.",
      },
      {
        title: "No se entiende qué se entrena ni para quién",
        detail:
          "Mensaje por disciplina o programa, sin menú genérico de 20 páginas vacías.",
      },
      {
        title: "La web se ve lenta o poco seria en el celular",
        detail:
          "Mobile-first y tono alineado a la energía del deporte — no plantilla corporativa fría.",
      },
    ],
    process: [
      "Definimos disciplinas, público (niños/adultos) y cómo agendan hoy.",
      "Arquitectura: home, disciplinas/programas, comunidad, contacto.",
      "Diseño con presencia fuerte + CTAs a prueba de clase.",
      "Go-live y base SEO local del rubro.",
    ],
    includes: [
      "Diseño y desarrollo",
      "Páginas de disciplinas o programas",
      "CTA WhatsApp / formulario",
      "SEO on-page inicial",
      "Go-live",
    ],
    proof: [
      {
        title: "Caso: Ichiban BJJ",
        detail:
          "Web de academia en Tegucigalpa para presentar BJJ y Muay Thai y dar camino claro a nuevos alumnos. En producción.",
        caseHref: "/casos/ichiban-bjj",
        caseLabel: "Ver caso Ichiban",
        liveHref: "https://www.ichibanbjj.com/",
      },
    ],
    faqs: [
      {
        question: "¿Sirve para un gym de máquinas, no artes marciales?",
        answer:
          "Sí. Cambiamos disciplinas por planes/programas; el objetivo sigue siendo la primera visita.",
      },
      {
        question: "¿Pueden automatizar WhatsApp de nuevos alumnos?",
        answer:
          "Sí — ver WhatsApp para citas. Preguntas de horario, experiencia previa y aviso al coach.",
      },
    ],
    related: [
      { label: "WhatsApp para citas", href: "/whatsapp-automatizacion-citas" },
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Casos", href: "/case-studies" },
    ],
  },
  {
    slug: "diseno-web-restaurantes",
    categoryId: "gastronomia",
    navLabel: "Restaurantes",
    title: "Diseño web para restaurantes, cafés y food",
    eyebrow: "Industria · Gastronomía",
    headline:
      "Web para restaurantes: menú claro, ubicación y pedido o reserva",
    description:
      "Diseño web para restaurantes, cafés y negocios de comida: menú, horarios, ubicación y WhatsApp para pedidos o reservas — pensado para móvil.",
    intro:
      "En comida la decisión es rápida: ¿abren ahora?, ¿qué hay en el menú?, ¿cómo pido o reservo? Diseñamos sitios o landings con menú escaneable, fotos con peso controlado y CTA a WhatsApp o llamada. Aún no publicamos un caso gastronómico con métricas; el proceso y la estructura sí están listos para el rubro.",
    keywordHypotheses: [
      "página web restaurante",
      "diseño web café Honduras",
      "sitio web menú restaurante",
      "página web restaurante Tegucigalpa",
    ],
    whoFor: [
      "Restaurantes y cafeterías",
      "Food trucks o dark kitchens que quieren un enlace serio",
      "Negocios con delivery o reserva por WhatsApp",
      "Marcas que hoy dependen solo de Instagram o apps de delivery",
    ],
    problems: [
      {
        title: "El menú vive en un PDF o en stories que expiraron",
        detail:
          "Menú (o categorías) actualizable, legible en el celular, con lo esencial arriba.",
      },
      {
        title: "Nadie encuentra horarios, ubicación o cómo pedir",
        detail:
          "Bloques claros + CTA a WhatsApp, Maps o llamada según cómo operas.",
      },
      {
        title: "Fotos pesadas matan la velocidad",
        detail:
          "Compresión y layout pensados para 3G/4G — el menú tiene que cargar.",
      },
    ],
    process: [
      "Definimos menú, horarios, delivery vs reserva y fotos disponibles.",
      "Landing o sitio corto: home, menú, ubicación, contacto.",
      "Optimización móvil y de imágenes.",
      "Go-live + base SEO local (sin spam de colonias).",
    ],
    includes: [
      "Diseño y desarrollo",
      "Sección de menú / categorías",
      "CTA WhatsApp, Maps o reserva",
      "SEO on-page inicial",
      "Go-live",
    ],
    proof: [
      {
        title: "Patrón catálogo + WhatsApp",
        detail:
          "En retail/catálogo (p. ej. MegaWatt, Amani) ya resolvemos oferta escaneable + contacto. En restaurantes aplicamos el mismo principio al menú — con tipografía, fotos y CTAs propios de gastronomía.",
        caseHref: "/casos/amani-joyeria",
        caseLabel: "Ver caso de catálogo móvil",
      },
    ],
    faqs: [
      {
        question: "¿Integran pedidos online completos?",
        answer:
          "El alcance base es menú + WhatsApp/llamada. Pedidos con carrito o integración a apps se cotizan aparte.",
      },
      {
        question: "¿Actualizo el menú yo?",
        answer:
          "Según el stack: te dejamos un flujo simple de actualización o lo manejamos en mantenimiento.",
      },
    ],
    related: [
      { label: "Retail / e-commerce", href: "/diseno-web-ecommerce-retail" },
      { label: "WhatsApp", href: "/whatsapp-automation" },
      { label: "Diseño web", href: "/website-design-honduras" },
    ],
  },
  {
    slug: "diseno-web-ecommerce-retail",
    categoryId: "retail-ecommerce",
    navLabel: "Retail y e-commerce",
    title: "Diseño web para retail, joyería y e-commerce",
    eyebrow: "Industria · Retail / e-commerce",
    headline:
      "Catálogo y e-commerce: producto que se ve bien y se puede comprar o consultar",
    description:
      "Diseño web para tiendas, joyería y e-commerce: catálogo móvil, estética de marca y ruta a compra o WhatsApp — con caso de joyería en Honduras.",
    intro:
      "Pasar de vender solo en Instagram a un canal propio exige que el producto se vea a la altura y que el móvil no frene la compra o la consulta. Diseñamos catálogos y e-commerce con foco en fotografía, claridad y conversión — prueba en Amani Joyería (plata 925).",
    keywordHypotheses: [
      "diseño web tienda online Honduras",
      "página web joyería",
      "e-commerce Next.js",
      "catálogo web productos",
    ],
    whoFor: [
      "Marcas de joyería y accesorios",
      "Retail que quiere catálogo o tienda propia",
      "Negocios que cotizan por WhatsApp desde el catálogo",
      "Equipos cansados de perder ventas en el feed",
    ],
    problems: [
      {
        title: "El producto se ve mal fuera de Instagram",
        detail:
          "Diseño y presentación pensados para foto de producto y marca.",
      },
      {
        title: "El recorrido de compra o consulta es confuso",
        detail:
          "Categorías claras, fichas y CTA a checkout o WhatsApp según tu modelo.",
      },
      {
        title: "Solo desktop o plantilla genérica",
        detail: "Mobile-first: la mayoría compra o pregunta desde el teléfono.",
      },
    ],
    process: [
      "Definimos catálogo vs carrito, pasarela y cómo cierran hoy.",
      "Arquitectura de categorías, fichas y confianza.",
      "Diseño + desarrollo con performance de imágenes.",
      "Go-live y base SEO de producto/colección.",
    ],
    includes: [
      "Diseño e implementación de catálogo o e-commerce",
      "Páginas de marca y contacto",
      "Optimización móvil",
      "Integración de compra o WhatsApp según alcance",
      "Go-live",
    ],
    proof: [
      {
        title: "Caso: Amani Joyería",
        detail:
          "Experiencia e-commerce/catálogo para plata 925 en Honduras: estética premium y recorrido pensado para móvil. Sitio en vivo.",
        caseHref: "/casos/amani-joyeria",
        caseLabel: "Ver caso Amani",
        liveHref: "https://www.amanijoyeria.com",
      },
      {
        title: "Caso: MegaWatt",
        detail:
          "Catálogo de iluminación LED con ruta a cotización — útil si tu retail cotiza en lugar de checkout.",
        caseHref: "/casos/megawatt",
        caseLabel: "Ver caso MegaWatt",
        liveHref: "https://megawatt-eljordan.vercel.app",
      },
    ],
    faqs: [
      {
        question: "¿Incluye pasarela de pago?",
        answer:
          "Si el alcance lo pide, sí. Muchos empiezan con catálogo + WhatsApp y suman checkout después.",
      },
      {
        question: "¿Subo yo los productos?",
        answer:
          "Definimos el flujo de carga (CMS, admin o handoff). Lo dejamos documentado.",
      },
    ],
    related: [
      { label: "Restaurantes", href: "/diseno-web-restaurantes" },
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Casos", href: "/case-studies" },
    ],
  },
  {
    slug: "diseno-web-hoteles-turismo",
    categoryId: "turismo",
    navLabel: "Hoteles y turismo",
    title: "Diseño web para hoteles, tours y turismo",
    eyebrow: "Industria · Turismo",
    headline:
      "Web para hoteles y tours: confianza, galería y reserva sin fricción",
    description:
      "Diseño web para hoteles, tours y experiencias en Honduras y la región: habitaciones o paquetes claros, fotos y CTA a reserva o WhatsApp.",
    intro:
      "El viajero compara en el celular: fotos, ubicación, qué incluye y cómo reservar. Diseñamos sitios de turismo con narrativa de lugar, paquetes o habitaciones, y contacto claro. Aún sin caso hotelero público en el portfolio; el proceso se apoya en sitios de servicio y confianza que ya hemos lanzado.",
    keywordHypotheses: [
      "página web hotel Honduras",
      "diseño web tours Tegucigalpa",
      "sitio web agencia de viajes",
      "web hotel boutique",
    ],
    whoFor: [
      "Hoteles boutique y hospedajes",
      "Operadores de tours y experiencias",
      "Airbnbs/profesionales que quieren marca propia además del listing",
      "Negocios turísticos que reciben consultas por WhatsApp",
    ],
    problems: [
      {
        title: "Las fotos no transmiten el lugar",
        detail:
          "Galería y layout que priorizan atmósfera sin matar la velocidad de carga.",
      },
      {
        title: "No está claro qué incluye ni cómo reservar",
        detail:
          "Paquetes/habitaciones, FAQs y CTA a WhatsApp, formulario o motor de reservas.",
      },
      {
        title: "Dependes solo de OTAs o de un perfil débil",
        detail:
          "Canal propio para marca, SEO y seguimiento de huéspedes directos.",
      },
    ],
    process: [
      "Inventario (habitaciones/tours), idiomas y canal de reserva actual.",
      "Arquitectura: home, oferta, galería, ubicación, contacto.",
      "Diseño mobile-first orientado a confianza.",
      "Go-live; integración a motor de reservas si aplica.",
    ],
    includes: [
      "Diseño y desarrollo",
      "Secciones de habitaciones o tours",
      "CTA de reserva / WhatsApp",
      "SEO on-page inicial",
      "Go-live",
    ],
    proof: [
      {
        title: "Confianza y narrativa de marca",
        detail:
          "En proyectos corporativos y de servicio (p. ej. Vulcanox, academias) trabajamos credibilidad y CTAs claros. En turismo aplicamos lo mismo a lugar, galería y reserva — sin inventar ocupación ni reviews falsos.",
        caseHref: "/casos/vulcanox",
        caseLabel: "Ver enfoque de confianza B2C/B2B",
      },
      {
        title: "WhatsApp para consultas de reserva",
        detail:
          "Flujos de primera respuesta (fechas, número de huéspedes, tour) con handoff a persona.",
        caseHref: "/whatsapp-automatizacion-citas",
        caseLabel: "Ver WhatsApp para citas",
      },
    ],
    faqs: [
      {
        question: "¿Conectan Booking o un channel manager?",
        answer:
          "Se puede cotizar. El MVP suele ser web + WhatsApp/formulario; el motor viene cuando el volumen lo justifica.",
      },
      {
        question: "¿Sitio en español e inglés?",
        answer:
          "Sí, cuando el viajero lo necesita. No es traducción mecánica: mensajes distintos por audiencia.",
      },
    ],
    related: [
      { label: "Restaurantes", href: "/diseno-web-restaurantes" },
      { label: "English hub", href: "/en" },
      { label: "Diseño web", href: "/website-design-honduras" },
    ],
  },
  {
    slug: "diseno-web-profesionales",
    categoryId: "profesionales",
    navLabel: "Profesionales",
    title: "Diseño web para abogados, contadores y despachos",
    eyebrow: "Industria · Profesionales",
    headline:
      "Web para profesionales: confianza, áreas de práctica y primera consulta",
    description:
      "Diseño web para abogados, contadores, despachos y consultores: credibilidad, servicios claros y CTA a consulta — tono serio, no plantilla genérica.",
    intro:
      "Quien busca un abogado o contador no quiere animaciones llamativas: quiere entender en qué ayudas, si eres la persona correcta y cómo agendar una primera conversación. Diseñamos sitios sobrios, legibles y orientados a consulta. La prueba de tono serio está en trabajo corporativo/B2B; adaptamos mensaje al código de ética de tu profesión.",
    keywordHypotheses: [
      "página web abogado Honduras",
      "diseño web despacho contable",
      "sitio web bufete",
      "página web contador Tegucigalpa",
    ],
    whoFor: [
      "Abogados y bufetes",
      "Contadores y firmas contables",
      "Consultores y despachos profesionales",
      "Profesionales que hoy solo tienen un perfil de redes o un PDF",
    ],
    problems: [
      {
        title: "No se entiende en qué te especializas",
        detail:
          "Áreas de práctica o servicios en lenguaje claro (sin promesas ilegales de resultado).",
      },
      {
        title: "Poca confianza frente a un despacho establecido",
        detail:
          "Diseño sobrio, bio, ubicación y CTA a consulta o WhatsApp profesional.",
      },
      {
        title: "La web parece de otra década o de otra industria",
        detail:
          "Tipografía y estructura modernas sin parecer una startup de moda.",
      },
    ],
    process: [
      "Áreas de práctica, tono (formal) y cómo reciben clientes hoy.",
      "Arquitectura: home, servicios, equipo/bio, contacto.",
      "Diseño sobrio + formularios o WhatsApp.",
      "Go-live y SEO on-page de servicios profesionales.",
    ],
    includes: [
      "Diseño y desarrollo",
      "Páginas de servicios / áreas",
      "CTA de consulta",
      "SEO on-page inicial",
      "Go-live",
    ],
    proof: [
      {
        title: "Tono B2B / credibilidad",
        detail:
          "Vulcanox es referencia de sitio serio orientado a confianza. Para despachos usamos la misma disciplina de mensaje claro — con copy y límites propios de profesiones reguladas.",
        caseHref: "/casos/vulcanox",
        caseLabel: "Ver caso de credibilidad",
        liveHref: "https://vulcanox.vercel.app",
      },
    ],
    faqs: [
      {
        question: "¿Pueden prometer “ganar casos” en el copy?",
        answer:
          "No. Evitamos claims engañosos. El mensaje se alinea a lo que tu colegio o ética permiten.",
      },
      {
        question: "¿Formulario o WhatsApp?",
        answer:
          "Lo que use tu clientela. Muchos despachos prefieren formulario + email; otros WhatsApp Business.",
      },
    ],
    related: [
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "SEO", href: "/seo-services-honduras" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  {
    slug: "diseno-web-automotriz",
    categoryId: "automotriz",
    navLabel: "Automotriz",
    title: "Diseño web para talleres y servicios automotrices",
    eyebrow: "Industria · Automotriz",
    headline:
      "Web para talleres, enderezado y lubricentros: cotiza el servicio ya",
    description:
      "Diseño web para talleres mecánicos, enderezado y pintura, lubricentros y servicios al auto: servicios claros, zona y WhatsApp para cotizar — distinto al car wash.",
    intro:
      "Quien busca un taller o enderezado quiere saber si atiendes su marca/tipo de trabajo, ver confianza básica y mandar fotos o datos por WhatsApp. Diseñamos landings o sitios cortos orientados a cotización. El car wash ligero vive en servicios locales; aquí el foco es taller, body shop y mantenimiento automotriz.",
    keywordHypotheses: [
      "página web taller mecánico",
      "diseño web enderezado y pintura",
      "sitio web lubricentro",
      "página web taller Honduras",
    ],
    whoFor: [
      "Talleres mecánicos y de diagnóstico",
      "Enderezado, pintura y body shop",
      "Lubricentros y centros de mantenimiento",
      "Negocios automotrices que cotizan por chat con fotos del daño",
    ],
    problems: [
      {
        title: "“¿Me reciben?” se resuelve en 15 mensajes",
        detail:
          "Servicios, marcas o tipos de trabajo, horarios y CTA a WhatsApp con guía (placa, síntoma, fotos).",
      },
      {
        title: "Poca confianza vs. el taller de la esquina",
        detail:
          "Fotos del taller, proceso o garantías básicas — sin claims vacíos.",
      },
      {
        title: "No apareces en búsquedas de servicio + ciudad",
        detail:
          "Una página fuerte del rubro con SEO local útil; no 30 URLs clonadas.",
      },
    ],
    process: [
      "Lista de servicios, zona y cómo cotizan (fotos por WhatsApp).",
      "Landing: servicios, confianza, FAQ, contacto.",
      "Diseño claro y rápido en móvil.",
      "Go-live + on-page local.",
    ],
    includes: [
      "Diseño y desarrollo (landing o sitio corto)",
      "Secciones de servicios",
      "CTA WhatsApp / formulario",
      "SEO on-page inicial",
      "Go-live",
    ],
    proof: [
      {
        title: "Cotización por WhatsApp (patrón de servicios)",
        detail:
          "En servicios locales y catálogos ya conectamos oferta + chat. Automotriz usa el mismo patrón con FAQs de taller y pedido de fotos del vehículo.",
        caseHref: "/diseno-web-servicios-locales",
        caseLabel: "Ver servicios locales (car wash / oficios)",
      },
      {
        title: "WhatsApp que califica la cotización",
        detail:
          "Flujo: tipo de servicio, marca/modelo, fotos, zona — aviso al asesor.",
        caseHref: "/whatsapp-automatizacion-citas",
        caseLabel: "Ver automatización WhatsApp",
      },
    ],
    faqs: [
      {
        question: "¿Es lo mismo que la página de car wash?",
        answer:
          "No. Car wash y detailing están en servicios locales. Aquí: mecánica, enderezado, lubricentro y trabajos más técnicos.",
      },
      {
        question: "¿Sirve si solo hago un servicio (solo enderezado)?",
        answer:
          "Sí. Una landing enfocada suele convertir mejor que un sitio genérico vacío.",
      },
    ],
    related: [
      { label: "Servicios locales", href: "/diseno-web-servicios-locales" },
      { label: "WhatsApp", href: "/whatsapp-automation" },
      { label: "Diseño web", href: "/website-design-honduras" },
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
      { label: "Academias y gym", href: "/diseno-web-academias-gym" },
      { label: "Clínicas y salud", href: "/diseno-web-clinicas-salud" },
      { label: "Automotriz", href: "/diseno-web-automotriz" },
      { label: "WhatsApp automation", href: "/whatsapp-automation" },
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
