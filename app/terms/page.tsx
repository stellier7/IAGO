import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y condiciones — IAGO Digital",
  description:
    "Términos y condiciones de uso de los servicios de diseño web, hosting y suscripción de IAGO Digital.",
};

export default function TermsPage() {
  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <article className="mx-auto max-w-3xl px-6 prose prose-ink">
          <h1 className="font-display text-4xl font-bold tracking-tightest text-ink">
            Términos y condiciones
          </h1>
          <p className="mt-2 text-sm text-mute">Última actualización: agosto 2026</p>

          <section className="mt-10 space-y-4 text-ink">
            <h2 className="font-display text-2xl font-bold">1. Servicio</h2>
            <p className="text-mute">
              IAGO Digital ofrece diseño, desarrollo, hosting y mantenimiento de
              sitios web mediante planes de suscripción (Básico, SEO y
              Automatizado con IA). Cada plan incluye una tarifa única de
              desarrollo y una suscripción recurrente con periodo de prueba de
              hosting antes del primer cobro de suscripción.
            </p>

            <h2 className="font-display text-2xl font-bold">2. Pagos</h2>
            <p className="text-mute">
              Los pagos se procesan de forma segura a través de Paddle. Al
              suscribirte, autorizas el cobro de la tarifa de desarrollo al
              momento del checkout y los cargos recurrentes de suscripción según
              el plan elegido. Los impuestos aplicables se calculan según tu
              ubicación.
            </p>

            <h2 className="font-display text-2xl font-bold">3. Entrega</h2>
            <p className="text-mute">
              Tras confirmar el pago, iniciaremos el proyecto según el alcance
              del plan contratado. Los plazos se acordarán por email o WhatsApp.
              El acceso continuo al hosting y servicios incluidos depende de una
              suscripción activa.
            </p>

            <h2 className="font-display text-2xl font-bold">4. Uso aceptable</h2>
            <p className="text-mute">
              No puedes usar nuestros servicios para contenido ilegal, spam,
              malware ni actividades que infrinjan derechos de terceros. Podemos
              suspender el servicio ante uso indebido.
            </p>

            <h2 className="font-display text-2xl font-bold">5. Limitación de responsabilidad</h2>
            <p className="text-mute">
              Nuestros servicios se prestan &quot;tal cual&quot;. No garantizamos
              resultados comerciales específicos (por ejemplo, posiciones en
              buscadores). Nuestra responsabilidad se limita al monto pagado en
              los últimos doce meses por el servicio afectado, salvo que la ley
              exija lo contrario.
            </p>

            <h2 className="font-display text-2xl font-bold">6. Contacto</h2>
            <p className="text-mute">
              IAGO Digital —{" "}
              <a
                href="mailto:iagodigitalweb@gmail.com"
                className="text-coral underline"
              >
                iagodigitalweb@gmail.com
              </a>
              {" · "}
              <a
                href="https://wa.me/50496784674"
                className="text-coral underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp +504 9678 4674
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
