import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import {
  getNichesByCategory,
  nicheCategories,
} from "@/lib/niches/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Industrias — iAGO Digital",
  description:
    "Industrias: salud, inmobiliarias y constructoras, barberías, academias/gym, restaurantes, retail/e-commerce, hoteles/turismo, profesionales, automotriz, servicios locales y WhatsApp para citas.",
  path: "/industrias",
});

export default function IndustriasPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumbs
            items={[
              { name: "Inicio", path: "/" },
              { name: "Industrias", path: "/industrias" },
            ]}
          />
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Industrias
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            Páginas por necesidad de negocio — no por keyword genérica
          </h1>
          <p className="mt-6 text-lg text-mute">
            Desde clínicas y barberías hasta academias, restaurantes, retail,
            turismo, profesionales y automotriz. Cada página explica problemas
            del rubro, proceso y prueba cuando existe — español primero. English
            en{" "}
            <a href="/en" className="text-coral hover:underline">
              /en
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-mute">
            Las frases de búsqueda en cada página son{" "}
            <span className="text-ink">hipótesis por validar</span> — no
            volúmenes inventados.
          </p>

          <div className="mt-14 space-y-14">
            {nicheCategories.map((category) => {
              const pages = getNichesByCategory(category.id);
              if (pages.length === 0) {
                return null;
              }

              return (
                <section key={category.id}>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-mute">{category.summary}</p>
                  <div className="mt-6 space-y-4">
                    {pages.map((page) => (
                      <a
                        key={page.slug}
                        href={`/${page.slug}`}
                        className="block rounded-2xl border border-ink-line/15 bg-white px-6 py-5 transition hover:border-coral/40"
                      >
                        <p className="text-xs uppercase tracking-wider text-coral">
                          {page.eyebrow}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
                          {page.title}
                        </h3>
                        <p className="mt-2 text-sm text-mute">
                          {page.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-ink-line/30 px-6 py-5">
            <h2 className="font-display text-xl font-bold text-ink">
              ¿Otro rubro?
            </h2>
            <p className="mt-2 text-mute">
              Si tu rubro no está, escríbenos: preferimos una página con
              contenido real antes que un clon genérico. Mientras tanto:
              servicios generales y Honduras local.
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
