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
          "Páginas de servicio y ciudad (no solo el home).",
          "Preguntas frecuentes reales de tus clientes.",
          "NAP / contacto / WhatsApp visibles.",
          "Casos y prueba social.",
          "Sitemap, Search Console y Analytics.",
          "Contenido que responde “quién, qué, dónde, para quién”.",
        ],
      },
      {
        heading: "Cómo te ayudamos",
        body: [
          "En IAGO combinamos desarrollo web, SEO técnico y contenido orientado a búsqueda + IA.",
          "Si tu meta es “que mi negocio salga cuando pregunten a una IA”, empezamos por fundamentos sólidos — no promesas vacías.",
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
