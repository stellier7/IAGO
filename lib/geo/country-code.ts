import { headers } from "next/headers";

/**
 * Reads the visitor country from Vercel's geo header when available.
 * Returns undefined when absent so Paddle.js can auto-detect via IP.
 */
export function getCountryCodeFromHeaders(): string | undefined {
  const country = headers().get("x-vercel-ip-country");
  if (!country || country === "XX") {
    return undefined;
  }
  return country;
}
