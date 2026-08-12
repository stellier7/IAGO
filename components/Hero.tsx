"use client";

import { useEffect, useRef, useState } from "react";
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
  slideFromLeft,
  buttonReveal,
  staggerButtons,
  staggerLettersLeft,
  staggerLettersRight,
} from "@/lib/motion-variants";

const IAGO_LETTERS = ["I", "A", "G", "O"] as const;

const DIGITAL_LETTERS = "Digital".split("");

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
      className="relative z-10 min-h-screen bg-ink text-bone"
    >
      <motion.div
        style={prefersReducedMotion ? {} : { y, opacity }}
        className="sticky top-0 flex min-h-screen flex-col justify-center px-6"
      >
        <div className="mx-auto w-full max-w-content">
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
                  IAG<span className="text-coral">O</span>
                </span>
                <span className="mt-1 block text-[clamp(1.75rem,4.5vw,3.5rem)] text-coral">
                  Digital
                </span>
              </>
            ) : (
              <>
                <motion.span
                  className="block text-[clamp(2.75rem,8vw,6.5rem)]"
                  variants={staggerLettersLeft}
                  initial="hidden"
                  animate="visible"
                  aria-label="IAGO"
                >
                  {IAGO_LETTERS.map((char) => (
                    <motion.span
                      key={char}
                      variants={letterFromLeft}
                      className={`inline-block ${char === "O" ? "text-coral" : ""}`}
                      aria-hidden
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
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
              </>
            )}
            {prefersReducedMotion ? (
              <span className="mt-4 block max-w-2xl font-body text-[clamp(1rem,2.2vw,1.35rem)] font-normal leading-snug tracking-normal text-bone">
                Desarrollo web, SEO y automatizaciones con IA
              </span>
            ) : (
              <motion.span
                variants={slideFromLeft}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.55 }}
                className="mt-4 block max-w-2xl font-body text-[clamp(1rem,2.2vw,1.35rem)] font-normal leading-snug tracking-normal text-bone"
              >
                Desarrollo web, SEO y automatizaciones con IA
              </motion.span>
            )}
          </h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: prefersReducedMotion ? 0.2 : 0.75 }}
            className="mt-8 max-w-xl text-lg text-mute"
          >
            Diseñamos experiencias digitales que convierten, posicionamos tu
            marca en Google y automatizamos lo repetitivo para que te enfoques
            en crecer.
          </motion.p>
          {prefersReducedMotion ? (
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-coral-bright"
              >
                Empezar un proyecto
              </a>
              <a
                href="#trabajo"
                className="rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:border-coral hover:text-coral"
              >
                Ver casos
              </a>
            </div>
          ) : (
            <div className="mt-10 overflow-hidden">
              <motion.div
                variants={staggerButtons}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  variants={buttonReveal}
                  href="#contacto"
                  className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-coral-bright"
                >
                  Empezar un proyecto
                </motion.a>
                <motion.a
                  variants={buttonReveal}
                  href="#trabajo"
                  className="rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:border-coral hover:text-coral"
                >
                  Ver casos
                </motion.a>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
