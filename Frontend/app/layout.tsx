import ConditionalLayout from '@/components/layout/ConditionalLayout';
// import { Aeonik } from '@/utils/fonts';
import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevEntia Tech | Website, Mobile App & AI Solutions for Businesses',
  description: 'We build modern websites, mobile apps, AI/ML tools, and cloud solutions. DevEntia Tech helps businesses of all sizes scale efficiently, improve operations, and achieve sustainable growth in a competitive digital landscape.',
  keywords: 'DevEntia Tech, web development, mobile app development, AI solutions, cloud solutions, digital transformation, business technology',
  authors: [{ name: 'DevEntia Tech' }],
  creator: 'DevEntia Tech',
  publisher: 'DevEntia Tech',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'DevEntia Tech | Website, Mobile App & AI Solutions for Businesses',
    description: 'We build modern websites, mobile apps, AI/ML tools, and cloud solutions. DevEntia Tech helps businesses of all sizes scale efficiently, improve operations, and achieve sustainable growth in a competitive digital landscape.',
    siteName: 'DevEntia Tech',
    type: 'website',
    url: 'https://deventiatech.com',
    images: [
      {
        url: 'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722603971/home-hero_zyqkwj.png',
        width: 1200,
        height: 630,
        alt: 'DevEntia Tech - Innovative Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@deventiatech',
    creator: '@deventiatech',
    title: 'DevEntia Tech | Website, Mobile App & AI Solutions for Businesses',
    description: 'We build modern websites, mobile apps, AI/ML tools, and cloud solutions. DevEntia Tech helps businesses of all sizes scale efficiently, improve operations, and achieve sustainable growth in a competitive digital landscape.',
    images: ['https://res.cloudinary.com/dhsgpxu04/image/upload/v1722603971/home-hero_zyqkwj.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://deventiatech.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <title>DevEntia Tech</title>
      </Head> */}
      <body className={`tracking-wider font-bai`}>
        <main className="max-w-[1750px] mx-auto">
          <Head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
          </Head>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          
        </main>
      </body>
    </html>
  );
}
