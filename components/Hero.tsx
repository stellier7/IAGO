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
  slideFromLeftBlur,
  lineSlideFromLeft,
  staggerLettersLeft,
  staggerLettersRight,
} from "@/lib/motion-variants";
import {
  BUTTON_DURATION,
  BUTTON_ENTRANCE_DELAY,
  BUTTON_STAGGER,
  SUBHEAD_DELAY,
  SUBHEAD_LINES,
  SUBHEAD_LINE_DURATION,
  SUBHEAD_STAGGER,
  TAGLINE_DELAY,
  TAGLINE_DURATION,
} from "@/lib/hero-intro";
import { heroSocialLinks } from "@/lib/social/profiles";

const IAGO_LETTERS = ["i", "A", "G", "O"] as const;
const DIGITAL_LETTERS = "Digital".split("");

const BUTTON_TRANSITION = {
  type: "tween" as const,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: BUTTON_DURATION,
};

type HeroSocialLabel = (typeof heroSocialLinks)[number]["label"];

function SocialIcon({ label }: { label: HeroSocialLabel }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (label) {
    case "Instagram":
      return (
        <svg {...common}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default: {
      const _exhaustive: never = label;
      return _exhaustive;
    }
  }
}

function HeroSocialLinks({ paused }: { paused: boolean }) {
  const linkClass =
    "text-bone/55 transition-colors duration-200 hover:text-coral focus-visible:text-coral focus-visible:outline-none";

  if (paused) {
    return (
      <nav aria-label="Redes sociales" className="mt-4 flex items-center gap-5">
        {heroSocialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={link.label}
            className={linkClass}
          >
            <SocialIcon label={link.label} />
          </a>
        ))}
      </nav>
    );
  }

  return (
    <motion.nav
      aria-label="Redes sociales"
      className="mt-4 flex items-center gap-5"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...BUTTON_TRANSITION,
        delay: BUTTON_ENTRANCE_DELAY,
      }}
    >
      {heroSocialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label={link.label}
          className={linkClass}
        >
          <SocialIcon label={link.label} />
        </a>
      ))}
    </motion.nav>
  );
}

const heroStaggerLines = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: SUBHEAD_STAGGER,
      delayChildren: SUBHEAD_DELAY,
    },
  },
};

function HeroButtons({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [buttonsInteractive, setButtonsInteractive] = useState(paused);

  useEffect(() => {
    if (paused) return;

    const id = window.setTimeout(
      () => setButtonsInteractive(true),
      BUTTON_ENTRANCE_DELAY * 1000,
    );

    return () => window.clearTimeout(id);
  }, [paused]);

  const buttonClass = {
    primary:
      "rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-coral-bright",
    secondary:
      "rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold transition-colors duration-200 hover:border-coral hover:text-coral",
  };

  if (paused) {
    return (
      <div ref={ref} className="mt-5 flex flex-wrap gap-4">
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
    <div
      ref={ref}
      className={`mt-5 flex flex-wrap gap-4${buttonsInteractive ? "" : " pointer-events-none"}`}
    >
      <motion.a
        href="#contacto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{
          opacity: { ...BUTTON_TRANSITION, delay: BUTTON_ENTRANCE_DELAY },
          y: { ...BUTTON_TRANSITION, delay: BUTTON_ENTRANCE_DELAY },
          scale: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
        }}
        className={buttonClass.primary}
      >
        Empezar un proyecto
      </motion.a>
      <motion.a
        href="#trabajo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{
          opacity: {
            ...BUTTON_TRANSITION,
            delay: BUTTON_ENTRANCE_DELAY + BUTTON_STAGGER,
          },
          y: {
            ...BUTTON_TRANSITION,
            delay: BUTTON_ENTRANCE_DELAY + BUTTON_STAGGER,
          },
          scale: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
        }}
        className={buttonClass.secondary}
      >
        Ver casos
      </motion.a>
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

  // overflow-clip (not hidden): overflow-x:hidden computes the other axis to
  // auto, so entrance transforms turn the hero into a scrollport for ~2s.
  return (
    <section
      ref={ref}
      className="relative z-10 min-h-screen touch-pan-y overflow-clip bg-ink text-bone"
    >
      <motion.div
        style={prefersReducedMotion ? {} : { y, opacity }}
        className="sticky top-0 flex min-h-screen flex-col justify-center overflow-x-clip px-6"
      >
        <div className="mx-auto w-full max-w-content overflow-x-clip">
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
                <div className="overflow-clip">
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
                <div className="overflow-clip">
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
                Web, SEO e IA para convertir visitas en clientes
              </span>
            ) : (
              <div className="mt-4 overflow-clip">
                <motion.span
                  variants={slideFromLeftBlur}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: TAGLINE_DELAY, duration: TAGLINE_DURATION }}
                  className="block max-w-2xl font-body text-[clamp(1rem,2.2vw,1.35rem)] font-normal leading-snug tracking-normal text-bone"
                >
                  Web, SEO e IA para convertir visitas en clientes
                </motion.span>
              </div>
            )}
          </h1>
          <div className="mt-3 max-w-xl text-lg text-mute">
            {prefersReducedMotion ? (
              <p>
                {SUBHEAD_LINES.join(" ")}
              </p>
            ) : (
              <motion.div
                variants={heroStaggerLines}
                initial="hidden"
                animate="visible"
                aria-label={SUBHEAD_LINES.join(" ")}
              >
                {SUBHEAD_LINES.map((line) => (
                  <div key={line} className="overflow-clip">
                    <motion.span
                      variants={lineSlideFromLeft}
                      transition={{ duration: SUBHEAD_LINE_DURATION }}
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
          <HeroSocialLinks paused={!!prefersReducedMotion} />
          <HeroButtons paused={!!prefersReducedMotion} />
        </div>
      </motion.div>
    </section>
  );
}
