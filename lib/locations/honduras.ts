export type CitySlug =
  | "tegucigalpa"
  | "san-pedro-sula"
  | "comayagua"
  | "palmerola";

export type CityPage = {
  slug: CitySlug;
  name: string;
  aliases: string[];
  headline: string;
  description: string;
  intro: string;
  localAngle: string;
  servicesFocus: string[];
  faqs: { question: string; answer: string }[];
};

export const hondurasHub = {
  title: "Agencia digital en Honduras",
  headline: "Páginas web, SEO e IA para negocios en Honduras",
  description:
    "Agencia digital en Honduras: desarrollo web, páginas web, SEO, AI SEO y automatizaciones con IA en Tegucigalpa (TGU), San Pedro Sula (SPS), Comayagua, Palmerola y todo el país.",
  intro:
    "Ayudamos a empresas hondureñas a conseguir clientes con sitios rápidos, posicionamiento en Google y automatizaciones con inteligencia artificial — incluyendo presencia pensada para búsquedas y respuestas con IA.",
  keywords: [
    "páginas web",
    "desarrollo web",
    "diseño web",
    "SEO",
    "AI SEO",
    "automatizaciones con IA",
    "agencia digital Honduras",
    "Tegucigalpa / TGU",
    "San Pedro Sula / SPS",
    "Comayagua",
    "Palmerola",
  ],
};

export const cityPages: CityPage[] = [
  {
    slug: "tegucigalpa",
    name: "Tegucigalpa",
    aliases: ["TGU", "Distrito Central", "Francisco Morazán"],
    headline: "Páginas web, SEO e IA en Tegucigalpa (TGU)",
    description:
      "Desarrollo web, páginas web, SEO y automatizaciones con IA para negocios en Tegucigalpa (TGU). Agencia digital local con foco en WhatsApp, móvil y resultados.",
    intro:
      "Si tu negocio está en Tegucigalpa o atiendes clientes en la capital, te ayudamos a salir en Google, convertir visitas en leads por WhatsApp y usar IA para no perder consultas.",
    localAngle:
      "En TGU la mayoría llega desde el celular. Diseñamos páginas web rápidas, con CTAs claros a WhatsApp, y SEO local para búsquedas como “página web Tegucigalpa” o tu rubro + ciudad.",
    servicesFocus: [
      "Páginas web y landing pages para captar leads en la capital",
      "SEO local Tegucigalpa / TGU",
      "AI SEO: contenido claro para Google y respuestas con IA",
      "Automatizaciones de seguimiento de leads",
    ],
    faqs: [
      {
        question: "¿Trabajan solo en Tegucigalpa?",
        answer:
          "No. Estamos enfocados en Honduras completo, con mucha demanda en TGU, SPS, Comayagua y zona Palmerola.",
      },
      {
        question: "¿Puedo empezar solo con una página web?",
        answer:
          "Sí. Muchos clientes arrancan con desarrollo web y luego suman SEO o automatizaciones con IA.",
      },
    ],
  },
  {
    slug: "san-pedro-sula",
    name: "San Pedro Sula",
    aliases: ["SPS", "Cortés", "norte de Honduras"],
    headline: "Desarrollo web, SEO e IA en San Pedro Sula (SPS)",
    description:
      "Agencia digital en San Pedro Sula (SPS): páginas web, desarrollo web, SEO, AI SEO y automatizaciones con IA para empresas del norte de Honduras.",
    intro:
      "San Pedro Sula concentra comercio e industria. Te ayudamos a tener una web que venda confianza, posicione en Google y convierta consultas en oportunidades.",
    localAngle:
      "En SPS competir online importa tanto como el local físico. Optimizamos páginas web para búsquedas locales y campañas de contenido útiles para compradores del valle de Sula.",
    servicesFocus: [
      "Sitios corporativos y e-commerce",
      "SEO San Pedro Sula / SPS",
      "Páginas de servicio por rubro",
      "Automatizaciones con IA para ventas y atención",
    ],
    faqs: [
      {
        question: "¿Atienden proyectos en SPS de forma remota?",
        answer:
          "Sí. Coordinamos por WhatsApp/videollamada y entregamos con la misma calidad que en TGU.",
      },
      {
        question: "¿Qué es AI SEO?",
        answer:
          "Es preparar tu sitio y contenido para aparecer en Google y también ser citado o entendido por herramientas de IA cuando alguien pregunta por tu tipo de negocio.",
      },
    ],
  },
  {
    slug: "comayagua",
    name: "Comayagua",
    aliases: ["valle de Comayagua", "centro de Honduras"],
    headline: "Páginas web y SEO en Comayagua",
    description:
      "Desarrollo web, páginas web, SEO e IA para negocios en Comayagua. Ideal si quieres crecer digitalmente en el centro de Honduras y zona Palmerola.",
    intro:
      "Comayagua y su corredor comercial están creciendo. Una buena página web + SEO te ayuda a que te encuentren antes de que pregunten a la competencia.",
    localAngle:
      "Trabajamos mensajes claros para clientes locales y viajeros de la zona: horarios, WhatsApp, servicios y confianza — sin sitios lentos ni plantillas genéricas.",
    servicesFocus: [
      "Páginas web para comercios y servicios",
      "SEO local Comayagua",
      "Presencia digital cercana a Palmerola",
      "Captura de leads por WhatsApp",
    ],
    faqs: [
      {
        question: "¿También cubren Palmerola?",
        answer:
          "Sí. Tenemos una página específica para negocios cerca del aeropuerto Palmerola / zona Comayagua.",
      },
    ],
  },
  {
    slug: "palmerola",
    name: "Palmerola",
    aliases: ["Aeropuerto Palmerola", "Comayagua airport", "PHM"],
    headline: "Web, SEO e IA para negocios cerca de Palmerola",
    description:
      "Páginas web, SEO y automatizaciones con IA para hoteles, transporte, comercio y servicios cerca del aeropuerto Palmerola (Comayagua).",
    intro:
      "Palmerola mueve viajeros y oportunidades. Si ofreces hospedaje, transporte, comida, tours o servicios B2B en la zona, necesitas aparecer cuando te buscan.",
    localAngle:
      "Enfocamos páginas web y SEO en intención local/viajero: “cerca de Palmerola”, Comayagua, traslados, hoteles y servicios — con contacto inmediato por WhatsApp.",
    servicesFocus: [
      "Landing pages para servicios aeropuerto / zona",
      "SEO local Palmerola + Comayagua",
      "Multidioma básico si atiendes turistas",
      "Automatización de cotizaciones y leads",
    ],
    faqs: [
      {
        question: "¿Sirve si mi negocio está en Comayagua ciudad?",
        answer:
          "Sí. Muchas búsquedas mezclan Comayagua y Palmerola; te ayudamos a cubrir ambas intenciones sin contenido duplicado flojo.",
      },
    ],
  },
];

export function getCityPage(slug: string): CityPage | undefined {
  return cityPages.find((page) => page.slug === slug);
}
