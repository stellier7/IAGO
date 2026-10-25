import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact — iAGO Digital",
  description:
    "Pide una cotización o consulta: email y WhatsApp para hablar de web, SEO o automatizaciones con IA.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Cuéntanos tu proyecto
          </h1>
          <p className="mt-6 text-lg text-mute">
            Cotización o consulta — te respondemos en menos de 48 horas con una
            propuesta clara. Mientras más contexto nos des (rubro, ciudad, meta),
            mejor el alcance.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:info@iagodigital.com"
              className="rounded-2xl border border-ink-line/15 bg-white px-6 py-8 transition hover:border-coral/40"
            >
              <p className="text-xs uppercase tracking-wider text-coral">Email</p>
              <p className="mt-2 font-display text-xl font-bold text-ink">
                info@iagodigital.com
              </p>
              <p className="mt-2 text-sm text-mute">Ideal para briefs y archivos</p>
            </a>
            <a
              href="https://wa.me/50489809800?text=Hola%20IAGO%2C%20me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-ink-line/15 bg-white px-6 py-8 transition hover:border-coral/40"
            >
              <p className="text-xs uppercase tracking-wider text-coral">
                WhatsApp
              </p>
              <p className="mt-2 font-display text-xl font-bold text-ink">
                +504 8980-9800
              </p>
              <p className="mt-2 text-sm text-mute">Respuesta más rápida</p>
            </a>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              ¿Qué incluir en tu mensaje?
            </h2>
            <ul className="mt-6 space-y-3 text-mute">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>Qué necesitas: web, SEO, WhatsApp/IA, mantenimiento…</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>Tu rubro y ciudad / país</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>Si ya tienes sitio (URL) o partes de cero</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>Plazo o presupuesto aproximado (si lo tienes)</span>
              </li>
            </ul>
          </section>

          <section className="mt-14 flex flex-wrap gap-3">
            <a
              href="/pricing"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bone transition hover:bg-coral"
            >
              Ver planes
            </a>
            <a
              href="/case-studies"
              className="rounded-full border border-ink-line/20 px-6 py-3 text-sm font-semibold transition hover:border-coral hover:text-coral"
            >
              Ver casos
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
