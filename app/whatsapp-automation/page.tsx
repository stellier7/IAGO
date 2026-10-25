import {
  ArchitectureRoutePage,
  architectureMetadata,
} from "@/lib/architecture/create-page";

export const metadata = architectureMetadata("whatsapp-automation");

export default function Page() {
  return <ArchitectureRoutePage slug="whatsapp-automation" />;
}
