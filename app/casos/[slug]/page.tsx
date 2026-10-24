import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyView from "@/components/cases/CaseStudyView";
import { getCaseBySlug, recentCases } from "@/lib/cases/recent";

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
    return { title: "Caso — IAGO Digital" };
  }

  return {
    title: `${item.client} — Caso IAGO Digital`,
    description: item.summary,
    openGraph: {
      title: `${item.client} — Caso IAGO Digital`,
      description: item.summary,
      images: ["/og-image.png"],
    },
  };
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
