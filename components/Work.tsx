"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cases = [
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
] as const;

const loopedCases = [...cases, ...cases];

const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 900;

function FullCardPreview({ href, label }: { href: string; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      const scaleX = width / PREVIEW_WIDTH;
      const scaleY = height / PREVIEW_HEIGHT;
      setScale(Math.max(scaleX, scaleY));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden rounded-2xl bg-ink-raised"
      aria-hidden
    >
      <iframe
        src={href}
        title={`Vista previa de ${label}`}
        loading="lazy"
        tabIndex={-1}
        className="pointer-events-none absolute left-1/2 top-0 border-0"
        style={{
          width: PREVIEW_WIDTH,
          height: PREVIEW_HEIGHT,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 transition duration-300 group-hover:from-black/80 group-hover:via-black/35" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 transition duration-300 group-hover:ring-white/25" />
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
      className={`group relative flex shrink-0 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-2xl md:p-6 ${className}`}
    >
      <FullCardPreview href={item.href} label={item.client} />
      <div className="relative z-10">
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
          <CaseCard
            key={item.client}
            item={item}
            className="min-h-[360px] w-full"
          />
        ))}
      </div>
    </section>
  );
}
