import type { MetadataRoute } from "next";

const baseUrl = "https://www.iagodigital.com";

/**
 * Crawl policy for public discovery.
 * - `*` covers Googlebot, Bing, PerplexityBot, etc., except where overridden.
 * - `OAI-SearchBot` is OpenAI’s crawler for ChatGPT search discovery (not GPTBot training).
 *   Explicit Allow makes intent obvious even though `*` already permits it.
 * - Private app routes stay disallowed for the default rule.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/account/", "/login", "/welcome"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
