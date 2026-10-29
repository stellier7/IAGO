import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  isHalloweenPromoActive,
  quoteDiscountedPrice,
} from "./halloween-discount.ts";

describe("quoteDiscountedPrice", () => {
  it("takes 20% off USD list prices from minor units", () => {
    assert.deepEqual(
      quoteDiscountedPrice({
        formatted: "$35.00",
        amountMinor: "3500",
        currencyCode: "USD",
      }),
      { original: "$35.00", discounted: "$28.00" },
    );
    assert.equal(
      quoteDiscountedPrice({
        formatted: "$350.00",
        amountMinor: 35000,
        currencyCode: "USD",
      }).discounted,
      "$280.00",
    );
    assert.equal(
      quoteDiscountedPrice({
        formatted: "$1,200.00",
        amountMinor: "120000",
        currencyCode: "USD",
      }).discounted,
      "$960.00",
    );
  });

  it("keeps regional currency symbols and separators", () => {
    assert.equal(
      quoteDiscountedPrice({
        formatted: "£28.00",
        amountMinor: "2800",
        currencyCode: "GBP",
      }).discounted,
      "£22.40",
    );
    assert.equal(
      quoteDiscountedPrice({
        formatted: "€32,00",
        amountMinor: "3200",
        currencyCode: "EUR",
      }).discounted,
      "€25,60",
    );
    assert.equal(
      quoteDiscountedPrice({
        formatted: "A$1,750.00",
        amountMinor: "175000",
        currencyCode: "AUD",
      }).discounted,
      "A$1,400.00",
    );
    assert.equal(
      quoteDiscountedPrice({
        formatted: "€1.100,00",
        amountMinor: "110000",
        currencyCode: "EUR",
      }).discounted,
      "€880,00",
    );
  });

  it("handles zero-decimal currencies and spaced thousands", () => {
    assert.equal(
      quoteDiscountedPrice({
        formatted: "¥1,200",
        amountMinor: "1200",
        currencyCode: "JPY",
      }).discounted,
      "¥960",
    );
    assert.equal(
      quoteDiscountedPrice({
        formatted: "€1\u00A0100,00",
        amountMinor: "110000",
        currencyCode: "EUR",
      }).discounted,
      "€880,00",
    );
  });

  it("falls back to the formatted amount when minor units are missing", () => {
    assert.equal(
      quoteDiscountedPrice({ formatted: "$80.00" }).discounted,
      "$64.00",
    );
  });

  it("leaves unpriced copy unchanged", () => {
    assert.deepEqual(quoteDiscountedPrice({ formatted: "Precio personalizado" }), {
      original: "Precio personalizado",
      discounted: "Precio personalizado",
    });
  });
});

describe("isHalloweenPromoActive", () => {
  it("ends at midnight on 4 Nov 2026 in Tegucigalpa", () => {
    assert.equal(
      isHalloweenPromoActive(new Date("2026-10-29T18:00:00-06:00")),
      true,
    );
    assert.equal(
      isHalloweenPromoActive(new Date("2026-11-03T23:59:59-06:00")),
      true,
    );
    assert.equal(
      isHalloweenPromoActive(new Date("2026-11-04T05:59:59.999Z")),
      true,
    );
    assert.equal(
      isHalloweenPromoActive(new Date("2026-11-04T00:00:00-06:00")),
      false,
    );
    assert.equal(
      isHalloweenPromoActive(new Date("2026-11-04T06:00:00.000Z")),
      false,
    );
  });
});
