"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import CaseCard from "@/components/cases/CaseCard";
import { recentCases } from "@/lib/cases/recent";

const AUTO_SCROLL_PX_PER_FRAME = 0.55;
const RESUME_DELAY_MS = 2200;

function CasesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Two copies so we can wrap seamlessly when scrollLeft crosses the midpoint.
  const track = useMemo(() => [...recentCases, ...recentCases], []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = scrollerRef.current;
    if (!el) return;

    let frame = 0;
    let visible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(el);

    const tick = () => {
      if (visible && !pausedRef.current) {
        el.scrollLeft += AUTO_SCROLL_PX_PER_FRAME;
        const loopAt = el.scrollWidth / 2;
        if (loopAt > 0 && el.scrollLeft >= loopAt) {
          el.scrollLeft -= loopAt;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const scheduleResume = () => {
    if (prefersReducedMotion) return;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, RESUME_DELAY_MS);
  };

  return (
    <div
      ref={scrollerRef}
      data-lenis-prevent
      onPointerDown={pause}
      onPointerUp={scheduleResume}
      onPointerCancel={scheduleResume}
      onTouchStart={pause}
      onTouchEnd={scheduleResume}
      onTouchCancel={scheduleResume}
      onMouseEnter={pause}
      onMouseLeave={scheduleResume}
      onFocusCapture={pause}
      onBlurCapture={scheduleResume}
      className="cases-carousel flex gap-6 overflow-x-auto overscroll-x-contain px-6"
      style={{ WebkitOverflowScrolling: "touch" }}
      aria-label="Carrusel de casos recientes"
    >
      {track.map((item, index) => (
        <CaseCard
          key={`${item.slug}-${index}`}
          item={item}
          className="h-[420px] w-[min(85vw,340px)] shrink-0 md:h-[460px] md:w-[340px]"
        />
      ))}
    </div>
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
        <p className="mt-4 max-w-2xl text-mute">
          Cada proyecto tiene una página de caso con el problema, la solución y
          lo que entregamos — sin inventar métricas.
        </p>
      </div>

      <div className="mt-12 md:mt-16">
        <CasesCarousel />
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
