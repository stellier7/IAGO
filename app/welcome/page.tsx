import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function WelcomePage() {
  return (
    <>
      <Nav variant="light" />
      <main className="flex min-h-screen flex-col items-center justify-center bg-bone px-6 pb-24 pt-32 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-coral">
          Bienvenido
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tightest md:text-5xl">
          ¡Gracias por suscribirte!
        </h1>
        <p className="mt-4 max-w-md text-mute">
          Tu pago se procesó correctamente. En breve recibirás un correo con los
          detalles de tu suscripción.
        </p>
        <Link
          href="/"
          className="mt-10 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition hover:bg-coral"
        >
          Volver al inicio
        </Link>
      </main>
      <Footer />
    </>
  );
}
