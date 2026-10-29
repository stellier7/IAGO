"use client";

import HalloweenPricingCards from "@/components/pricing/HalloweenPricingCards";
import StandardPricingCards from "@/components/pricing/StandardPricingCards";
import type { Tier } from "@/lib/pricing/tiers";

interface PricingCardsProps {
  tiers: Tier[];
  countryCode?: string;
  halloweenPromo: boolean;
}

export default function PricingCards({
  halloweenPromo,
  tiers,
  countryCode,
}: PricingCardsProps) {
  if (halloweenPromo) {
    return <HalloweenPricingCards tiers={tiers} countryCode={countryCode} />;
  }

  return <StandardPricingCards tiers={tiers} countryCode={countryCode} />;
}
