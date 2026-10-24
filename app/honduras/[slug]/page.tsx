import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageView from "@/components/locations/CityPageView";
import { cityPages, getCityPage } from "@/lib/locations/honduras";

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
    return { title: "Honduras — IAGO Digital" };
  }

  return {
    title: `${page.headline} — IAGO Digital`,
    description: page.description,
    openGraph: {
      title: page.headline,
      description: page.description,
      images: ["/og-image.png"],
    },
  };
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
