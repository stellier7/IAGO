import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getUserSession } from "@/lib/auth/session";
import {
  customerHasAccess,
  getCustomerByEmail,
  getSubscriptionsForCustomer,
  type CustomerRow,
} from "@/lib/subscriptions/repository";
import { isPaddleServerConfigured } from "@/lib/paddle/server";
import { syncCustomerByEmailDetailed } from "@/lib/paddle/sync-state";
import { isDatabaseConnectionError } from "@/lib/db/client";
import {
  describeAccessStatus,
  subscriptionGrantsAccess,
} from "@/lib/subscriptions/access";
import { redirect } from "next/navigation";

interface AccountPageProps {
  searchParams?: { error?: string };
}

export default async function AccountPage({ searchParams }: AccountPageProps) {
  const session = await getUserSession();

  if (!session) {
    redirect("/login?next=/account");
  }

  const error = searchParams?.error;
  let customer: CustomerRow | null = null;
  let databaseError: string | null = null;
  let syncError: string | null = null;

  try {
    customer = await getCustomerByEmail(session.email);
  } catch (error) {
    console.error("[account] Database lookup failed:", error);
    if (isDatabaseConnectionError(error)) {
      databaseError =
        "No pudimos conectar con la base de datos. Verifica que POSTGRES_URL esté configurado en Vercel y que las tablas existan (npm run db:migrate).";
    } else {
      databaseError =
        "No pudimos leer tu cuenta en la base de datos. Revisa la configuración de Postgres.";
    }
  }

  if (!customer && !databaseError) {
    const syncResult = await syncCustomerByEmailDetailed(session.email);
    customer = syncResult.customer;

    if (!customer && isPaddleServerConfigured()) {
      if (syncResult.syncError) {
        syncError = syncResult.syncError.message;
      } else {
        const paddleCustomers = syncResult.diagnostic?.paddleCustomerCount ?? null;
        const syncedCustomers = syncResult.diagnostic?.syncedCustomers ?? null;
        const environment =
          syncResult.diagnostic?.environment ??
          process.env.PADDLE_ENVIRONMENT ??
          "sandbox";

        if (paddleCustomers === 0 || syncedCustomers === 0) {
          syncError =
            `No hay clientes en tu cuenta Paddle (${environment}). ` +
            "Confirma que PADDLE_API_KEY y NEXT_PUBLIC_PADDLE_CLIENT_TOKEN pertenecen a la misma cuenta Paddle " +
            `(actualmente configurada como ${environment}).`;
        } else {
          syncError =
            `Sincronizamos ${syncedCustomers} cliente(s) desde Paddle, pero ninguno coincide con ${session.email}. ` +
            "Usa el mismo email con el que pagaste en checkout.";
        }
      }
    } else if (!customer && !isPaddleServerConfigured()) {
      syncError =
        "Paddle no está configurado en el servidor (PADDLE_API_KEY). No podemos sincronizar tu compra todavía.";
    }
  }

  return (
    <>
      <Nav theme="solid" />
      <main className="min-h-screen bg-bone pb-24 pt-32">
        <div className="mx-auto max-w-content px-6">
          <h1 className="font-display text-4xl font-bold tracking-tightest text-ink">
            Mi cuenta
          </h1>
          <p className="mt-2 text-mute">Sesión: {session.email}</p>

          {databaseError && (
            <p className="mt-6 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm text-coral">
              {databaseError}
            </p>
          )}

          {syncError && (
            <p className="mt-6 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm text-coral">
              {syncError}
            </p>
          )}

          {error === "no-customer" && (
            <p className="mt-6 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm text-coral">
              No encontramos una cuenta de Paddle con este email todavía. Si
              acabas de pagar, espera unos minutos y vuelve a intentar.
            </p>
          )}

          {!databaseError && !syncError && !customer ? (
            <div className="mt-8 rounded-2xl border border-ink-line/15 bg-white p-8">
              <p className="text-sm text-mute">
                Aún no hay datos sincronizados para este email.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition hover:bg-coral"
              >
                Ver planes
              </Link>
            </div>
          ) : customer ? (
            <AccountDetails customerId={customer.customer_id} />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}

async function AccountDetails({ customerId }: { customerId: string }) {
  let subscriptions: Awaited<ReturnType<typeof getSubscriptionsForCustomer>> =
    [];
  let hasAccess = false;
  let databaseError: string | null = null;

  try {
    subscriptions = await getSubscriptionsForCustomer(customerId);
    hasAccess = await customerHasAccess(customerId);
  } catch (error) {
    console.error("[account] Subscription lookup failed:", error);
    databaseError =
      "No pudimos cargar tus suscripciones. Verifica que la migración de base de datos se haya ejecutado.";
  }

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
      {databaseError && (
        <p className="lg:col-span-2 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm text-coral">
          {databaseError}
        </p>
      )}

      <section className="rounded-2xl border border-ink-line/15 bg-white p-8">
        <h2 className="font-display text-2xl font-bold tracking-tightest text-ink">
          Suscripciones
        </h2>
        {subscriptions.length === 0 ? (
          <p className="mt-4 text-sm text-mute">
            No hay suscripciones sincronizadas todavía.
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {subscriptions.map((subscription) => (
              <li
                key={subscription.subscription_id}
                className="rounded-xl border border-ink-line/10 p-4"
              >
                <p className="font-medium text-ink">
                  {subscription.subscription_id}
                </p>
                <p className="mt-1 text-sm text-mute">
                  Estado:{" "}
                  {describeAccessStatus(subscription.status)}
                  {subscriptionGrantsAccess(subscription.status)
                    ? " · acceso activo"
                    : ""}
                </p>
                {subscription.scheduled_change_action && (
                  <p className="mt-1 text-xs text-mute">
                    Cambio programado: {subscription.scheduled_change_action}
                    {subscription.scheduled_change_at
                      ? ` · ${subscription.scheduled_change_at.toISOString()}`
                      : ""}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-2xl border border-ink-line/15 bg-white p-8">
        <h2 className="font-display text-2xl font-bold tracking-tightest text-ink">
          Portal de cliente
        </h2>
        <p className="mt-2 text-sm text-mute">
          Actualiza tu método de pago, cancela o revisa facturas en el portal
          seguro de Paddle.
        </p>
        <p className="mt-4 text-sm text-ink">
          Acceso al producto:{" "}
          <span className={hasAccess ? "text-coral" : "text-mute"}>
            {hasAccess ? "Activo" : "Inactivo"}
          </span>
        </p>
        <Link
          href="/api/account/portal"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition hover:bg-coral"
        >
          Abrir portal de Paddle
        </Link>
        <form action="/api/auth/logout" method="post" className="mt-3">
          <button
            type="submit"
            className="w-full rounded-full border border-ink-line/20 px-6 py-3 text-sm font-medium text-ink transition hover:bg-bone"
          >
            Cerrar sesión
          </button>
        </form>
      </section>
    </div>
  );
}
