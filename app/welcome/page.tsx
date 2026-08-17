import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "¡Bienvenido! — IAGO Digital",
  description: "Tu suscripción a IAGO Digital está activa.",
  robots: { index: false },
};

export default function WelcomePage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="flex min-h-screen items-center justify-center bg-bone px-6 pb-24 pt-32">
        <div className="max-w-lg text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-coral/10">
            <span className="text-3xl text-coral" aria-hidden="true">
              ✓
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tightest text-ink">
            ¡Bienvenido a IAGO!
          </h1>
          <p className="mt-4 text-mute">
            Tu suscripción se procesó correctamente. Revisa tu email para los
            detalles de facturación y nos pondremos en contacto contigo pronto
            para comenzar.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-ink px-8 py-3 text-sm font-medium text-bone transition hover:bg-coral"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
