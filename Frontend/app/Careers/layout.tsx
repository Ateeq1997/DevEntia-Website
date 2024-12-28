import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AppWrapper } from "@/app/context/context";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1750px] mx-auto">
      <Header />
      <AppWrapper>{children}</AppWrapper>
      <Footer />
    </div>
  );
}
