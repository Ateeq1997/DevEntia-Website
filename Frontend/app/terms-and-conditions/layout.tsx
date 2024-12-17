import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1750px] mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
