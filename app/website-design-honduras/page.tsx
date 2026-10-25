import {
  ArchitectureRoutePage,
  architectureMetadata,
} from "@/lib/architecture/create-page";

export const metadata = architectureMetadata("website-design-honduras");

export default function Page() {
  return <ArchitectureRoutePage slug="website-design-honduras" />;
}
