import { EnglishRoutePage, englishMetadata } from "@/lib/en/create-page";

export const metadata = englishMetadata("contact");

export default function Page() {
  return <EnglishRoutePage slug="contact" />;
}
