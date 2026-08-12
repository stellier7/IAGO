"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  pillarCardVariants,
  staggerContainer,
} from "@/lib/motion-variants";

const services = [
  {
    title: "Web",
    subtitle: "Sitios que convierten",
    description:
      "Landing pages, sitios corporativos y e-commerce con diseño premium, performance y accesibilidad.",
    tags: ["Next.js", "Responsive", "CMS"],
  },
  {
    title: "SEO",
    subtitle: "Visibilidad orgánica",
    description:
      "Auditorías técnicas, optimización on-page y estrategia de contenido para posicionarte en Google.",
    tags: ["Core Web Vitals", "Schema", "Contenido"],
  },
  {
    title: "Automatizaciones",
    subtitle: "IA que trabaja por ti",
    description:
      "Chatbots, flujos con IA, integraciones y dashboards que eliminan trabajo manual repetitivo.",
    tags: ["OpenAI", "Zapier", "APIs"],
  },
];

function ServiceCard({
  service,
  index,
  paused,
}: {
  service: (typeof services)[number];
  index: number;
  paused: boolean;
}) {
  const content = (
    <>
      <span className="font-display text-5xl font-bold text-ink/10 transition-colors group-hover:text-coral/30">
        0{index + 1}
      </span>
      <h3 className="mt-4 font-display text-2xl font-bold">{service.title}</h3>
      <p className="mt-1 text-sm text-coral">{service.subtitle}</p>
      <p className="mt-4 text-mute">{service.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bone px-3 py-1 text-xs text-ink/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const className =
    "group rounded-2xl border border-ink/10 bg-white p-8 transition-[border-color,box-shadow] hover:border-coral/40 hover:shadow-lg";

  if (paused) {
    return <article className={className}>{content}</article>;
  }

  return (
    <motion.article
      variants={pillarCardVariants[index]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08 }}
      className={className}
    >
      {content}
    </motion.article>
  );
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="servicios" className="relative z-20 bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.2em] text-coral"
          >
            Servicios
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl"
          >
            Tres pilares, un solo equipo
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              paused={!!prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
