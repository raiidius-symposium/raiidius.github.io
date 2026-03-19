import type { Metadata, Viewport } from 'next';
import { EditionProvider } from '@/lib/edition-context';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { siteConfig } from '@/lib/content.config';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.seriesAcronym} - ${siteConfig.seriesName}`,
    template: `%s | ${siteConfig.seriesAcronym}`,
  },
  description: siteConfig.seriesDescription,
  keywords: [
    'AI',
    'artificial intelligence',
    'infectious diseases',
    'public health',
    'STI',
    'surveillance',
    'diagnostics',
    'symposium',
    'conference',
    'Columbia University',
  ],
  authors: [{ name: siteConfig.seriesAcronym }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.seriesAcronym,
    title: `${siteConfig.seriesAcronym} - ${siteConfig.seriesName}`,
    description: siteConfig.seriesDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.seriesAcronym} - ${siteConfig.seriesName}`,
    description: siteConfig.seriesDescription,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <EditionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </EditionProvider>
      </body>
    </html>
  );
}