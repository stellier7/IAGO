import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iagodigital.com"),
  title: "IAGO Digital — Web, SEO y Automatizaciones con IA",
  description:
    "Agencia digital en Honduras. Diseñamos sitios web, optimizamos SEO y automatizamos procesos con inteligencia artificial.",
  openGraph: {
    title: "IAGO Digital",
    description:
      "Web, SEO y automatizaciones con IA para marcas que quieren crecer.",
    type: "website",
    locale: "es_HN",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "256x256" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <JsonLd />
        <GoogleAnalytics />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
