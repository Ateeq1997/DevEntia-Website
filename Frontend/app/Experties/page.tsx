import AiMlSection from "@/components/home/AI&MLSection";
import BlockchainSection from "@/components/home/BlockchainSection";
import CloudSection from "@/components/home/CloudSection";
import Contact from "@/components/home/contact";
import TechSection from "@/components/home/TechSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expertise: Full-Stack Development, AI & Cloud | DevEntia",
  description:
    "Discover DevEntia's technical expertise across full-stack development, machine learning, cloud architecture, and modern frameworks. 15+ years of proven IT solutions.",
  keywords: [
    "full-stack developers",
    "machine learning experts",
    "cloud architecture",
    "React developers",
    "Node.js development",
  ],
  openGraph: {
    title: "Our Expertise: Full-Stack Development, AI & Cloud | DevEntia",
    description:
      "Discover DevEntia's technical expertise across full-stack development, machine learning, cloud architecture, and modern frameworks. 15+ years of proven IT solutions.",
    url: "https://dev.deventiatech.com/Experties",
    siteName: "DevEntia Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722603971/home-hero_zyqkwj.png",
        width: 1200,
        height: 630,
        alt: "DevEntia Tech Expertise Overview",
      },
    ],
  },
  alternates: {
    canonical: "https://dev.deventiatech.com/Experties",
  },
};

const ExpertisePage = () => {
  // -------- JSON-LD Structured Data --------
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevEntia Tech",
    url: "https://dev.deventiatech.com/",
    logo: "https://dev.deventiatech.com/logo.png",
    sameAs: [
      "https://www.facebook.com/deventiatech",
      "https://www.linkedin.com/company/deventiatech",
    ],
    department: {
      "@type": "ProfessionalService",
      name: "Expertise in Full-Stack, AI, and Cloud Development",
      serviceType: [
        "Full-Stack Development",
        "AI & Machine Learning",
        "Cloud Architecture",
        "Blockchain Solutions",
        "Modern Frontend Frameworks (React, Next.js)",
      ],
      areaServed: "Worldwide",
      description:
        "DevEntia Tech’s team of expert developers specializes in full-stack web and mobile solutions, AI systems, and scalable cloud infrastructure using modern technologies.",
    },
  };

  return (
    <>
      <TechSection />
      <CloudSection />
      <AiMlSection />
      <BlockchainSection />
      <Contact />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};

export default ExpertisePage;
