import { EnglishRoutePage, englishMetadata } from "@/lib/en/create-page";

export const metadata = englishMetadata("home");

export default function Page() {
  return <EnglishRoutePage slug="home" />;
}
