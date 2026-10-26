export type ArchitectureSlug =
  | "website-design-honduras"
  | "ai-automation-honduras"
  | "whatsapp-automation"
  | "seo-services-honduras"
  | "ai-seo-honduras"
  | "website-maintenance";

export type ArchitecturePage = {
  slug: ArchitectureSlug;
  navLabel: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  intro: string;
  searchIntent: string;
  whoFor: string[];
  problems: { title: string; detail: string }[];
  outcomes: string[];
  includes: string[];
  exampleUseCase: { title: string; detail: string };
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export const architecturePages: ArchitecturePage[] = [
  {
    slug: "website-design-honduras",
    navLabel: "Diseño web",
    title: "Diseño y desarrollo web",
    eyebrow: "Servicio · Website design",
    headline:
      "Diseño web para negocios que necesitan convertir, no solo “tener página”",
    description:
      "Diseño y desarrollo web para empresas: sitios rápidos en móvil, claros para convertir y listos para WhatsApp, leads y SEO. Entregables concretos, no plantillas genéricas.",
    intro:
      "Construimos sitios de negocio: mensaje que se entiende en segundos, recorrido hacia WhatsApp o formulario, y performance en celular. El objetivo no es “estar online” — es que un visitante sepa qué ofreces y pueda contactarte sin fricción.",
    searchIntent: "Contratar a alguien que construya la web del negocio",
    whoFor: [
      "Negocios que venden por Instagram/WhatsApp y necesitan un canal propio",
      "Empresas con web lenta, desactualizada o hecha con plantilla",
      "Marcas que lanzan servicio, local o producto y necesitan presencia seria",
      "Equipos que quieren landing, corporativo o catálogo con móvil primero",
    ],
    problems: [
      {
        title: "Nadie entiende qué ofreces en 5 segundos",
        detail:
          "Reescribimos mensaje, estructura y CTAs para que el visitante sepa qué haces y qué hacer después (WhatsApp, formulario, llamada).",
      },
      {
        title: "La web no genera consultas",
        detail:
          "Diseñamos recorridos de conversión: prueba social, servicios, casos y contacto sin fricción — medible con Analytics.",
      },
      {
        title: "Se ve mal o va lento en el celular",
        detail:
          "Mobile-first y performance. La mayoría de tus clientes decide desde el teléfono; si falla ahí, no importa el escritorio.",
      },
    ],
    outcomes: [
      "Sitio alineado a tu marca y oferta",
      "Base técnica lista para SEO (canónicos, sitemap, schema básico)",
      "Integración con WhatsApp y medición (Analytics)",
      "Entrega en hosting moderno con checklist de go-live",
    ],
    includes: [
      "UX/UI y desarrollo en Next.js",
      "Páginas clave según alcance (home, servicios, contacto, etc.)",
      "Formularios y/o botón a WhatsApp",
      "SEO on-page inicial (títulos, meta, headings, velocidad base)",
      "Lanzamiento, SSL y checklist de go-live",
    ],
    exampleUseCase: {
      title: "Ejemplo de entrega",
      detail:
        "Una clínica o comercio que hoy solo publica en redes: sitio con servicios, FAQs, área de cobertura y CTA a WhatsApp para agendar. Entregamos el sitio en producción, Analytics conectado y una base lista para SEO — no un PDF de “propuesta”.",
    },
    faqs: [
      {
        question: "¿Trabajan solo en Honduras?",
        answer:
          "No. Atendemos Centroamérica, Latam y proyectos en EE.UU. Las URLs locales ayudan a quien busca en Honduras; el servicio es regional.",
      },
      {
        question: "¿Qué entregables concretos recibo?",
        answer:
          "Sitio en producción, accesos documentados, formularios/WhatsApp funcionando, Analytics (si aplica) y un pase de handoff. El alcance de páginas se define antes de empezar.",
      },
      {
        question: "¿Cuánto tarda?",
        answer:
          "Una landing fuerte: pocas semanas. Corporativo o catálogo más amplio: por fases con entregables claros en cada una.",
      },
    ],
    related: [
      { label: "SEO services", href: "/seo-services-honduras" },
      { label: "Inmobiliarias y construcción", href: "/diseno-web-inmobiliarias" },
      { label: "Clínicas y salud", href: "/diseno-web-clinicas-salud" },
      { label: "Servicios locales", href: "/diseno-web-servicios-locales" },
      { label: "Industrias", href: "/industrias" },
      { label: "English", href: "/en/website-design" },
    ],
  },
  {
    slug: "ai-automation-honduras",
    navLabel: "Automatización IA",
    title: "Automatización con IA para negocios",
    eyebrow: "Servicio · AI automation",
    headline: "Automatiza tareas repetitivas con IA (sin caos ni bots tontos)",
    description:
      "Automatización con IA para negocios: flujos concretos entre WhatsApp, web y tus herramientas para ahorrar tiempo y no perder leads.",
    intro:
      "No vendemos “IA genérica”. Diseñamos un flujo por dolor: calificar leads, responder FAQs, mover datos entre apps o avisar al humano correcto. Empiezas con un cuello de botella; escalamos cuando el proceso ya funciona.",
    searchIntent: "Automatizar tareas repetitivas del negocio",
    whoFor: [
      "Equipos pequeños ahogados en mensajes y Excel",
      "Negocios con muchos leads que se enfrían",
      "Operaciones que usan 4–5 apps sin conexión",
      "Empresas que ya tienen web y quieren convertir más sin contratar más personas",
    ],
    problems: [
      {
        title: "Todo es manual",
        detail:
          "Copiar datos, reenviar mensajes, armar respuestas iguales… mapeamos el proceso y automatizamos el paso más caro primero.",
      },
      {
        title: "Miedo a un bot que daña la marca",
        detail:
          "Definimos tono, límites y handoff a persona. La IA ayuda dentro de reglas; no improvisa tu reputación.",
      },
      {
        title: "Herramientas desconectadas",
        detail:
          "Unimos web, WhatsApp, hojas, CRM o email con Zapier, Make o APIs según el caso — sin pedirte cambiar todo de golpe.",
      },
    ],
    outcomes: [
      "Menos trabajo repetitivo en el día a día",
      "Primera respuesta más rápida a leads",
      "Prospectos organizados (etiquetas, hoja o CRM)",
      "Proceso documentado para tu equipo",
    ],
    includes: [
      "Diagnóstico del proceso actual (dónde se pierde tiempo o leads)",
      "Diseño del flujo + reglas de IA y handoff humano",
      "Implementación, pruebas con escenarios reales",
      "Capacitación breve y criterios de éxito medibles",
    ],
    exampleUseCase: {
      title: "Flujos típicos que implementamos",
      detail:
        "Ejemplos: (1) Lead web → WhatsApp con preguntas de calificación → aviso al vendedor. (2) Inbox saturado → respuestas FAQ + etiqueta “listo para comprar”. (3) Formulario → fila en hoja/CRM + recordatorio si nadie responde en X horas. El flujo se elige según tu operación, no por moda.",
    },
    faqs: [
      {
        question: "¿Necesito cambiar mis herramientas?",
        answer: "No. Empezamos con lo que ya usas y solo sumamos lo mínimo necesario.",
      },
      {
        question: "¿Es lo mismo que WhatsApp automation?",
        answer:
          "WhatsApp es un canal. AI automation puede incluir WhatsApp, web, email y más. Si tu dolor es solo el chat de WhatsApp, ve a esa página.",
      },
      {
        question: "¿Cómo se cobra?",
        answer:
          "Por proyecto de implementación (diseño + setup). Si el flujo vive dentro de un plan con suscripción, el hosting/mantenimiento del plan cubre la base; cambios grandes de flujo se cotizan aparte.",
      },
    ],
    related: [
      { label: "WhatsApp automation", href: "/whatsapp-automation" },
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Leads", href: "/blog/como-conseguir-leads-para-tu-negocio" },
    ],
  },
  {
    slug: "whatsapp-automation",
    navLabel: "WhatsApp",
    title: "Automatización de WhatsApp para leads",
    eyebrow: "Servicio · WhatsApp automation",
    headline: "WhatsApp que califica leads y agenda — aunque estés ocupado",
    description:
      "Automatización de WhatsApp: respuestas, calificación de leads y seguimiento. Casos soportados, límites claros e integraciones según tu volumen.",
    intro:
      "Sirve cuando el chat es tu canal de ventas y las citas o cotizaciones se escapan. Automatizamos la primera respuesta, las preguntas de calificación y el aviso al humano — con límites honestos sobre qué no debe hacer un bot.",
    searchIntent:
      "Automatizar consultas y calificación de leads por WhatsApp",
    whoFor: [
      "Clínicas, estudios, academias y comercios con alto volumen de chats",
      "Equipos que responden tarde o de forma inconsistente",
      "Negocios que quieren filtrar curiosos vs listos para comprar",
      "Quienes ya tienen web o NFC y quieren cerrar la conversación en WhatsApp",
    ],
    problems: [
      {
        title: "Mensajes sin responder",
        detail:
          "Flujo de primera respuesta (dentro de lo que permite la herramienta) + aviso al humano correcto cuando hay intención de compra.",
      },
      {
        title: "Las mismas preguntas una y otra vez",
        detail:
          "FAQs automatizadas (precios base, horarios, ubicación, requisitos) con salida clara a persona.",
      },
      {
        title: "No sabes qué lead está caliente",
        detail:
          "Preguntas de calificación y etiquetas o rutas según respuesta — el equipo prioriza lo que importa.",
      },
    ],
    outcomes: [
      "Menos leads que se enfrían por demora",
      "Equipo enfocado en conversaciones que importan",
      "Datos mínimos del prospecto desde el primer chat",
      "Conexión opcional con web, CRM o hojas de cálculo",
    ],
    includes: [
      "Diseño del guion / flujo (tono, límites, handoff)",
      "Implementación con la herramienta adecuada al volumen",
      "Integración con tu número / WhatsApp Business",
      "Pruebas con escenarios reales y ajuste del guion",
    ],
    exampleUseCase: {
      title: "Casos que sí soportamos (y los que no)",
      detail:
        "Sí: calificación de citas, FAQs de horarios/servicios, captura de datos básicos, aviso a recepción o ventas, seguimiento simple si no responden. No prometemos: cerrar ventas complejas sin humano, spam masivo, ni sustituir atención sensible (médica/legal) sin supervisión. Si el caso no cabe, te lo decimos antes de cobrar.",
    },
    faqs: [
      {
        question: "¿Funciona con WhatsApp Business app?",
        answer:
          "Según el volumen usamos la app + herramientas, o la API oficial vía proveedores. Te recomendamos lo mínimo viable; la API tiene costos de Meta/proveedor aparte del nuestro.",
      },
      {
        question: "¿Qué limita el precio?",
        answer:
          "Complejidad del flujo, número de integraciones (web, CRM, hojas), si necesitas API oficial vs herramientas ligeras, y si hay mantenimiento mensual. Te cotizamos con ese desglose.",
      },
      {
        question: "¿Con qué se integra?",
        answer:
          "Según caso: sitio web, Google Sheets, CRMs comunes, email y herramientas tipo Zapier/Make. No forzamos un stack; usamos lo que ya tengas cuando alcanza.",
      },
      {
        question: "¿Se siente robótico?",
        answer:
          "Si el guion es malo, sí. Por eso lo escribimos con tu tono, límites claros y salida a humano cuando el lead pide hablar con alguien.",
      },
    ],
    related: [
      { label: "AI automation", href: "/ai-automation-honduras" },
      {
        label: "WhatsApp para citas",
        href: "/whatsapp-automatizacion-citas",
      },
      { label: "English", href: "/en/whatsapp-automation" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  {
    slug: "seo-services-honduras",
    navLabel: "SEO",
    title: "Servicios SEO",
    eyebrow: "Servicio · SEO",
    headline: "SEO con proceso claro: técnico, contenido y reportes",
    description:
      "Servicios SEO: auditoría y fixes técnicos, páginas útiles, y SEO continuo con reportes. Sin promesas de #1 mágicas.",
    intro:
      "Hay dos trabajos distintos: (1) arreglar la base técnica y la arquitectura de páginas, y (2) el SEO continuo — contenido, medición y prioridades mes a mes. Te explicamos qué entra en cada uno y qué verás en los reportes.",
    searchIntent: "Mejorar visibilidad orgánica en buscadores",
    whoFor: [
      "Negocios con web que no aparecen o casi no tienen impresiones",
      "Marcas cansadas de depender solo de ads",
      "Empresas locales y regionales que compiten por servicio + ciudad",
      "Equipos que quieren base seria antes de AI SEO / GEO",
    ],
    problems: [
      {
        title: "Google no entiende tu sitio",
        detail:
          "Canónicos, sitemap, robots, indexación, errores 404 y estructura. Eso es el setup técnico — se hace una vez bien y se revisa cuando cambia algo grande.",
      },
      {
        title: "Solo tienes un homepage genérico",
        detail:
          "Sin páginas de servicio (y a veces local) Google no tiene URLs claras que rankear. Construimos arquitectura alineada a búsquedas reales — no decenas de páginas clonadas por ciudad.",
      },
      {
        title: "No hay medición ni prioridades",
        detail:
          "Search Console + Analytics y un informe accionable: qué se indexó, qué consultas aparecen, qué conviene atacar el próximo mes.",
      },
    ],
    outcomes: [
      "Cobertura e indexación sanas",
      "Páginas alineadas a búsquedas que sí puedes ganar",
      "Informes mensuales con prioridades (no vanity metrics)",
      "Camino claro si luego quieres AI SEO",
    ],
    includes: [
      "Auditoría técnica y fixes prioritarios",
      "On-page y arquitectura de servicios",
      "Contenido pilar / local según plan (sin spam de ciudades)",
      "Schema y verificación en Search Console / Analytics",
      "Informe periódico en el plan continuo (ver Pricing)",
    ],
    exampleUseCase: {
      title: "Cómo se ve el proceso",
      detail:
        "Semana 1–2: auditoría, indexación, canónicos, páginas rotas. Luego: 1–2 páginas de servicio bien hechas y medición. En el plan continuo: revisar GSC, proponer el siguiente contenido o mejora, y reportar qué cambió. Técnico puntual ≠ retainer mensual — los cotizamos por separado cuando hace falta.",
    },
    faqs: [
      {
        question: "¿Qué es SEO técnico vs SEO continuo?",
        answer:
          "Técnico: que el sitio se pueda rastrear e indexar bien (sitemap, canónicos, velocidad, errores). Continuo: contenido, ajustes on-page y seguimiento mes a mes. El plan SEO de Pricing incluye setup on-page + informe mensual; proyectos grandes de arquitectura se acuerdan aparte.",
      },
      {
        question: "¿Qué incluye el reporte?",
        answer:
          "Estado de indexación, consultas e impresiones relevantes en Search Console, cambios hechos y 2–3 prioridades siguientes. No prometemos posiciones fijas.",
      },
      {
        question: "¿Garantizan posiciones?",
        answer:
          "No. Garantizamos método, transparencia y ejecución técnica correcta. Los resultados dependen de competencia y consistencia.",
      },
      {
        question: "¿Cuánto tarda en verse algo?",
        answer:
          "Señales técnicas en semanas; tráfico compuesto suele tomar meses según competencia. Por eso el reporte importa más que un screenshot de “#1”.",
      },
    ],
    related: [
      { label: "AI SEO / GEO", href: "/ai-seo-honduras" },
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Planes", href: "/pricing" },
    ],
  },
  {
    slug: "ai-seo-honduras",
    navLabel: "AI SEO",
    title: "AI SEO y GEO",
    eyebrow: "Servicio · AI SEO / GEO",
    headline: "AI SEO: claridad para Google y para respuestas con IA",
    description:
      "AI SEO y GEO: estructura tu sitio y contenido para buscadores y para respuestas generadas por IA — con expectativas realistas de qué se puede medir.",
    intro:
      "AI SEO no reemplaza al SEO tradicional: lo extiende. Trabajamos entidad de marca, páginas que responden preguntas concretas y datos consistentes. Medimos lo que sí es medible (Search Console, menciones verificables, tráfico a esas URLs); no prometemos “aparecer en ChatGPT” como KPI garantizado.",
    searchIntent:
      "Mejorar visibilidad en respuestas generadas por IA / AI search",
    whoFor: [
      "Marcas que ya tienen base de SEO clásico y quieren el siguiente paso",
      "Negocios citados mal o ignorados por herramientas de IA",
      "Equipos que quieren FAQs y servicios bien definidos como entidad",
    ],
    problems: [
      {
        title: "La IA no te menciona o te inventa",
        detail:
          "Datos consistentes (quién eres, qué haces, dónde), schema y contenido inequívoco — la misma verdad en web, GBP y perfiles.",
      },
      {
        title: "Contenido genérico imposible de citar",
        detail:
          "Piezas con respuestas concretas, ejemplos y estructura H2/H3 clara. Eso sirve a humanos y a sistemas que resumen.",
      },
      {
        title: "Confundir AI SEO con trucos",
        detail:
          "Priorizamos fundamentos útiles. Sin técnico + contenido sólido, “optimizar para IA” no sostiene.",
      },
    ],
    outcomes: [
      "Páginas fáciles de entender para buscadores y LLMs",
      "Entidad de marca más clara (quién, qué, dónde)",
      "Mejor alineación con búsquedas tipo pregunta",
      "Criterios de medición honestos (abajo en FAQ)",
    ],
    includes: [
      "Auditoría de presencia / entidad (web + perfiles clave)",
      "Arquitectura de respuestas (FAQs y páginas de servicio)",
      "Schema y consistencia de datos",
      "Calendario de contenido orientado a preguntas reales",
    ],
    exampleUseCase: {
      title: "En qué se diferencia del SEO tradicional",
      detail:
        "El SEO clásico prioriza rankings e impresiones en Google. AI SEO / GEO añade: respuestas citables, FAQs profundas y consistencia de entidad para motores generativos. En la práctica compartimos fundamentos (páginas útiles, schema, claridad). La diferencia está en el formato de las respuestas y en no medir solo “posición #3”.",
    },
    faqs: [
      {
        question: "¿Reemplaza al SEO normal?",
        answer:
          "No. Lo extiende. Sin técnico + contenido sólido, AI SEO no sostiene. Si tu sitio aún no indexa bien, empezamos por SEO services.",
      },
      {
        question: "¿Qué se puede medir de verdad?",
        answer:
          "Impresiones/clics en Search Console a las URLs trabajadas, indexación, menciones o citas que puedas verificar manualmente, y tráfico a páginas de pregunta/FAQ. No controlamos ni garantizamos aparición dentro de ChatGPT, Gemini o Perplexity.",
      },
      {
        question: "¿Qué es GEO?",
        answer:
          "Generative Engine Optimization: optimizar para respuestas generativas. En la práctica va de la mano con AI SEO — misma base de claridad y autoridad.",
      },
    ],
    related: [
      { label: "SEO services", href: "/seo-services-honduras" },
      {
        label: "Artículo AI SEO",
        href: "/blog/ai-seo-aparecer-en-inteligencias-artificiales",
      },
      { label: "WhatsApp automation", href: "/whatsapp-automation" },
    ],
  },
  {
    slug: "website-maintenance",
    navLabel: "Mantenimiento",
    title: "Mantenimiento web",
    eyebrow: "Servicio · Website maintenance",
    headline: "Mantenimiento web: seguridad, actualizaciones y tranquilidad",
    description:
      "Mantenimiento de sitios web: actualizaciones, monitoreo, respaldos y mejoras menores para que tu página no se rompa ni quede abandonada.",
    intro:
      "Construir la web es el capítulo uno. El dos es no dejarla morir: seguridad, dependencias, contenido menor y uptime. Este servicio es para quien quiere dormir tranquilo con un alcance mensual claro.",
    searchIntent: "Mantener la web del negocio segura y actualizada",
    whoFor: [
      "Negocios que ya lanzaron con nosotros (o traen un sitio)",
      "Equipos sin developer interno",
      "Marcas que necesitan cambios pequeños frecuentes",
    ],
    problems: [
      {
        title: "Nadie “es dueño” del sitio después del launch",
        detail: "Quedamos como partner de mantenimiento con alcance claro.",
      },
      {
        title: "Miedo a que se rompa al actualizar",
        detail: "Proceso de cambios, revisiones y rollback cuando aplica.",
      },
      {
        title: "Peticiones sueltas sin priorizar",
        detail: "Bolsa de horas / plan mensual con cola ordenada.",
      },
    ],
    outcomes: [
      "Sitio monitoreado",
      "Actualizaciones controladas",
      "Soporte para cambios menores",
      "Menos sorpresas en producción",
    ],
    includes: [
      "Monitoreo básico de disponibilidad",
      "Actualizaciones de dependencias según plan",
      "Backups / disciplina de deploy",
      "Horas para mejoras menores de contenido o UI",
    ],
    exampleUseCase: {
      title: "Ejemplo",
      detail:
        "Cada mes: revisión de errores, parches, 2–3 cambios de copy/secciones y reporte corto de estado. Un rediseño grande no entra aquí: es proyecto aparte.",
    },
    faqs: [
      {
        question: "¿Incluye rediseño grande?",
        answer:
          "No. Eso es proyecto. Mantenimiento cubre operación y mejoras acotadas.",
      },
      {
        question: "¿Puedo sumarlo a un plan SEO?",
        answer:
          "Sí. En Pricing, la suscripción cubre hosting y lo del plan; mantenimiento ampliado o bolsa de horas se acuerda si necesitas más cambios de los incluidos.",
      },
    ],
    related: [
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Planes", href: "/pricing" },
      { label: "Contacto", href: "/contact" },
    ],
  },
];

export function getArchitecturePage(
  slug: string,
): ArchitecturePage | undefined {
  return architecturePages.find((page) => page.slug === slug);
}

export const architectureSlugs: ArchitectureSlug[] = architecturePages.map(
  (page) => page.slug,
);
