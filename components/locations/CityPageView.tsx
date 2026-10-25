import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { CityPage } from "@/lib/locations/honduras";
import { cityPages } from "@/lib/locations/honduras";

type CityPageViewProps = {
  page: CityPage;
};

export default function CityPageView({ page }: CityPageViewProps) {
  const others = cityPages.filter((city) => city.slug !== page.slug);

  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Honduras · {page.name}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            {page.headline}
          </h1>
          <p className="mt-3 text-sm text-mute">
            También buscado como: {page.aliases.join(", ")}
          </p>
          <p className="mt-6 text-lg text-mute">{page.intro}</p>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">
              Enfoque local
            </h2>
            <p className="mt-4 text-mute">{page.localAngle}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">
              Qué podemos hacer en {page.name}
            </h2>
            <ul className="mt-4 space-y-3 text-mute">
              {page.servicesFocus.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">
              Servicios relacionados
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/website-design-honduras"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                Páginas web / desarrollo web
              </a>
              <a
                href="/seo-services-honduras"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                SEO / AI SEO
              </a>
              <a
                href="/ai-automation-honduras"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                Automatizaciones con IA
              </a>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">FAQ</h2>
            <div className="mt-6 space-y-6">
              {page.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-medium text-ink">{faq.question}</h3>
                  <p className="mt-2 text-mute">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl bg-ink px-8 py-10 text-bone">
            <h2 className="font-display text-2xl font-bold tracking-tightest">
              ¿Hablamos de tu proyecto en {page.name}?
            </h2>
            <p className="mt-3 text-bone/70">
              Cuéntanos tu rubro y te proponemos web, SEO o IA con alcance
              claro.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contacto"
                className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-bright"
              >
                Contactar
              </a>
              <a
                href="/honduras"
                className="rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold transition hover:border-coral hover:text-coral"
              >
                Ver todo Honduras
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-xl font-bold text-ink">
              Otras zonas
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {others.map((city) => (
                <a
                  key={city.slug}
                  href={`/honduras/${city.slug}`}
                  className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
                >
                  {city.name}
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
