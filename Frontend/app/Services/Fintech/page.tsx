import React from 'react';
import Hero from '@/components/Services/Fintech/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/contact';

import logo1 from '@/assets/images/logo1.png';
import logo2 from '@/assets/images/logo2.png';
import logo3 from '@/assets/images/logo3.png';
import logo4 from '@/assets/images/logo4.png';

// ✅ Fintech-specific data
const fintechServices = [
  {
    id: "01",
    title: "Trading Software",
    description: `At DevEntia, we develop custom trading software for fast and secure transactions across asset classes. Our solutions include FX platforms, equity trading systems, automated trading, and cryptocurrency platforms.`,
  },
  {
    id: "02",
    title: "Financial analytics solutions",
    description: `At DevEntia, we create financial data analytics software—from BI systems to financial modeling tools—that enables BFSI firms to make faster, more accurate decisions.
Leveraging AI, ML, and IoT, our solutions enhance forecasting and analytical capabilities.`,
  },
  {
    id: "03",
    title: "Risk Management Software",
    description: `We develop risk management software that evaluates creditworthiness, monitors liquidity, and manages market and operational risks. Our solutions support regulatory compliance with features like automated tracking, audit trails, and advanced data analytics.`,
  },
  {
    id: "04",
    title: "Internal banking operations software",
    description: `At DevEntia, we build banking systems supporting front-, middle-, and back-office operations. Front-office solutions drive revenue, customer engagement, and brand awareness.`,
  },
  {
    id: "05",
    title: "Personal finance software management",
    description: `At DevEntia, we guide clients through the full development of financial software, creating personal finance management (PFM) systems that help manage budgets and achieve financial goals.`,
  },
  {
    id: "06",
    title: "Investment and wealth management systems",
    description: `At DevEntia, we develop investment and wealth management solutions that enhance financial planning and decision-making. Our tools assist investors and advisors with reporting, fee calculations, and data aggregation.`,
  },
  {
    id: "07",
    title: "Banking software for customer services",
    description: `To provide top-tier services, banks require secure, responsive, and flexible software. At DevEntia, we develop custom banking solutions, including mobile and online banking apps, loan and mortgage systems, payment platforms, and accounting software.`,
  },
];

// ✅ Fintech solutions data (logos + cards)
const fintechSolutions = [
  {
    id: 1,
    logo: logo1,
    title: 'Digital Banking',
    description:
      'We build digital banking platforms that enhance customer experience and operational efficiency through secure, modern, and scalable solutions.',
  },
  {
    id: 2,
    logo: logo2,
    title: 'Payment Gateways',
    description:
      'Our custom payment gateway systems enable safe, fast, and compliant financial transactions across multiple currencies and regions.',
  },
  {
    id: 3,
    logo: logo3,
    title: 'Blockchain & Smart Contracts',
    description:
      'We implement blockchain-based solutions for secure financial data management, transparency, and automation of business processes using smart contracts.',
  },
  {
    id: 4,
    logo: logo4,
    title: 'AI-Powered Financial Analytics',
    description:
      'Using machine learning and AI, we help fintech companies gain real-time insights, predict trends, and prevent fraud through intelligent analytics tools.',
  },
];

function Page() {
  return (
    <div>
      <Hero />

      {/* ✅ Common Services section with fintech data */}
      <ServicesSection
        heading="Financial software development services"
        servicesData={fintechServices}
      />

      {/* ✅ Common Solutions section with fintech-specific data */}
      <SolutionsSection
        topWord="Trends"
        heading="Fintech software technology trends"
        subText="Explore the latest technology trends transforming the financial industry."
        solutionsData={fintechSolutions}
      />

      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default Page;
