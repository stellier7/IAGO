import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EnglishPageView from "@/components/en/EnglishPageView";
import { getEnglishPage, type EnglishSlug } from "@/lib/en/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function englishMetadata(slug: EnglishSlug): Metadata {
  const page = getEnglishPage(slug);
  if (!page) {
    return { title: "iAGO Digital" };
  }

  const languages: Record<string, string> = {
    en: page.path,
  };
  if (page.spanishPath) {
    languages.es = page.spanishPath;
    languages["x-default"] = page.spanishPath;
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    openGraphTitle: page.headline,
    locale: "en_US",
    languages,
  });
}

export function EnglishRoutePage({ slug }: { slug: EnglishSlug }) {
  const page = getEnglishPage(slug);
  if (!page) {
    notFound();
  }

  return <EnglishPageView page={page} />;
}
