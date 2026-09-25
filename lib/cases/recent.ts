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
    client: "Amani Joyería",
    type: "E-commerce · Web",
    result: "Plata 925 · Honduras",
    href: "https://www.amanijoyeria.com",
  },
  {
    client: "Vanessa Pacheco Studio",
    type: "Web · Estudio",
    result: "Maquillaje & cuidado capilar · Tegucigalpa",
    href: "https://www.vanessapachecostudio.com",
  },
  {
    client: "Ichiban BJJ",
    type: "Web · Academia",
    result: "Jiu Jitsu & Muay Thai · Tegucigalpa",
    href: "https://ichibanbjj.vercel.app",
  },
  {
    client: "MegaWatt",
    type: "Catálogo · Web",
    result: "Iluminación LED · El Jordán",
    href: "https://megawatt-eljordan.vercel.app",
  },
];
