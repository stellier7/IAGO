"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  fadeUp,
  letterFromLeft,
  letterFromRight,
  slideFromLeftBlur,
  lineSlideFromLeft,
  staggerLines,
  staggerLettersLeft,
  staggerLettersRight,
} from "@/lib/motion-variants";

const IAGO_LETTERS = ["i", "A", "G", "O"] as const;

const DIGITAL_LETTERS = "Digital".split("");

const SUBHEAD_LINES = [
  "Diseñamos experiencias digitales que convierten,",
  "posicionamos tu marca en Google y automatizamos lo repetitivo",
  "para que te enfoques en crecer.",
] as const;

const BUTTON_ENTRANCE_DELAY = 1.75;
const BUTTON_STAGGER = 0.14;
const BUTTON_DURATION = 1.05;
const BUTTON_TRANSITION = {
  type: "tween" as const,
  ease: [0, 0, 1, 1] as [number, number, number, number],
  duration: BUTTON_DURATION,
};

function HeroButtons({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [entryY, setEntryY] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (paused) return;

    const measure = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight;
      setEntryY(viewportHeight - top + height + 16);
    };

    measure();
    window.visualViewport?.addEventListener("resize", measure);
    window.addEventListener("resize", measure);
    return () => {
      window.visualViewport?.removeEventListener("resize", measure);
      window.removeEventListener("resize", measure);
    };
  }, [paused]);

  const buttonClass = {
    primary:
      "rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-coral-bright",
    secondary:
      "rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold transition-colors duration-200 hover:border-coral hover:text-coral",
  };

  if (paused) {
    return (
      <div ref={ref} className="mt-10 flex flex-wrap gap-4">
        <a href="#contacto" className={buttonClass.primary}>
          Empezar un proyecto
        </a>
        <a href="#trabajo" className={buttonClass.secondary}>
          Ver casos
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className="mt-10 flex flex-wrap gap-4">
      {entryY === null ? (
        <>
          <span className={`${buttonClass.primary} opacity-0`} aria-hidden>
            Empezar un proyecto
          </span>
          <span className={`${buttonClass.secondary} opacity-0`} aria-hidden>
            Ver casos
          </span>
        </>
      ) : (
        <>
          <motion.a
            href="#contacto"
            initial={{ y: entryY }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
              y: { ...BUTTON_TRANSITION, delay: BUTTON_ENTRANCE_DELAY },
              scale: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
            }}
            className={buttonClass.primary}
          >
            Empezar un proyecto
          </motion.a>
          <motion.a
            href="#trabajo"
            initial={{ y: entryY }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
              y: { ...BUTTON_TRANSITION, delay: BUTTON_ENTRANCE_DELAY + BUTTON_STAGGER },
              scale: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
            }}
            className={buttonClass.secondary}
          >
            Ver casos
          </motion.a>
        </>
      )}
    </div>
  );
}

const COUNTRIES = [
  "Honduras",
  "El Salvador",
  "Costa Rica",
  "Guatemala",
  "Panamá",
  "Nicaragua",
] as const;

function RotatingCountry({ paused }: { paused: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % COUNTRIES.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [paused]);

  if (paused) {
    return <span>{COUNTRIES[0]}</span>;
  }

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {/* Reserve width of the longest label to avoid layout jump */}
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
        Costa Rica
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={COUNTRIES[index]}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {COUNTRIES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative z-10 min-h-screen touch-pan-y overflow-hidden bg-ink text-bone"
    >
      <motion.div
        style={prefersReducedMotion ? {} : { y, opacity }}
        className="sticky top-0 flex min-h-screen flex-col justify-center overflow-x-hidden px-6"
      >
        <div className="mx-auto w-full max-w-content overflow-x-hidden">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 text-sm uppercase tracking-[0.2em] text-coral"
          >
            Agencia Digital ·{" "}
            <RotatingCountry paused={!!prefersReducedMotion} />
          </motion.p>
          <h1 className="font-display font-bold leading-[0.95] tracking-tightest">
            {prefersReducedMotion ? (
              <>
                <span className="block text-[clamp(2.75rem,8vw,6.5rem)]">
                  iA<span className="text-coral">GO</span>
                </span>
                <span className="mt-1 block text-[clamp(1.75rem,4.5vw,3.5rem)] text-coral">
                  Digital
                </span>
              </>
            ) : (
              <>
                <div className="overflow-hidden">
                  <motion.span
                    className="block text-[clamp(2.75rem,8vw,6.5rem)]"
                    variants={staggerLettersLeft}
                    initial="hidden"
                    animate="visible"
                    aria-label="iAGO"
                  >
                    {IAGO_LETTERS.map((char) => (
                      <motion.span
                        key={char}
                        variants={letterFromLeft}
                        className={`inline-block ${char === "G" || char === "O" ? "text-coral" : ""}`}
                        aria-hidden
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="mt-1 block text-[clamp(1.75rem,4.5vw,3.5rem)] text-coral"
                    variants={staggerLettersRight}
                    initial="hidden"
                    animate="visible"
                    aria-label="Digital"
                  >
                    {DIGITAL_LETTERS.map((char, index) => (
                      <motion.span
                        key={`${char}-${index}`}
                        variants={letterFromRight}
                        className="inline-block"
                        aria-hidden
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </div>
              </>
            )}
            {prefersReducedMotion ? (
              <span className="mt-4 block max-w-2xl font-body text-[clamp(1rem,2.2vw,1.35rem)] font-normal leading-snug tracking-normal text-bone">
                Desarrollo web, SEO y automatizaciones con IA
              </span>
            ) : (
              <div className="mt-4 overflow-hidden">
                <motion.span
                  variants={slideFromLeftBlur}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.55 }}
                  className="block max-w-2xl font-body text-[clamp(1rem,2.2vw,1.35rem)] font-normal leading-snug tracking-normal text-bone"
                >
                  Desarrollo web, SEO y automatizaciones con IA
                </motion.span>
              </div>
            )}
          </h1>
          <div className="mt-8 max-w-xl text-lg text-mute">
            {prefersReducedMotion ? (
              <p>
                {SUBHEAD_LINES.join(" ")}
              </p>
            ) : (
              <motion.div
                variants={staggerLines}
                initial="hidden"
                animate="visible"
                aria-label={SUBHEAD_LINES.join(" ")}
              >
                {SUBHEAD_LINES.map((line) => (
                  <div key={line} className="overflow-hidden">
                    <motion.span
                      variants={lineSlideFromLeft}
                      className="block"
                      aria-hidden
                    >
                      {line}
                    </motion.span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          <HeroButtons paused={!!prefersReducedMotion} />
        </div>
      </motion.div>
    </section>
  );
}
