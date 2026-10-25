import {
  ArchitectureRoutePage,
  architectureMetadata,
} from "@/lib/architecture/create-page";

export const metadata = architectureMetadata("ai-seo-honduras");

export default function Page() {
  return <ArchitectureRoutePage slug="ai-seo-honduras" />;
}
