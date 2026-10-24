import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/blog/BlogPostView";
import { blogPosts, getPostBySlug } from "@/lib/blog/posts";

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
    return { title: "Blog — IAGO Digital" };
  }

  return {
    title: `${post.title} — IAGO Digital`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
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
