"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cases = [
  {
    client: "Retail Pro",
    type: "E-commerce + SEO",
    result: "+180% tráfico orgánico en 6 meses",
    color: "bg-coral",
  },
  {
    client: "Clínica Vida",
    type: "Web + Automatización",
    result: "70% menos tiempo en citas manuales",
    color: "bg-ink",
  },
  {
    client: "FinanzasHN",
    type: "Landing + Analytics",
    result: "3.2× tasa de conversión vs. sitio anterior",
    color: "bg-coral-dim",
  },
  {
    client: "Logística Norte",
    type: "Dashboard IA",
    result: "Reportes automáticos cada mañana",
    color: "bg-ink-raised",
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-55%"]);

  return (
    <section id="trabajo" className="relative z-20 overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-coral">Trabajo</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl">
          Casos recientes
        </h2>
      </div>

      {/* Desktop: horizontal scroll pinned */}
      <div ref={containerRef} className="relative mt-16 hidden h-[420px] overflow-hidden md:block">
        <motion.div style={{ x }} className="absolute flex gap-6 pl-6">
          {cases.map((item) => (
            <article
              key={item.client}
              className={`flex h-[380px] w-[340px] shrink-0 flex-col justify-between rounded-2xl p-8 ${item.color}`}
            >
              <div>
                <p className="text-sm uppercase tracking-wider opacity-70">{item.type}</p>
                <h3 className="mt-2 font-display text-3xl font-bold">{item.client}</h3>
              </div>
              <p className="text-lg font-medium">{item.result}</p>
            </article>
          ))}
        </motion.div>
      </div>

      {/* Mobile: simple list */}
      <div className="mt-12 space-y-4 px-6 md:hidden">
        {cases.map((item) => (
          <article
            key={item.client}
            className={`rounded-2xl p-6 ${item.color}`}
          >
            <p className="text-xs uppercase tracking-wider opacity-70">{item.type}</p>
            <h3 className="mt-1 font-display text-2xl font-bold">{item.client}</h3>
            <p className="mt-3 text-sm">{item.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
