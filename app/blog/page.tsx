import BlogIndexView from "@/components/blog/BlogIndexView";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Blog — iAGO Digital",
  description:
    "Biblioteca de guías para negocios en Honduras: precios, industrias, IA, SEO local e investigación — calidad sobre volumen.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndexView />;
}
