export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-ink-line bg-ink py-12 text-bone">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="font-display text-lg font-bold">
          IAGO<span className="text-coral">.</span>
        </p>
        <p className="text-sm text-mute">
          © {year} IAGO Digital. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mute">
          <a href="/servicios" className="transition hover:text-coral">
            Servicios
          </a>
          <a
            href="/website-design-honduras"
            className="transition hover:text-coral"
          >
            Web
          </a>
          <a href="/seo-services-honduras" className="transition hover:text-coral">
            SEO
          </a>
          <a href="/whatsapp-automation" className="transition hover:text-coral">
            WhatsApp
          </a>
          <a href="/case-studies" className="transition hover:text-coral">
            Casos
          </a>
          <a href="/about" className="transition hover:text-coral">
            About
          </a>
          <a href="/blog" className="transition hover:text-coral">
            Blog
          </a>
          <a href="/contact" className="transition hover:text-coral">
            Contacto
          </a>
          <a href="/pricing" className="transition hover:text-coral">
            Planes
          </a>
          <a href="/terms" className="transition hover:text-coral">
            Términos
          </a>
          <a href="/privacy" className="transition hover:text-coral">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
