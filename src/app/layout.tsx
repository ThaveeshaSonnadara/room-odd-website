import React from 'react';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { companyInfo } from '@/lib/data';
import '@/styles/globals.css';

/* ── Font Loading ─────────────────────────────────────────────────── */

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

/* ── SEO Metadata ─────────────────────────────────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL('https://roomodd.lk'),
  title: {
    default: 'Room ODD — Chartered Architectural Consultancy | Sri Lanka',
    template: '%s | Room ODD',
  },
  description:
    'Room ODD is a chartered architectural consultancy based in Sri Lanka, specialising in residential, commercial, and interior architecture. Book a consultation today.',
  keywords: [
    'architecture',
    'Sri Lanka',
    'architectural consultancy',
    'residential architecture',
    'commercial architecture',
    'interior design',
    'Room ODD',
    'luxury homes',
    'Colombo architect',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    siteName: 'Room ODD',
    title: 'Room ODD — Chartered Architectural Consultancy',
    description:
      'Designing exceptional architecture across Sri Lanka. Residential, commercial, interior, and hospitality projects crafted with precision and care.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Structured JSON-LD Schema (Google LocalBusiness / ArchitecturalFirm) ── */

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: companyInfo.name,
  description: companyInfo.tagline,
  url: 'https://roomodd.lk',
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 Ward Place',
    addressLocality: 'Colombo 07',
    addressCountry: 'LK',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$$$',
};

/* ── Root Layout ──────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="h-full bg-canvas text-canvas-dark font-body antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
