"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  initializePaddle,
  type Environments,
  type Paddle,
  type PricePreviewResponse,
} from "@paddle/paddle-js";
import type { Tier } from "@/lib/paddle/tiers";

type BillingCycle = "month" | "year";

interface PricingTableProps {
  tiers: Tier[];
  paddleEnvironment: Environments;
  paddleClientToken: string;
  countryCode?: string;
  customerEmail?: string;
}

function priceForTier(
  preview: PricePreviewResponse | null,
  tier: Tier,
  cycle: BillingCycle,
): string | null {
  if (!preview) return null;
  const priceId =
    cycle === "month" ? tier.priceId.month : tier.priceId.year;
  const line = preview.data.details.lineItems.find(
    (item) => item.price.id === priceId,
  );
  return line?.formattedTotals.subtotal ?? null;
}

export default function PricingTable({
  tiers,
  paddleEnvironment,
  paddleClientToken,
  countryCode,
  customerEmail,
}: PricingTableProps) {
  const [paddle, setPaddle] = useState<Paddle>();
  const [cycle, setCycle] = useState<BillingCycle>("month");
  const [preview, setPreview] = useState<PricePreviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkoutTier, setCheckoutTier] = useState<Tier | null>(null);

  const successUrl = useMemo(() => {
    if (typeof window === "undefined") return "/welcome";
    return `${window.location.origin}/welcome`;
  }, []);

  useEffect(() => {
    let cancelled = false;

    initializePaddle({
      environment: paddleEnvironment,
      token: paddleClientToken,
    }).then((instance) => {
      if (!cancelled && instance) {
        setPaddle(instance);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [paddleEnvironment, paddleClientToken]);

  const fetchPrices = useCallback(async () => {
    if (!paddle) return;

    setLoading(true);
    setError(null);

    const items = tiers.map((tier) => ({
      quantity: 1,
      priceId: cycle === "month" ? tier.priceId.month : tier.priceId.year,
    }));

    const request: Parameters<Paddle["PricePreview"]>[0] = { items };
    if (countryCode) {
      request.address = { countryCode };
    }

    try {
      const result = await paddle.PricePreview(request);
      setPreview(result);
    } catch (err) {
      console.error(err);
      setError("No pudimos cargar los precios. Intenta de nuevo.");
      setPreview(null);
    } finally {
      setLoading(false);
    }
  }, [paddle, tiers, cycle, countryCode]);

  useEffect(() => {
    void fetchPrices();
  }, [fetchPrices]);

  const openCheckout = (tier: Tier) => {
    if (!paddle) return;

    const priceId =
      cycle === "month" ? tier.priceId.month : tier.priceId.year;

    setCheckoutTier(tier);
    paddle.Checkout.open({
      settings: {
        displayMode: "overlay",
        variant: "one-page",
        successUrl,
      },
      items: [{ priceId, quantity: 1 }],
      ...(customerEmail
        ? { customer: { email: customerEmail } }
        : {}),
    });
    setCheckoutTier(null);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div
          className="inline-flex rounded-full border border-ink/10 bg-white p-1"
          role="group"
          aria-label="Periodo de facturación"
        >
          <button
            type="button"
            onClick={() => setCycle("month")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              cycle === "month"
                ? "bg-ink text-bone"
                : "text-mute hover:text-ink"
            }`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setCycle("year")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              cycle === "year"
                ? "bg-ink text-bone"
                : "text-mute hover:text-ink"
            }`}
          >
            Anual
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-8 text-center text-sm text-coral" role="alert">
          {error}
        </p>
      )}

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((tier, index) => {
          const formattedPrice = priceForTier(preview, tier, cycle);
          const isFeatured = tier.name === "SEO";

          return (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition ${
                isFeatured
                  ? "border-coral bg-ink text-bone shadow-xl"
                  : "border-ink/10 bg-white"
              }`}
            >
              {isFeatured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-3 py-1 text-xs font-medium text-white">
                  Más popular
                </span>
              )}

              <span
                className={`font-display text-5xl font-bold ${
                  isFeatured ? "text-bone/20" : "text-ink/10"
                }`}
              >
                0{index + 1}
              </span>

              <h2 className="mt-4 font-display text-2xl font-bold">
                {tier.name}
              </h2>
              <p
                className={`mt-2 text-sm ${
                  isFeatured ? "text-bone/70" : "text-mute"
                }`}
              >
                {tier.description}
              </p>

              <p
                className="mt-8 min-h-[2.5rem] font-display text-4xl font-bold tracking-tight"
                aria-live="polite"
              >
                {loading || !formattedPrice ? (
                  <span
                    className={`inline-block h-9 w-32 animate-pulse rounded ${
                      isFeatured ? "bg-bone/20" : "bg-ink/10"
                    }`}
                    aria-hidden
                  />
                ) : (
                  formattedPrice
                )}
              </p>
              <p
                className={`mt-1 text-sm ${
                  isFeatured ? "text-bone/60" : "text-mute"
                }`}
              >
                {cycle === "month" ? "por mes" : "por año"}
              </p>

              <ul
                className={`mt-8 flex-1 space-y-3 text-sm ${
                  isFeatured ? "text-bone/80" : "text-ink/80"
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-coral" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                disabled={!paddle || loading || !!error}
                onClick={() => openCheckout(tier)}
                className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${
                  isFeatured
                    ? "bg-coral text-white hover:bg-coral-bright"
                    : "bg-ink text-bone hover:bg-coral"
                }`}
              >
                {checkoutTier?.name === tier.name ? "Abriendo…" : "Suscribirse"}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
