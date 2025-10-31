import AboutUs from "@/components/AboutUs/AboutUs";
import GetInTouch from "@/components/AboutUs/GetInTouch";
import Hero from "@/components/AboutUs/Hero";
import MeetOurCoFounder from "@/components/AboutUs/MeetOurCoFounder";
import OurCoreValues from "@/components/AboutUs/OurCoreValues";
import OurMissionAndVission from "@/components/AboutUs/OurMissionAndVission";
import { Metadata } from "next";
import MeetOurTeam from "@/components/AboutUs/MeetOurTeam";
import Newsletter from "@/components/AboutUs/newsletter";

export const metadata: Metadata = {
  title: "About DevEntia Tech - Your Trusted IT Development Partner",
  description:
    "Learn about DevEntia Tech's mission to deliver innovative software solutions. Meet our founders, explore our values, and see how we've helped 100+ businesses grow.",
  keywords: [
    "software development company",
    "IT company about us",
    "tech startup partner",
    "software development team",
  ],
  openGraph: {
    title: "About DevEntia Tech - Your Trusted IT Development Partner",
    description:
      "Learn about DevEntia Tech's mission to deliver innovative software solutions. Meet our founders, explore our values, and see how we've helped 100+ businesses grow.",
    url: "https://dev.deventiatech.com/About-us",
    siteName: "DevEntia Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417323/about-us_u9lpyi.jpg",
        width: 1200,
        height: 630,
        alt: "About DevEntia Tech - IT Development Company Overview",
      },
    ],
  },
  alternates: {
    canonical: "https://dev.deventiatech.com/About-us",
  },
};

const AboutUsPage = () => {
  // -------- Structured Data (Schema.org) --------
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevEntia Tech",
    url: "https://dev.deventiatech.com/",
    logo: "https://dev.deventiatech.com/logo.png",
    description:
      "DevEntia Tech is an innovative software development company focused on delivering scalable IT solutions, AI tools, and cloud services for global businesses.",
    foundingDate: "2010",
    founder: [
      {
        "@type": "Person",
        name: "Co-Founder Name", // Replace with actual name
        jobTitle: "Co-Founder",
      },
    ],
    numberOfEmployees: 100,
    sameAs: [
      "https://www.facebook.com/deventiatech",
      "https://www.linkedin.com/company/deventiatech",
      "https://twitter.com/deventiatech",
    ],
    award: [
      "Top Software Development Company 2024",
      "Best AI Innovation Award 2023",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "info@deventiatech.com",
      url: "https://dev.deventiatech.com/Contact-us",
    },
  };

  return (
    <>
      <Hero />
      <AboutUs />
      <OurCoreValues />
      {/* <MeetOurCoFounder /> */}
      <OurMissionAndVission />
      <MeetOurTeam />
      <Newsletter />
      {/* <GetInTouch /> */}

      {/* -------- Structured Data for SEO -------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};

export default AboutUsPage;
