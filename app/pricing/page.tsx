import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HalloweenBackdrop from "@/components/pricing/HalloweenBackdrop";
import PricingCards from "@/components/pricing/PricingCards";
import { getCountryCodeFromHeaders } from "@/lib/geo/country-code";
import {
  HALLOWEEN_DISCOUNT_PERCENT,
  isHalloweenPromoActive,
} from "@/lib/pricing/halloween-discount";
import {
  getPricingConfigIssue,
  getPricingTiersOrNull,
} from "@/lib/pricing/validate-config";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  if (isHalloweenPromoActive()) {
    return buildPageMetadata({
      title: "Planes Halloween — 20% de descuento — iAGO Digital",
      description:
        "Oferta Halloween: 20% de descuento en desarrollo y suscripción de los planes Básico, SEO, Automatizado con IA y a medida. Termina el 4 de noviembre.",
      path: "/pricing",
    });
  }

  return buildPageMetadata({
    title: "Planes y precios — iAGO Digital",
    description:
      "Precios claros: tarifa única de desarrollo + suscripción de hosting (y, en SEO/IA, reportes u operación del plan). Básico, SEO o Automatizado con IA.",
    path: "/pricing",
  });
}

export default async function PricingPage() {
  const countryCode = getCountryCodeFromHeaders();
  const configIssue = getPricingConfigIssue();
  const tiers = getPricingTiersOrNull();
  const halloweenPromo = isHalloweenPromoActive();

  if (!halloweenPromo) {
    return (
      <>
        <Nav theme="solid" />
        <main className="min-h-screen bg-bone pb-24 pt-32">
          <div className="mx-auto mb-16 max-w-content px-6 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-coral">
              Planes
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
              Precios claros: desarrollo + suscripción
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-mute">
              Cada plan tiene dos cargos:{" "}
              <span className="text-ink">pago único de desarrollo</span> (diseño y
              setup) y una{" "}
              <span className="text-ink">suscripción recurrente</span> (hosting,
              SSL y lo que el plan liste como mensual — p. ej. informe SEO). Los
              montos se muestran abajo según tu país. Para suscribirte te
              atendemos por WhatsApp.
            </p>
          </div>

          {configIssue ? (
            <div className="mx-auto max-w-2xl px-6">
              <div
                className="rounded-2xl border border-coral/30 bg-coral/10 px-6 py-5 text-left"
                role="alert"
              >
                <p className="font-medium text-coral">{configIssue.message}</p>
                <p className="mt-2 text-sm text-ink">{configIssue.detail}</p>
                <a
                  href="/admin/live-catalog"
                  className="mt-4 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bone transition hover:bg-coral"
                >
                  Abrir configurador (iPad)
                </a>
              </div>
            </div>
          ) : tiers ? (
            <PricingCards
              tiers={tiers}
              countryCode={countryCode}
              halloweenPromo={false}
            />
          ) : null}
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav theme="night" />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-halloween-dusk via-halloween-night to-halloween-night pb-24 pt-32 text-bone">
        <HalloweenBackdrop />
        <div className="relative z-10">
          <div className="mx-auto mb-16 max-w-content px-6 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-halloween-pumpkin">
              <span aria-hidden="true">🎃 </span>
              Halloween
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tightest text-bone md:text-5xl">
              {HALLOWEEN_DISCOUNT_PERCENT}% de descuento en todos los planes
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-halloween-mist/80">
              El precio tachado es la tarifa de lista. El precio grande ya
              incluye el {HALLOWEEN_DISCOUNT_PERCENT}% de Halloween, tanto en el{" "}
              <span className="text-bone">pago único de desarrollo</span> como
              en la{" "}
              <span className="text-bone">suscripción mensual o anual</span>.
              El plan a medida lleva el mismo descuento sobre la cotización.
              La oferta termina el 4 de noviembre a medianoche (hora de
              Honduras). Confirmamos el monto por WhatsApp.
            </p>
          </div>

          {configIssue ? (
            <div className="mx-auto max-w-2xl px-6">
              <div
                className="rounded-2xl border border-halloween-pumpkin/40 bg-halloween-card px-6 py-5 text-left"
                role="alert"
              >
                <p className="font-medium text-halloween-pumpkin">
                  {configIssue.message}
                </p>
                <p className="mt-2 text-sm text-halloween-mist">
                  {configIssue.detail}
                </p>
                <a
                  href="/admin/live-catalog"
                  className="mt-4 inline-flex rounded-full bg-halloween-pumpkin px-5 py-2.5 text-sm font-medium text-halloween-night transition hover:bg-halloween-glow"
                >
                  Abrir configurador (iPad)
                </a>
              </div>
            </div>
          ) : tiers ? (
            <PricingCards
              tiers={tiers}
              countryCode={countryCode}
              halloweenPromo
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
