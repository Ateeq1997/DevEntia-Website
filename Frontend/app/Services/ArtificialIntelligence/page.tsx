'use client';

import React from 'react';
import Hero from '@/components/Services/ArtificialIntelligence/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';
import ProcessSection from '@/components/Services/ArtificialIntelligence/ProcessSection';
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
    title: 'Machine learning (ML)',
    description:
      'By leveraging vast datasets and advanced algorithms, machine learning (ML) solutions allow computers to identify patterns and generate insights that enhance decision-making, streamline business processes, and boost profitability',
  },
  {
    id: '02',
    title: 'Natural language processing',
    description:
      'Our AI software development company brings to life systems capable of understanding, analyzing, and processing text and speech much like humans do. From intelligent chatbots to virtual assistants, we deliver state-of-the-art NLP solutions designed',
  },
  {
    id: '03',
    title: 'Generative AI',
    description:
      'Generative AI creates new content—text, images, audio, or code—without human input. \nWe provide integration and customization services to deliver tailored AI solutions.\nOur technology helps businesses solve challenges, enhance services, and streamline decisions.',
  },
  {
    id: '04',
    title: 'Neural network',
    description:
      'An artificial neural network is a network of nodes that simulates how biological neurons work, enabling the detection, classification, and clustering of hidden patterns in raw data. Our solutions help accelerate your business growth and decision-making processes.',
  },
  {
    id: '05',
    title: 'Computer vision',
    description:
      'Computer vision solutions powered by neural networks can detect, classify, and interpret visual data, turning it into actionable insights and recommendations. Use our computer vision solutions to gain insights, boost revenue, and scale your visual data analysis.',
  },
  {
    id: '06',
    title: 'Predictive analytics',
    description:
      'AI-powered tools excel at analyzing massive datasets to deliver personalized recommendations, predict churn, forecast sales, detect fraud, and more. We help turn your data into actionable, business-driving predictions.',
  },
  {
    id: '07',
    title: 'Robotic process automation',
    description:
      'Automation is a cornerstone of digital transformation, enabling companies to streamline operations at scale. Software bots mimic human actions, execute rule-based processes, and work 24/7 to cut costs, boost accuracy, and deliver results.',
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


import logo5 from '@/assets/images/quality1 (2).png';
import logo6 from '@/assets/images/fullcycle.png';
import logo7 from '@/assets/images/geography.png';
import logo8 from '@/assets/images/service.png';
import logo9 from '@/assets/images/experience.png';
import logo10 from '@/assets/images/transparency (2).png';

import logo11 from '@/assets/images/quality2.png';
import logo12 from '@/assets/images/fullcycle2.png';
import logo13 from '@/assets/images/geography2.png';
import logo14 from '@/assets/images/service2.png';
import logo15 from '@/assets/images/experience2.png';
import logo16 from '@/assets/images/transparency2.png';

const productWhyUs = [
  {
    id: 12,
    title: 'Quality',
    description:
      'Quality is our top priority, and our engineers pay close attention to every detail throughout the software development process.',
    darkLogo: logo5,
    lightLogo: logo11,
  },
  {
    id: 13,
    title: 'Full-cycle development',
    description:
      'We deliver complete software development services, covering everything from design and prototyping to testing, deployment, and ongoing support.',
    darkLogo: logo6,
    lightLogo: logo12,
  },
  {
    id: 14,
    title: 'Geography',
    description:
      'With development centers in LATAM and Eastern Europe, we offer clients the advantages of both nearshoring and offshoring.',
    darkLogo: logo7,
    lightLogo: logo13,
  },
  {
    id: 15,
    title: 'Service diversity',
    description:
      'We offer end-to-end services, including back-end and front-end development, quality assurance, business analysis, and more.',
    darkLogo: logo8,
    lightLogo: logo14,
  },
  {
    id: 16,
    title: 'Experience',
    description:
      'Our experts have extensive experience using advanced technologies to build solutions of all levels of complexity.',
    darkLogo: logo10,
    lightLogo: logo16,
  },
  {
    id: 17,
    title: 'Transparency',
    description:
      'We use modern agile methodologies to maintain clear, consistent communication and transparent reporting throughout every project.',
    darkLogo: logo9,
    lightLogo: logo15,
  },
];

function Page() {
  return (
    <div>
      <Hero />

      <ServicesSection
        heading="Our AI software development services"
        servicesData={productServices}
      />

      <SolutionsSection
        topWord="Industries"
        heading="Industries"
        subText=""
        solutionsData={productSolutions}
      />

<ProcessSection />


      <WhyUs heading="Why Choose Us?" services={productWhyUs} />

       <Testimonials /> 
      <Contact />
    </div>
  );
}

export default Page;
