import {
  ArchitectureRoutePage,
  architectureMetadata,
} from "@/lib/architecture/create-page";

export const metadata = architectureMetadata("seo-services-honduras");

export default function Page() {
  return <ArchitectureRoutePage slug="seo-services-honduras" />;
}
