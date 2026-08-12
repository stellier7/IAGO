"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";

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
            Agencia digital · Honduras
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tightest"
          >
            Web, SEO y
            <br />
            <span className="text-coral">automatizaciones</span>
            <br />
            con IA
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-lg text-mute"
          >
            Diseñamos experiencias digitales que convierten, posicionamos tu
            marca en Google y automatizamos lo repetitivo para que te enfoques
            en crecer.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-coral-bright"
            >
              Empezar un proyecto
            </a>
            <a
              href="#trabajo"
              className="rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold transition hover:border-coral hover:text-coral"
            >
              Ver casos
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
