"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const stats = [
  { value: "40+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "3×", label: "ROI promedio en SEO" },
  { value: "<48h", label: "Tiempo de respuesta" },
];

export default function Proof() {
  return (
    <section className="relative z-20 bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.2em] text-coral"
            >
              Por qué IAGO
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl"
            >
              Un partner digital, no solo un proveedor
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-mute">
              Combinamos diseño, estrategia y tecnología para que cada peso
              invertido genere resultados medibles. Sin plantillas genéricas,
              sin promesas vacías.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-ink/10 bg-white p-6"
              >
                <p className="font-display text-4xl font-bold text-coral">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-mute">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
