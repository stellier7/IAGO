"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative z-20 bg-coral py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-content px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl font-bold tracking-tightest md:text-6xl">
            ¿Listo para crecer?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Cuéntanos tu proyecto y te respondemos en menos de 48 horas con
            una propuesta clara.
          </p>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            Contáctanos
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:iagodigitalweb@gmail.com"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-raised"
            >
              Email
            </a>
            <a
              href="https://wa.me/50496784678"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-coral transition hover:bg-bone"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
          <p className="mt-3 text-sm text-white/75">+504 9678-4678</p>
        </motion.div>
      </div>
    </section>
  );
}
