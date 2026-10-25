import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageView from "@/components/locations/CityPageView";
import { cityPages, getCityPage } from "@/lib/locations/honduras";
import { buildPageMetadata } from "@/lib/seo/metadata";

type CityRouteParams = {
  slug: string;
};

export function generateStaticParams(): CityRouteParams[] {
  return cityPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: CityRouteParams;
}): Metadata {
  const page = getCityPage(params.slug);
  if (!page) {
    return buildPageMetadata({
      title: "Honduras — iAGO Digital",
      description: "Servicios digitales de iAGO Digital en Honduras.",
      path: `/honduras/${params.slug}`,
    });
  }

  return buildPageMetadata({
    title: `${page.headline} — iAGO Digital`,
    description: page.description,
    path: `/honduras/${page.slug}`,
    openGraphTitle: page.headline,
  });
}

export default function HondurasCityPage({
  params,
}: {
  params: CityRouteParams;
}) {
  const page = getCityPage(params.slug);
  if (!page) {
    notFound();
  }

  return <CityPageView page={page} />;
}
