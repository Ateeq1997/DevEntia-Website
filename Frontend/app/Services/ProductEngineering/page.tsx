'use client';

import React from 'react';
import Hero from '@/components/Services/Product/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';
import OurProcessesSection from '@/components/Common/OurProcessesSection';
import WhyUs from '@/components/Common/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/contact'; 

import logo1 from '@/assets/images/Healthcare.png';
import logo2 from '@/assets/images/Retail.svg.png';
import logo3 from '@/assets/images/maunfacturing.png';
import logo4 from '@/assets/images/Finance.png';

// ✅ Product-specific data
const productServices = [
  {
    id: '01',
    title: 'Product conceptualization',
    description:
      'To guide clients through product ideation, we start by understanding their business needs, researching their ideal customer profile, and crafting tailored product concepts. We then build detailed roadmaps that define development goals',
  },
  {
    id: '02',
    title: 'User experience design',
    description:
      'We design user-friendly, visually appealing interfaces through research, wireframes, prototypes, and usability testing.Our UX/UI services ensure solutions that match audience needs and deliver engaging experiences.',
  },
  {
    id: '03',
    title: 'Software development',
    description:
      'We create custom mobile, web, and desktop software.\n Our Agile approach ensures speed, security, and top performance.\nSolutions integrate seamlessly to meet business needs and boost efficiency.',
  },
  {
    id: '04',
    title: 'Product testing and quality assurance',
    description:
      'We perform manual and automated testing to quickly detect and fix bugs, weaknesses, and vulnerabilities.Our QA engineers create test cases, run tests, and address UX issues to boost product quality.',
  },
  {
    id: '05',
    title: 'Product maintenance and support',
    description:
      'EffectiveSoft provides on-demand maintenance, including adaptive, corrective, perfective, and preventive support. We fix issues, add features, enhance performance, and offer 24/7 L1-L3 support for urgent problems.',
  },
  {
    id: '06',
    title: 'Data engineering, analytics, and visualization',
    description:
      'We build powerful data solutions, including ETL/ELT tools, analytics platforms, visualization software, and storage systems. Our solutions handle massive datasets, create robust pipelines, and turn raw data into clear, insightful visuals.',
  },
  {
    id: '07',
    title: 'Blockchain development',
    description:
      'We guide stakeholders in understanding blockchain technology, its applications, and business benefits. Our experts advise on strategic implementation to boost efficiency, security, transparency, and traceability.',
  },
];

// ✅ Product solutions data
const productSolutions = [
  {
    id: 8,
    logo: logo1,
    title: 'Healthcare',
    description:
      'We deliver healthtech solutions like mHealth apps, telehealth systems, IVD software, patient monitoring, and medical record tools.All our applications comply with GDPR and HIPAA, ensuring secure data handling.Features like EHRs, telemedicine, patient portals, and e-prescriptions enhance patient care and improve health outcomes.',
  },
  {
    id: 9,
    logo: logo2,
    title: 'Retail and e-commerce',
    description:
      'We offer end-to-end retail and e-commerce product engineering, from planning to maintenance.\n Our solutions include CRM, inventory management, POS, billing, and more.Built with advanced features and sleek design, they deliver a seamless, engaging customer experience',
  },
  {
    id: 10,
    logo: logo3,
    title: 'Manufacturing',
    description:
      'We guide clients through the full product engineering life cycle, creating custom manufacturing software to streamline automation, predictive maintenance, supply chains, and inventory.\n Our expertise enables us to build solutions like QMS, WMS, and ERP systems. These tools boost efficiency and optimize production processes end to end.',
  },
  {
    id: 11,
    logo: logo4,
    title: 'Banking, financial services, and insurance',
    description:
      'With deep experience in banking, financial services, and insurance (BFSI), we design and deliver software ranging from financial analytics tools to end-to-end banking solutions.We provide full support across every product engineering stage.Our solutions meet customer needs, foster innovation, and drive business growth.',
  },
];

