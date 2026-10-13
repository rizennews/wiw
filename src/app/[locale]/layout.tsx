import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DeveloperFootprint } from "@/components/DeveloperFootprint";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

import { siteConfig, getOrganizationSchema, getWebSiteSchema, getLanguageAlternates, getOgLocale } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getLanguageAlternates('/', locale);

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
      template: '%s | Women-In-WACREN',
      default: 'Women-In-WACREN - Empowering Women in STEM Across West & Central Africa',
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: "WACREN", url: siteConfig.links.wacren }],
    creator: "WACREN",
    publisher: "WACREN",
    alternates,
    openGraph: {
      title: 'Women-In-WACREN - Empowering Women in STEM Across West & Central Africa',
      description: siteConfig.description,
      url: alternates.canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: 'Women-In-WACREN - Empowering Women in STEM Across West & Central Africa',
        },
      ],
      locale: getOgLocale(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Women-In-WACREN - Empowering Women in STEM Across West & Central Africa',
      description: siteConfig.description,
      images: ['/og-image.png'],
      site: siteConfig.links.twitterHandle,
      creator: siteConfig.links.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <DeveloperFootprint />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
