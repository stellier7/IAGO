"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cases = [
  {
    client: "Vulcanox",
    type: "Web corporativa",
    result: "Investment-driven general contracting · Florida",
    href: "https://vulcanox.vercel.app",
    color: "bg-coral",
  },
  {
    client: "Ichiban BJJ",
    type: "Web · Academia",
    result: "Jiu Jitsu & Muay Thai · Tegucigalpa",
    href: "https://ichibanbjj.vercel.app",
    color: "bg-ink",
  },
  {
    client: "MegaWatt",
    type: "Catálogo · Web",
    result: "Iluminación LED · El Jordán",
    href: "https://megawatt-eljordan.vercel.app",
    color: "bg-coral-dim",
  },
] as const;

const loopedCases = [...cases, ...cases];

function CaseCard({
  item,
  className,
}: {
  item: (typeof cases)[number];
  className: string;
}) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex shrink-0 flex-col justify-between rounded-2xl p-6 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-2xl md:p-8 ${item.color} ${className}`}
    >
      <div>
        <p className="text-xs uppercase tracking-wider opacity-70 md:text-sm">
          {item.type}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
          {item.client}
        </h3>
      </div>
      <div>
        <p className="text-sm font-medium md:text-lg">{item.result}</p>
        <p className="mt-4 text-sm font-semibold opacity-80 transition group-hover:opacity-100">
          Ver sitio →
        </p>
      </div>
    </a>
  );
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  // Duplicated track: -50% lands on the second copy (seamless loop)
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-50%"]);

  return (
    <section id="trabajo" className="relative z-20 overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-coral">Trabajo</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl">
          Casos recientes
        </h2>
      </div>

      {/* Desktop: scroll-driven infinite carousel */}
      <div ref={containerRef} className="relative mt-16 hidden h-[420px] overflow-hidden md:block">
        <motion.div style={{ x }} className="absolute flex w-max gap-6 pl-6">
          {loopedCases.map((item, index) => (
            <CaseCard
              key={`${item.client}-${index}`}
              item={item}
              className="h-[380px] w-[340px]"
            />
          ))}
        </motion.div>
      </div>

      {/* Mobile: linked list */}
      <div className="mt-12 space-y-4 px-6 md:hidden">
        {cases.map((item) => (
          <CaseCard key={item.client} item={item} className="min-h-[220px]" />
        ))}
      </div>
    </section>
  );
}
