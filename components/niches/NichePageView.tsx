import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { NichePage } from "@/lib/niches/pages";
import { nichePages } from "@/lib/niches/pages";

type NichePageViewProps = {
  page: NichePage;
};

export default function NichePageView({ page }: NichePageViewProps) {
  const others = nichePages.filter((item) => item.slug !== page.slug);

  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            {page.headline}
          </h1>
          <p className="mt-6 text-lg text-mute">{page.intro}</p>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              ¿Para quién es?
            </h2>
            <ul className="mt-6 space-y-3 text-mute">
              {page.whoFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Problemas que resolvemos
            </h2>
            <div className="mt-6 space-y-6">
              {page.problems.map((problem) => (
                <div key={problem.title}>
                  <h3 className="font-medium text-ink">{problem.title}</h3>
                  <p className="mt-2 text-mute">{problem.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Cómo trabajamos
            </h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-mute">
              {page.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Prueba / casos relevantes
            </h2>
            <div className="mt-6 space-y-8">
              {page.proof.map((item) => (
                <div key={item.title}>
                  <h3 className="font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-mute">{item.detail}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={item.caseHref}
                      className="text-sm font-medium text-coral transition hover:text-ink"
                    >
                      {item.caseLabel} →
                    </a>
                    {item.liveHref ? (
                      <a
                        href={item.liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-mute transition hover:text-coral"
                      >
                        Ver sitio en vivo ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Qué incluye
            </h2>
            <ul className="mt-6 space-y-3 text-mute">
              {page.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 rounded-2xl border border-ink-line/15 bg-white px-6 py-5">
            <h2 className="font-display text-lg font-bold text-ink">
              Hipótesis de búsqueda (por validar)
            </h2>
            <p className="mt-2 text-sm text-mute">
              Frases que investigamos — no son volúmenes verificados. Las
              validamos con Search Console y herramientas de keywords antes de
              escalar más contenido.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.keywordHypotheses.map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-full border border-ink-line/20 px-3 py-1 text-xs text-mute"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
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

          <section className="mt-14">
            <h2 className="font-display text-xl font-bold text-ink">
              Relacionado
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.related.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl bg-ink px-8 py-10 text-bone">
            <h2 className="font-display text-2xl font-bold tracking-tightest">
              ¿Hablamos de este caso?
            </h2>
            <p className="mt-3 text-bone/70">
              Cuéntanos tu industria y cómo captas clientes hoy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-bright"
              >
                Contactar
              </a>
              <a
                href="/industrias"
                className="rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold transition hover:border-coral hover:text-coral"
              >
                Ver industrias
              </a>
            </div>
          </section>

          {others.length > 0 ? (
            <section className="mt-16">
              <h2 className="font-display text-xl font-bold text-ink">
                Otras industrias
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {others.map((item) => (
                  <a
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
                  >
                    {item.navLabel}
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}
