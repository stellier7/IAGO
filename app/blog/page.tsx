import type { Metadata } from "next";
import BlogIndexView from "@/components/blog/BlogIndexView";

export const metadata: Metadata = {
  title: "Blog — IAGO Digital",
  description:
    "NFC, leads, SEO, AI SEO y desarrollo web para negocios en Honduras.",
  openGraph: {
    title: "Blog — IAGO Digital",
    description:
      "Ideas prácticas para crecer: tarjeta NFC, leads, SEO local y AI SEO.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  return <BlogIndexView />;
}
