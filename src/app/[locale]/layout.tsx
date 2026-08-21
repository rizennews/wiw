import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Women in WACREN',
    default: 'Women in WACREN',
  },
  description: "Connecting, training, and funding women in STEM across the WACREN region.",
  openGraph: {
    title: 'Women in WACREN',
    description: 'Connecting, training, and funding women in STEM across the WACREN region.',
    url: 'https://wiw.wacren.net',
    siteName: 'Women in WACREN',
    images: [
      {
        url: '/Women in WACREN logo.png',
        width: 1200,
        height: 630,
        alt: 'Women in WACREN',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women in WACREN',
    description: 'Connecting, training, and funding women in STEM across the WACREN region.',
    images: ['/Women in WACREN logo.png'],
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
