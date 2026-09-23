export type CaseItem = {
  client: string;
  type: string;
  result: string;
  href: string;
};

export const recentCases: CaseItem[] = [
  {
    client: "Vulcanox",
    type: "Web corporativa",
    result: "Investment-driven general contracting · Florida",
    href: "https://vulcanox.vercel.app",
  },
  {
    client: "Ichiban BJJ",
    type: "Web · Academia",
    result: "Jiu Jitsu & Muay Thai · Tegucigalpa",
    href: "https://ichibanbjj.vercel.app",
  },
  {
    client: "Amani Joyería",
    type: "E-commerce · Web",
    result: "Plata 925 · Honduras",
    href: "https://www.amanijoyeria.com",
  },
  {
    client: "MegaWatt",
    type: "Catálogo · Web",
    result: "Iluminación LED · El Jordán",
    href: "https://megawatt-eljordan.vercel.app",
  },
];
