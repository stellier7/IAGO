import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { CaseItem } from "@/lib/cases/recent";
import { recentCases } from "@/lib/cases/recent";

type CaseStudyViewProps = {
  item: CaseItem;
};

export default function CaseStudyView({ item }: CaseStudyViewProps) {
  const related = recentCases.filter((c) => c.slug !== item.slug).slice(0, 3);

  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            Caso · {item.type}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            {item.client}
          </h1>
          <p className="mt-3 text-mute">
            {item.location} · {item.result}
          </p>
          <p className="mt-6 text-lg text-mute">{item.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bone transition hover:bg-coral"
            >
              Ver sitio en vivo →
            </a>
            <a
              href="/case-studies"
              className="rounded-full border border-ink-line/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-coral hover:text-coral"
            >
              Todos los casos
            </a>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">Reto</h2>
            <p className="mt-4 text-mute">{item.challenge}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">
              Solución
            </h2>
            <p className="mt-4 text-mute">{item.solution}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">
              Entregables
            </h2>
            <ul className="mt-4 space-y-3 text-mute">
              {item.deliverables.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-ink">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3 py-1 text-xs text-ink/70 ring-1 ring-ink-line/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl bg-ink px-8 py-10 text-bone">
            <h2 className="font-display text-2xl font-bold tracking-tightest">
              ¿Quieres un resultado así?
            </h2>
            <p className="mt-3 text-bone/70">
              Cuéntanos tu proyecto y te proponemos el siguiente paso.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contacto"
                className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-bright"
              >
                Contactar
              </a>
              <a
                href="/pricing"
                className="rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold transition hover:border-coral hover:text-coral"
              >
                Ver planes
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-xl font-bold text-ink">
              Más casos
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {related.map((c) => (
                <a
                  key={c.slug}
                  href={`/casos/${c.slug}`}
                  className="rounded-xl border border-ink-line/15 bg-white px-5 py-4 transition hover:border-coral/40"
                >
                  <p className="text-xs uppercase tracking-wider text-coral">
                    {c.type}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">
                    {c.client}
                  </p>
                  <p className="mt-1 text-sm text-mute">{c.result}</p>
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
