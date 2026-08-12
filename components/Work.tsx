"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type CaseItem = {
  client: string;
  type: string;
  result: string;
  href: string;
};

const cases: CaseItem[] = [
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
    client: "MegaWatt",
    type: "Catálogo · Web",
    result: "Iluminación LED · El Jordán",
    href: "https://megawatt-eljordan.vercel.app",
  },
];

const loopedCases = [...cases, ...cases];

function MobileCardPreview({ href, label }: { href: string; label: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 overflow-hidden rounded-2xl bg-ink-raised"
      data-lenis-prevent
      onWheel={(e) => e.stopPropagation()}
    >
      {active ? (
        <iframe
          src={href}
          title={`Vista móvil de ${label}`}
          loading="lazy"
          className="h-full w-full border-0 bg-white"
        />
      ) : (
        <div className="h-full w-full animate-pulse bg-ink-line/40" aria-hidden />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 transition duration-300 group-hover:from-black/85 group-hover:via-black/30" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition duration-300 group-hover:ring-white/25" />
    </div>
  );
}

function CaseCard({
  item,
  className,
}: {
  item: CaseItem;
  className: string;
}) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex shrink-0 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-2xl md:p-6 ${className}`}
    >
      <MobileCardPreview href={item.href} label={item.client} />
      <div className="pointer-events-none relative z-10">
        <p className="text-xs uppercase tracking-wider text-white/70 md:text-sm">
          {item.type}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold md:mt-2 md:text-2xl">
          {item.client}
        </h3>
        <p className="mt-3 text-sm font-medium text-white/85 md:mt-4 md:text-base">
          {item.result}
        </p>
        <p className="mt-2 text-sm font-semibold text-coral transition group-hover:text-coral-bright md:mt-3">
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
        {cases.map((item) => (
          <CaseCard
            key={item.client}
            item={item}
            className="min-h-[420px] w-full"
          />
        ))}
      </div>
    </section>
  );
}
