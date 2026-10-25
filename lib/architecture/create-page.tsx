import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchitecturePageView from "@/components/architecture/ArchitecturePageView";
import {
  getArchitecturePage,
  type ArchitectureSlug,
} from "@/lib/architecture/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

const ENGLISH_ALTERNATES: Partial<Record<ArchitectureSlug, string>> = {
  "website-design-honduras": "/en/website-design",
  "ai-automation-honduras": "/en/ai-automation",
  "whatsapp-automation": "/en/whatsapp-automation",
  "seo-services-honduras": "/en/seo",
};

export function architectureMetadata(slug: ArchitectureSlug): Metadata {
  const page = getArchitecturePage(slug);
  if (!page) {
    return { title: "Servicio — iAGO Digital" };
  }

  const enPath = ENGLISH_ALTERNATES[slug];

  return buildPageMetadata({
    title: `${page.title} — iAGO Digital`,
    description: page.description,
    path: `/${page.slug}`,
    openGraphTitle: page.headline,
    languages: enPath
      ? {
          es: `/${page.slug}`,
          en: enPath,
          "x-default": `/${page.slug}`,
        }
      : undefined,
  });
}

export function ArchitectureRoutePage({ slug }: { slug: ArchitectureSlug }) {
  const page = getArchitecturePage(slug);
  if (!page) {
    notFound();
  }

  return <ArchitecturePageView page={page} />;
}
