const DEFAULT_SITE_URL = "https://www.iagodigital.com";

/**
 * Canonical public site URL (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL in Vercel for each environment.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  return DEFAULT_SITE_URL;
}

export function getWebhookUrl(): string {
  return `${getSiteUrl()}/api/webhooks/paddle`;
}
