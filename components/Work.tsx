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

const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 900;
const PREVIEW_SCALE = 0.26;

function SitePreview({ href, label }: { href: string; label: string }) {
  return (
    <div className="relative mb-4 h-36 w-full overflow-hidden rounded-lg bg-black/20 ring-1 ring-white/15 md:mb-5 md:h-[168px]">
      <iframe
        src={href}
        title={`Vista previa de ${label}`}
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none absolute left-0 top-0 border-0"
        style={{
          width: PREVIEW_WIDTH,
          height: PREVIEW_HEIGHT,
          transform: `scale(${PREVIEW_SCALE})`,
          transformOrigin: "top left",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"
        aria-hidden
      />
    </div>
  );
}

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
      className={`group flex shrink-0 flex-col rounded-2xl p-5 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-2xl md:p-6 ${item.color} ${className}`}
    >
      <SitePreview href={item.href} label={item.client} />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider opacity-70 md:text-sm">
            {item.type}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold md:mt-2 md:text-2xl">
            {item.client}
          </h3>
        </div>
        <div className="mt-3 md:mt-4">
          <p className="text-sm font-medium md:text-base">{item.result}</p>
          <p className="mt-2 text-sm font-semibold opacity-80 transition group-hover:opacity-100 md:mt-3">
            Ver sitio →
          </p>
        </div>
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
    <section id="trabajo" className="relative z-20 overflow-hidden bg-ink py-24 text-bone md:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-coral">Trabajo</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl">
          Casos recientes
        </h2>
      </div>

      <div ref={containerRef} className="relative mt-16 hidden h-[500px] overflow-hidden md:block">
        <motion.div style={{ x }} className="absolute flex w-max gap-6 pl-6">
          {loopedCases.map((item, index) => (
            <CaseCard
              key={`${item.client}-${index}`}
              item={item}
              className="h-[460px] w-[340px]"
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-12 space-y-4 px-6 md:hidden">
        {cases.map((item) => (
          <CaseCard key={item.client} item={item} className="w-full" />
        ))}
      </div>
    </section>
  );
}
