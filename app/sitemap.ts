import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog/posts";
import { recentCases } from "@/lib/cases/recent";
import { cityPages } from "@/lib/locations/honduras";
import { servicePages } from "@/lib/services/pages";

const baseUrl = "https://www.iagodigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const serviceEntries = servicePages.map((page) => ({
    url: `${baseUrl}/servicios/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseEntries = recentCases.map((item) => ({
    url: `${baseUrl}/casos/${item.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityEntries = cityPages.map((page) => ({
    url: `${baseUrl}/honduras/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/honduras`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...cityEntries,
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: `${baseUrl}/casos-recientes`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceEntries,
    ...caseEntries,
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
