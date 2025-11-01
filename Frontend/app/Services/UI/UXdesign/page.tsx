'use client';

import React from 'react';
import Hero from '@/components/Services/UI/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';
import OurProcessesSection from '@/components/Common/OurProcessesSection';
import UXDesignSection from '@/components/Services/UI/UXDesignSection';
import PortfolioSection from '@/components/Services/UI/PortfolioSection';
import WhyUs from '@/components/Common/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/contact'; 

import logo1 from '@/assets/images/wireframe.png';
import logo2 from '@/assets/images/user.png';
import logo3 from '@/assets/images/kit.png';
import logo4 from '@/assets/images/usability.png';
import logo5 from '@/assets/images/access.png';
import logo6 from '@/assets/images/3d.png';
import { Metadata } from 'next';

// -------- SEO Metadata --------
export const metadata: Metadata = {
  title: "UI/UX Design Services - User-Centered Digital Experiences",
  description:
    "Professional UI/UX design services: mobile apps, websites, and SaaS platforms. User research, wireframing, prototyping, and design systems that convert users.",
  keywords: [
    "UI/UX design services",
    "mobile app design",
    "website design agency",
    "user experience design",
    "design system development",
  ],
  openGraph: {
    title: "UI/UX Design Services - User-Centered Digital Experiences",
    description:
      "Professional UI/UX design services: mobile apps, websites, and SaaS platforms. User research, wireframing, prototyping, and design systems that convert users.",
    url: "https://dev.deventiatech.com/Services/UI/UXdesign",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417327/ui-ux-banner.jpg",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services by DevEntia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
// ✅ UI-specific data
const uiServices = [
  {
    id: '01',
    title: 'Mobile app design',
    description:
      'At DevEntia, we recognize the impact of a well-designed mobile app in today\'s mobile-first world. We prioritize user experience, ensuring seamless functionality, intuitive navigation, and engaging visuals that captivate and retain users while building brand trust.',
  },
  {
    id: '02',
    title: 'Web app design',
    description:
      'Whether launching a new website or revamping an existing one, DevEntia creates designs that look great and deliver results.We focus on driving brand awareness, generating leads, and boosting sales through effective web solutions.',
  },
  {
    id: '03',
    title: 'Desktop application design',
    description:
      'At DevEntia, we know a well-designed desktop application enhances productivity and user satisfaction.We focus on creating intuitive, user-friendly, and visually appealing desktop solutions.',
  },
  {
    id: '04',
    title: 'Redesign',
    description:
      'Revitalize your product and boost retention, conversion, and engagement with DevEntia\'s redesign services.We focus on simple yet impactful improvements to breathe new life into your solution.',
  },
  {
    id: '05',
    title: 'User research',
    description:
      'DevEntia conducts in-depth research to understand your user\'s needs, preferences, and behaviors. We use interviews, surveys, field studies, usability tests, journey mapping, and empathy mapping.',
  },
  {
    id: '06',
    title: 'UX data',
    description:
      'DevEntia\'s experienced designers analyze your solution to identify pain points and improvement areas. Through a comprehensive review, we provide actionable recommendations to optimize the UI and navigation. Our goal is to deliver a seamless, intuitive user experience that boosts engagement and customer satisfaction.',
  },
  {
    id: '07',
    title: 'Branding',
    description:
      'DevEntia\'s talented designers help you build a strong, memorable brand identity.\nWe craft visually stunning and cohesive branding elements that connect with your target audience.From logos to brand books, we ensure every element reflects your business\'s unique values.',
  },
];

// ✅UI solutions data
const uiSolutions = [
  {
    id: 8,
    logo: logo1,
    title: 'Wireframes & Prototypes',
    description:
      'Wireframes and prototypes are key tools in the UI/UX design process, allowing designers and developers to visualize and test a website or app\'s layout and functionality before development.\nThey facilitate clear communication of ideas, ensuring all project stakeholders are aligned.',
  },
  {
    id: 9,
    logo: logo2,
    title: 'User flows & Informational architecture',
    description:
      'User flows and information architecture are crucial in software design to ensure ease of navigation and usability.\nUser flows map the steps a user takes to complete tasks, while information architecture organizes and structures the software\'s content.',
  },
  {
    id: 10,
    logo: logo3,
    title: 'UI Kit & Design system',
    description:
      'Using a UI kit and design system saves time and resources by providing standardized components and guidelines for designers and developers They accelerate development, allow easy expansion, and adapt as a product grows.',
  },
  {
    id: 11,
    logo: logo4,
    title: 'Usability testing & Surveys',
    description:
      'Usability testing and surveys are essential in software design to ensure the product meets user needs and expectations.\nThey gather user feedback, which is then used to refine and improve the software’s design.',
  },
    {
    id: 12,
    logo: logo5,
    title: 'Accessibility & Inclusiveness',
    description:
      'DevEntia prioritizes accessibility and inclusiveness, designing user-friendly solutions that cater to the widest audience in line with WCAG standards.',
  },
  {
    id: 13,
    logo: logo6,
    title: '3D modeling & Animation',
    description:
      'DevEntia\'s 3D modeling and animation services bring your ideas to life with realistic simulations and striking visuals. From product prototypes to architectural visualizations, our experts create custom 3D models and animations tailored to your business needs.These solutions help you stand out in a competitive marketplace.',
  },
];

const uiProcesses = [
  {
    title: 'Empathize',
    description:
      'During the empathize phase, DevEntia\'s design team works closely with you to understand your goals, target audience, and project requirements.',
  },
  {
    title: 'Define',
    description:
      'DevEntia conducts extensive user research to understand the target audience, their needs, and preferences.\nThis includes competitor analysis, surveys, and user interviews.\nThe insights gained form the foundation for developing user personas and defining user journeys.',
  },
  {
    title: 'Ideate',
    description:
      'In this stage, DevEntia brainstorms and develops creative solutions to meet user needs identified during research.We use design techniques such as sketching, wireframing, and creating user flows to visualize and iterate on concepts.',
  },
  {
    title: 'Prototype',
    description:
      'In the wireframing and prototyping stage, DevEntia\'s designers create a visual representation of the UI to gather feedback from you, stakeholders, and users. We test and refine the product\'s layout, navigation, and functionality before moving forward.',
  },
  {
    title: 'Test',
    description:
      'The testing phase allows DevEntia to identify strengths and areas for improvement in your prototype.\nUser feedback guides changes and enhancements before investing time and resources into full development.',
  },
 
];

import logo51 from '@/assets/images/long.png';
import logo61 from '@/assets/images/full.png';
import logo7 from '@/assets/images/Proven.png';
import logo8 from '@/assets/images/Flexibility.png';
import logo9 from '@/assets/images/Transparency.png';
import logo10 from '@/assets/images/regular.png';

import logo11 from '@/assets/images/long1.png';
import logo12 from '@/assets/images/full1.png';
import logo13 from '@/assets/images/Proven1.png';
import logo14 from '@/assets/images/Flexibility1.png';
import logo15 from '@/assets/images/Transparency1.png';
import logo16 from '@/assets/images/regular1.png';

const uiWhyUs = [
  {
    id: 12,
    title: 'Long-term partnership',
    description:
      'Our clients appreciate the quality of our solutions, with 52% partnering with us for over four years.',
    darkLogo: logo51,
    lightLogo: logo11,
  },
  {
    id: 13,
    title: 'Full stack development',
    description:
      'From front-end to back-end, we manage every development aspect, delivering complete end-to-end solutions.',
    darkLogo: logo61,
    lightLogo: logo12,
  },
  {
    id: 14,
    title: 'Proven expertise',
    description:
      'Our engineers possess extensive cloud product engineering expertise, supported by relevant certifications.',
    darkLogo: logo7,
    lightLogo: logo13,
  },
  {
    id: 15,
    title: 'Flexibility',
    description:
      'Regardless of the challenge, we remain agile, adapting smoothly to your needs, goals, and processes.',
    darkLogo: logo8,
    lightLogo: logo14,
  },
  {
    id: 16,
    title: 'Transparency',
    description:
      'We emphasize transparent communication, keeping you informed about your project’s progress.',
    darkLogo: logo9,
    lightLogo: logo15,
  },
  {
    id: 17,
    title: 'Regulatory compliance',
    description:
      'Our solutions consistently comply with industry and global standards, including HIPAA, GDPR, and ISO 27001.',
    darkLogo: logo10,
    lightLogo: logo16,
  },
];

function Page() {
  return (
    <div>
       {/* H1 for SEO */}
      <h1 className="sr-only">
        Creating Intuitive UI/UX Designs That Users Love
      </h1>
      <Hero />

      <ServicesSection
        heading="Our UI/UX design services"
        servicesData={uiServices}
      />

<UXDesignSection />

  <OurProcessesSection
        heading="Process"
        subHeading="Design thinking"
        subText="DevEntia&apos;s design approach is collaborative, involving you at every step and considering all project aspects.This ensures a thorough, well-rounded process.
The result is a streamlined development workflow that saves time, money, and resources."
        processes={uiProcesses}
      />

      <SolutionsSection
        topWord="TECHNOLOGIES"
        heading="Tools and Technologies"
        subText="From wireframes to high-fidelity prototypes, we bring your ideas to life using the latest designtools and technologies."
        solutionsData={uiSolutions}
      />

    <PortfolioSection />
      {/* <WhyUs heading="Why Choose Us?" services={uiWhyUs} /> */}

       <Testimonials /> 
      <Contact />
    </div>
  );
}

export default Page;
