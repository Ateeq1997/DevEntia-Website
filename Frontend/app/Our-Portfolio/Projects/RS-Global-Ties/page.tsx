import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/RS-global-logo.webp';
import isaDesk from '../../../../assets/images/RS-desktop.webp';
import isaDesk1 from '../../../../assets/images/RS-desktop1.webp';
import { Metadata } from 'next';

// -------- SEO Metadata --------
export const metadata: Metadata = {
  title: "RS Global Ties Project - International Business Platform",
  description:
    "Discover how DevEntia built RS Global Ties' international business platform. Full-stack web development with real-time features, scalable architecture, and modern UI.",
  keywords: [
    "business platform development",
    "international business software",
    "enterprise web application",
  ],
  openGraph: {
    title: "RS Global Ties Project - International Business Platform",
    description:
      "Discover how DevEntia built RS Global Ties' international business platform. Full-stack web development with real-time features, scalable architecture, and modern UI.",
    url: "https://dev.deventiatech.com/Our-Portfolio/Projects/RS-Global-Ties",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://dev.deventiatech.com/assets/images/RS-global-logo.webp",
        width: 1200,
        height: 630,
        alt: "RS Global Ties Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const page = () => {
  return (
    <>
     {/* H1 for SEO */}
      <h1 className="sr-only">RS Global Ties - Connecting Businesses Worldwide</h1>
      <Hero
        projectLogo={isaLogo}
        projectName="RS Global Ties"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="Welcome to RS Global Ties, a vibrant platform facilitating global connectivity where individuals, businesses, and communities converge. Our mission is to transcend geographical and cultural barriers by fostering a robust network that promotes collaboration and growth opportunities worldwide, ensuring inclusivity and mutual understanding in a diverse global landscape."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="RS Global Ties"
        fontName="Inter"
        fontBg="#B3D9FF"
        projectLogo={isaLogo}
        color1="#127CC0"
        color2="#000000"
        color3="#E2E8F7"
        color4="#FFFFFF"
      />
      <TechnologiesUsed />
      <ProjectDetials
        description="RS Global Ties is a dynamic platform dedicated to connecting people and businesses globally, transcending geographical boundaries to foster collaboration and growth. It aims to create a cohesive network that bridges cultural differences, offering opportunities for innovation and partnership on an international scale."
        projectLogo={isaLogo}
        projectLink="https://isaconsulting.com/"
        projectName="RS Global Ties"
        deliverables="Website"
      />
      <DesktopVersion
        projectImg={isaDesk}
        projectLogo={isaLogo}
        title="Desktop Version"
      />
      {/* <WhatMyClientSay /> */}
    </>
  );
};
export default page;
