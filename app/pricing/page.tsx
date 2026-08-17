import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";
import { getSignedInCustomerEmail } from "@/lib/auth/session";
import { getVisitorCountryCode } from "@/lib/paddle/country";
import { getPaddlePublicConfig } from "@/lib/paddle/env";
import { tiers } from "@/lib/paddle/tiers";

export const metadata: Metadata = {
  title: "Precios — IAGO Digital",
  description:
    "Planes de Pagina Web Basica, SEO y Automatizaciones con precios localizados y prueba gratis de 7 dias.",
};

export default function PricingPage() {
  const { environment, clientToken } = getPaddlePublicConfig();
  const countryCode = getVisitorCountryCode();
  const customerEmail = getSignedInCustomerEmail();

  return (
    <>
      <Nav variant="light" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-content px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-coral">
            Precios
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tightest md:text-5xl">
            Elige el plan que impulse tu negocio
          </h1>
          <p className="mt-4 max-w-xl text-mute">
            Precios localizados según tu país. Todos los planes incluyen 7 días
            de prueba gratis.
          </p>

          <div className="mt-16">
            <PricingTable
              tiers={tiers}
              paddleEnvironment={environment}
              paddleClientToken={clientToken}
              countryCode={countryCode}
              customerEmail={customerEmail}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
