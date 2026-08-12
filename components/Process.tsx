"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const steps = [
  {
    num: "01",
    title: "Descubrimiento",
    description: "Entendemos tu negocio, audiencia y objetivos en una sesión inicial.",
  },
  {
    num: "02",
    title: "Estrategia",
    description: "Definimos alcance, KPIs y un roadmap claro con entregables por fase.",
  },
  {
    num: "03",
    title: "Ejecución",
    description: "Diseño, desarrollo y optimización con revisiones semanales.",
  },
  {
    num: "04",
    title: "Crecimiento",
    description: "Lanzamiento, monitoreo y mejoras continuas basadas en datos.",
  },
];

export default function Process() {
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

        <div className="relative mt-16">
          <div
            className="absolute left-8 top-0 hidden h-full w-px bg-coral/30 md:block"
            aria-hidden
          />
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-8 md:pl-16"
              >
                <span className="absolute left-0 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-coral md:block md:left-8" />
                <span className="font-display text-sm text-coral">{step.num}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-lg text-mute">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
