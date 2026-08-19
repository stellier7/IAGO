"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { initStepsTimeline } from "@/lib/init-steps-timeline";

const steps = [
  {
    num: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, audiencia y objetivos en una sesión inicial.",
  },
  {
    num: "02",
    title: "Estrategia",
    description:
      "Definimos alcance, KPIs y un roadmap claro con entregables por fase.",
  },
  {
    num: "03",
    title: "Ejecución",
    description: "Diseño, desarrollo y optimización con revisiones semanales.",
  },
  {
    num: "04",
    title: "Crecimiento",
    description:
      "Lanzamiento, monitoreo y mejoras continuas basadas en datos.",
  },
];

export default function Process() {
  useEffect(() => initStepsTimeline(), []);

  return (
    <section id="proceso" className="relative z-20 bg-ink-raised py-24 text-bone md:py-32">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.2em] text-coral"
          >
            Proceso
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl"
          >
            De la idea al impacto en 4 pasos
          </motion.h2>
        </motion.div>

        <div className="steps-timeline mt-16">
          <div className="steps-line" aria-hidden="true">
            <span className="steps-line-fill" />
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div key={step.num} className="step">
                <span className="step-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
