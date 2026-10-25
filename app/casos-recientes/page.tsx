import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseCard from "@/components/cases/CaseCard";
import { recentCases } from "@/lib/cases/recent";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Casos recientes — iAGO Digital",
  description:
    "Sitios web que hemos diseñado y lanzado para negocios en Centroamérica, Latam y más allá.",
  path: "/casos-recientes",
});

export default function CasosRecientesPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-ink pb-24 pt-32 text-bone">
        <div className="mx-auto mb-16 max-w-content px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-coral">
            Trabajo
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tightest md:text-5xl">
            Casos recientes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-mute">
            Sitios que hemos diseñado y lanzado.
          </p>
        </div>

        <div className="mx-auto grid max-w-content gap-6 px-6 md:grid-cols-2 lg:grid-cols-2">
          {recentCases.map((item) => (
            <CaseCard
              key={item.client}
              item={item}
              className="min-h-[420px] w-full"
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-content px-6 text-center md:mt-20">
          <a
            href="https://wa.me/50489809800?text=Hola%20IAGO%2C%20me%20gustar%C3%ADa%20consultar%20m%C3%A1s%20casos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-bone/20 px-8 py-3.5 text-sm font-semibold text-bone transition hover:border-coral hover:text-coral"
          >
            Consultar más casos →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
