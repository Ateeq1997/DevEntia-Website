'use client';

import React from 'react';
import Hero from '@/components/Services/Fintech/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';
import OurProcessesSection from '@/components/Common/OurProcessesSection';
import WhyUs from '@/components/Common/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/contact'; 

import logo1 from '@/assets/images/ai.png';
import logo2 from '@/assets/images/block.png';
import logo3 from '@/assets/images/Iot.png';
import logo4 from '@/assets/images/cloud.png';

// ✅ Fintech-specific data
const fintechServices = [
  {
    id: '01',
    title: 'Trading Software',
    description:
      'At DevEntia, we develop custom trading software for fast and secure transactions across asset classes. Our solutions include FX platforms, equity trading systems, automated trading, and cryptocurrency platforms.',
  },
  {
    id: '02',
    title: 'Financial analytics solutions',
    description:
      'At DevEntia, we create financial data analytics software—from BI systems to financial modeling tools—that enables BFSI firms to make faster, more accurate decisions. Leveraging AI, ML, and IoT, our solutions enhance forecasting and analytical capabilities.',
  },
  {
    id: '03',
    title: 'Risk Management Software',
    description:
      'We develop risk management software that evaluates creditworthiness, monitors liquidity, and manages market and operational risks. Our solutions support regulatory compliance with features like automated tracking, audit trails, and advanced data analytics.',
  },
  {
    id: '04',
    title: 'Internal banking operations software',
    description:
      'At DevEntia, we build banking systems supporting front-, middle-, and back-office operations. Front-office solutions drive revenue, customer engagement, and brand awareness.',
  },
  {
    id: '05',
    title: 'Personal finance software management',
    description:
      'At DevEntia, we guide clients through the full development of financial software, creating personal finance management (PFM) systems that help manage budgets and achieve financial goals.',
  },
  {
    id: '06',
    title: 'Investment and wealth management systems',
    description:
      'At DevEntia, we develop investment and wealth management solutions that enhance financial planning and decision-making. Our tools assist investors and advisors with reporting, fee calculations, and data aggregation.',
  },
  {
    id: '07',
    title: 'Banking software for customer services',
    description:
      'To provide top-tier services, banks require secure, responsive, and flexible software. At DevEntia, we develop custom banking solutions, including mobile and online banking apps, loan and mortgage systems, payment platforms, and accounting software.',
  },
];

// ✅ Fintech solutions data
const fintechSolutions = [
  {
    id: 8,
    logo: logo1,
    title: 'AI and ML',
    description:
      'AI and ML transform raw financial data from multiple sources into a single source of truth, enabling expense analysis, cost forecasting, campaign planning, and financial services promotion.',
  },
  {
    id: 9,
    logo: logo2,
    title: 'Blockchain',
    description:
      'Blockchain provides transparent and secure recording of financial transactions. In financial software, it enables real-time payments, improves trade finance, and transforms asset management and insurance processes.',
  },
  {
    id: 10,
    logo: logo3,
    title: 'IoT',
    description:
      'IoT-based solutions allow real-time data collection and analytics. They streamline payments, credit risk management, accounting, auditing, and customer service while enhancing transaction security and overall customer experience.',
  },
  {
    id: 11,
    logo: logo4,
    title: 'Cloud Computing',
    description:
      'Cloud computing offers real-time scalability, secure and compliant data storage, and disaster recovery solutions, all while lowering infrastructure costs.',
  },
];

const fintechProcesses = [
  {
    title: 'Planning',
    description:
      'Before starting a financial software project, we gather requirements, analyze business needs, and create a detailed plan. This plan includes scope, cost, timeline, and resource estimates. We also evaluate potential risks that could arise during project execution.',
  },
  {
    title: 'Design',
    description:
      'During the design phase, we leverage planning insights to build an effective finance solution prototype and craft an intuitive UI/UX that ensures seamless navigation and user interaction. We focus on creating a visually appealing and user-friendly interface.',
  },
  {
    title: 'Software development',
    description:
      'The financial software development process follows several key steps. First, our engineers choose the optimal tech stack for both back-end and front-end development. Next, we ensure the software integrates smoothly with existing corporate systems.',
  },
  {
    title: 'Testing',
    description:
      'Our QA engineers perform both manual and automated testing to ensure the finance solution meets the highest quality standards before launch.',
  },
  {
    title: 'Deployment',
    description:
      'Once the finance software is fully tested, we deploy it to the live environment, monitor its performance, ensure long-term sustainability, and provide corporate training to our clients.',
  },
  {
    title: 'Maintenance',
    description:
      'DevEntia offers continuous maintenance and support, including software updates and bug fixes, to ensure reliable performance and keep solutions aligned with market trends and evolving customer needs.',
  },
];

import logo5 from '@/assets/images/long.png';
import logo6 from '@/assets/images/full.png';
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

const fintechWhyUs = [
  {
    id: 12,
    title: 'Long-term partnership',
    description:
      'Our clients appreciate the quality of our solutions, with 52% partnering with us for over four years.',
    darkLogo: logo5,
    lightLogo: logo11,
  },
  {
    id: 13,
    title: 'Full stack development',
    description:
      'From front-end to back-end, we manage every development aspect, delivering complete end-to-end solutions.',
    darkLogo: logo6,
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
      <Hero />

      <ServicesSection
        heading="Financial software development services"
        servicesData={fintechServices}
      />

      <SolutionsSection
        topWord="Trends"
        heading="Fintech software technology trends"
        subText="Explore the latest technology trends transforming the financial industry."
        solutionsData={fintechSolutions}
      />

      <OurProcessesSection
        heading="Our Processes"
        subHeading="Our financial software development process"
        subText=''
        processes={fintechProcesses}
      />

      <WhyUs heading="Why Choose Us?" services={fintechWhyUs} />

       <Testimonials /> 
      <Contact />
    </div>
  );
}

export default Page;
