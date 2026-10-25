import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingCards from "@/components/pricing/PricingCards";
import { getSignedInCustomerEmail } from "@/lib/auth/get-customer-email";
import { getSignedInPaddleCustomerId } from "@/lib/auth/get-paddle-customer-id";
import { getCountryCodeFromHeaders } from "@/lib/geo/country-code";
import {
  getPricingConfigIssue,
  getPricingTiersOrNull,
} from "@/lib/pricing/validate-config";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Planes y precios — iAGO Digital",
  description:
    "Precios claros: tarifa única de desarrollo + suscripción de hosting (y, en SEO/IA, reportes u operación del plan). Básico, SEO o Automatizado con IA.",
  path: "/pricing",
});

export default async function PricingPage() {
  const countryCode = getCountryCodeFromHeaders();
  const customerEmail = await getSignedInCustomerEmail();
  const paddleCustomerId = await getSignedInPaddleCustomerId();
  const configIssue = getPricingConfigIssue();
  const tiers = getPricingTiersOrNull();

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
            montos se muestran abajo según tu país.
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
            customerEmail={customerEmail}
            paddleCustomerId={paddleCustomerId}
          />
        ) : null}
      </main>
      <Footer />
    </>
  );
}
