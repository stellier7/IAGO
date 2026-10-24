import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cityPages, hondurasHub } from "@/lib/locations/honduras";

export default function HondurasHubView() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Honduras
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            {hondurasHub.headline}
          </h1>
          <p className="mt-6 text-lg text-mute">{hondurasHub.intro}</p>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">
              ¿Qué buscas?
            </h2>
            <p className="mt-3 text-mute">
              Trabajamos las búsquedas que realmente usan los negocios:
              desarrollo web, páginas web, SEO, AI SEO y automatizaciones con
              IA — en lenguaje claro, sin relleno.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hondurasHub.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-white px-3 py-1 text-xs text-ink/70 ring-1 ring-ink-line/15"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Ciudades y zonas clave
            </h2>
            <p className="mt-3 text-mute">
              Contenido local real por plaza — no la misma página con el nombre
              de ciudad cambiado.
            </p>
            <div className="mt-6 grid gap-4">
              {cityPages.map((city) => (
                <a
                  key={city.slug}
                  href={`/honduras/${city.slug}`}
                  className="rounded-2xl border border-ink-line/15 bg-white px-6 py-5 transition hover:border-coral/40"
                >
                  <p className="font-display text-xl font-bold text-ink">
                    {city.name}
                  </p>
                  <p className="mt-1 text-sm text-coral">
                    {city.aliases.join(" · ")}
                  </p>
                  <p className="mt-2 text-sm text-mute">{city.headline}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              ¿Quieres que tu negocio salga en Google e inteligencias
              artificiales?
            </h2>
            <p className="mt-4 text-mute">
              Combinamos páginas web rápidas, SEO técnico/local y contenido
              preparado para búsquedas tradicionales y respuestas con IA (AI
              SEO). Empieza por tu ciudad o por un plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/pricing"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bone transition hover:bg-coral"
              >
                Ver planes
              </a>
              <a
                href="/blog"
                className="rounded-full border border-ink-line/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
              >
                Leer el blog
              </a>
              <a
                href="/#contacto"
                className="rounded-full border border-ink-line/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
              >
                Contactar
              </a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
