export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  sections: { heading: string; body: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-pagina-web-honduras-2027",
    title:
      "¿Cuánto cuesta una página web en Honduras? Guía práctica 2027",
    description:
      "Costos reales de una web de negocio en Honduras: landing vs multipágina, hosting, WhatsApp, SEO, errores al contratar y cómo evaluar proveedores — sin esconder el precio detrás de un pitch.",
    date: "2026-10-26",
    tags: ["Páginas web", "Precios", "Honduras"],
    sections: [
      {
        heading: "Respuesta corta",
        body: [
          "En Honduras (y la región) una web de negocio seria suele tener dos cargos: un pago único de diseño/desarrollo y una suscripción de hosting/mantenimiento. En iAGO Digital eso se ve en /pricing: desarrollo + plan mensual o anual según el alcance (Básico, SEO o Automatizado con IA).",
          "Un “sitio barato” de plantilla puede costar poco al inicio y salir caro después (lentitud, sin WhatsApp claro, sin Analytics, sin SEO base). Presupuesta el lanzamiento y los 12 meses siguientes.",
        ],
      },
      {
        heading: "1) Landing page vs sitio multipágina",
        body: [
          "Landing: una página fuerte para una oferta (campaña, servicio único, reserva). Más rápida de lanzar; ideal si tu mensaje es uno solo.",
          "Multipágina: home + servicios + casos/FAQ + contacto (y a veces blog). Mejor cuando vendes varias líneas o necesitas SEO por servicio.",
          "No es “más páginas = mejor”. Es “¿el visitante entiende qué haces y cómo contactarte en el celular?”.",
        ],
      },
      {
        heading: "2) Qué debes presupuestar (más allá del diseño)",
        body: [
          "Diseño y desarrollo (pago único o por fases).",
          "Dominio (.com / .hn) — anual.",
          "Hosting + SSL — mensual o anual (en nuestros planes va en la suscripción).",
          "Contenido: textos, fotos, logo. Si no los tienes, alguien los hace (tú o el proveedor).",
          "Opcional: SEO continuo, automatización de WhatsApp, e-commerce, integraciones.",
        ],
      },
      {
        heading: "3) Dominio y hosting: qué importa",
        body: [
          "Dominio a tu nombre (no “prestado” por el proveedor sin transferencia clara).",
          "HTTPS (SSL) siempre.",
          "Hosting moderno con buen TTFB en móvil; nosotros desplegamos en infraestructura tipo Vercel para sitios Next.js.",
          "Accesos documentados: quién administra DNS, hosting y Analytics.",
        ],
      },
      {
        heading: "4) Cómo entra WhatsApp (y por qué no es un detalle)",
        body: [
          "En Centroamérica el cierre suele ser el chat. La web debe tener CTA claro a WhatsApp (o formulario) sin esconderlo.",
          "Nivel 1: botón / wa.me con mensaje prellenado.",
          "Nivel 2: flujo que califica (servicio, zona, horario) y avisa a tu equipo — ver /whatsapp-automation.",
          "WhatsApp no reemplaza una oferta clara en la página; acelera la conversación cuando ya hay interés.",
        ],
      },
      {
        heading: "5) ¿Cuándo vale la pena invertir en SEO?",
        body: [
          "Vale la pena si tienes (o vas a tener) una web indexable, oferta estable y paciencia de meses — no días.",
          "Empieza por técnico + páginas de servicio útiles; el SEO continuo (contenido + reportes) tiene sentido cuando la base no está rota.",
          "Si nadie busca tu rubro online o solo vives de referidos cerrados, prioriza conversión y WhatsApp antes que pelear keywords imposibles.",
          "Detalle de proceso: /seo-services-honduras.",
        ],
      },
      {
        heading: "6) Errores comunes al contratar un desarrollador",
        body: [
          "Elegir solo por el precio más bajo sin ver sitios en producción.",
          "Aceptar “te entrego el ZIP” sin hosting, SSL ni Analytics.",
          "Textos genéricos que no dicen qué haces ni para quién.",
          "Promesas de “#1 en Google en 7 días”.",
          "Sin contrato de alcance: qué páginas, cuántas revisiones, qué pasa después del launch.",
        ],
      },
      {
        heading: "7) Cómo elegir proveedor (checklist)",
        body: [
          "¿Muestran casos reales con URL en vivo?",
          "¿Explican pago único vs suscripción y qué incluye cada uno?",
          "¿Hablan de móvil, WhatsApp y medición — o solo de “diseño bonito”?",
          "¿Puedes hablar con una persona que entienda tu negocio (no solo un formulario anónimo)?",
          "¿El contenido es útil aunque no les compres hoy? (guías, FAQs, límites honestos).",
        ],
      },
      {
        heading: "8) Qué ofrece iAGO Digital y dónde ver precios",
        body: [
          "Web de negocio (Next.js), SEO con reportes, y automatizaciones / WhatsApp según plan.",
          "Precios localizados y desglose desarrollo + suscripción: https://www.iagodigital.com/pricing",
          "Industrias (inmobiliarias, clínicas, barberías, etc.): /industrias",
          "Casos con evidencia en vivo (sin inventar KPIs): /case-studies",
          "Si tu presupuesto es limitado, empieza por un alcance chico bien hecho — no por 30 páginas vacías.",
        ],
      },
    ],
  },
  {
    slug: "web-inmobiliaria-honduras-leads-whatsapp-seo",
    title:
      "Web para inmobiliarias en Honduras: leads, WhatsApp y SEO local",
    description:
      "Guía práctica si tienes una inmobiliaria pequeña en Honduras y quieres más leads calificados sin presupuesto enorme de ads: web propia, WhatsApp, SEO local y cómo evaluar el trabajo.",
    date: "2026-10-26",
    tags: ["Inmobiliarias", "Leads", "WhatsApp", "SEO"],
    sections: [
      {
        heading: "El problema típico",
        body: [
          "Muchas inmobiliarias en Honduras viven en Instagram o Facebook: las propiedades se pierden en el feed, no hay un lugar estable para compartir inventario, y las consultas por DM se enfrían.",
          "Un presupuesto chico de ads no arregla una oferta confusa. Primero necesitas un canal propio que explique qué vendes/alquilas y cómo contactarte.",
        ],
      },
      {
        heading: "Por qué una web dedicada ayuda a calificar leads",
        body: [
          "Organizas compra vs alquiler (o zonas) en URLs que puedes mandar por WhatsApp.",
          "El visitante llega con contexto: ya vio servicios o fichas, no solo una foto suelta.",
          "Puedes medir (Analytics) qué páginas interesan — algo que el feed no te da con claridad.",
          "Caso real de estructura inmobiliaria en Tegucigalpa: /casos/bienes-raices-altair y la industria /diseno-web-inmobiliarias.",
        ],
      },
      {
        heading: "Captura y seguimiento por WhatsApp",
        body: [
          "CTA visible a WhatsApp en móvil (donde decide la mayoría).",
          "Mensaje prellenado (“Me interesa comprar/alquilar en…”).",
          "Si el volumen es alto: flujo que pregunta zona, presupuesto aproximado e intención, y avisa a un agente — ver /whatsapp-automatizacion-citas.",
          "Lo que no debe hacer un bot: inventar disponibilidad o cerrar una negociación compleja sin humano.",
        ],
      },
      {
        heading: "SEO local sin spam de ciudades",
        body: [
          "Una página fuerte de inmobiliaria + contenido útil > 30 URLs clonadas “inmobiliaria + colonia”.",
          "Google Business Profile si tienes oficina física.",
          "Consistencia de nombre, teléfono, WhatsApp y zona de servicio.",
          "Más detalle: /seo-local-honduras-tgu-sps y /seo-services-honduras.",
        ],
      },
      {
        heading: "Qué presupuestar (y qué no)",
        body: [
          "Prioriza: web clara + WhatsApp + medición. Luego SEO continuo si hay demanda de búsqueda.",
          "Guía de costos de web en Honduras: /blog/cuanto-cuesta-pagina-web-honduras-2027",
          "Precios de planes iAGO: /pricing — desarrollo (único) + suscripción (hosting / plan).",
        ],
      },
      {
        heading: "Cómo evaluar si un proveedor sirve para tu inmobiliaria",
        body: [
          "¿Tienen un caso inmobiliario (o de inventario) en vivo?",
          "¿Hablan de móvil y WhatsApp o solo de “branding”?",
          "¿Documentan límites (qué no automatizan)?",
          "¿Puedes ver el sitio publicado, no solo un mockup en PDF?",
        ],
      },
    ],
  },
  {
    slug: "tarjeta-nfc-presentacion-negocios",
    title: "Tarjeta de presentación NFC: cómo conseguir más leads en persona",
    description:
      "Qué es una tarjeta NFC, por qué conviene a negocios en Honduras y cómo usarla con tu web, WhatsApp y CRM para captar leads.",
    date: "2026-10-24",
    tags: ["NFC", "Leads", "Networking"],
    sections: [
      {
        heading: "¿Qué es una tarjeta de presentación NFC?",
        body: [
          "Es una tarjeta (o tag) con un chip que, al acercarla a un celular, abre tu web, WhatsApp, menú de contacto o landing de leads — sin que la otra persona escriba nada a mano.",
          "En IAGO la incluimos en el plan SEO porque conecta el networking offline con tu presencia digital.",
        ],
      },
      {
        heading: "Por qué importa para tu negocio",
        body: [
          "Las tarjetas de papel se pierden. Un tap NFC deja tu contacto guardado en el momento.",
          "Puedes medir visitas a la página de destino y ver cuántas personas llegan desde eventos, ferias o reuniones.",
          "Ideal en Tegucigalpa, San Pedro Sula y Comayagua: mucho negocio aún se cierra en persona, pero la decisión se confirma online.",
        ],
      },
      {
        heading: "Qué debería abrir tu NFC",
        body: [
          "Una landing rápida con tu oferta, prueba social y botón a WhatsApp.",
          "Tu vCard / datos de contacto + link a casos o precios.",
          "Un formulario corto (“¿en qué te ayudamos?”) si quieres leads más calificados.",
        ],
      },
      {
        heading: "Cómo lo implementamos en IAGO",
        body: [
          "Configuramos el destino NFC, alineado a tu marca.",
          "Conectamos con tu sitio, Analytics y, si aplica, automatizaciones de seguimiento.",
          "Te dejamos listo para usarla en reuniones, Palmerola, ferias y visitas a cliente.",
        ],
      },
    ],
  },
  {
    slug: "como-conseguir-leads-para-tu-negocio",
    title: "Cómo conseguir leads para tu negocio (sin depender solo de ads)",
    description:
      "Sistema práctico de leads: página web, WhatsApp, SEO, NFC y automatizaciones con IA para negocios en Honduras.",
    date: "2026-10-24",
    tags: ["Leads", "WhatsApp", "SEO"],
    sections: [
      {
        heading: "Un lead no es un like",
        body: [
          "Lead = alguien que dejó una forma de contacto o inició una conversación real (WhatsApp, formulario, llamada).",
          "El objetivo de tu web no es “verse bonita”: es mover a esa conversación.",
        ],
      },
      {
        heading: "Los 5 canales que más funcionan aquí",
        body: [
          "1) Página web clara con CTA a WhatsApp.",
          "2) SEO local (TGU, SPS, Comayagua, tu rubro + ciudad).",
          "3) Google Business Profile si tienes local o zona de servicio.",
          "4) Tarjeta NFC / QR en el mundo real.",
          "5) Seguimiento automático (recordatorios, respuestas con IA, CRM simple).",
        ],
      },
      {
        heading: "Errores comunes",
        body: [
          "Web sin botón de WhatsApp arriba del fold.",
          "Nadie pide el correo/WhatsApp en ferias o mostrador.",
          "Leads que llegan y nadie responde en la primera hora.",
          "Pagar ads hacia una página lenta o confusa.",
        ],
      },
      {
        heading: "Un sistema simple que puedes pedir",
        body: [
          "Web + SEO on-page + Analytics/Search Console.",
          "Landing de captura + NFC.",
          "Automatización: aviso interno + respuesta inicial al lead.",
          "Revisión mensual de qué canal trae mejores conversaciones.",
        ],
      },
    ],
  },
  {
    slug: "ai-seo-aparecer-en-inteligencias-artificiales",
    title: "AI SEO: ¿quieres que tu negocio salga en inteligencias artificiales?",
    description:
      "Qué es AI SEO, cómo prepararte para Google y respuestas con IA, y qué hacer en Honduras para que te mencionen o te encuentren.",
    date: "2026-10-24",
    tags: ["AI SEO", "IA", "SEO"],
    sections: [
      {
        heading: "La gente ya no solo “busca en Google”",
        body: [
          "También pregunta a ChatGPT, Gemini, Perplexity y resúmenes con IA.",
          "Esas herramientas priorizan sitios claros, confiables y bien estructurados — no magia oscura.",
        ],
      },
      {
        heading: "Qué es AI SEO (en simple)",
        body: [
          "Es SEO actualizado: contenido útil, datos de negocio consistentes, páginas por servicio/ciudad, schema/markup y autoridad real.",
          "Objetivo: que Google te rankee y que los sistemas de IA puedan citarte o recomendarte con precisión.",
        ],
      },
      {
        heading: "Checklist práctico",
        body: [
          "Permite crawlers de búsqueda (p. ej. OAI-SearchBot para ChatGPT search) en robots.txt; no bloquees bots legítimos en el CDN.",
          "Páginas de servicio e industria con respuestas concretas (no solo el home).",
          "Preguntas frecuentes reales de tus clientes.",
          "NAP / contacto / WhatsApp visibles y consistentes.",
          "Casos con problema → solución → implementación → resultado/límites (evidencia, no slogans).",
          "Sitemap, Search Console y Analytics.",
          "Contenido que responde “quién, qué, dónde, para quién” y cuánto cuesta / cómo elegir proveedor.",
        ],
      },
      {
        heading: "Cómo te ayudamos",
        body: [
          "En IAGO combinamos desarrollo web, SEO técnico y contenido orientado a búsqueda + IA.",
          "Si tu meta es “que mi negocio salga cuando pregunten a una IA”, empezamos por fundamentos sólidos — no promesas vacías ni trucos de un solo archivo.",
          "Ejemplos de contenido citable: guía de costos (/blog/cuanto-cuesta-pagina-web-honduras-2027) y web para inmobiliarias (/blog/web-inmobiliaria-honduras-leads-whatsapp-seo).",
        ],
      },
    ],
  },
  {
    slug: "paginas-web-y-desarrollo-web-honduras",
    title: "Páginas web y desarrollo web en Honduras: qué pedir (y qué evitar)",
    description:
      "Guía para contratar páginas web / desarrollo web en Honduras: móvil, WhatsApp, SEO, velocidad y presupuesto sin sorpresas.",
    date: "2026-10-24",
    tags: ["Páginas web", "Desarrollo web", "Honduras"],
    sections: [
      {
        heading: "Qué sí o sí debe tener tu página",
        body: [
          "Carga rápida en 4G.",
          "Diseño mobile-first.",
          "WhatsApp / contacto obvio.",
          "Mensaje claro en 5 segundos (“qué haces y para quién”).",
          "Base SEO: títulos, headings, sitemap.",
        ],
      },
      {
        heading: "Qué evitar",
        body: [
          "Plantillas lentas llenas de plugins.",
          "Textos genéricos que podría tener cualquier competidor.",
          "Proyectos “sin SEO” que después cuestan el doble corregir.",
          "Entregas sin Analytics ni Search Console.",
        ],
      },
      {
        heading: "TGU, SPS, Comayagua, Palmerola",
        body: [
          "Si atiendes varias ciudades, conviene contenido local real — no copiar/pegar la misma página cambiando el nombre de la ciudad.",
          "En IAGO armamos hub nacional + páginas de ciudad cuando aporta a tu estrategia.",
        ],
      },
      {
        heading: "Siguiente paso",
        body: [
          "Revisa nuestros planes o escríbenos por WhatsApp con tu rubro y ciudad. Te proponemos alcance claro.",
        ],
      },
    ],
  },
  {
    slug: "seo-local-honduras-tgu-sps",
    title: "SEO local en Honduras: Tegucigalpa, SPS y más",
    description:
      "Cómo funciona el SEO local en Honduras para Tegucigalpa (TGU), San Pedro Sula (SPS), Comayagua y Palmerola.",
    date: "2026-10-24",
    tags: ["SEO", "SEO local", "Honduras"],
    sections: [
      {
        heading: "Google muestra resultados distintos por ciudad",
        body: [
          "Alguien en SPS no ve lo mismo que alguien en TGU.",
          "Por eso importan páginas locales, reseñas y consistencia de datos de negocio.",
        ],
      },
      {
        heading: "Pilares",
        body: [
          "Google Business Profile (si aplica).",
          "Página web con servicios + ciudades.",
          "Contenido útil (blog / FAQs).",
          "Velocidad móvil.",
          "Links internos entre servicios, casos y ciudades.",
        ],
      },
      {
        heading: "Keywords naturales (sin spam)",
        body: [
          "Usamos frases que la gente sí busca: páginas web, desarrollo web, SEO, AI SEO, agencia digital Honduras, Tegucigalpa, San Pedro Sula, Comayagua, Palmerola, TGU, SPS — integradas en texto útil, no listas forzadas.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
