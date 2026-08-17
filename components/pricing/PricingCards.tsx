"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import {
  CONTACT_TIER,
  PRICING_TIERS,
  type BillingCycle,
  type Tier,
  getPriceIdsForCycle,
  getSubscriptionPriceId,
} from "@/lib/pricing/tiers";
import { getPaddleClientConfig } from "@/lib/paddle/config";

interface PricingCardsProps {
  countryCode?: string;
  customerEmail?: string | null;
}

type PriceMap = Record<string, string>;

function buildPriceMap(
  lineItems: Array<{ price: { id: string }; formattedTotals: { subtotal: string } }>,
): PriceMap {
  return Object.fromEntries(
    lineItems.map((item) => [item.price.id, item.formattedTotals.subtotal]),
  );
}

function PriceSkeleton({ highlighted }: { highlighted?: boolean }) {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div
        className={`h-5 w-40 animate-pulse rounded ${
          highlighted ? "bg-bone/20" : "bg-bone"
        }`}
      />
      <div
        className={`h-10 w-32 animate-pulse rounded-lg ${
          highlighted ? "bg-bone/20" : "bg-bone"
        }`}
      />
    </div>
  );
}

export default function PricingCards({
  countryCode,
  customerEmail,
}: PricingCardsProps) {
  const [paddle, setPaddle] = useState<Paddle>();
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("month");
  const [prices, setPrices] = useState<PriceMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkoutTier, setCheckoutTier] = useState<Tier | null>(null);

  const paddleConfig = useMemo(() => getPaddleClientConfig(), []);

  useEffect(() => {
    let cancelled = false;

    initializePaddle({
      environment: paddleConfig.environment,
      token: paddleConfig.token,
    }).then((instance) => {
      if (!cancelled && instance) {
        setPaddle(instance);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [paddleConfig.environment, paddleConfig.token]);

  const fetchPrices = useCallback(
    async (cycle: BillingCycle) => {
      if (!paddle?.PricePreview) {
        return;
      }

      setLoading(true);
      setError(null);

      const priceIds = getPriceIdsForCycle(cycle);
      const request: Parameters<Paddle["PricePreview"]>[0] = {
        items: priceIds.map((priceId) => ({ priceId, quantity: 1 })),
      };

      if (countryCode) {
        request.address = { countryCode };
      }

      try {
        const result = await paddle.PricePreview(request);
        setPrices(buildPriceMap(result.data.details.lineItems));
      } catch (err) {
        console.error("Paddle PricePreview failed:", err);
        setError("No pudimos cargar los precios. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    },
    [countryCode, paddle],
  );

  useEffect(() => {
    if (paddle) {
      fetchPrices(billingCycle);
    }
  }, [billingCycle, fetchPrices, paddle]);

  const handleSubscribe = (tier: Tier) => {
    if (!paddle?.Checkout) {
      return;
    }

    const subscriptionPriceId = getSubscriptionPriceId(tier, billingCycle);

    setCheckoutTier(tier);

    paddle.Checkout.open({
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        successUrl: `${window.location.origin}/welcome`,
      },
      items: [
        { priceId: subscriptionPriceId, quantity: 1 },
        { priceId: tier.developmentFeePriceId, quantity: 1 },
      ],
      customer: customerEmail ? { email: customerEmail } : undefined,
    });

    setCheckoutTier(null);
  };

  return (
    <div className="mx-auto max-w-content px-6">
      <div className="mb-12 flex flex-col items-center gap-4">
        <div className="inline-flex rounded-full border border-ink-line/20 bg-white p-1">
          <button
            type="button"
            onClick={() => setBillingCycle("month")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              billingCycle === "month"
                ? "bg-ink text-bone"
                : "text-mute hover:text-ink"
            }`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("year")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              billingCycle === "year"
                ? "bg-ink text-bone"
                : "text-mute hover:text-ink"
            }`}
          >
            Anual
          </button>
        </div>
        {billingCycle === "year" && (
          <p className="text-sm text-coral">Ahorra con facturación anual</p>
        )}
      </div>

      {error && (
        <p className="mb-8 text-center text-sm text-coral" role="alert">
          {error}
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PRICING_TIERS.map((tier) => {
          const subscriptionPriceId = getSubscriptionPriceId(
            tier,
            billingCycle,
          );
          const developmentPrice = prices[tier.developmentFeePriceId];
          const subscriptionPrice = prices[subscriptionPriceId];
          const pricesReady = Boolean(developmentPrice && subscriptionPrice);
          const isHighlighted = tier.highlighted;

          return (
            <article
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 transition ${
                isHighlighted
                  ? "border-coral bg-ink text-bone shadow-xl shadow-coral/10"
                  : "border-ink-line/15 bg-white"
              }`}
            >
              {isHighlighted && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-coral px-3 py-1 text-xs font-medium text-white">
                  Más popular
                </span>
              )}

              <h2
                className={`font-display text-2xl font-bold tracking-tightest ${
                  isHighlighted ? "text-bone" : "text-ink"
                }`}
              >
                {tier.displayName}
              </h2>
              <p
                className={`mt-2 text-sm ${
                  isHighlighted ? "text-bone/70" : "text-mute"
                }`}
              >
                {tier.description}
              </p>

              <div className="my-8 min-h-[5.5rem]">
                {loading || !pricesReady ? (
                  <PriceSkeleton highlighted={isHighlighted} />
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p
                        className={`text-xs font-medium uppercase tracking-wider ${
                          isHighlighted ? "text-bone/50" : "text-mute"
                        }`}
                      >
                        Desarrollo (pago único)
                      </p>
                      <p className="font-display text-2xl font-bold tracking-tightest">
                        {developmentPrice}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-xs font-medium uppercase tracking-wider ${
                          isHighlighted ? "text-bone/50" : "text-mute"
                        }`}
                      >
                        Suscripción
                      </p>
                      <p className="font-display text-2xl font-bold tracking-tightest">
                        {subscriptionPrice}
                        <span
                          className={`ml-1 text-sm font-normal ${
                            isHighlighted ? "text-bone/60" : "text-mute"
                          }`}
                        >
                          /{billingCycle === "month" ? "mes" : "año"}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      isHighlighted ? "text-bone/80" : "text-ink"
                    }`}
                  >
                    <span
                      className={`mt-0.5 shrink-0 ${
                        isHighlighted ? "text-coral-bright" : "text-coral"
                      }`}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleSubscribe(tier)}
                disabled={loading || !pricesReady || !paddle}
                className={`w-full rounded-full px-6 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${
                  isHighlighted
                    ? "bg-coral text-white hover:bg-coral-bright"
                    : "bg-ink text-bone hover:bg-coral"
                }`}
              >
                {checkoutTier?.name === tier.name ? "Abriendo…" : "Suscribirse"}
              </button>
            </article>
          );
        })}

        <article className="flex flex-col rounded-2xl border border-dashed border-ink-line/30 bg-bone p-8">
          <span className="mb-4 inline-flex w-fit rounded-full border border-ink-line/20 px-3 py-1 text-xs font-medium text-mute">
            Negociable
          </span>

          <h2 className="font-display text-2xl font-bold tracking-tightest text-ink">
            {CONTACT_TIER.displayName}
          </h2>
          <p className="mt-2 text-sm text-mute">{CONTACT_TIER.description}</p>

          <div className="my-8 min-h-[5.5rem] flex items-center">
            <p className="font-display text-2xl font-bold tracking-tightest text-ink">
              Precio personalizado
            </p>
          </div>

          <ul className="mb-8 flex-1 space-y-3">
            {CONTACT_TIER.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-ink"
              >
                <span className="mt-0.5 shrink-0 text-coral" aria-hidden="true">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={CONTACT_TIER.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-ink px-6 py-3 text-center text-sm font-medium text-ink transition hover:bg-ink hover:text-bone"
          >
            {CONTACT_TIER.contactLabel}
          </a>
        </article>
      </div>

      <p className="mt-10 text-center text-xs text-mute">
        Los precios incluyen impuestos estimados según tu ubicación. Al
        suscribirte, el checkout incluye la tarifa de desarrollo inicial más la
        suscripción recurrente.
      </p>
    </div>
  );
}
