export const HALLOWEEN_DISCOUNT_PERCENT = 20;

export interface DiscountQuoteInput {
  formatted: string;
  amountMinor?: string | number;
  currencyCode?: string;
  percent?: number;
}

export interface DiscountQuote {
  original: string;
  discounted: string;
}

interface NumericToken {
  text: string;
  start: number;
  end: number;
  fractionDigits: number;
  decimalSep: "." | ",";
  groupSep: string;
}

function currencyFractionDigits(currencyCode: string): number {
  try {
    const digits = new Intl.NumberFormat("en", {
      style: "currency",
      currency: currencyCode,
    }).resolvedOptions().maximumFractionDigits;
    return digits ?? 2;
  } catch {
    return 2;
  }
}

function applyPercentOffMinor(amountMinor: number, percent: number): number {
  return Math.round((amountMinor * (100 - percent)) / 100);
}

function inspectToken(raw: string, start: number): NumericToken {
  const text = raw.replace(/[\u00A0\u202F]/g, " ");
  const hasSpace = text.includes(" ");
  const withoutGroups = hasSpace ? text.replace(/ /g, "") : text;
  const hasDot = withoutGroups.includes(".");
  const hasComma = withoutGroups.includes(",");

  let decimalSep: "." | "," = ".";
  let groupSep = hasSpace ? " " : "";
  let fractionDigits = 0;

  if (hasDot && hasComma) {
    if (withoutGroups.lastIndexOf(".") > withoutGroups.lastIndexOf(",")) {
      decimalSep = ".";
      groupSep = hasSpace ? " " : ",";
      fractionDigits = withoutGroups.length - withoutGroups.lastIndexOf(".") - 1;
    } else {
      decimalSep = ",";
      groupSep = hasSpace ? " " : ".";
      fractionDigits = withoutGroups.length - withoutGroups.lastIndexOf(",") - 1;
    }
  } else if (hasComma) {
    const last = withoutGroups.split(",").pop() ?? "";
    if (last.length === 2) {
      decimalSep = ",";
      groupSep = hasSpace ? " " : ".";
      fractionDigits = 2;
    } else {
      decimalSep = ".";
      groupSep = hasSpace ? " " : ",";
      fractionDigits = 0;
    }
  } else if (hasDot) {
    const parts = withoutGroups.split(".");
    const last = parts[parts.length - 1] ?? "";
    if (parts.length === 2 && last.length !== 3) {
      decimalSep = ".";
      groupSep = hasSpace ? " " : ",";
      fractionDigits = last.length;
    } else {
      decimalSep = ",";
      groupSep = hasSpace ? " " : ".";
      fractionDigits = 0;
    }
  } else if (!hasSpace) {
    groupSep = ",";
  }

  return {
    text,
    start,
    end: start + raw.length,
    fractionDigits,
    decimalSep,
    groupSep,
  };
}

function parseLocalized(token: NumericToken): number | null {
  let normalized = token.text;
  if (token.groupSep) {
    normalized = normalized.split(token.groupSep).join("");
  }
  if (token.decimalSep === ",") {
    normalized = normalized.replace(",", ".");
  }
  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}

function formatMajor(value: number, token: NumericToken): string {
  const factor = 10 ** token.fractionDigits;
  const rounded = Math.round(value * factor) / factor;
  const negative = rounded < 0;
  const fixed = Math.abs(rounded).toFixed(token.fractionDigits);
  const [ints, frac] = fixed.split(".");
  const grouped = token.groupSep
    ? ints.replace(/\B(?=(\d{3})+(?!\d))/g, token.groupSep)
    : ints;
  const body =
    token.fractionDigits > 0 ? `${grouped}${token.decimalSep}${frac}` : grouped;
  return negative ? `-${body}` : body;
}

export function quoteDiscountedPrice(input: DiscountQuoteInput): DiscountQuote {
  const percent = input.percent ?? HALLOWEEN_DISCOUNT_PERCENT;
  const original = input.formatted;
  const match = original.match(/-?\d[\d.,\s\u00A0\u202F]*/);
  if (!match || match.index === undefined) {
    return { original, discounted: original };
  }

  const token = inspectToken(match[0], match.index);
  let discountedMajor: number | null = null;

  if (input.amountMinor !== undefined && input.currencyCode) {
    const minor =
      typeof input.amountMinor === "string"
        ? Number(input.amountMinor)
        : input.amountMinor;
    if (Number.isFinite(minor)) {
      const digits = currencyFractionDigits(input.currencyCode);
      const discountedMinor = applyPercentOffMinor(minor, percent);
      discountedMajor = discountedMinor / 10 ** digits;
      token.fractionDigits = digits;
    }
  }

  if (discountedMajor === null) {
    const value = parseLocalized(token);
    if (value === null) {
      return { original, discounted: original };
    }
    const factor = 10 ** token.fractionDigits;
    const minor = Math.round(value * factor);
    discountedMajor = applyPercentOffMinor(minor, percent) / factor;
  }

  const next = formatMajor(discountedMajor, token);
  return {
    original,
    discounted: original.slice(0, token.start) + next + original.slice(token.end),
  };
}
