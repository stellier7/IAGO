export type BlogCategoryId =
  | "pricing"
  | "industry"
  | "ai"
  | "local"
  | "research";

export type BlogCategory = {
  id: BlogCategoryId;
  letter: "A" | "B" | "C" | "D" | "E";
  title: string;
  summary: string;
};

export const blogCategories: BlogCategory[] = [
  {
    id: "pricing",
    letter: "A",
    title: "Precios y decisiones de compra",
    summary:
      "Para quien está cerca de contratar: costos, alcance y cómo evaluar proveedores.",
  },
  {
    id: "industry",
    letter: "B",
    title: "Soluciones por industria",
    summary:
      "Guías para rubros que sí atendemos: inmobiliarias, belleza, restaurantes, servicios con citas.",
  },
  {
    id: "ai",
    letter: "C",
    title: "Educación sobre IA",
    summary:
      "Automatización, WhatsApp e AI SEO explicados con límites realistas — sin promesas mágicas.",
  },
  {
    id: "local",
    letter: "D",
    title: "Guías para negocios locales",
    summary:
      "Contenido útil por mercado (Tegucigalpa, Comayagua, Honduras) — no clones de ciudad.",
  },
  {
    id: "research",
    letter: "E",
    title: "Investigación y casos",
    summary:
      "Auditorías, metodología y evidencia verificable. Calidad sobre cantidad: ~2 piezas fuertes al mes.",
  },
];

export function getBlogCategory(
  id: BlogCategoryId,
): BlogCategory | undefined {
  return blogCategories.find((category) => category.id === id);
}
