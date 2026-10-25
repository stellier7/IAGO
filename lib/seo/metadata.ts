import type { Metadata } from "next";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
}: BuildPageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description,
      url: canonicalPath,
      images: ["/og-image.png"],
    },
  };
}
