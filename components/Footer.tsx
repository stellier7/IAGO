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
        <div className="flex gap-6 text-sm text-mute">
          <a href="#servicios" className="transition hover:text-coral">
            Servicios
          </a>
          <a href="#contacto" className="transition hover:text-coral">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
