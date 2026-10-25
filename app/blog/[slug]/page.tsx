import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/blog/BlogPostView";
import { blogPosts, getPostBySlug } from "@/lib/blog/posts";
import { buildPageMetadata } from "@/lib/seo/metadata";

type BlogRouteParams = {
  slug: string;
};

export function generateStaticParams(): BlogRouteParams[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: BlogRouteParams;
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return buildPageMetadata({
      title: "Blog — iAGO Digital",
      description: "Artículos de iAGO Digital.",
      path: `/blog/${params.slug}`,
    });
  }

  return buildPageMetadata({
    title: `${post.title} — iAGO Digital`,
    description: post.description,
    path: `/blog/${post.slug}`,
    openGraphTitle: post.title,
  });
}

export default function BlogSlugPage({
  params,
}: {
  params: BlogRouteParams;
}) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
