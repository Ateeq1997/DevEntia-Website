'use client';

import React from 'react';
import Hero from '@/components/Services/Cloud/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';
import OurProcessesSection from '@/components/Common/OurProcessesSection';
import WhyUs from '@/components/Common/WhyUs';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/contact'; 

import logo1 from '@/assets/images/Finance.svg.png';
import logo2 from '@/assets/images/Trading-software.svg.png';
import logo3 from '@/assets/images/Healthcare.svg.png';
import logo4 from '@/assets/images/Logistics.svg.png';
import logo5 from '@/assets/images/Enterprise.svg (1).png';
import logo6 from '@/assets/images/Retail.svg (1).png';
import { Metadata } from 'next';

// -------- SEO Metadata --------
export const metadata: Metadata = {
  title: "Cloud Engineering Services - AWS, Azure & GCP Solutions",
  description:
    "Expert cloud engineering services: AWS, Azure, and GCP. Cloud migration, architecture design, DevOps, microservices, and Kubernetes solutions for scalable applications.",
  keywords: [
    "cloud engineering services",
    "AWS development",
    "cloud migration services",
    "DevOps consulting",
    "Kubernetes solutions",
  ],
  openGraph: {
    title: "Cloud Engineering Services - AWS, Azure & GCP Solutions",
    description:
      "Expert cloud engineering services: AWS, Azure, and GCP. Cloud migration, architecture design, DevOps, microservices, and Kubernetes solutions for scalable applications.",
    url: "https://dev.deventiatech.com/Services/CloudEngineering",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417327/cloud-engineering-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Engineering Services by DevEntia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
// ✅ Cloud-specific data
const cloudServices = [
  {
    id: '01',
    title: 'Cloud architecture consulting',
    description:
      'DevEntia\'s cloud strategy ensures a secure, cost-effective cloud adoption.\nWe select the best platform from AWS, Azure, OCI, or GCP.\nOur step-by-step plan recommends the ideal multicloud or hybrid approach.',
  },
  {
    id: '02',
    title: 'Cloud migration',
    description:
      'hen migrating workloads to the cloud, avoiding disruption is crucial. DevEntia’s cloud migration engineers ensure zero downtime and guide you through every step.We handle infrastructure assessment, workload rehosting, refactoring, and secure, automated data migration.',
  },
  {
    id: '03',
    title: 'Cloud-native app development',
    description:
      'Cloud-native apps drive innovation and tackle current and future challenges efficiently.\nDevEntia manages the full development process, including container deployment, serverless platforms, CI/CD, APIs, and custom microservices.',
  },
  {
    id: '04',
    title: 'AI and data modernization',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '05',
    title: 'Cloud optimization',
    description:
      'Businesses produce massive amounts of data, requiring advanced AI and data solutions for efficient processing and better decision-making.DevEntia offers services from cloud-based data warehousing and ML model deployment to real-time analytics.',
  },
  {
    id: '06',
    title: 'Cloud re-architecture',
    description:
      'Break innovation barriers with DevEntia\'s cloud engineering services.\nWe modernize legacy systems into flexible cloud solutions to boost performance and streamline operations.Using microservices, containerization, and serverless computing, we reduce costs, enhance reliability, and maximize agility.',
  },
  {
    id: '07',
    title: 'DevOps',
    description:
      'Cloud success relies on seamless collaboration between development and operations teams.\nDevEntia\'s DevOps engineers automate CI/CD pipelines, manage microservices, containers, Kubernetes, and optimize cloud data storage.',
  },
];

// ✅Cloud solutions data
const cloudSolutions = [
  {
    id: 8,
    logo: logo1,
    title: 'Finance',
    description:
      'Enhanced fraud detection with AI-driven analytics, secure and compliant data storage, streamlined transactions, and real-time risk assessment.',
  },
  {
    id: 9,
    logo: logo2,
    title: 'Trading',
    description:
      'Low-latency, real-time market data processing, algorithmic trading support, disaster recovery, regulatory compliance, remote trading, and global accessibility.',
  },
  {
    id: 10,
    logo: logo3,
    title: 'Healthcare',
    description:
      'Secure patient data storage and processing, seamless healthcare system interoperability, AI-driven diagnostics, and remote patient monitoring.',
  },
  {
    id: 11,
    logo: logo4,
    title: 'Logistics and supply chain',
    description:
      'Real-time fleet tracking and inventory management, enhanced transparency, streamlined logistics maintenance, route optimization, and faster delivery.',
  },
    {
    id: 12,
    logo: logo5,
    title: 'Manufacturing',
    description:
      'Maximized scalability for adapting operations to market demand, remote monitoring, and enhanced collaboration via centralized data access.',
  },
  {
    id: 13,
    logo: logo6,
    title: 'Retail and e-commerce',
    description:
      'Seamless performance during peak shopping periods, omnichannel experience, real-time inventory management, and improved customer engagement.',
  },
];

const cloudProcesses = [
  {
    title: 'Requirement gathering',
    description:
      'We thoroughly analyze your business, goals, needs, challenges, and processes to define clear project requirements.',
  },
  {
    title: 'Design',
    description:
      'We design intuitive, consistent, and visually appealing interfaces that balance aesthetics, functionality, and seamless navigation.',
  },
  {
    title: 'Implementation',
    description:
      'Our team transforms your idea into reality using the technologies and methodologies best suited for the project.',
  },
  {
    title: 'Testing',
    description:
      'DevEntia\'s engineers conduct thorough testing to ensure the solution meets the highest quality standards before launch.',
  },
  {
    title: 'Launch',
    description:
      'We deploy the solution, ensuring a smooth transition, minimal downtime, and maximum effectiveness.',
  },
  {
    title: 'Maintenance and support',
    description:
      'DevEntia provides ongoing support, updates, and optimizations to ensure the solution remains secure and efficient.',
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

const cloudWhyUs = [
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
        Enterprise Cloud Engineering & Migration Services
      </h1>

      <Hero />

      <ServicesSection
        heading="Our cloud engineering services"
        servicesData={cloudServices}
      />

      <SolutionsSection
        topWord="INDUSTRIES"
        heading="Industries we serve"
        subText="Our team includes versatile specialists with varied experience and industry backgrounds.Below are some of the key benefits of cloud engineering solutions in some of the domains we specialize in."
        solutionsData={cloudSolutions}
      />

      <OurProcessesSection
        heading="Process"
        subHeading="Our work process"
        subText=''
        processes={cloudProcesses}
      />

      <WhyUs heading="Why Choose Us?" services={cloudWhyUs} />

       <Testimonials /> 
      <Contact />
    </div>
  );
}

export default Page;
