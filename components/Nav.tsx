"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const linksEs = [
  { href: "/servicios", label: "Servicios" },
  { href: "/industrias", label: "Industrias" },
  { href: "/case-studies", label: "Casos" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Planes" },
  { href: "/contact", label: "Contacto" },
];

const linksEn = [
  { href: "/en", label: "Home" },
  { href: "/en/website-design", label: "Web" },
  { href: "/en/seo", label: "SEO" },
  { href: "/en/ai-automation", label: "AI" },
  { href: "/en/whatsapp-automation", label: "WhatsApp" },
  { href: "/case-studies", label: "Work" },
  { href: "/en/contact", label: "Contact" },
];

interface NavProps {
  theme?: "overlay" | "solid";
  locale?: "es" | "en";
}

export default function Nav({ theme = "overlay", locale = "es" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const isEn = locale === "en";
  const links = isEn ? linksEn : linksEs;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = theme === "solid" || scrolled;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSolid
          ? "border-b border-ink-line/10 bg-bone/80 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6">
        <a
          href={isEn ? "/en" : "/"}
          className={`font-display text-lg font-bold tracking-tightest transition-colors duration-300 ${
            isSolid ? "text-ink" : "text-bone"
          }`}
        >
          iA<span className="text-coral">GO</span>
          <span className="text-coral">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mute transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={isEn ? "/" : "/en"}
            className={`text-xs font-semibold uppercase tracking-wider transition ${
              isSolid ? "text-mute hover:text-ink" : "text-bone/70 hover:text-bone"
            }`}
            hrefLang={isEn ? "es" : "en"}
          >
            {isEn ? "ES" : "EN"}
          </a>
          <a
            href={isEn ? "/en/contact" : "/contact"}
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-bone transition hover:bg-coral"
          >
            {isEn ? "Talk to us" : "Hablemos"}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
