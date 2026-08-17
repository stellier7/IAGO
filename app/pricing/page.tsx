import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingCards from "@/components/pricing/PricingCards";
import { getSignedInCustomerEmail } from "@/lib/auth/get-customer-email";
import { getCountryCodeFromHeaders } from "@/lib/geo/country-code";

export const metadata: Metadata = {
  title: "Planes y precios — IAGO Digital",
  description:
    "Elige el plan Básico, SEO o Automatizado con IA. Precios localizados y suscripción segura con Paddle.",
};

export default async function PricingPage() {
  const countryCode = getCountryCodeFromHeaders();
  const customerEmail = await getSignedInCustomerEmail();

  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto mb-16 max-w-content px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-coral">
            Planes
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tightest text-ink md:text-5xl">
            El plan perfecto para tu negocio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-mute">
            Sitios web, SEO y automatización con IA. Precios en tu moneda local,
            facturación mensual o anual.
          </p>
        </div>

        <PricingCards
          countryCode={countryCode}
          customerEmail={customerEmail}
        />
      </main>
      <Footer />
    </>
  );
}
