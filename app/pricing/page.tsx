import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingCards from "@/components/pricing/PricingCards";
import { getSignedInCustomerEmail } from "@/lib/auth/get-customer-email";
import { getSignedInPaddleCustomerId } from "@/lib/auth/get-paddle-customer-id";
import { getCountryCodeFromHeaders } from "@/lib/geo/country-code";
import { getPricingTiers } from "@/lib/pricing/tiers";

export const metadata: Metadata = {
  title: "Planes y precios — IAGO Digital",
  description:
    "Elige el plan Básico, SEO o Automatizado con IA. Precios localizados y suscripción segura con Paddle.",
};

export default async function PricingPage() {
  const countryCode = getCountryCodeFromHeaders();
  const customerEmail = await getSignedInCustomerEmail();
  const paddleCustomerId = await getSignedInPaddleCustomerId();
  const tiers = getPricingTiers();

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
            Pagas el desarrollo hoy. Te regalamos los primeros 2 meses de
            hosting — la suscripción empieza a cobrarse después.
          </p>
        </div>

        <PricingCards
          tiers={tiers}
          countryCode={countryCode}
          customerEmail={customerEmail}
          paddleCustomerId={paddleCustomerId}
        />
      </main>
      <Footer />
    </>
  );
}
