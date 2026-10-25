import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { ServicePage } from "@/lib/services/pages";
import { servicePages } from "@/lib/services/pages";

type ServicePageViewProps = {
  page: ServicePage;
};

export default function ServicePageView({ page }: ServicePageViewProps) {
  const otherServices = servicePages.filter((item) => item.slug !== page.slug);

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
              Qué logras
            </h2>
            <ul className="mt-6 space-y-3 text-mute">
              {page.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Cómo trabajamos
            </h2>
            <ol className="mt-6 space-y-5">
              {page.process.map((item, index) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-display text-sm text-coral">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-ink">{item.step}</h3>
                    <p className="mt-1 text-mute">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Preguntas frecuentes
            </h2>
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
              Sigue explorando
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-ink-line/20 px-4 py-2 text-sm text-ink transition hover:border-coral hover:text-coral"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl bg-ink px-8 py-10 text-bone">
            <h2 className="font-display text-2xl font-bold tracking-tightest">
              ¿Este servicio es para ti?
            </h2>
            <p className="mt-3 text-bone/70">
              Cuéntanos tu caso y te decimos el alcance más sensato — sin
              relleno.
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
              Otros servicios
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {otherServices.map((item) => (
                <a
                  key={item.slug}
                  href={`/servicios/${item.slug}`}
                  className="rounded-full border border-ink-line/20 px-4 py-2 text-sm text-ink transition hover:border-coral hover:text-coral"
                >
                  {item.title}
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
