import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { portfolioContent, isLocale, supportedLocales } from "@/data/content";
import type { Locale } from "@/types/portfolio";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const content = portfolioContent[locale];
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://marvin1604-portafolio.netlify.app";

  return {
    metadataBase: new URL(siteUrl),
    title: content.metadata.title,
    description: content.metadata.description,
    authors: [{ name: "Walter Rodríguez" }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "it-IT": "/it",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      url: `/${locale}`,
      siteName: "Walter Rodríguez — Developer Portfolio",
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${manrope.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
