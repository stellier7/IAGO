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

type NavTheme = "overlay" | "solid" | "night";
type NavSurface = "overlay" | "solid" | "night";

interface NavProps {
  theme?: NavTheme;
  locale?: "es" | "en";
}

function headerClass(surface: NavSurface): string {
  switch (surface) {
    case "night":
      return "border-b border-halloween-pumpkin/25 bg-halloween-night/85 py-3 backdrop-blur-md";
    case "solid":
      return "border-b border-ink-line/10 bg-bone/80 py-3 backdrop-blur-md";
    case "overlay":
      return "bg-transparent py-5";
    default: {
      const exhaustive: never = surface;
      return exhaustive;
    }
  }
}

function logoClass(surface: NavSurface): string {
  switch (surface) {
    case "night":
    case "overlay":
      return "text-bone";
    case "solid":
      return "text-ink";
    default: {
      const exhaustive: never = surface;
      return exhaustive;
    }
  }
}

function linkClass(surface: NavSurface): string {
  switch (surface) {
    case "night":
      return "text-sm text-halloween-mist/80 transition-colors hover:text-bone";
    case "solid":
    case "overlay":
      return "text-sm text-mute transition-colors hover:text-ink";
    default: {
      const exhaustive: never = surface;
      return exhaustive;
    }
  }
}

function localeClass(surface: NavSurface): string {
  switch (surface) {
    case "night":
      return "text-halloween-mist/80 hover:text-bone";
    case "solid":
      return "text-mute hover:text-ink";
    case "overlay":
      return "text-bone/70 hover:text-bone";
    default: {
      const exhaustive: never = surface;
      return exhaustive;
    }
  }
}

function ctaClass(surface: NavSurface): string {
  switch (surface) {
    case "night":
      return "bg-halloween-pumpkin text-halloween-night hover:bg-halloween-glow";
    case "solid":
    case "overlay":
      return "bg-ink text-bone hover:bg-coral";
    default: {
      const exhaustive: never = surface;
      return exhaustive;
    }
  }
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

  const surface: NavSurface =
    theme === "night" ? "night" : theme === "solid" || scrolled ? "solid" : "overlay";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass(surface)}`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6">
        <a
          href={isEn ? "/en" : "/"}
          className={`font-display text-lg font-bold tracking-tightest transition-colors duration-300 ${logoClass(surface)}`}
        >
          iA<span className="text-coral">GO</span>
          <span className="text-coral">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(surface)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={isEn ? "/" : "/en"}
            className={`text-xs font-semibold uppercase tracking-wider transition ${localeClass(surface)}`}
            hrefLang={isEn ? "es" : "en"}
          >
            {isEn ? "ES" : "EN"}
          </a>
          <a
            href={isEn ? "/en/contact" : "/contact"}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${ctaClass(surface)}`}
          >
            {isEn ? "Talk to us" : "Hablemos"}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
