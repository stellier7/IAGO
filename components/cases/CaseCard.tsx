"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseItem } from "@/lib/cases/recent";

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

export default function CaseCard({
  item,
  className,
}: {
  item: CaseItem;
  className: string;
}) {
  return (
    <article
      className={`group relative flex shrink-0 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-2xl md:p-6 ${className}`}
    >
      <MobileCardPreview href={item.href} label={item.client} />
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
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 mt-2 inline-block text-sm font-semibold text-coral transition hover:text-coral-bright md:mt-3"
        >
          Ver sitio →
        </a>
      </div>
    </article>
  );
}
