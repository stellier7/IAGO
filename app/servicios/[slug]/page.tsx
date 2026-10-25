import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageView from "@/components/services/ServicePageView";
import { getServicePage, servicePages } from "@/lib/services/pages";
import { buildPageMetadata } from "@/lib/seo/metadata";

type ServiceRouteParams = {
  slug: string;
};

export function generateStaticParams(): ServiceRouteParams[] {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: ServiceRouteParams;
}): Metadata {
  const page = getServicePage(params.slug);
  if (!page) {
    return buildPageMetadata({
      title: "Servicio — iAGO Digital",
      description: "Servicios digitales de iAGO Digital.",
      path: `/servicios/${params.slug}`,
    });
  }

  return buildPageMetadata({
    title: `${page.title} — iAGO Digital`,
    description: page.description,
    path: `/servicios/${page.slug}`,
    openGraphTitle: page.title,
  });
}

export default function ServiceSlugPage({
  params,
}: {
  params: ServiceRouteParams;
}) {
  const page = getServicePage(params.slug);
  if (!page) {
    notFound();
  }

  return <ServicePageView page={page} />;
}
