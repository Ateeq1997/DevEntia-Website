import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Head from 'next/head';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
// dd
export const metadata: Metadata = {
  icons: {
    icon: 'favicon.ico',
    apple: 'apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1750px] mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
