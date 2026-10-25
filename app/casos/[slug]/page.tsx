import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/cases/CaseStudyView";
import { getCaseBySlug, recentCases } from "@/lib/cases/recent";
import { buildPageMetadata } from "@/lib/seo/metadata";

type CaseRouteParams = {
  slug: string;
};

export function generateStaticParams(): CaseRouteParams[] {
  return recentCases.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: CaseRouteParams;
}): Metadata {
  const item = getCaseBySlug(params.slug);
  if (!item) {
    return buildPageMetadata({
      title: "Caso — iAGO Digital",
      description: "Casos de iAGO Digital.",
      path: `/casos/${params.slug}`,
    });
  }

  return buildPageMetadata({
    title: `${item.client} — Caso iAGO Digital`,
    description: item.summary,
    path: `/casos/${item.slug}`,
  });
}

export default function CaseSlugPage({
  params,
}: {
  params: CaseRouteParams;
}) {
  const item = getCaseBySlug(params.slug);
  if (!item) {
    notFound();
  }

  return <CaseStudyView item={item} />;
}
