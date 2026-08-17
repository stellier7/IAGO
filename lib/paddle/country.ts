import { headers } from "next/headers";

/** ISO 3166-1 alpha-2 country code from edge headers, or undefined to let Paddle auto-detect. */
export function getVisitorCountryCode(): string | undefined {
  const country = headers().get("x-vercel-ip-country");
  if (!country || country === "XX") {
    return undefined;
  }
  return country;
}
