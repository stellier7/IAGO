"use client";

import {
  useEffect,
  useMemo,
  useRef,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { useReducedMotion } from "framer-motion";
import CaseCard from "@/components/cases/CaseCard";
import { recentCases } from "@/lib/cases/recent";

const AUTO_SCROLL_PX_PER_FRAME = 0.55;
const RESUME_DELAY_MS = 2200;
const DRAG_CLICK_THRESHOLD_PX = 8;

function CasesCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const resumeTimerRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Two copies so we can wrap seamlessly when offset crosses the midpoint.
  const track = useMemo(() => [...recentCases, ...recentCases], []);

  const applyOffset = (value: number) => {
    const loop = loopWidthRef.current;
    let next = value;
    if (loop > 0) {
      next = ((next % loop) + loop) % loop;
    }
    offsetRef.current = next;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-next}px, 0, 0)`;
    }
  };

  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const measure = () => {
      loopWidthRef.current = trackEl.scrollWidth / 2;
      applyOffset(offsetRef.current);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(trackEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    let frame = 0;
    let visible = true;

    const visibility = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    visibility.observe(viewport);

    const tick = () => {
      if (visible && !pausedRef.current && !draggingRef.current) {
        applyOffset(offsetRef.current + AUTO_SCROLL_PX_PER_FRAME);
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      visibility.disconnect();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const clearResumeTimer = () => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const pause = () => {
    pausedRef.current = true;
    clearResumeTimer();
  };

  const scheduleResume = () => {
    if (prefersReducedMotion) return;
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, RESUME_DELAY_MS);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;

    pause();
    draggingRef.current = true;
    dragDistanceRef.current = 0;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const deltaX = event.clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.max(
      dragDistanceRef.current,
      Math.abs(deltaX),
    );
    applyOffset(dragStartOffsetRef.current - deltaX);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    scheduleResume();
  };

  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    // Prefer drag over accidental link navigation after a swipe.
    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD_PX) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div
      ref={viewportRef}
      data-lenis-prevent
      className="cases-carousel overflow-hidden"
      aria-label="Carrusel de casos recientes"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onMouseEnter={pause}
      onMouseLeave={() => {
        draggingRef.current = false;
        scheduleResume();
      }}
      onFocusCapture={pause}
      onBlurCapture={scheduleResume}
      onClickCapture={onClickCapture}
    >
      <div
        ref={trackRef}
        className="cases-carousel-track flex w-max gap-6 px-6 will-change-transform"
      >
        {track.map((item, index) => (
          <CaseCard
            key={`${item.slug}-${index}`}
            item={item}
            className="h-[420px] w-[min(85vw,340px)] shrink-0 md:h-[460px] md:w-[340px]"
          />
        ))}
      </div>
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
