"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#trabajo", label: "Trabajo" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/pricing", label: "Planes" },
  { href: "/login?next=/account", label: "Cuenta" },
  { href: "/#contacto", label: "Contacto" },
];

interface NavProps {
  theme?: "overlay" | "solid";
}

export default function Nav({ theme = "overlay" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

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
          href="/"
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
        <a
          href="/#contacto"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-bone transition hover:bg-coral"
        >
          Hablemos
        </a>
      </div>
    </motion.header>
  );
}
