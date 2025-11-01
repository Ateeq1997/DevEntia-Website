import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/ISA Logo.webp';
import isaDesk from '../../../../assets/images/isa-desktop.webp';
import isaDesk1 from '../../../../assets/images/isa-desktop1.webp';
import { Metadata } from 'next';

// -------- SEO Metadata --------
export const metadata: Metadata = {
  title: "ISA Project - Education Management Platform Case Study",
  description:
    "Learn how DevEntia developed ISA's education management platform with student tracking, course management, and analytics. Modern EdTech solution for institutions.",
  keywords: [
    "education management system",
    "EdTech development",
    "learning management platform",
  ],
  openGraph: {
    title: "ISA Project - Education Management Platform Case Study",
    description:
      "Learn how DevEntia developed ISA's education management platform with student tracking, course management, and analytics. Modern EdTech solution for institutions.",
    url: "https://dev.deventiatech.com/Our-Portfolio/Projects/ISA",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://dev.deventiatech.com/assets/images/ISA Logo.webp",
        width: 1200,
        height: 630,
        alt: "ISA Project",
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
      <h1 className="sr-only">ISA - Transforming Education Through Technology</h1>
      <Hero
        projectLogo={isaLogo}
        projectName="ISA Consulting"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="ISA is your bridge to success in staffing and employment. ISA posts job openings, selects candidates, updates their CVs, and creates professional profiles for them. Essentially, ISA hires people and provides staff to various companies and agencies for different projects. They act as a link between job seekers and employers, ensuring that the right candidates are matched with the right job opportunities."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="ISA Consulting"
        fontName="Montserrat"
        fontBg="#9617F9"
        projectLogo={isaLogo}
        color1="#11071F"
        color2="#5C6AD2"
        color3="#9617F9"
        color4="#FFFFFF"
      />
      <TechnologiesUsed />
      <ProjectDetials
        description="ISA offers a specialized platform where business applicants can track their progress, manage applications, and access personalized insights, ensuring smooth navigation and informed decision-making throughout their professional journey."
        projectLogo={isaLogo}
        projectLink="https://isaconsulting.com/"
        projectName="ISA Consulting"
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
