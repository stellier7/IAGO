import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchitecturePageView from "@/components/architecture/ArchitecturePageView";
import {
  getArchitecturePage,
  type ArchitectureSlug,
} from "@/lib/architecture/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function architectureMetadata(slug: ArchitectureSlug): Metadata {
  const page = getArchitecturePage(slug);
  if (!page) {
    return { title: "Servicio — iAGO Digital" };
  }

  return buildPageMetadata({
    title: `${page.title} — iAGO Digital`,
    description: page.description,
    path: `/${page.slug}`,
    openGraphTitle: page.headline,
  });
}

export function ArchitectureRoutePage({ slug }: { slug: ArchitectureSlug }) {
  const page = getArchitecturePage(slug);
  if (!page) {
    notFound();
  }

  return <ArchitecturePageView page={page} />;
}
