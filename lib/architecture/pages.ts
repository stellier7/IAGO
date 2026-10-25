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
    headline: "Diseño web para negocios que necesitan convertir, no solo “tener página”",
    description:
      "Diseño y desarrollo web para empresas: sitios rápidos, claros y listos para WhatsApp, leads y SEO. Ideal si buscas alguien que construya la web de tu negocio.",
    intro:
      "Si alguien busca contratar diseño web para su empresa, no quiere un home genérico. Quiere entender cómo se ve el proceso, qué incluye y si puedes entregar un sitio que venda. Esta página existe para eso.",
    searchIntent: "Contratar a alguien que construya la web del negocio",
    whoFor: [
      "Negocios que venden por Instagram/WhatsApp y necesitan un canal propio",
      "Empresas con web lenta, desactualizada o hecha con plantilla",
      "Marcas que lanzan servicio, local o producto y necesitan presencia seria",
      "Equipos que quieren landing, corporativo o e-commerce en móvil primero",
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
          "Diseñamos recorridos de conversión: prueba social, servicios, casos y contacto sin fricción.",
      },
      {
        title: "Se ve mal o va lento en el celular",
        detail:
          "Mobile-first + performance. La mayoría de tus clientes decide desde el teléfono.",
      },
    ],
    outcomes: [
      "Sitio alineado a tu marca y oferta",
      "Base técnica lista para SEO",
      "Integración con WhatsApp y medición (Analytics)",
      "Entrega en hosting moderno (p. ej. Vercel)",
    ],
    includes: [
      "UX/UI y desarrollo (Next.js)",
      "Páginas clave según alcance",
      "Formularios / WhatsApp",
      "SEO on-page inicial",
      "Lanzamiento y checklist de Go-live",
    ],
    exampleUseCase: {
      title: "Ejemplo",
      detail:
        "Una clínica o comercio que hoy solo publica en redes: lanzamos un sitio con servicios, FAQs, mapa/área y botón a WhatsApp para agendar — listo para aparecer en Google con el tiempo.",
    },
    faqs: [
      {
        question: "¿Trabajan solo en Honduras?",
        answer:
          "No. Atendemos Centroamérica, Latam y proyectos en EE.UU. Las URLs locales ayudan a quien busca en Honduras; el servicio es regional.",
      },
      {
        question: "¿Cuánto tarda?",
        answer:
          "Una landing fuerte: pocas semanas. Corporativo o e-commerce: por fases con entregables claros.",
      },
    ],
    related: [
      { label: "SEO services", href: "/seo-services-honduras" },
      { label: "Mantenimiento web", href: "/website-maintenance" },
      { label: "Casos", href: "/case-studies" },
    ],
  },
  {
    slug: "ai-automation-honduras",
    navLabel: "Automatización IA",
    title: "Automatización con IA para negocios",
    eyebrow: "Servicio · AI automation",
    headline: "Automatiza tareas repetitivas con IA (sin caos ni bots tontos)",
    description:
      "Automatización con IA para negocios: flujos, asistentes y conexiones entre WhatsApp, web y tus herramientas para ahorrar tiempo y no perder leads.",
    intro:
      "La búsqueda típica no es “inteligencia artificial”. Es “cómo dejo de hacer a mano lo mismo todos los días”. Diseñamos automatizaciones con IA que responden, clasifican y organizan — y escalan a humano cuando importa.",
    searchIntent: "Automatizar tareas repetitivas del negocio",
    whoFor: [
      "Equipos pequeños ahogados en mensajes y Excel",
      "Negocios con muchos leads que se enfrían",
      "Operaciones que usan 4–5 apps sin conexión",
      "Empresas que ya tienen web y quieren convertir más",
    ],
    problems: [
      {
        title: "Todo es manual",
        detail:
          "Copiar datos, reenviar mensajes, armar respuestas iguales… lo mapeamos y automatizamos el cuello de botella más caro.",
      },
      {
        title: "Miedo a un bot que daña la marca",
        detail:
          "Definimos tono, límites y handoff a persona. La IA ayuda; no improvisa tu reputación.",
      },
      {
        title: "Herramientas desconectadas",
        detail:
          "Unimos web, WhatsApp, hojas, CRM o email con Zapier/Make/APIs según el caso.",
      },
    ],
    outcomes: [
      "Menos trabajo repetitivo",
      "Respuestas más rápidas",
      "Leads organizados",
      "Proceso documentado para tu equipo",
    ],
    includes: [
      "Diagnóstico del proceso",
      "Diseño del flujo + reglas de IA",
      "Implementación y pruebas",
      "Capacitación breve",
    ],
    exampleUseCase: {
      title: "Ejemplo",
      detail:
        "Un negocio recibe 30 WhatsApps al día: automatizamos saludo, preguntas de calificación y aviso al equipo — el humano solo entra cuando el lead está caliente.",
    },
    faqs: [
      {
        question: "¿Necesito cambiar mis herramientas?",
        answer: "No. Empezamos con lo que ya usas.",
      },
      {
        question: "¿Es lo mismo que WhatsApp automation?",
        answer:
          "WhatsApp es un canal. AI automation puede incluir WhatsApp, web, email y más. Si tu dolor es solo WhatsApp, ve a esa página.",
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
      "Automatización de WhatsApp para negocios: respuestas, calificación de leads y seguimiento para no perder consultas de clientes.",
    intro:
      "Piensa en “automatizar WhatsApp para una clínica / comercio / academia”. La persona no quiere teoría de IA: quiere que las citas y cotizaciones no se escapen. Esta página explica exactamente ese trabajo.",
    searchIntent:
      "Automatizar consultas y calificación de leads por WhatsApp",
    whoFor: [
      "Clínicas, estudios, academias y comercios con alto volumen de chats",
      "Equipos que responden tarde o de forma inconsistente",
      "Negocios que quieren filtrar “solo curiosos” vs listos para comprar",
      "Quienes ya tienen web/NFC y quieren cerrar la conversación en WhatsApp",
    ],
    problems: [
      {
        title: "Mensajes sin responder",
        detail:
          "Flujo de primera respuesta 24/7 + aviso al humano correcto.",
      },
      {
        title: "Las mismas preguntas una y otra vez",
        detail:
          "FAQs automatizadas (precios base, horarios, ubicación, requisitos) con salida a persona.",
      },
      {
        title: "No sabes qué lead está caliente",
        detail:
          "Preguntas de calificación y etiquetas / rutas según respuesta.",
      },
    ],
    outcomes: [
      "Menos leads fríos",
      "Equipo enfocado en conversaciones que importan",
      "Datos mínimos del prospecto desde el primer chat",
      "Conexión opcional con web, CRM o hojas",
    ],
    includes: [
      "Diseño del guion / flujo",
      "Implementación (herramienta según caso)",
      "Integración con tu número / WhatsApp Business",
      "Pruebas con escenarios reales",
    ],
    exampleUseCase: {
      title: "Ejemplo: clínica dental",
      detail:
        "Alguien escribe “¿tienen cita?”. El flujo pregunta servicio, zona, horario preferido y pasa un resumen al front desk — sin que el paciente espere horas.",
    },
    faqs: [
      {
        question: "¿Funciona con WhatsApp Business app?",
        answer:
          "Según el volumen usamos la app + herramientas, o la API/oficial vía proveedores. Te recomendamos lo mínimo viable.",
      },
      {
        question: "¿Se siente robótico?",
        answer:
          "Si el guion es malo, sí. Por eso lo escribimos con tu tono y límites claros.",
      },
    ],
    related: [
      { label: "AI automation", href: "/ai-automation-honduras" },
      { label: "Tarjeta NFC", href: "/blog/tarjeta-nfc-presentacion-negocios" },
      { label: "Contacto", href: "/contact" },
    ],
  },
  {
    slug: "seo-services-honduras",
    navLabel: "SEO",
    title: "Servicios SEO",
    eyebrow: "Servicio · SEO",
    headline: "SEO para mejorar tu visibilidad orgánica en Google",
    description:
      "Servicios SEO: técnico, contenido y medición para que tu negocio aparezca en Google cuando te buscan — sin promesas de #1 mágicas.",
    intro:
      "Quien busca “SEO services” quiere saber si puedes mejorar búsquedas orgánicas de verdad: indexación, páginas útiles, local y reportes. Aquí está el detalle.",
    searchIntent: "Mejorar visibilidad orgánica en buscadores",
    whoFor: [
      "Negocios con web que no aparecen",
      "Marcas cansadas de depender solo de ads",
      "Empresas locales y regionales que compiten por servicio + ciudad",
      "Equipos que quieren base seria antes de AI SEO / GEO",
    ],
    problems: [
      {
        title: "Google no entiende tu sitio",
        detail: "Canónicos, sitemap, indexación, errores y estructura.",
      },
      {
        title: "Solo tienes un homepage genérico",
        detail:
          "Por eso construimos esta arquitectura de páginas de servicio e intención.",
      },
      {
        title: "No hay medición",
        detail: "Search Console + Analytics y prioridades mensuales.",
      },
    ],
    outcomes: [
      "Cobertura e indexación sanas",
      "Páginas alineadas a búsquedas reales",
      "Informes accionables",
      "Camino claro a contenido y AI SEO",
    ],
    includes: [
      "Auditoría técnica",
      "On-page y arquitectura",
      "Contenido pilar / local según plan",
      "Schema",
      "NFC en plan SEO (offline → web)",
    ],
    exampleUseCase: {
      title: "Ejemplo",
      detail:
        "Un negocio de servicios: además del home, publicamos páginas de oferta + ciudad + FAQs. Google deja de “adivinar” y tiene URLs claras que rankear.",
    },
    faqs: [
      {
        question: "¿Garantizan posiciones?",
        answer:
          "No. Garantizamos método, transparencia y ejecución técnica correcta.",
      },
      {
        question: "¿Cuánto tarda?",
        answer:
          "Señales en semanas; resultados compuestos en meses, según competencia.",
      },
    ],
    related: [
      { label: "AI SEO / GEO", href: "/ai-seo-honduras" },
      { label: "Diseño web", href: "/website-design-honduras" },
      { label: "Honduras local", href: "/honduras" },
    ],
  },
  {
    slug: "ai-seo-honduras",
    navLabel: "AI SEO",
    title: "AI SEO y GEO",
    eyebrow: "Servicio · AI SEO / GEO",
    headline: "AI SEO: que tu negocio también aparezca en respuestas con IA",
    description:
      "AI SEO y GEO: prepara tu sitio y contenido para Google y para respuestas generadas por IA (ChatGPT, Gemini, Perplexity y similares).",
    intro:
      "La gente ya no solo “googlear”. También pregunta a IAs. AI SEO / GEO no es magia: es claridad, estructura, autoridad y páginas que responden preguntas de negocio mejor que un home vago.",
    searchIntent:
      "Mejorar visibilidad en respuestas generadas por IA / AI search",
    whoFor: [
      "Marcas que ya invierten en SEO clásico y quieren el siguiente paso",
      "Negocios citados mal o ignorados por herramientas de IA",
      "Equipos que quieren FAQs y entidades bien definidas",
    ],
    problems: [
      {
        title: "La IA no te menciona o te inventa",
        detail:
          "Datos consistentes (NAP, servicios, área), schema y contenido inequívoco.",
      },
      {
        title: "Contenido genérico imposible de citar",
        detail:
          "Piezas con respuestas concretas, ejemplos y estructura H2/H3 clara.",
      },
      {
        title: "Confundir AI SEO con trucos",
        detail:
          "Priorizamos fundamentos útiles a humanos — eso es lo que también leen los sistemas.",
      },
    ],
    outcomes: [
      "Páginas fáciles de entender para buscadores y LLMs",
      "Entidad de marca más clara (quién eres, qué haces, dónde)",
      "Mejor alineación con búsquedas tipo pregunta",
    ],
    includes: [
      "Auditoría de presencia / entidad",
      "Arquitectura de respuestas (FAQs, servicios)",
      "Schema y consistencia de datos",
      "Calendario de contenido orientado a preguntas",
    ],
    exampleUseCase: {
      title: "Ejemplo",
      detail:
        "Alguien pregunta a una IA “quién automatiza WhatsApp para clínicas”. Con páginas específicas (como WhatsApp automation + casos + FAQs), hay una fuente útil que citar — no solo un slogan en el home.",
    },
    faqs: [
      {
        question: "¿Reemplaza al SEO normal?",
        answer:
          "No. Lo extiende. Sin técnico + contenido sólido, AI SEO no sostiene.",
      },
      {
        question: "¿Qué es GEO?",
        answer:
          "Generative Engine Optimization: optimizar para motores/respuestas generativas. En la práctica, va de la mano con AI SEO.",
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
      "Construir la web es el capítulo uno. El dos es no dejarla morir: seguridad, dependencias, contenido menor y uptime. Este servicio es para quien quiere dormir tranquilo.",
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
        "Cada mes: revisión de errores, parches, 2–3 cambios de copy/secciones y reporte corto de estado.",
    },
    faqs: [
      {
        question: "¿Incluye rediseño grande?",
        answer:
          "No. Eso es proyecto. Mantenimiento cubre operación y mejoras acotadas.",
      },
      {
        question: "¿Puedo sumarlo a un plan SEO?",
        answer: "Sí. Hosting + mantenimiento + SEO suelen ir juntos.",
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
