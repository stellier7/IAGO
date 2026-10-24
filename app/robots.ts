import type { MetadataRoute } from "next";

const baseUrl = "https://www.iagodigital.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/account/", "/login", "/welcome"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
