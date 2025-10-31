import Hero from "@/components/Services/Hero";
import ServicesCard from "@/components/Services/ServicesCard";
import { FaRegSquareCheck } from "react-icons/fa6";
import services1 from "../../assets/images/services1.webp";
import services2 from "../../assets/images/services2.webp";
import services3 from "../../assets/images/services3.webp";
import services4 from "../../assets/images/services4.webp";
import GetInTouch from "@/components/AboutUs/GetInTouch";
import OurMission from "@/components/Services/OurMission";
import { Metadata } from "next";
import StatsSection from "@/components/home/statistics";
import ServicesSection from "@/components/Services/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/contact";

export const metadata: Metadata = {
  title: "IT Services: Software, Cloud, AI & Web Development | DevEntia",
  description:
    "Explore DevEntia's comprehensive IT services: healthcare software, fintech solutions, cloud engineering, AI development, and UI/UX design. Tailored for startups and enterprises.",
  keywords: [
    "IT services company",
    "software development services",
    "cloud engineering",
    "enterprise software solutions",
    "technology consulting",
  ],
  openGraph: {
    title: "IT Services: Software, Cloud, AI & Web Development | DevEntia",
    description:
      "Explore DevEntia's comprehensive IT services: healthcare software, fintech solutions, cloud engineering, AI development, and UI/UX design. Tailored for startups and enterprises.",
    url: "https://dev.deventiatech.com/Services",
    siteName: "DevEntia Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417304/services_ulnrx5.jpg",
        width: 1200,
        height: 630,
        alt: "DevEntia Tech IT Services Overview",
      },
    ],
  },
  alternates: {
    canonical: "https://dev.deventiatech.com/Services",
  },
};

const ServicesPage = () => {
  // -------- Structured Data (Schema.org) --------
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Comprehensive IT Solutions & Software Development Services",
    provider: {
      "@type": "Organization",
      name: "DevEntia Tech",
      url: "https://dev.deventiatech.com/",
      logo: "https://dev.deventiatech.com/logo.png",
    },
    serviceType: [
      "Custom Software Development",
      "Cloud Engineering",
      "AI & ML Development",
      "Web Development",
      "Technology Consulting",
    ],
    areaServed: "Worldwide",
    description:
      "DevEntia Tech offers expert IT services, including custom software, cloud solutions, and AI-powered applications for startups and enterprises.",
    url: "https://dev.deventiatech.com/Services",
  };

  return (
    <>
      <Hero />

      <ServicesSection />
      <OurMission />
      <StatsSection />
      <Testimonials />
      <Contact />

      {/* -------- JSON-LD Structured Data for SEO -------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};

export default ServicesPage;
