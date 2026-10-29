"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  initializePaddle,
  type Paddle,
  type PricePreviewResponse,
} from "@paddle/paddle-js";
import {
  CONTACT_TIER,
  type BillingCycle,
  type Tier,
  getPriceIdsForCycle,
  getCustomPlanWhatsAppHref,
  getSubscribeWhatsAppHref,
  getSubscriptionPriceId,
} from "@/lib/pricing/tiers";
import { getPaddleClientConfig } from "@/lib/paddle/config";
import {
  HALLOWEEN_DISCOUNT_PERCENT,
  quoteDiscountedPrice,
  type DiscountQuote,
} from "@/lib/pricing/halloween-discount";

interface PricingCardsProps {
  tiers: Tier[];
  countryCode?: string;
}

type PreviewLineItem = PricePreviewResponse["data"]["details"]["lineItems"][number];

type PriceMap = Record<string, DiscountQuote>;

function buildPriceMap(
  lineItems: PreviewLineItem[],
  currencyCode: string | undefined,
  developmentFeeIds: ReadonlySet<string>,
): PriceMap {
  return Object.fromEntries(
    lineItems.map((item) => {
      const formatted = item.formattedTotals.subtotal;
      const quote = developmentFeeIds.has(item.price.id)
        ? quoteDiscountedPrice({
            formatted,
            amountMinor: item.totals?.subtotal,
            currencyCode,
          })
        : { original: formatted, discounted: formatted };
      return [item.price.id, quote];
    }),
  );
}

function QuotedPrice({
  label,
  quote,
  suffix,
  onSale,
}: {
  label: string;
  quote: DiscountQuote;
  suffix?: string;
  onSale?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-halloween-mist/60">
        {label}
      </p>
      {onSale ? (
        <p className="text-sm text-bone/60 line-through decoration-halloween-pumpkin/80">
          <span className="sr-only">Precio de lista: </span>
          {quote.original}
        </p>
      ) : null}
      <p
        className={`font-display text-3xl font-bold tracking-tightest ${
          onSale ? "text-halloween-glow" : "text-bone"
        }`}
      >
        {onSale ? (
          <span className="sr-only">
            Con {HALLOWEEN_DISCOUNT_PERCENT}% de descuento Halloween:{" "}
          </span>
        ) : null}
        {onSale ? quote.discounted : quote.original}
        {suffix ? (
          <span className="ml-1 text-sm font-normal text-halloween-mist/70">
            {suffix}
          </span>
        ) : null}
      </p>
    </div>
  );
}

function PriceSkeleton({ highlighted }: { highlighted?: boolean }) {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div
        className={`h-5 w-40 animate-pulse rounded ${
          highlighted ? "bg-halloween-pumpkin/30" : "bg-bone/15"
        }`}
      />
      <div
        className={`h-10 w-32 animate-pulse rounded-lg ${
          highlighted ? "bg-halloween-pumpkin/30" : "bg-bone/15"
        }`}
      />
    </div>
  );
}

