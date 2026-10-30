import BlogIndexView from "@/components/blog/BlogIndexView";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Blog — iAGO Digital",
  description:
    "NFC, leads, SEO, AI SEO y desarrollo web para negocios en Centroamérica y Latam.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndexView />;
}
