import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { nichePages } from "@/lib/niches/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Industrias — iAGO Digital",
  description:
    "Páginas por industria con problemas, proceso y casos reales: inmobiliarias, belleza y WhatsApp para negocios con citas. Solo publicamos niches con información útil.",
  path: "/industrias",
});

export default function IndustriasPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Industrias
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Páginas por necesidad de negocio — no por keyword genérica
          </h1>
          <p className="mt-6 text-lg text-mute">
            En lugar de pelear solo por “diseño web”, publicamos páginas cuando
            podemos explicar problemas del rubro, mostrar trabajo relevante y
            describir el proceso. Español primero (Honduras). English para
            clientes internacionales está en{" "}
            <a href="/en" className="text-coral hover:underline">
              /en
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-mute">
            Las frases de búsqueda listadas en cada página son{" "}
            <span className="text-ink">hipótesis por validar</span> con Search
            Console y herramientas de keywords — no volúmenes inventados. No
            creamos decenas de páginas de ciudad o industria casi idénticas.
          </p>

          <div className="mt-12 space-y-4">
            {nichePages.map((page) => (
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

          <div className="mt-12 rounded-2xl border border-dashed border-ink-line/30 px-6 py-5">
            <h2 className="font-display text-xl font-bold text-ink">
              ¿Más rubros?
            </h2>
            <p className="mt-2 text-mute">
              Restaurantes, más ciudades o verticales nuevas solo cuando tengamos
              contenido específico y prueba útil — no clones. Mientras tanto:
              servicios generales y páginas locales de Honduras.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/servicios"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                Servicios
              </a>
              <a
                href="/honduras"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                Honduras
              </a>
              <a
                href="/en"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                English
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
