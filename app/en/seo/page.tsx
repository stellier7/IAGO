import { EnglishRoutePage, englishMetadata } from "@/lib/en/create-page";

export const metadata = englishMetadata("seo");

export default function Page() {
  return <EnglishRoutePage slug="seo" />;
}
