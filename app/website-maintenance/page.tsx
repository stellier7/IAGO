import {
  ArchitectureRoutePage,
  architectureMetadata,
} from "@/lib/architecture/create-page";

export const metadata = architectureMetadata("website-maintenance");

export default function Page() {
  return <ArchitectureRoutePage slug="website-maintenance" />;
}
