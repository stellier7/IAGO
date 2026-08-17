import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de privacidad — IAGO Digital",
  description:
    "Cómo IAGO Digital recopila, usa y protege tus datos personales.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold tracking-tightest text-ink">
            Política de privacidad
          </h1>
          <p className="mt-2 text-sm text-mute">Última actualización: agosto 2026</p>

          <section className="mt-10 space-y-4 text-mute">
            <h2 className="font-display text-2xl font-bold text-ink">
              1. Datos que recopilamos
            </h2>
            <p>
              Recopilamos tu nombre, email y datos de facturación cuando te
              suscribes o nos contactas. Paddle procesa los pagos y puede
              recopilar datos adicionales necesarios para cumplir obligaciones
              fiscales y de prevención de fraude.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              2. Uso de los datos
            </h2>
            <p>
              Usamos tus datos para prestar el servicio, gestionar tu suscripción,
              enviarte comunicaciones sobre tu cuenta y mejorar nuestros productos.
              No vendemos tus datos personales a terceros.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              3. Proveedores
            </h2>
            <p>
              Compartimos datos con proveedores que nos ayudan a operar el
              servicio, incluyendo Paddle (pagos), Vercel (hosting) y Supabase
              (base de datos), bajo acuerdos de confidencialidad y procesamiento
              de datos.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              4. Cookies y sesión
            </h2>
            <p>
              Usamos cookies de sesión para mantener tu inicio de sesión en
              /account. Paddle puede usar cookies propias durante el checkout.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              5. Tus derechos
            </h2>
            <p>
              Puedes solicitar acceso, corrección o eliminación de tus datos
              escribiendo a{" "}
              <a
                href="mailto:iagodigitalweb@gmail.com"
                className="text-coral underline"
              >
                iagodigitalweb@gmail.com
              </a>
              . Responderemos en un plazo razonable según la ley aplicable.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink">
              6. Contacto
            </h2>
            <p>
              IAGO Digital —{" "}
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
