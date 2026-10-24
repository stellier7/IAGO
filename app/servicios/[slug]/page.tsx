import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageView from "@/components/services/ServicePageView";
import { getServicePage, servicePages } from "@/lib/services/pages";

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
    return { title: "Servicio — IAGO Digital" };
  }

  return {
    title: `${page.title} — IAGO Digital`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      images: ["/og-image.png"],
    },
  };
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
