import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de reembolsos y cancelación — IAGO Digital",
  description:
    "Condiciones de reembolso, cancelación de suscripción y periodo de prueba de IAGO Digital.",
};

export default function RefundPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold tracking-tightest text-ink">
            Política de reembolsos y cancelación
          </h1>
          <p className="mt-2 text-sm text-mute">Última actualización: agosto 2026</p>

          <section className="mt-10 space-y-4 text-mute">
            <h2 className="font-display text-2xl font-bold text-ink">
              1. Tarifa de desarrollo
            </h2>
            <p>
              La tarifa única de desarrollo cubre el trabajo de diseño e
              implementación inicial. Por ser un servicio personalizado que
              comienza tras la compra, normalmente no es reembolsable una vez
              iniciado el proyecto. Si cancelas antes de que empecemos el
              trabajo, contáctanos dentro de 7 días para evaluar un reembolso
              parcial o total.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              2. Suscripción y periodo de prueba
            </h2>
            <p>
              Los planes incluyen dos meses de hosting gratis antes del primer
              cobro de suscripción. Puedes cancelar en cualquier momento desde el
              portal de cliente de Paddle (enlace en /account) para evitar cargos
              futuros. La cancelación surte efecto al final del periodo de
              facturación vigente, salvo indicación contraria en Paddle.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              3. Reembolsos de suscripción
            </h2>
            <p>
              Los cargos de suscripción ya procesados no se reembolsan de forma
              automática, salvo error de cobro o fallo prolongado del servicio
              atribuible a IAGO Digital. Evaluaremos cada caso de forma justa.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              4. Cómo cancelar
            </h2>
            <p>
              Inicia sesión en{" "}
              <a href="/account" className="text-coral underline">
                /account
              </a>
              , abre el portal de Paddle y gestiona tu suscripción. También
              puedes escribirnos a{" "}
              <a
                href="mailto:iagodigitalweb@gmail.com"
                className="text-coral underline"
              >
                iagodigitalweb@gmail.com
              </a>{" "}
              o por{" "}
              <a
                href="https://wa.me/50496784674"
                className="text-coral underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              .
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              5. Contacto
            </h2>
            <p>
              Para solicitudes de reembolso o cancelación:{" "}
              <a
                href="mailto:iagodigitalweb@gmail.com"
                className="text-coral underline"
              >
                iagodigitalweb@gmail.com
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
