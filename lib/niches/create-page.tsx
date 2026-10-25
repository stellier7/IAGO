import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NichePageView from "@/components/niches/NichePageView";
import { getNichePage, type NicheSlug } from "@/lib/niches/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function nicheMetadata(slug: NicheSlug): Metadata {
  const page = getNichePage(slug);
  if (!page) {
    return { title: "Industria — iAGO Digital" };
  }

  return buildPageMetadata({
    title: `${page.title} — iAGO Digital`,
    description: page.description,
    path: `/${page.slug}`,
    openGraphTitle: page.headline,
  });
}

export function NicheRoutePage({ slug }: { slug: NicheSlug }) {
  const page = getNichePage(slug);
  if (!page) {
    notFound();
  }

  return <NichePageView page={page} />;
}
