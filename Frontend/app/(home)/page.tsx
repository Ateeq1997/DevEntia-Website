/* eslint-disable */
import "../globals.css";
import HeroSection from "@/components/home/HeroSection";
import ITProcesses from "@/components/home/ITProcesses";
import OurExpertise from "@/components/home/OurExpertise";
import Ourportfolio from "@/components/home/Ourportfolio";
import PositiveImpactSection from "@/components/home/PositiveImpactSection";
import AugmentedTeam from "@/components/home/AugmentedTeam";
import BlogNews from "@/components/home/BlogNews";
import TechSection from "@/components/home/TechSection";
import CloudSection from "@/components/home/CloudSection";
import AiMlSection from "@/components/home/AI&MLSection";
import BlockchainSection from "@/components/home/BlockchainSection";
import Projects from "@/components/home/Projects/Projects";
import Services from "@/components/home/Services";
import Statistics from "@/components/home/statistics";
import WhyDeventia from "@/components/home/Why-chose-deventia/WhyDeventia";
import { Metadata } from "next";
import Contact from "@/components/home/contact";
import ServicesSection from "@/components/home/ServicesSection";
import Blogscard from "@/components/Blog/cards";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "DevEntia Tech - Custom Software, AI & Web Development Services",
  description:
    "Transform your business with DevEntia Tech's expert software development, AI solutions, and web design services. Get custom applications built for startups and enterprises.",
  keywords: [
    "custom software development",
    "web development services",
    "AI development company",
    "mobile app development",
    "IT solutions for businesses",
  ],
  openGraph: {
    title: "DevEntia Tech - Custom Software, AI & Web Development Services",
    description:
      "Transform your business with DevEntia Tech's expert software development, AI solutions, and web design services.",
    url: "https://dev.deventiatech.com/",
    siteName: "DevEntia Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722603971/home-hero_zyqkwj.png",
        width: 1200,
        height: 630,
        alt: "DevEntia Tech Homepage Preview",
      },
    ],
  },
};

const HomePage = () => {
  // Structured Data (Schema.org)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevEntia Tech",
    url: "https://dev.deventiatech.com/",
    logo: "https://dev.deventiatech.com/logo.png",
    sameAs: [
      "https://www.facebook.com/deventiatech",
      "https://www.linkedin.com/company/deventiatech",
      "https://twitter.com/deventiatech",
    ],
  };

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Statistics />
      <Ourportfolio />
      <Services />
      <PositiveImpactSection />
      <AugmentedTeam />
      <Blogscard />
      <Testimonials />
      <Contact />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};

export default HomePage;
