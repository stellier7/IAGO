import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { EnglishPage } from "@/lib/en/pages";
import { englishPages } from "@/lib/en/pages";

type EnglishPageViewProps = {
  page: EnglishPage;
};

export default function EnglishPageView({ page }: EnglishPageViewProps) {
  const others = englishPages.filter(
    (item) => item.slug !== page.slug && item.slug !== "home",
  );

  return (
    <>
      <Nav theme="solid" locale="en" />
      <main className="min-h-screen bg-bone pb-24 pt-32" lang="en">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            {page.headline}
          </h1>
          <p className="mt-6 text-lg text-mute">{page.intro}</p>

          {page.note ? (
            <p className="mt-4 rounded-xl border border-ink-line/15 bg-white px-4 py-3 text-sm text-mute">
              {page.note}
            </p>
          ) : null}

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Who this is for
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
              Problems we solve
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
              What you get
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
              What is included
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
              Keyword hypotheses (unvalidated)
            </h2>
            <p className="mt-2 text-sm text-mute">
              Phrases we research — not verified volumes. Validate in Search
              Console and keyword tools before scaling content.
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
            <h2 className="font-display text-xl font-bold text-ink">Related</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.related.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
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
              Ready to talk scope?
            </h2>
            <p className="mt-3 text-bone/70">
              Tell us about your business and the channel that needs work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-bright"
              >
                Contact
              </a>
              <a
                href="/en"
                className="rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold transition hover:border-coral hover:text-coral"
              >
                English hub
              </a>
            </div>
          </section>

          {others.length > 0 && page.slug !== "home" ? (
            <section className="mt-16">
              <h2 className="font-display text-xl font-bold text-ink">
                More in English
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {others.map((item) => (
                  <a
                    key={item.slug}
                    href={item.path}
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
      <Footer locale="en" />
    </>
  );
}
