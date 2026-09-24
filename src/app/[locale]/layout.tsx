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
  metadataBase: new URL('https://wiw.wacren.net'),
  title: {
    template: '%s | Women in WACREN',
    default: 'Women in WACREN - Empowering Women in STEM Across West & Central Africa',
  },
  description: "Women-in-WACREN connects, trains, and funds women in STEM across West and Central Africa. Turning students, researchers, and early-career professionals into tech leaders.",
  keywords: [
    "Women in STEM",
    "WACREN",
    "Technology Africa",
    "Women in Tech",
    "STEM Education",
    "West Africa Tech",
    "Central Africa Tech",
    "Digital Innovation",
    "Women Empowerment",
    "WACREN",
    "Women in WACREN"
  ],
  authors: [{ name: "WACREN" }],
  creator: "WACREN",
  publisher: "WACREN",
  openGraph: {
    title: 'Women in WACREN - Empowering Women in STEM',
    description: 'Connecting, training, and funding women in STEM across West and Central Africa.',
    url: 'https://wiw.wacren.net',
    siteName: 'Women in WACREN',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Women in WACREN - Building the scientific and digital future of West and Central Africa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women in WACREN - Empowering Women in STEM',
    description: 'Connecting, training, and funding women in STEM across West and Central Africa.',
    images: ['/hero.jpg'],
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
