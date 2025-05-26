import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
// import { Aeonik } from '@/utils/fonts';
import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeventiaTech Limited',
  description: 'DeventiaTech Pvt Limited - Scripting Future Technologies',
  icons: {
    icon: '../public/favicon.ico',
    apple: 'apple-icon.png',
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
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
