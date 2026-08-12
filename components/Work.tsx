"use client";

import { useEffect, useRef, useState } from "react";

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

const SCREEN_W = 250;
const SCREEN_H = 520;

function PhoneMockup({ href, label }: { href: string; label: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "120px 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative shrink-0"
      data-lenis-prevent
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Phone frame */}
      <div
        className="relative rounded-[2.4rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-[10px] shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
        style={{ width: SCREEN_W + 20 }}
      >
        {/* Side buttons (decorative) */}
        <div
          className="absolute -left-[2px] top-[88px] h-8 w-[3px] rounded-l bg-zinc-600"
          aria-hidden
        />
        <div
          className="absolute -left-[2px] top-[132px] h-12 w-[3px] rounded-l bg-zinc-600"
          aria-hidden
        />
        <div
          className="absolute -right-[2px] top-[108px] h-16 w-[3px] rounded-r bg-zinc-600"
          aria-hidden
        />

        {/* Screen */}
        <div
          className="relative overflow-hidden rounded-[1.85rem] bg-black ring-1 ring-inset ring-white/5"
          style={{ width: SCREEN_W, height: SCREEN_H }}
        >
          {/* Dynamic island / notch */}
          <div
            className="pointer-events-none absolute left-1/2 top-2 z-20 h-[22px] w-[72px] -translate-x-1/2 rounded-full bg-black"
            aria-hidden
          />

          {active ? (
            <iframe
              src={href}
              title={`Vista móvil de ${label}`}
              loading="lazy"
              className="h-full w-full border-0 bg-white"
              style={{ colorScheme: "light" }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-xs text-white/40">
              Cargando…
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PhoneCaseCard({ item }: { item: CaseItem }) {
  return (
    <article className="flex w-[270px] shrink-0 snap-center flex-col items-center gap-5">
      <PhoneMockup href={item.href} label={item.client} />
      <div className="w-full text-center">
        <p className="text-xs uppercase tracking-wider text-white/60">
          {item.type}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-bone">
          {item.client}
        </h3>
        <p className="mt-2 text-sm text-mute">{item.result}</p>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-coral transition hover:text-coral-bright"
        >
          Ver sitio →
        </a>
      </div>
    </article>
  );
}

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
        <p className="mt-3 max-w-lg text-sm text-mute md:text-base">
          Desliza horizontalmente y explora cada sitio en vista móvil — puedes
          hacer scroll dentro de cada teléfono.
        </p>
      </div>

      <div
        className="mt-14 overflow-x-auto overscroll-x-contain px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-16 md:px-[max(1.5rem,calc((100vw-1240px)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
        data-lenis-prevent
      >
        <div className="flex w-max snap-x snap-mandatory gap-10 md:gap-14">
          {cases.map((item) => (
            <PhoneCaseCard key={item.client} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
