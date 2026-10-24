import type { Metadata } from "next";
import HondurasHubView from "@/components/locations/HondurasHubView";
import { hondurasHub } from "@/lib/locations/honduras";

export const metadata: Metadata = {
  title: `${hondurasHub.title} — IAGO Digital`,
  description: hondurasHub.description,
  openGraph: {
    title: hondurasHub.headline,
    description: hondurasHub.description,
    images: ["/og-image.png"],
  },
};

export default function HondurasPage() {
  return <HondurasHubView />;
}