const productProcesses = [
  {
    title: 'Analysis and Planning',
    description:
      'We start by gathering business requirements and defining the products purpose and value.\nThrough market research and competitor analysis, we assess its business and technical feasibility.\nFinally, we create a detailed product roadmap with resources, budget, timelines, and key milestones.',
  },
  {
    title: 'Defining requirements',
    description:
      'We turn gathered requirements into a product specification, use case document, and requirement traceability matrix (RTM). The specification defines design, architecture, functionality, testing types, and deployment environments. Use cases map user interactions, while the RTM ensures all project requirements are tracked and completed.',
  },
  {
    title: 'Design',
    description:
      'Using a design thinking approach, we build a high-fidelity prototype aligned with business goals and customer needs. We focus on solving pain points and delivering an exceptional user experience.\nAt this stage, we also design the solution’s architecture, defining how its components interact.',
  },
  {
    title: 'Development',
    description:
      'After validating the design, we bring together product managers, developers, architects, and designers to start development.\nCombining business insight, technical expertise, and creativity, we follow proven engineering practices.\nThis ensures we deliver a highly functional solution based on the approved prototype specifications.',
  },
  {
    title: 'Testing',
    description:
      'in the testing phase, we perform functional and non-functional tests to ensure the software is bug-free and reliable. This process guarantees top performance, security, and usability.\nThe result is a high-quality product that meets user needs and adapts to changing demands.',
  },
  {
    title: 'Deployment',
    description:
      'After confirming top performance, we launch the product for user interaction.\nWe ensure a smooth release using strategies like CI/CD pipelines, blue-green, ramped, and rolling deployments.This guarantees a reliable and efficient go-live process.',
  },
    {
    title: 'Maintenance',
    description:
      'In the final phase, we track product performance, gather user feedback, and monitor market trends.\nWe provide fast maintenance and support, fixing issues and delivering updates.\nThis ensures smooth operation and keeps the product aligned with evolving user needs.',
  },
];

import logo5 from '@/assets/images/profound.png';
import logo6 from '@/assets/images/strong.png';
import logo7 from '@/assets/images/agile.png';
import logo8 from '@/assets/images/round.png';
import logo9 from '@/assets/images/quality.png';
import logo10 from '@/assets/images/regular.png';

import logo11 from '@/assets/images/profound1.png';
import logo12 from '@/assets/images/strong1.png';
import logo13 from '@/assets/images/agile1.png';
import logo14 from '@/assets/images/round1.png';
import logo15 from '@/assets/images/quality1.png';
import logo16 from '@/assets/images/regular1.png';

const productWhyUs = [
  {
    id: 12,
    title: 'Profound product engineering expertise',
    description:
      'Our specialists bring expertise in business analysis, market research, design, problem-solving, and technical skills.\nThis diverse skill set enables us to craft high-quality, fast-performing software solutions.\nWe focus on solving real-world challenges and delivering measurable results.',
    darkLogo: logo5,
    lightLogo: logo11,
  },
  {
    id: 13,
    title: 'Strong track record',
    description:
      'Since our inception, we have delivered 1,835+ projects across multiple industries.\nOur success comes from streamlined engineering processes, advanced tools, and proven techniques.\nThese include wireframing, UX design, CAD software, and thorough QA and testing practices.',
    darkLogo: logo6,
    lightLogo: logo12,
  },
  {
    id: 14,
    title: 'Agile and DevOps methodologies',
    description:
      'Agile and DevOps are central to our product engineering, improving software quality, reliability, and scalability while speeding time-to-market. We follow best practices like cross-functional collaboration, frequent testing, CI/CD, and Infrastructure as Code (IaC).\nThis approach ensures high-quality solutions and strong customer satisfaction.',
    darkLogo: logo7,
    lightLogo: logo13,
  },
  {
    id: 15,
    title: 'Round-the-clock availability',
    description:
      'With a global presence, Deventia experts are available 24/7 to provide full-cycle services to clients worldwide.\nOur offerings go beyond software development to include product engineering, business analysis, data analytics, and visualization.\nWe also integrate advanced technologies such as AI/ML, blockchain, IoT, and more.',
    darkLogo: logo8,
    lightLogo: logo14,
  },
  {
    id: 16,
    title: 'Steadfast focus on security and compliance',
    description:
      'we prioritize security and regulatory compliance in product engineering.\nOur ISO/IEC 27001:2013 certification reflects our commitment to safeguarding clients sensitive information.\nThis ensures we deliver secure solutions capable of withstanding diverse cyber threats.',
    darkLogo: logo10,
    lightLogo: logo16,
  },
  {
    id: 17,
    title: 'Quality oriented approach',
    description:
      'For more than 20 years, we have upheld a commitment to quality above all else.\nWe offer full-cycle product engineering services, from concept to market launch.\nJoin 780+ satisfied clients worldwide who trust Deventia as their partner.',
    darkLogo: logo9,
    lightLogo: logo15,
  },
];

function Page() {
  return (
    <div>
      <Hero />

      <ServicesSection
        heading="We provide a full range of product engineering services"
        servicesData={productServices}
      />

      <SolutionsSection
        topWord="Industries"
        heading="Industries"
        subText=""
        solutionsData={productSolutions}
      />

      <OurProcessesSection
        heading="Processes"
        subHeading="Our software product engineering process"
        processes={productProcesses}
      />

      <WhyUs heading="Why Choose Us?" services={productWhyUs} />

       <Testimonials /> 
      <Contact />
    </div>
  );
}

export default Page;
