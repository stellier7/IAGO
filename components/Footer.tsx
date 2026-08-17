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
          <a href="/pricing" className="transition hover:text-coral">
            Planes
          </a>
          <a href="/#contacto" className="transition hover:text-coral">
            Contacto
          </a>
          <a href="/terms" className="transition hover:text-coral">
            Términos
          </a>
          <a href="/privacy" className="transition hover:text-coral">
            Privacidad
          </a>
          <a href="/refund" className="transition hover:text-coral">
            Reembolsos
          </a>
        </div>
      </div>
    </footer>
  );
}
