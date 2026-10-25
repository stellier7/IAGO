import type { Metadata } from "next";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  /** ISO language for openGraph / html context, e.g. es_LA or en_US */
  locale?: string;
  /** hreflang map: language code → absolute path on this site */
  languages?: Record<string, string>;
};

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphTitle,
  locale = "es_LA",
  languages,
}: BuildPageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description,
      url: canonicalPath,
      locale,
      images: ["/og-image.png"],
    },
  };
}
