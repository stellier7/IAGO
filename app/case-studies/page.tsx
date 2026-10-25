import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseCard from "@/components/cases/CaseCard";
import { recentCases } from "@/lib/cases/recent";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Case studies — iAGO Digital",
  description:
    "Portfolio y casos de estudio: sitios y proyectos que hemos lanzado para evaluar resultados reales.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-ink pb-24 pt-32 text-bone">
        <div className="mx-auto mb-16 max-w-content px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-coral">
            Portfolio
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tightest md:text-5xl">
            Case studies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-mute">
            Mira cómo resolvemos diseño web, SEO y automatización en proyectos
            reales — y entra a cada caso para el detalle.
          </p>
        </div>

        <div className="mx-auto grid max-w-content gap-6 px-6 md:grid-cols-2">
          {recentCases.map((item) => (
            <CaseCard
              key={item.client}
              item={item}
              className="min-h-[420px] w-full"
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-content px-6 text-center">
          <a
            href="/contact"
            className="inline-flex rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold text-bone transition hover:border-coral hover:text-coral"
          >
            Hablar de tu proyecto →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
