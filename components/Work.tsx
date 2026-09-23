"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CaseCard from "@/components/cases/CaseCard";
import { recentCases } from "@/lib/cases/recent";

const loopedCases = [...recentCases, ...recentCases];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-50%"]);

  return (
    <section
      id="trabajo"
      className="relative z-20 overflow-hidden bg-ink py-24 text-bone md:py-32"
    >
      <div className="mx-auto max-w-content px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-coral">Trabajo</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl">
          Casos recientes
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative mt-16 hidden h-[520px] overflow-hidden md:block"
      >
        <motion.div
          style={{ x }}
          className="absolute flex w-max gap-6 pl-6 will-change-transform"
        >
          {loopedCases.map((item, index) => (
            <CaseCard
              key={`${item.client}-${index}`}
              item={item}
              className="h-[460px] w-[340px]"
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-12 space-y-6 px-6 md:hidden">
        {recentCases.map((item) => (
          <CaseCard
            key={item.client}
            item={item}
            className="min-h-[420px] w-full"
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center px-6 md:mt-16">
        <a
          href="/casos-recientes"
          className="inline-flex rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold text-bone transition hover:border-coral hover:text-coral"
        >
          Ver todos los casos →
        </a>
      </div>
    </section>
  );
}
