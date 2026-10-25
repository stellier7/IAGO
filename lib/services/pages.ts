export type ServiceSlug = "web" | "seo" | "automatizaciones";

export type ServicePage = {
  slug: ServiceSlug;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  intro: string;
  whoFor: string[];
  problems: { title: string; detail: string }[];
  outcomes: string[];
  includes: string[];
  process: { step: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "web",
    title: "Diseño y desarrollo web",
    eyebrow: "Servicio · Web",
    headline: "Sitios web que convierten, no solo se ven bien",
    description:
      "Diseño y desarrollo web para negocios que necesitan una página clara, rápida y lista para vender o captar leads — en Centroamérica, Latam y más.",
    intro:
      "Tu web no es un brochure digital. Es el lugar donde un desconocido decide si te escribe por WhatsApp o se va con la competencia. Diseñamos y desarrollamos sitios premium con Next.js: rápidos en móvil, entendibles en 5 segundos y preparados para SEO.",
    whoFor: [
      "Negocios que hoy venden solo por Instagram / WhatsApp y necesitan un canal propio",
      "Empresas con web vieja, lenta o hecha con plantilla que no convierte",
      "Marcas que lanzan un producto, servicio o local y necesitan presencia seria",
      "Equipos que quieren e-commerce o catálogo sin fricción en el celular",
    ],
    problems: [
      {
        title: "Nadie entiende qué ofreces",
        detail:
          "Visitante llega, no ve una promesa clara ni un siguiente paso, y se va. Resolvemos mensaje, estructura y CTAs (WhatsApp, contacto, planes).",
      },
      {
        title: "La web se ve bien en desktop y mal en móvil",
        detail:
          "La mayoría de tus clientes navega con el teléfono. Diseñamos mobile-first y medimos velocidad real.",
      },
      {
        title: "Dependes 100% de redes sociales",
        detail:
          "Si Instagram baja el alcance, desapareces. Una web propia + SEO te da un activo que controlas.",
      },
      {
        title: "El sitio existe pero no genera leads",
        detail:
          "Arreglamos fricción: formularios, WhatsApp flotante, páginas de servicio y prueba social (casos).",
      },
    ],
    outcomes: [
      "Oferta y llamadas a la acción obvias desde el primer pantallazo",
      "Carga rápida en 4G (base sólida de Core Web Vitals)",
      "Estructura lista para posicionar en Google",
      "Diseño de marca, sin plantilla genérica reciclada",
    ],
    includes: [
      "Landing pages, sitios corporativos o e-commerce según alcance",
      "Diseño UI responsive y accesible",
      "Integración WhatsApp, formularios y Analytics",
      "Base SEO on-page (títulos, headings, sitemap)",
      "Hosting / despliegue administrado (p. ej. Vercel)",
    ],
    process: [
      {
        step: "Descubrimiento",
        detail: "Entendemos oferta, cliente ideal y qué debe lograr la web.",
      },
      {
        step: "Estructura y diseño",
        detail: "Arquitectura de páginas, copy clave y dirección visual.",
      },
      {
        step: "Desarrollo",
        detail: "Construcción rápida, revisiones y pruebas en móvil.",
      },
      {
        step: "Lanzamiento",
        detail: "Publicación, Analytics/Search Console y siguientes pasos SEO.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto tarda un sitio?",
        answer:
          "Una landing sólida suele tomar pocas semanas. Un corporativo o e-commerce se planifica por fases con entregables claros.",
      },
      {
        question: "¿Puedo editar el contenido después?",
        answer:
          "Sí. Definimos qué partes actualizas tú y qué queda en código para no romper diseño ni velocidad.",
      },
      {
        question: "¿Incluye SEO?",
        answer:
          "Toda web sale con base SEO. El plan SEO profundiza en contenido, medición y crecimiento orgánico continuo.",
      },
    ],
    relatedLinks: [
      { label: "Ver planes", href: "/pricing" },
      { label: "Casos recientes", href: "/casos-recientes" },
      { label: "Guía: páginas web", href: "/blog/paginas-web-y-desarrollo-web-honduras" },
    ],
  },
  {
    slug: "seo",
    title: "SEO y posicionamiento en Google",
    eyebrow: "Servicio · SEO",
    headline: "Que te encuentren cuando buscan lo que vendes",
    description:
      "SEO técnico, local y de contenido para aparecer en Google (y prepararte para AI SEO) sin promesas mágicas de “#1 garantizado”.",
    intro:
      "El SEO no es un truco de keywords. Es hacer que tu negocio sea fácil de entender, rastrear y recomendar: páginas útiles, técnica limpia, medición y constancia. Montamos la base y el sistema para que crezcas con búsquedas reales — no solo con ads.",
    whoFor: [
      "Negocios que ya tienen web pero no aparecen en Google",
      "Marcas que pagan ads y quieren un canal orgánico más estable",
      "Empresas locales (ciudad / país) que compiten por “servicio + lugar”",
      "Equipos que quieren AI SEO: ser claros también para respuestas con IA",
    ],
    problems: [
      {
        title: "Google no indexa o ignora tu sitio",
        detail:
          "Arreglamos robots, sitemap, canónicos, errores y cobertura en Search Console.",
      },
      {
        title: "Tienes home… y poco más",
        detail:
          "Creamos o mejoramos páginas de servicio, ciudad y contenido que responden búsquedas reales.",
      },
      {
        title: "No sabes si el SEO funciona",
        detail:
          "Conectamos Analytics + Search Console y revisamos impresiones, clics y páginas que importan.",
      },
      {
        title: "Quieres salir también en inteligencias artificiales",
        detail:
          "Estructura, FAQs, datos de negocio y contenido claro ayudan a que te citen o te entiendan mejor (AI SEO).",
      },
    ],
    outcomes: [
      "Propiedad verificada y medible (Search Console / Bing / Analytics)",
      "Páginas pensadas para intención de búsqueda, no relleno",
      "Markup / schema cuando aporta",
      "Hoja de ruta clara: qué publicar y qué mejorar cada mes",
    ],
    includes: [
      "Auditoría técnica (velocidad, indexación, enlaces internos)",
      "On-page: titles, metas, headings, canónicos",
      "Estrategia de páginas (servicios, local, blog)",
      "Schema.org según el caso",
      "Tarjeta NFC de presentación (plan SEO) para conectar offline → web",
      "Informes de rendimiento accionables",
    ],
    process: [
      {
        step: "Diagnóstico",
        detail: "Revisamos sitio, competencia y oportunidades de búsqueda.",
      },
      {
        step: "Fundamentos",
        detail: "Técnica, medición y páginas pilares.",
      },
      {
        step: "Contenido",
        detail: "Servicios, local y piezas educativas que atraen demanda.",
      },
      {
        step: "Iteración",
        detail: "Medimos, priorizamos y mejoramos lo que ya trae señales.",
      },
    ],
    faqs: [
      {
        question: "¿En cuánto tiempo se ven resultados?",
        answer:
          "Suelen verse señales en semanas (indexación, impresiones). Tráfico estable suele tomar meses según competencia y ritmo de contenido.",
      },
      {
        question: "¿Garantizan primera posición?",
        answer:
          "No. Nadie serio lo garantiza. Sí garantizamos trabajo técnico correcto, transparencia y priorización por impacto.",
      },
      {
        question: "¿SEO local o más amplio?",
        answer:
          "Ambos. Podemos atacar ciudad/país y también servicios genéricos si tu mercado es regional (Centroamérica / Latam).",
      },
    ],
    relatedLinks: [
      { label: "AI SEO explicado", href: "/blog/ai-seo-aparecer-en-inteligencias-artificiales" },
      { label: "SEO local Honduras", href: "/blog/seo-local-honduras-tgu-sps" },
      { label: "Páginas por ciudad", href: "/honduras" },
    ],
  },
  {
    slug: "automatizaciones",
    title: "Automatizaciones con IA",
    eyebrow: "Servicio · Automatizaciones",
    headline: "Que la IA haga lo repetitivo; tú cierra ventas",
    description:
      "Automatizaciones con IA y flujos para captar leads, responder más rápido y conectar WhatsApp, CRM y tus herramientas sin caos manual.",
    intro:
      "Si tu equipo copia datos entre WhatsApp, Excel y el correo, estás pagando tiempo caro. Diseñamos automatizaciones con IA que clasifican, responden, avisan y organizan — para que las personas se enfoquen en vender y atender bien.",
    whoFor: [
      "Negocios con muchos mensajes de WhatsApp y respuestas lentas",
      "Equipos chicos que no pueden contratar más gente solo para tareas repetitivas",
      "Empresas que ya tienen web/SEO y quieren convertir más leads",
      "Operaciones que usan varias apps y necesitan que “hablen” entre sí",
    ],
    problems: [
      {
        title: "Los leads se enfrían",
        detail:
          "Llega un mensaje a las 9pm y nadie responde. Automatizamos acuse de recibo, enrutamiento y recordatorios.",
      },
      {
        title: "Todo vive en chats sueltos",
        detail:
          "Centralizamos captura (web, NFC, forms) hacia un flujo o CRM simple.",
      },
      {
        title: "Trabajo manual que no escala",
        detail:
          "Clasificar correos, armar cotizaciones base, pasar datos a hojas — lo atacamos por el cuello de botella más caro.",
      },
      {
        title: "Miedo a “la IA genérica”",
        detail:
          "No soltamos un bot tonto. Definimos tono, límites y cuándo escala a humano.",
      },
    ],
    outcomes: [
      "Primera respuesta más rápida a prospectos",
      "Menos copiar/pegar entre herramientas",
      "Procesos documentados y repetibles",
      "Visibilidad: quién llegó, de dónde, y en qué estado está",
    ],
    includes: [
      "Chatbots / asistentes con IA (web o WhatsApp según caso)",
      "Flujos con Zapier, Make o APIs a medida",
      "Captura y enrutamiento de leads",
      "Integraciones con las herramientas que ya usas",
      "Capacitación corta para tu equipo",
    ],
    process: [
      {
        step: "Mapa del proceso",
        detail: "Dónde se pierde tiempo o se escapan leads hoy.",
      },
      {
        step: "Diseño del flujo",
        detail: "Qué automatizar, qué queda humano, métricas de éxito.",
      },
      {
        step: "Implementación",
        detail: "Conexiones, prompts/reglas, pruebas con casos reales.",
      },
      {
        step: "Ajuste",
        detail: "Afinamos con uso real las primeras semanas.",
      },
    ],
    faqs: [
      {
        question: "¿Tengo que cambiar todas mis herramientas?",
        answer:
          "No. Empezamos con lo que ya usas y automatizamos el cuello de botella más caro.",
      },
      {
        question: "¿La IA reemplaza a mi equipo?",
        answer:
          "No. Quita lo repetitivo para que tu equipo venda, atienda y decida.",
      },
      {
        question: "¿Sirve si solo tengo WhatsApp Business?",
        answer:
          "Sí. Muchos flujos empiezan ahí y luego conectan web, hojas o CRM ligero.",
      },
    ],
    relatedLinks: [
      { label: "Cómo conseguir leads", href: "/blog/como-conseguir-leads-para-tu-negocio" },
      { label: "Tarjeta NFC", href: "/blog/tarjeta-nfc-presentacion-negocios" },
      { label: "Ver planes", href: "/pricing" },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}
