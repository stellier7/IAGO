import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { FOUNDER, footerSocialLinks } from "@/lib/social/profiles";

export const metadata = buildPageMetadata({
  title: "About iAGO Digital",
  description:
    "Quiénes somos: agencia digital de web, SEO y automatizaciones con IA para negocios en Centroamérica, Latam y más. Fundador y CEO: Santiago Tellier.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-coral">
            About
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            iAGO Digital: web, SEO e IA con resultados medibles
          </h1>
          <p className="mt-6 text-lg text-mute">
            Somos una agencia digital que diseña sitios que convierten,
            posiciona marcas en Google y automatiza lo repetitivo con IA —
            para que tu equipo venda y atienda, no copie datos a mano.
          </p>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Fundador
            </h2>
            <p className="mt-4 text-mute">
              <span className="font-medium text-ink">{FOUNDER.name}</span>
              {" · "}
              {FOUNDER.jobTitle}. Construye iAGO Digital para que negocios en
              Honduras y la región tengan web, SEO y automatizaciones que
              generen consultas reales — no solo presencia decorativa.
            </p>
            <a
              href={FOUNDER.linkedIn}
              target="_blank"
              rel="noopener noreferrer me"
              className="mt-4 inline-flex text-sm font-medium text-coral transition hover:text-ink"
            >
              LinkedIn →
            </a>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Qué hacemos
            </h2>
            <ul className="mt-6 space-y-3 text-mute">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>Diseño y desarrollo web (Next.js, performance, móvil)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>SEO, SEO local y AI SEO / GEO</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>Automatizaciones con IA y WhatsApp</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                <span>Mantenimiento y crecimiento continuo</span>
              </li>
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Cómo trabajamos
            </h2>
            <p className="mt-4 text-mute">
              Sin plantillas genéricas ni promesas vacías. Alcance claro,
              entregables por fase y medición (Analytics, Search Console).
              Operamos desde Centroamérica y trabajamos con clientes en Latam y
              EE.UU.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Dónde ver prueba
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/case-studies"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                Case studies
              </a>
              <a
                href="/servicios"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                Servicios
              </a>
              <a
                href="/contact"
                className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
              >
                Contacto
              </a>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-2xl font-bold text-ink">
              Presencia online
            </h2>
            <p className="mt-4 text-mute">
              Misma identidad en la web y en perfiles públicos (nombre, dominio,
              contacto). YouTube y el enlace estable de Google Business Profile
              se suman cuando estén listos.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {footerSocialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="rounded-full border border-ink-line/20 px-4 py-2 text-sm transition hover:border-coral hover:text-coral"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl bg-ink px-8 py-10 text-bone">
            <h2 className="font-display text-2xl font-bold tracking-tightest">
              ¿Hablamos?
            </h2>
            <p className="mt-3 text-bone/70">
              Escríbenos y te respondemos en menos de 48 horas.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral-bright"
            >
              Ir a contacto
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
