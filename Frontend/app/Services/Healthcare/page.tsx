import React from 'react';
import Hero from '@/components/Services/Fintech/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';
import OurProcessesSection from '@/components/Services/Healthcare/OurProcessesSection';
import IndustriesSection from '@/components/Services/Healthcare/IndustriesSection';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/contact';

// ✅ Fintech Services Data
const fintechServices = [
  {
    id: "01",
    title: "Fintech Consulting",
    description: `DevEntia helps financial organizations identify opportunities for digital transformation by selecting modern technologies and building custom solutions to optimize operations and customer experience.`,
  },
  {
    id: "02",
    title: "Custom Fintech App Development",
    description: `We design and develop secure, high-performance financial applications tailored to your business needs — from mobile banking apps to payment gateways.`,
  },
  {
    id: "03",
    title: "Blockchain and Smart Contracts",
    description: `Our team integrates blockchain-based systems to ensure transparency, traceability, and automation in your financial operations.`,
  },
  {
    id: "04",
    title: "Integration and API Development",
    description: `We create robust APIs and integrate your fintech products with payment systems, analytics tools, and external financial services.`,
  },
  {
    id: "05",
    title: "Maintenance and Support",
    description: `Our dedicated support ensures your financial systems remain reliable, secure, and compliant with evolving regulations.`,
  },
];


import logo1 from '@/assets/images/logo1.png';
import logo2 from '@/assets/images/logo2.png';
import logo3 from '@/assets/images/logo3.png';
import logo4 from '@/assets/images/logo4.png';
import logo5 from '@/assets/images/logo5.png';
import logo6 from '@/assets/images/logo6.png';

const fintechSolutions = [
  { id: 1, logo: logo1, title: 'EMR / EHR', description: 'Electronic records help hospital staff manage complex data and streamline workflows, boosting productivity.\n DevEntia develops healthcare platforms, including EMR/EHR systems, to replace paper records and securely collect, access, store, and share patient data.' },
  { id: 2, logo: logo2, title: 'Medical CRMs', description: 'Customer relationship management (CRM) systems help build strong connections with patients and healthcare organizations. They store medical history and patient information and support automated communications, such as email notifications.' },
  { id: 3, logo: logo3, title: 'Medical devices software', description: 'High-quality, integrated solutions for medical devices are increasingly in demand.\nDevEntia delivers secure, custom healthcare apps tailored to meet specific industry requirements.' },
  { id: 4, logo: logo4, title: 'Imaging software', description: 'Imaging software is essential for any diagnostics department. DevEntia develops encoding software and custom visualization and analytical tools to process MRI, PET, and CT images.\nOur applications meet modern diagnostic lab requirements and comply with DICOM and other standards.' },
  { id: 5, logo: logo5, title: 'Medical practice management', description: 'Practice management software (PMS) streamlines the daily operations of medical practices. \nThese applications provide access to patient records, handle registration and appointment scheduling, manage billing and insurance, and generate timely reports.' },
  { id: 6, logo: logo6, title: 'Patient management', description: 'Patient management software optimizes the patient experience by managing flow, monitoring chronic conditions, tracking locations, maintaining records, and generating reports.\nDevEntia develops powerful solutions that improve patient logistics and eliminate long queues in healthcare facilities.' },
];

// ✅ Fintech Page Component
function Page() {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <ServicesSection
        heading="Fintech software development services"
        servicesData={fintechServices}
      />

      {/* ✅ Solutions Section with top word "Trends" */}
      <SolutionsSection
        topWord="Trends"
        heading="Fintech software technology trends"
        subText="Fintech software technology trends"
        solutionsData={fintechSolutions}
      />

      <OurProcessesSection />
      <IndustriesSection />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Page;
