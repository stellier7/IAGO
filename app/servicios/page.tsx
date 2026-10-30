import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { architecturePages } from "@/lib/architecture/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Servicios — iAGO Digital",
  description:
    "Arquitectura de servicios en español: diseño web, SEO, AI SEO, automatización con IA, WhatsApp y mantenimiento. English hub en /en.",
  path: "/servicios",
  languages: {
    es: "/servicios",
    en: "/en",
    "x-default": "/servicios",
  },
});

export default function ServiciosIndexPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Servicios
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Páginas pensadas para búsquedas reales
          </h1>
          <p className="mt-6 text-lg text-mute">
            Priorizamos intención en español (Honduras y la región). Cada
            servicio tiene URL propia y explica para quién es. Para clientes
            internacionales, el hub en inglés está en{" "}
            <a href="/en" className="text-coral hover:underline">
              /en
            </a>{" "}
            — contenido reescrito, no traducción mecánica.
          </p>

          <div className="mt-12 space-y-4">
            {architecturePages.map((page) => (
              <a
                key={page.slug}
                href={`/${page.slug}`}
                className="block rounded-2xl border border-ink-line/15 bg-white px-6 py-5 transition hover:border-coral/40"
              >
                <p className="text-xs uppercase tracking-wider text-coral">
                  {page.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                  {page.title}
                </h2>
                <p className="mt-2 text-sm text-mute">{page.description}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="/industrias"
              className="rounded-full border border-ink-line/20 px-5 py-2.5 text-sm transition hover:border-coral hover:text-coral"
            >
              Industrias
            </a>
            <a
              href="/en"
              className="rounded-full border border-ink-line/20 px-5 py-2.5 text-sm transition hover:border-coral hover:text-coral"
            >
              English
            </a>
            <a
              href="/case-studies"
              className="rounded-full border border-ink-line/20 px-5 py-2.5 text-sm transition hover:border-coral hover:text-coral"
            >
              Case studies
            </a>
            <a
              href="/contact"
              className="rounded-full border border-ink-line/20 px-5 py-2.5 text-sm transition hover:border-coral hover:text-coral"
            >
              Contact
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
