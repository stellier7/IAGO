import type { MetadataRoute } from "next";
import { architecturePages } from "@/lib/architecture/pages";
import { blogPosts } from "@/lib/blog/posts";
import { recentCases } from "@/lib/cases/recent";
import { englishPages } from "@/lib/en/pages";
import { cityPages } from "@/lib/locations/honduras";
import { nichePages } from "@/lib/niches/pages";

const baseUrl = "https://www.iagodigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const architectureEntries = architecturePages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const nicheEntries = nichePages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const englishEntries = englishPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: page.slug === "home" ? 0.9 : 0.8,
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

  const caseEntries = recentCases.map((item) => ({
    url: `${baseUrl}/casos/${item.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/servicios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industrias`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...architectureEntries,
    ...nicheEntries,
    ...englishEntries,
    {
      url: `${baseUrl}/case-studies`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/honduras`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
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
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
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
