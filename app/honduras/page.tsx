import HondurasHubView from "@/components/locations/HondurasHubView";
import { hondurasHub } from "@/lib/locations/honduras";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: `${hondurasHub.title} — iAGO Digital`,
  description: hondurasHub.description,
  path: "/honduras",
  openGraphTitle: hondurasHub.headline,
});

export default function HondurasPage() {
  return <HondurasHubView />;
}
