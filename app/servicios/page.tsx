import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { servicePages } from "@/lib/services/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Servicios — iAGO Digital",
  description:
    "Diseño web, SEO y automatizaciones con IA: páginas dedicadas para cada servicio, a quién ayudan y qué problemas resuelven.",
  path: "/servicios",
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
            Tres pilares para que te encuentren y conviertas
          </h1>
          <p className="mt-6 text-lg text-mute">
            No basta con mencionar web, SEO e IA en el home. Cada servicio tiene
            su página: para quién es, qué problema resuelve y cómo trabajamos.
          </p>

          <div className="mt-12 space-y-4">
            {servicePages.map((page) => (
              <a
                key={page.slug}
                href={`/servicios/${page.slug}`}
                className="block rounded-2xl border border-ink-line/15 bg-white px-6 py-5 transition hover:border-coral/40"
              >
                <p className="text-xs uppercase tracking-wider text-coral">
                  {page.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink">
                  {page.title}
                </h2>
                <p className="mt-2 text-sm text-mute">{page.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-ink">
                  Ver servicio →
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
