import { buildSiteGraph } from "@/lib/seo/jsonld";

const structuredData = buildSiteGraph();

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