export default function HalloweenPricingCards({ tiers, countryCode }: PricingCardsProps) {
  const [paddle, setPaddle] = useState<Paddle>();
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("month");
  const [prices, setPrices] = useState<PriceMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

      const priceIds = getPriceIdsForCycle(tiers, cycle);
      const request: Parameters<Paddle["PricePreview"]>[0] = {
        items: priceIds.map((priceId) => ({ priceId, quantity: 1 })),
      };

      if (countryCode) {
        request.address = { countryCode };
      }

      try {
        const result = await paddle.PricePreview(request);
        setPrices(
          buildPriceMap(
            result.data.details.lineItems,
            result.data.currencyCode,
            new Set(tiers.map((tier) => tier.developmentFeePriceId)),
          ),
        );
      } catch (err) {
        console.error("Paddle PricePreview failed:", err);
        const detail =
          paddleConfig.environment === "production"
            ? "El sitio usa Paddle live pero los price IDs no coinciden con tu cuenta live. " +
              "Crea el catálogo live, agrega PADDLE_PRICE_* en Vercel y redeploy."
            : "Revisa NEXT_PUBLIC_PADDLE_CLIENT_TOKEN y que los price IDs existan en sandbox.";
        setError(`No pudimos cargar los precios. ${detail}`);
      } finally {
        setLoading(false);
      }
    },
    [countryCode, paddle, paddleConfig.environment, tiers],
  );

  useEffect(() => {
    if (paddle) {
      fetchPrices(billingCycle);
    }
  }, [billingCycle, fetchPrices, paddle]);

  return (
    <div className="mx-auto max-w-content px-6">
      <div className="mb-12 flex flex-col items-center gap-4">
        <div className="inline-flex rounded-full border border-halloween-pumpkin/30 bg-halloween-card/80 p-1">
          <button
            type="button"
            onClick={() => setBillingCycle("month")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              billingCycle === "month"
                ? "bg-halloween-pumpkin text-halloween-night"
                : "text-halloween-mist/70 hover:text-bone"
            }`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("year")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              billingCycle === "year"
                ? "bg-halloween-pumpkin text-halloween-night"
                : "text-halloween-mist/70 hover:text-bone"
            }`}
          >
            Anual
          </button>
        </div>
        <p className="text-sm text-halloween-glow">
          −{HALLOWEEN_DISCOUNT_PERCENT}% Halloween solo en el desarrollo. La
          suscripción queda a precio de lista
          {billingCycle === "year"
            ? " · el plan anual ya cuesta menos que doce meses"
            : ""}
        </p>
      </div>

      {error && (
        <p className="mb-8 text-center text-sm text-halloween-glow" role="alert">
          {error}
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => {
          const subscriptionPriceId = getSubscriptionPriceId(
            tier,
            billingCycle,
          );
          const developmentPrice = prices[tier.developmentFeePriceId];
          const subscriptionPrice = prices[subscriptionPriceId];
          const isHighlighted = tier.highlighted;
          const subscribeHref = getSubscribeWhatsAppHref(tier, {
            halloweenPromo: true,
          });

          return (
            <article
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 transition ${
                isHighlighted
                  ? "border-halloween-pumpkin bg-halloween-card text-bone shadow-xl shadow-halloween-pumpkin/20"
                  : "border-halloween-pumpkin/25 bg-halloween-night/70 text-bone"
              }`}
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex w-fit rounded-full bg-halloween-pumpkin px-3 py-1 text-xs font-medium text-halloween-night">
                  −{HALLOWEEN_DISCOUNT_PERCENT}% desarrollo
                </span>
                {isHighlighted && (
                  <span className="inline-flex w-fit rounded-full border border-halloween-glow/40 px-3 py-1 text-xs font-medium text-halloween-glow">
                    Más popular
                  </span>
                )}
              </div>

              <h2 className="font-display text-2xl font-bold tracking-tightest text-bone">
                {tier.displayName}
              </h2>
              <p className="mt-2 text-sm text-halloween-mist/75">
                {tier.description}
              </p>

              <div className="my-8 min-h-[8.5rem]">
                {loading || !developmentPrice || !subscriptionPrice ? (
                  <PriceSkeleton highlighted={isHighlighted} />
                ) : (
                  <div className="space-y-4">
                    <QuotedPrice
                      label="Desarrollo (pago único)"
                      quote={developmentPrice}
                      onSale
                    />
                    <QuotedPrice
                      label="Suscripción"
                      quote={subscriptionPrice}
                      suffix={`/${billingCycle === "month" ? "mes" : "año"}`}
                    />
                  </div>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-bone/85"
                  >
                    <span
                      className="mt-0.5 shrink-0 text-halloween-pumpkin"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={subscribeHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full rounded-full px-6 py-3 text-center text-sm font-medium transition ${
                  isHighlighted
                    ? "bg-halloween-pumpkin text-halloween-night hover:bg-halloween-glow"
                    : "bg-bone text-halloween-night hover:bg-halloween-pumpkin"
                }`}
              >
                Suscribirse
              </a>
            </article>
          );
        })}

        <article className="flex flex-col rounded-2xl border border-dashed border-halloween-pumpkin/40 bg-halloween-card/50 p-8 text-bone">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex w-fit rounded-full bg-halloween-pumpkin px-3 py-1 text-xs font-medium text-halloween-night">
              −{HALLOWEEN_DISCOUNT_PERCENT}% desarrollo
            </span>
            <span className="inline-flex w-fit rounded-full border border-halloween-mist/30 px-3 py-1 text-xs font-medium text-halloween-mist">
              Negociable
            </span>
          </div>

          <h2 className="font-display text-2xl font-bold tracking-tightest text-bone">
            {CONTACT_TIER.displayName}
          </h2>
          <p className="mt-2 text-sm text-halloween-mist/75">
            {CONTACT_TIER.description}
          </p>

          <div className="my-8 flex min-h-[5.5rem] flex-col justify-center">
            <p className="font-display text-2xl font-bold tracking-tightest text-bone">
              Precio personalizado
            </p>
            <p className="mt-2 text-sm text-halloween-glow">
              {HALLOWEEN_DISCOUNT_PERCENT}% de descuento en el desarrollo de la
              cotización. El retainer, si aplica, queda a precio de lista.
            </p>
          </div>

          <ul className="mb-8 flex-1 space-y-3">
            {CONTACT_TIER.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-bone/85"
              >
                <span
                  className="mt-0.5 shrink-0 text-halloween-pumpkin"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={getCustomPlanWhatsAppHref(true)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-halloween-pumpkin px-6 py-3 text-center text-sm font-medium text-halloween-glow transition hover:bg-halloween-pumpkin hover:text-halloween-night"
          >
            {CONTACT_TIER.contactLabel}
          </a>
        </article>
      </div>

      <p className="mt-10 text-center text-xs text-halloween-mist/70">
        Por ahora las suscripciones se coordinan por WhatsApp: te confirmamos
        alcance, el {HALLOWEEN_DISCOUNT_PERCENT}% de Halloween en el desarrollo
        y el método de pago. Detalle de reembolsos en{" "}
        <a
          href="/refund"
          className="underline underline-offset-2 hover:text-bone"
        >
          política de reembolso
        </a>
        .
      </p>
    </div>
  );
}
