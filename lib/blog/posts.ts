import type { BlogCategoryId } from "@/lib/blog/categories";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  categoryId: BlogCategoryId;
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
    categoryId: "pricing",
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
          "Detalle de proceso: /seo-services-honduras. Presupuesto típico: /blog/cuanto-invertir-seo-pequeno-negocio.",
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
    slug: "cuanto-invertir-seo-pequeno-negocio",
    title: "¿Cuánto debería invertir un pequeño negocio en SEO?",
    description:
      "Rangos realistas de inversión en SEO para pymes en Honduras: qué pagar al inicio, qué es continuo, cuándo no vale la pena y cómo evitar contratos vacíos.",
    date: "2026-10-26",
    categoryId: "pricing",
    tags: ["SEO", "Precios", "Pymes"],
    sections: [
      {
        heading: "Respuesta directa",
        body: [
          "No hay un número mágico. Hay tres capas: (1) arreglo técnico y páginas base, (2) contenido útil, (3) seguimiento mensual. Un pequeño negocio suele gastar mal si paga “SEO” sin web indexable, sin Analytics/Search Console, o con promesas de posición #1 en días.",
          "En iAGO el plan SEO combina pago único (sitio + setup SEO + NFC) y suscripción con hosting e informe mensual — ver /pricing. El retainer tiene sentido cuando la base ya no está rota.",
        ],
      },
      {
        heading: "Qué estás comprando realmente",
        body: [
          "Setup: títulos, headings, sitemap, Search Console, Analytics, páginas de servicio claras, velocidad móvil.",
          "Contenido: guías que responden preguntas reales de tus clientes (precios, proceso, ciudad, industria) — no 30 posts vacíos.",
          "Autoridad local: Google Business Profile (si aplica), reseñas honestas, NAP consistente, links internos.",
          "Reporte: qué se midió, qué cambió, qué sigue — no un PDF de vanity metrics.",
        ],
      },
      {
        heading: "Cuándo sí vale la pena",
        body: [
          "Hay demanda de búsqueda en tu rubro (aunque sea local: “dentista Comayagua”, “alquiler Tegucigalpa”).",
          "Puedes esperar meses, no una semana.",
          "Tu oferta es estable y puedes atender leads que lleguen.",
          "Ya tienes (o vas a tener) una web que carga bien en celular y deja claro cómo contactarte.",
        ],
      },
      {
        heading: "Cuándo NO gastes en SEO todavía",
        body: [
          "Tu web es un PDF en HTML, o no tiene contacto/WhatsApp visible.",
          "Solo cierras por referidos cerrados y nadie te busca online.",
          "No puedes responder leads en la primera hora.",
          "El presupuesto apenas alcanza para ads mal dirigidos a una landing confusa — arregla conversión primero.",
        ],
      },
      {
        heading: "Cómo presupuestar sin sorpresas",
        body: [
          "Separa setup (único) de operación (mensual).",
          "Pide alcance por entregables: páginas, keywords objetivo realistas, frecuencia de reportes.",
          "Desconfía de “garantizamos top 3” o “IA que te posiciona sola”.",
          "Compara con el costo de una web seria: /blog/cuanto-cuesta-pagina-web-honduras-2027.",
          "Proceso de SEO en Honduras: /seo-services-honduras.",
        ],
      },
    ],
  },
  {
    slug: "desarrollo-web-vs-constructores-wix-wordpress",
    title:
      "Desarrollo web vs constructores (Wix, WordPress): ¿qué conviene a tu negocio?",
    description:
      "Cuándo basta un constructor de sitios y cuándo un desarrollo a medida ayuda más: costo total, velocidad, WhatsApp, SEO y mantenimiento para negocios en Honduras.",
    date: "2026-10-26",
    categoryId: "pricing",
    tags: ["Desarrollo web", "Wix", "WordPress"],
    sections: [
      {
        heading: "No es una guerra de herramientas",
        body: [
          "Wix, Squarespace o un WordPress con plantilla pueden ser correctos si tu oferta es simple, tu tráfico es bajo y puedes vivir con límites de diseño/velocidad.",
          "Un desarrollo a medida (en nuestro caso, Next.js) conviene cuando la conversión, el rendimiento móvil, el SEO técnico o las integraciones (WhatsApp, CRM, automatizaciones) son parte del negocio — no un “extra”.",
        ],
      },
      {
        heading: "Constructores: ventajas y costos ocultos",
        body: [
          "Ventaja: lanzas rápido y editas textos sin pedir a un desarrollador cada coma.",
          "Costo oculto: plantillas pesadas, plugins que se rompen, SEO a medias, y un sitio que “se ve bien en desktop” pero pierde leads en 4G.",
          "Otro costo: cuando quieres algo fuera del molde (flujo de citas, landing por campaña, schema limpio), terminas pagando parches o migrando.",
        ],
      },
      {
        heading: "Desarrollo web: qué ganas (y qué no)",
        body: [
          "Ganas: control de rendimiento, estructura SEO, CTAs de WhatsApp bien pensados, base para AI SEO y automatizaciones.",
          "No ganas magia: sigue haciendo falta buen contenido, fotos reales y alguien que atienda el chat.",
          "El precio inicial suele ser más alto que una plantilla; el costo a 12–24 meses a menudo se equilibra si evitas rehacer el sitio dos veces.",
        ],
      },
      {
        heading: "Regla práctica para decidir",
        body: [
          "Elige constructor si: presupuesto mínimo, una sola oferta, y puedes aceptar límites.",
          "Elige desarrollo si: el sitio es canal de ventas, compites en Google/local, o vas a automatizar leads.",
          "Híbrido frecuente: empiezas con alcance chico bien hecho (5 páginas) y creces — ver plan Básico/SEO en /pricing.",
          "Guía de costos: /blog/cuanto-cuesta-pagina-web-honduras-2027. Qué pedir al contratar: /blog/paginas-web-y-desarrollo-web-honduras.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-cuesta-automatizar-whatsapp-negocio",
    title:
      "¿Cuánto cuesta automatizar WhatsApp para un pequeño negocio?",
    description:
      "Qué incluye automatizar WhatsApp (botón, flujos, IA), rangos de esfuerzo, límites honestos y cómo encaja con una web de negocio en Honduras.",
    date: "2026-10-26",
    categoryId: "pricing",
    tags: ["WhatsApp", "Automatización", "Precios"],
    sections: [
      {
        heading: "Tres niveles de “automatizar WhatsApp”",
        body: [
          "Nivel 1 — CTA inteligente: botón wa.me con mensaje prellenado desde la web. Barato de implementar; enorme impacto si hoy el contacto está escondido.",
          "Nivel 2 — Flujo de calificación: preguntas fijas (servicio, zona, horario) + aviso a un humano. Reduce ida y vuelta.",
          "Nivel 3 — Asistente con IA: responde FAQs, captura datos, escala a persona. Útil con volumen; peligroso si inventa precios o promete citas que no existen.",
        ],
      },
      {
        heading: "Qué determina el costo",
        body: [
          "Complejidad del flujo (3 preguntas vs 15 ramas).",
          "Integraciones (CRM, calendario, hojas de cálculo).",
          "Canales oficiales de Meta / proveedores vs hacks frágiles.",
          "Operación: alguien tiene que revisar respuestas, horarios y excepciones.",
          "En iAGO, automatización de leads / chatbot con IA entra en el plan Automatizado con IA (pago único + suscripción de operación) — ver /pricing.",
        ],
      },
      {
        heading: "Qué NO deberías automatizar",
        body: [
          "Negociaciones complejas o sensibles (médico/legal) sin supervisión.",
          "Inventar disponibilidad o cerrar ventas sin humano.",
          "Spam masivo a contactos que no te escribieron.",
          "Detalle de límites y casos de citas: /whatsapp-automatizacion-citas.",
        ],
      },
      {
        heading: "Cómo presupuestar sin sorpresas",
        body: [
          "Empieza por Nivel 1 en la web si aún no lo tienes — es el ROI más claro.",
          "Pide un mapa del flujo antes de pagar: entradas, salidas, handoff humano.",
          "Separa setup (único) de operación (mensual).",
          "Si tu duda es la web completa: /blog/cuanto-cuesta-pagina-web-honduras-2027.",
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
    categoryId: "pricing",
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
          "Comparación constructores vs desarrollo: /blog/desarrollo-web-vs-constructores-wix-wordpress. Precios: /pricing.",
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
    categoryId: "industry",
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
    slug: "que-debe-incluir-web-salon-barberia",
    title: "Qué debe incluir la web de un salón o barbería profesional",
    description:
      "Checklist práctico para salones y barberías: servicios, precios orientativos, fotos reales, reserva por WhatsApp y SEO local — sin plantillas genéricas.",
    date: "2026-10-26",
    categoryId: "industry",
    tags: ["Barberías", "Salones", "Diseño web"],
    sections: [
      {
        heading: "El visitante decide en el celular",
        body: [
          "Quien busca “barbería cerca” o “salón de uñas” suele estar a minutos de decidir. Si tu web tarda, no muestra cortes reales o esconde el WhatsApp, se va al siguiente resultado o a Instagram.",
          "Una web profesional no reemplaza tu perfil social: lo complementa con horarios, servicios y un camino claro a la cita.",
        ],
      },
      {
        heading: "Bloques que sí o sí",
        body: [
          "Servicios con nombres que la gente busca (corte, barba, color, manicure) — no solo “paquetes creativos”.",
          "Fotos reales del local y del trabajo (con permiso). Stock genérico resta confianza.",
          "Ubicación / cómo llegar y zona que atiendes.",
          "CTA a WhatsApp o reserva arriba del fold en móvil.",
          "FAQs: estacionamiento, niños, depósito, cancelaciones.",
        ],
      },
      {
        heading: "Precios: ¿publicarlos o no?",
        body: [
          "Publicar rangos (“corte desde…”) filtra curiosos y reduce fricción. Si tus precios cambian mucho, usa “desde” y confirma por chat.",
          "Esconder todo el menú de precios obliga a una conversación que a veces no llega.",
        ],
      },
      {
        heading: "Citas y automatización",
        body: [
          "Nivel básico: mensaje prellenado (“Quiero cita para corte el sábado”).",
          "Nivel medio: flujo que pide servicio, día preferido y nombre, y avisa al equipo — ver /whatsapp-automatizacion-citas.",
          "No prometas que un bot “llena tu agenda sola” sin humano que confirme.",
        ],
      },
      {
        heading: "Dónde profundizar",
        body: [
          "Página de industria: /diseno-web-estudios-belleza.",
          "Casos de belleza / estudios en /case-studies.",
          "Planes: /pricing.",
        ],
      },
    ],
  },
  {
    slug: "restaurantes-convertir-visitas-web-en-clientes",
    title: "Cómo un restaurante puede convertir visitas web en clientes",
    description:
      "Menú claro, WhatsApp o reservas, fotos honestas y SEO local: guía para restaurantes en Honduras que quieren que la web trabaje, no solo “exista”.",
    date: "2026-10-26",
    categoryId: "industry",
    tags: ["Restaurantes", "Conversión", "WhatsApp"],
    sections: [
      {
        heading: "Una web de restaurante no es un brochure",
        body: [
          "El visitante quiere saber: qué comes, cuánto más o menos cuesta, dónde estás, si hay delivery/reservas, y cómo pedirlo ahora.",
          "Si eso está detrás de un slider lento o un PDF de 20 MB, pierdes la mesa o el pedido.",
        ],
      },
      {
        heading: "Prioridades de conversión",
        body: [
          "Menú legible en móvil (o PDF liviano + resumen de platos estrella).",
          "Horarios actualizados — un horario viejo genera reseñas negativas.",
          "Mapa / dirección y enlace a WhatsApp o llamada.",
          "Fotos reales del plato y del local; evita stock que no se parece a tu cocina.",
          "Si haces delivery: zonas y tiempo estimado, no solo “pedidos al inbox”.",
        ],
      },
      {
        heading: "SEO local sin relleno",
        body: [
          "Google Business Profile bien cuidado suele importar tanto como la web.",
          "En la web: nombre, zona, tipo de comida y FAQs (estacionamiento, eventos, menú infantil).",
          "No clones “restaurante + cada colonia” en 40 URLs vacías.",
        ],
      },
      {
        heading: "Siguiente paso",
        body: [
          "Estructura orientada a rubro: /diseno-web-restaurantes.",
          "Si el cuello de botella es responder pedidos: /blog/cuanto-cuesta-automatizar-whatsapp-negocio.",
        ],
      },
    ],
  },
  {
    slug: "servicios-automatizar-solicitudes-citas",
    title:
      "Cómo negocios de servicios pueden automatizar solicitudes de cita",
    description:
      "De dentistas a talleres: qué automatizar en pedidos de cita por WhatsApp, qué dejar al humano y cómo medir si el flujo ayuda.",
    date: "2026-10-26",
    categoryId: "industry",
    tags: ["Citas", "Servicios", "WhatsApp"],
    sections: [
      {
        heading: "El patrón",
        body: [
          "Alguien escribe “¿tienen espacio mañana?”. Sin proceso, el mensaje se pierde entre stickers y chats viejos.",
          "Automatizar la solicitud no es “quitar el humano”: es capturar servicio, preferencia de horario y datos de contacto, y avisar a quien confirma.",
        ],
      },
      {
        heading: "Flujo mínimo que funciona",
        body: [
          "1) Saludo + qué servicio buscan.",
          "2) Día/franja preferida (sin inventar disponibilidad).",
          "3) Nombre y teléfono de respaldo.",
          "4) Aviso interno al equipo.",
          "5) Confirmación humana con horario real.",
        ],
      },
      {
        heading: "Límites serios",
        body: [
          "Salud y temas legales: el bot no diagnostica ni promete resultados clínicos.",
          "No confirmes citas que el calendario no tiene.",
          "Ofrece siempre salida a humano.",
          "Detalle: /whatsapp-automatizacion-citas y clínicas /diseno-web-clinicas-salud.",
        ],
      },
      {
        heading: "Cómo saber si sirve",
        body: [
          "Mide: % de chats que dejan datos completos, tiempo hasta primera respuesta humana, citas confirmadas vs abandonadas.",
          "Si nadie atiende el handoff, la automatización solo genera leads frustrados.",
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
    categoryId: "ai",
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
          "Diferencia con SEO tradicional: /blog/ai-seo-vs-seo-tradicional.",
        ],
      },
    ],
  },
  {
    slug: "que-es-automatizacion-ia-pequenos-negocios",
    title:
      "Qué es la automatización con IA y cómo puede usarla un pequeño negocio",
    description:
      "Definición clara de automatización con IA para pymes: ejemplos útiles (WhatsApp, FAQs, leads), límites reales y cómo empezar sin contratar un equipo de ingeniería.",
    date: "2026-10-26",
    categoryId: "ai",
    tags: ["IA", "Automatización", "Pymes"],
    sections: [
      {
        heading: "Definición sin humo",
        body: [
          "Automatización con IA = software que entiende lenguaje natural (preguntas, mensajes) y ejecuta pasos: responder, clasificar, avisar a un humano o guardar un lead.",
          "No es un empleado que “entiende tu negocio solo”. Es un sistema que tú (o tu proveedor) configura con reglas, ejemplos y límites.",
        ],
      },
      {
        heading: "Casos de uso que sí suelen valer la pena",
        body: [
          "Primera respuesta en WhatsApp fuera de horario.",
          "Calificar leads (rubro, ciudad, presupuesto aproximado).",
          "FAQs repetidas: horarios, zonas de entrega, qué incluye un servicio.",
          "Resúmenes internos de conversaciones largas para tu equipo.",
        ],
      },
      {
        heading: "Casos donde la IA suele fallar",
        body: [
          "Prometer precios o plazos que no están en tu base de conocimiento.",
          "Atención médica/legal delicada sin supervisión.",
          "Sustituir por completo a un vendedor en negociaciones complejas.",
        ],
      },
      {
        heading: "Cómo empezar sin “contratar un desarrollador” a tiempo completo",
        body: [
          "Documenta 10–20 preguntas reales de clientes y las respuestas correctas.",
          "Arregla primero la web y el CTA de WhatsApp.",
          "Pide un flujo pequeño con handoff humano — plan Automatizado con IA en /pricing.",
          "Más detalle WhatsApp: /blog/chatbot-vs-asistente-ia-whatsapp.",
        ],
      },
    ],
  },
  {
    slug: "chatbot-vs-asistente-ia-whatsapp",
    title:
      "Chatbot vs asistente con IA: ¿cuál necesitas en WhatsApp?",
    description:
      "Diferencias prácticas entre un chatbot de menús y un asistente con IA en WhatsApp: cuándo usar cada uno, riesgos y cómo combinarlos con un humano.",
    date: "2026-10-26",
    categoryId: "ai",
    tags: ["Chatbot", "WhatsApp", "IA"],
    sections: [
      {
        heading: "Chatbot clásico",
        body: [
          "Menús y botones: “1 = precios, 2 = citas”. Predecible, barato de mantener, limitado si el cliente escribe en lenguaje libre.",
          "Ideal cuando tus preguntas son pocas y estables.",
        ],
      },
      {
        heading: "Asistente con IA",
        body: [
          "Entiende frases como “¿atienden el sábado en la tarde para un corte?”.",
          "Puede consultar una base de FAQs y pedir datos faltantes.",
          "Riesgo: alucinar si no tiene información o si le pediste “ser amable” por encima de “ser exacto”.",
        ],
      },
      {
        heading: "¿Puede la IA responder preguntas de clientes en WhatsApp?",
        body: [
          "Sí, las repetitivas y bien documentadas. No debería inventar inventario, diagnósticos ni cierres contractuales.",
          "La mejor configuración suele ser: IA para triaje + humano para confirmar.",
        ],
      },
      {
        heading: "Cómo elegir",
        body: [
          "Poco volumen y FAQs simples → chatbot o incluso solo mensajes prellenados desde la web.",
          "Muchas variantes de la misma pregunta → asistente con IA + supervisión.",
          "Implementación orientada a citas: /whatsapp-automatizacion-citas. Costos: /blog/cuanto-cuesta-automatizar-whatsapp-negocio.",
        ],
      },
    ],
  },
  {
    slug: "ai-seo-vs-seo-tradicional",
    title: "Qué es AI SEO y en qué se diferencia del SEO tradicional",
    description:
      "AI SEO vs SEO clásico: qué cambia (citabilidad, FAQs, crawlers de búsqueda con IA), qué sigue igual, y cómo lo aplicamos en iAGO sin promesas irreales.",
    date: "2026-10-26",
    categoryId: "ai",
    tags: ["AI SEO", "SEO", "IA"],
    sections: [
      {
        heading: "Lo que no cambió",
        body: [
          "Sigue importando: páginas útiles, velocidad móvil, intención de búsqueda, enlaces internos, autoridad y consistencia de datos de negocio.",
          "Sin eso, ningún “archivo mágico” te mete en respuestas de IA.",
        ],
      },
      {
        heading: "Lo que sí añade el AI SEO / GEO",
        body: [
          "Contenido citable: respuestas claras a preguntas (“cuánto cuesta…”, “qué incluir…”) con límites y contexto.",
          "Estructura que una máquina puede parsear: headings, FAQs, schema alineado a lo visible.",
          "Crawlabilidad para buscadores con IA (p. ej. permitir OAI-SearchBot; no confundir con GPTBot de entrenamiento).",
          "Medición más amplia: no solo posición #3 — también indexación, clics a URLs trabajadas y menciones verificables.",
        ],
      },
      {
        heading: "Qué no prometemos",
        body: [
          "No controlamos ni garantizamos aparición dentro de ChatGPT, Gemini o Perplexity.",
          "No vendemos trucos de un solo llms.txt como estrategia completa.",
          "Más checklist: /blog/ai-seo-aparecer-en-inteligencias-artificiales. Servicios: /seo-services-honduras.",
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
    categoryId: "local",
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
      {
        heading: "Guías por ciudad (sin clones)",
        body: [
          "Tegucigalpa: /blog/mejorar-visibilidad-online-tegucigalpa.",
          "Comayagua / corredor Palmerola: /blog/guia-pagina-web-negocio-comayagua.",
          "Páginas de servicio local: /honduras/tegucigalpa, /honduras/comayagua, /honduras/palmerola.",
        ],
      },
    ],
  },
  {
    slug: "guia-pagina-web-negocio-comayagua",
    title: "Guía para crear la web de un negocio en Comayagua",
    description:
      "Qué debe considerar un negocio en Comayagua (y zona Palmerola) al lanzar su página web: audiencia local vs viajero, WhatsApp, SEO local y errores a evitar.",
    date: "2026-10-26",
    categoryId: "local",
    tags: ["Comayagua", "Palmerola", "Páginas web"],
    sections: [
      {
        heading: "Por qué Comayagua no es “TGU con otro nombre”",
        body: [
          "El centro del país mezcla comercio local, servicios y un corredor ligado a Palmerola (viajeros, hospedaje, transporte, B2B).",
          "Una web útil dice si atiendes vecinos de la ciudad, gente de paso, o ambos — y adapta el mensaje (horarios, zonas, idiomas básicos si aplica).",
        ],
      },
      {
        heading: "Prioridades locales",
        body: [
          "WhatsApp visible: gran parte de la coordinación sigue siendo chat.",
          "Ubicación clara (mapa, referencias) — muchas búsquedas son “cerca de…”.",
          "Si compites por viajeros: landing específica de zona Palmerola sin duplicar el mismo texto en /honduras/comayagua y /honduras/palmerola.",
          "Fotos reales del local; el stock “ciudad colonial genérica” no genera confianza.",
        ],
      },
      {
        heading: "SEO sin spam de colonias",
        body: [
          "Una página fuerte de negocio + FAQs locales > 20 URLs “plomero + cada barrio”.",
          "Google Business Profile si tienes local físico.",
          "Contenido que responda preguntas reales (estacionamiento, tiempos, cobertura hacia Siguatepeque/Tegucigalpa si aplica).",
        ],
      },
      {
        heading: "Siguiente paso",
        body: [
          "Página de ciudad: /honduras/comayagua. Zona aeropuerto: /honduras/palmerola.",
          "Costos de web: /blog/cuanto-cuesta-pagina-web-honduras-2027. Planes: /pricing.",
        ],
      },
    ],
  },
  {
    slug: "mejorar-visibilidad-online-tegucigalpa",
    title:
      "Cómo negocios en Tegucigalpa pueden mejorar su visibilidad online",
    description:
      "Acciones concretas para pymes en Tegucigalpa (TGU): web móvil, Google Business Profile, SEO local, WhatsApp y contenido útil — sin trucos de “posición #1 en 7 días”.",
    date: "2026-10-26",
    categoryId: "local",
    tags: ["Tegucigalpa", "SEO local", "Visibilidad"],
    sections: [
      {
        heading: "El contexto TGU",
        body: [
          "En la capital la competencia online es más densa que en ciudades pequeñas: más anuncios, más perfiles de Google, más ruido en redes.",
          "Gana quien combina presencia clara (web + GBP) con respuesta rápida (WhatsApp) y prueba (casos, reseñas reales).",
        ],
      },
      {
        heading: "Checklist de visibilidad (orden sugerido)",
        body: [
          "1) Web rápida en celular con CTA a WhatsApp y mensaje “qué haces / para quién”.",
          "2) Google Business Profile completo y coherente con la web (nombre, categoría, horario, fotos).",
          "3) Páginas de servicio (no solo el home) para lo que la gente busca.",
          "4) Reseñas honestas; responde las críticas con profesionalismo.",
          "5) Contenido útil (precios, proceso, FAQs) — calidad > cuota diaria.",
          "6) Medición: Analytics + Search Console.",
        ],
      },
      {
        heading: "Errores frecuentes en la capital",
        body: [
          "Pagar ads hacia una landing lenta o sin contacto.",
          "Copiar la misma página de ciudad 15 veces.",
          "Ignorar móviles aunque “el diseño se vea bonito en la iMac de la agencia”.",
          "Prometer AI SEO sin fundamentos — ver /blog/ai-seo-vs-seo-tradicional.",
        ],
      },
      {
        heading: "Recursos iAGO",
        body: [
          "Página local: /honduras/tegucigalpa.",
          "SEO local ampliado: /blog/seo-local-honduras-tgu-sps.",
          "Casos en vivo (incl. proyectos en Tegucigalpa): /case-studies.",
        ],
      },
    ],
  },
  {
    slug: "antes-de-contratar-agencia-seo-honduras",
    title:
      "Qué debe saber un negocio local antes de contratar una agencia SEO",
    description:
      "Preguntas, red flags y entregables mínimos para contratar SEO en Honduras sin comprar humo: reportes, alcance, timelines y relación con tu web.",
    date: "2026-10-26",
    categoryId: "local",
    tags: ["SEO", "Agencias", "Honduras"],
    sections: [
      {
        heading: "Preguntas que debes hacer",
        body: [
          "¿Qué entregables concretos hay el mes 1, 2 y 3?",
          "¿Quién escribe el contenido y con qué brief?",
          "¿Cómo miden éxito más allá de “tráfico”?",
          "¿Qué pasa con Search Console y Analytics — me dan acceso?",
          "¿Trabajan la web técnica o solo publican posts?",
        ],
      },
      {
        heading: "Red flags",
        body: [
          "Garantía de #1 en Google.",
          "No quieren mostrarte sitios reales.",
          "Piden pagar sin diagnóstico de tu web actual.",
          "Solo hablan de “backlinks masivos” o trucos de IA.",
        ],
      },
      {
        heading: "Entregables mínimos sanos",
        body: [
          "Diagnóstico técnico + de contenido.",
          "Prioridades (no 100 tareas a la vez).",
          "Acceso a propiedades de medición a tu nombre.",
          "Reporte legible para un dueño de negocio, no solo jargon.",
        ],
      },
      {
        heading: "Cómo lo encaramos en iAGO",
        body: [
          "SEO atado a una web mantenible y a reportes mensuales en el plan SEO — /pricing.",
          "Presupuesto orientativo: /blog/cuanto-invertir-seo-pequeno-negocio.",
          "Servicio: /seo-services-honduras.",
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
    categoryId: "local",
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
    categoryId: "local",
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
    slug: "estado-webs-pequenos-negocios-honduras-auditoria",
    title:
      "El estado de las webs de negocios en Honduras: auditoría práctica",
    description:
      "Auditoría HTML de 20 sitios públicos (16 alcanzables): viewport móvil, WhatsApp, tel/mailto y H1. Muestra, metodología, hallazgos y limitaciones — sin inventar estadísticas.",
    date: "2026-10-26",
    categoryId: "research",
    tags: ["Investigación", "Auditoría", "Honduras"],
    sections: [
      {
        heading: "Por qué publicamos esto",
        body: [
          "Queremos contenido original que otros puedan citar: no otra lista de “10 tips”, sino una muestra pequeña con método explícito.",
          "Esto no es un censo nacional. Es una auditoría práctica con límites claros — útil como punto de partida para dueños de negocio y para quien evalúa proveedores.",
        ],
      },
      {
        heading: "Muestra",
        body: [
          "Intentamos 20 URLs públicas: mezcla de clientes iAGO con sitios publicados y entidades/negocios conocidos en Honduras (medios, banca, educación, retail, agencias, marcas).",
          "Alcanzables (HTTP OK en la corrida): 16. No alcanzables: 4 (403 o fallos de DNS en el momento de la prueba).",
          "Incluir clientes propios sesga la muestra hacia sitios más cuidados en WhatsApp/móvil; lo declaramos abiertamente.",
        ],
      },
      {
        heading: "Metodología",
        body: [
          "Fecha de corrida: 2026-10-26 (UTC). Cliente HTTP: Python urllib, User-Agent iAGO-research-bot/1.0, timeout 12s.",
          "Se leyó hasta 200 KB del HTML (en minúsculas) por URL alcanzada.",
          "Señales binarias: viewport (meta name=viewport), enlace/presencia WhatsApp (wa.me / whatsapp / api.whatsapp), tel: / mailto:, y presencia de al menos un <h1>.",
          "Los porcentajes se calculan solo sobre las 16 URLs alcanzables.",
        ],
      },
      {
        heading: "Hallazgos (n = 16 alcanzables)",
        body: [
          "Viewport / señal mobile meta: 100% (16/16).",
          "Alguna referencia a WhatsApp en el HTML: 56% (9/16).",
          "Enlace tel:: 25% (4/16).",
          "Enlace mailto:: 25% (4/16).",
          "Al menos un H1: 75% (12/16).",
          "Todas las URLs alcanzables en la muestra usaban HTTPS.",
        ],
      },
      {
        heading: "Cómo leer estos números",
        body: [
          "Un viewport meta no garantiza buena UX móvil; solo indica intención básica responsive.",
          "WhatsApp al 56% sugiere que casi la mitad de esta muestra no facilita el canal de cierre más común en la región — o lo inyecta solo con JavaScript fuera de los primeros 200 KB.",
          "tel/mailto bajos pueden ser deliberados (solo formularios) o un hueco de conversión.",
          "Falta de H1 en 25% es deuda de SEO on-page básica.",
        ],
      },
      {
        heading: "Limitaciones",
        body: [
          "Muestra de conveniencia, no aleatoria ni representativa de todas las pymes hondureñas.",
          "Mezcla pymes con instituciones grandes — no es solo “small business”.",
          "Solo HTML estático inicial (200 KB); CTAs renderizados en el cliente pueden no detectarse.",
          "4/20 no respondieron (403/DNS); eso también es un resultado operativo, no un juicio de marca.",
          "No medimos Core Web Vitals, accesibilidad completa ni calidad de contenido.",
        ],
      },
      {
        heading: "Implicaciones prácticas para dueños de negocio",
        body: [
          "Si tu sitio no tiene contacto obvio en móvil (WhatsApp o teléfono), estás peor que gran parte de quienes sí lo muestran en esta muestra.",
          "Antes de comprar “SEO avanzado”, asegura H1, CTA y medición.",
          "Guías relacionadas: /blog/cuanto-cuesta-pagina-web-honduras-2027, /blog/paginas-web-y-desarrollo-web-honduras, /blog/antes-de-contratar-agencia-seo-honduras.",
        ],
      },
      {
        heading: "Replicabilidad",
        body: [
          "Cualquier persona puede repetir señales similares con curl o un script que busque las mismas cadenas en el HTML.",
          "Si publicas una réplica o una muestra mejor (aleatoria, solo pymes, más señales), nos interesa citarla — el objetivo es elevar el piso, no “ganar” un ranking de blogs.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categoryId: BlogCategoryId): BlogPost[] {
  return blogPosts.filter((post) => post.categoryId === categoryId);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = blogPosts.filter(
    (item) => item.categoryId === post.categoryId && item.slug !== post.slug,
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const extras = blogPosts.filter(
    (item) =>
      item.slug !== post.slug &&
      !sameCategory.some((related) => related.slug === item.slug),
  );
  return [...sameCategory, ...extras].slice(0, limit);
}
