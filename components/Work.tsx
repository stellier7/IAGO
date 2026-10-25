"use client";

import CaseCard from "@/components/cases/CaseCard";
import { recentCases } from "@/lib/cases/recent";

export default function Work() {
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
        <p className="mt-4 max-w-2xl text-mute">
          Cada proyecto tiene una página de caso con el problema, la solución y
          lo que entregamos — sin inventar métricas.
        </p>
      </div>

      <div className="mt-16 hidden md:block">
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
          {recentCases.map((item) => (
            <CaseCard
              key={item.slug}
              item={item}
              className="h-[460px] w-[340px] shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mt-12 space-y-6 px-6 md:hidden">
        {recentCases.map((item) => (
          <CaseCard
            key={item.slug}
            item={item}
            className="min-h-[420px] w-full"
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center px-6 md:mt-16">
        <a
          href="/case-studies"
          className="inline-flex rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold text-bone transition hover:border-coral hover:text-coral"
        >
          Ver todos los casos →
        </a>
      </div>
    </section>
  );
}
