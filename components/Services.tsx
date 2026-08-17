"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  pillarCardVariants,
  staggerContainer,
  staggerPillarCards,
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

const DESKTOP_PILLAR_VIEWPORT = { once: true, margin: "-32% 0px -32% 0px" as const };
const MOBILE_CARD_VIEWPORT = { once: true, margin: "-10% 0px -15% 0px" as const };

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

function ServiceCardContent({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
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
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();
  const isMobile = useIsMobile();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pillarsInView = useInView(titleRef, DESKTOP_PILLAR_VIEWPORT);

  const cardClassName =
    "group rounded-2xl border border-ink/10 bg-white p-8 transition-[border-color,box-shadow] hover:border-coral/40 hover:shadow-lg";

  const cardGrid = (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {services.map((service, i) => (
        <article key={service.title} className={cardClassName}>
          <ServiceCardContent service={service} index={i} />
        </article>
      ))}
    </div>
  );

  const mobileCardGrid = (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {services.map((service, i) => (
        <motion.article
          key={service.title}
          variants={pillarCardVariants[i]}
          initial="hidden"
          whileInView="visible"
          viewport={MOBILE_CARD_VIEWPORT}
          className={cardClassName}
        >
          <ServiceCardContent service={service} index={i} />
        </motion.article>
      ))}
    </div>
  );

  const desktopCardGrid = (
    <motion.div
      className="mt-16 grid gap-6 md:grid-cols-3"
      variants={staggerPillarCards}
      initial="hidden"
      animate={pillarsInView ? "visible" : "hidden"}
    >
      {services.map((service, i) => (
        <motion.article
          key={service.title}
          variants={pillarCardVariants[i]}
          className={cardClassName}
        >
          <ServiceCardContent service={service} index={i} />
        </motion.article>
      ))}
    </motion.div>
  );

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
            ref={titleRef}
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-bold tracking-tightest md:text-5xl"
          >
            Tres pilares, un solo equipo
          </motion.h2>
        </motion.div>

        {!mounted || prefersReducedMotion
          ? cardGrid
          : isMobile
            ? mobileCardGrid
            : desktopCardGrid}

        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="/pricing"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-bone transition hover:bg-coral"
          >
            Ver planes
          </a>
        </div>
      </div>
    </section>
  );
}
