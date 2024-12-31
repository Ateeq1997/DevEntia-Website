import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1750px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
