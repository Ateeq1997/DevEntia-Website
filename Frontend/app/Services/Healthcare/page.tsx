import React from 'react';
import Hero from '@/components/Services/Healthcare/Hero';
import ServicesSection from '@/components/Common/ServicesSection';
import SolutionsSection from '@/components/Common/SolutionsSection';

import OurProcessesSection from '@/components/Common/OurProcessesSection';
import IndustriesSection from '@/components/Services/Healthcare/IndustriesSection';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/contact';
import { Metadata } from 'next';

// -------- SEO Metadata --------
export const metadata: Metadata = {
  title: "Healthcare Software Development - HIPAA Compliant Solutions",
  description:
    "DevEntia develops secure healthcare software: EHR systems, telemedicine apps, patient portals, and medical practice management. HIPAA-compliant, cloud-based solutions.",
  keywords: [
    "healthcare software development",
    "HIPAA compliant software",
    "telemedicine app development",
    "EHR system development",
    "medical practice software",
  ],
  openGraph: {
    title: "Healthcare Software Development - HIPAA Compliant Solutions",
    description:
      "DevEntia develops secure healthcare software: EHR systems, telemedicine apps, patient portals, and medical practice management. HIPAA-compliant, cloud-based solutions.",
    url: "https://dev.deventiatech.com/Services/Healthcare",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417326/healthcare-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare Software Solutions by DevEntia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const healthcareServices = [
  {
    id: "01",
    title: "Consulting",
    description: `DevEntia helps medical organizations build optimal digital infrastructure by guiding technology selection, choosing solutions aligned with your needs, and developing an effective implementation plan.`,
  },
  {
    id: "02",
    title: "Custom software Development",
    description: `Many healthcare institutions need tailored solutions to address specific requirements.DevEntia’s custom software development services design and build software that meets the unique challenges of each healthcare provider.`,
  },
  {
    id: "03",
    title: "Integration and services",
    description: `These services ensure new software integrates seamlessly with existing healthcare systems.Integration connects IT systems, databases, and applications, enabling unified operations that enhance data exchange and workflow efficiency.`,
  },
  {
    id: "04",
    title: "Support and maintenence",
    description: `Ongoing support and maintenance are crucial for healthcare applications, where downtime can have serious repercussions. EffectiveSoft might offer reliable support and timely updates to keep software running smoothly and securely, which is vital in a fast-paced medical environment.`,
  },
  {
    id: "05",
    title: "Legacy softwarere engineering",
    description: `Our dedicated support ensures your financial systems remain reliable, secure, and compliant with evolving regulations.`,
  },
];


import logo1 from '@/assets/images/logo1.png';
import logo2 from '@/assets/images/logo2.png';
import logo3 from '@/assets/images/logo3.png';
import logo4 from '@/assets/images/logo4.png';
import logo5 from '@/assets/images/logo5.png';
import logo6 from '@/assets/images/logo6.png';

const healthcareSolutions = [
  { id: 1, logo: logo1, title: 'EMR / EHR', description: 'Electronic records help hospital staff manage complex data and streamline workflows, boosting productivity.\n DevEntia develops healthcare platforms, including EMR/EHR systems, to replace paper records and securely collect, access, store, and share patient data.' },
  { id: 2, logo: logo2, title: 'Medical CRMs', description: 'Customer relationship management (CRM) systems help build strong connections with patients and healthcare organizations. They store medical history and patient information and support automated communications, such as email notifications.' },
  { id: 3, logo: logo3, title: 'Medical devices software', description: 'High-quality, integrated solutions for medical devices are increasingly in demand.\nDevEntia delivers secure, custom healthcare apps tailored to meet specific industry requirements.' },
  { id: 4, logo: logo4, title: 'Imaging software', description: 'Imaging software is essential for any diagnostics department. DevEntia develops encoding software and custom visualization and analytical tools to process MRI, PET, and CT images.\nOur applications meet modern diagnostic lab requirements and comply with DICOM and other standards.' },
  { id: 5, logo: logo5, title: 'Medical practice management', description: 'Practice management software (PMS) streamlines the daily operations of medical practices. \nThese applications provide access to patient records, handle registration and appointment scheduling, manage billing and insurance, and generate timely reports.' },
  { id: 6, logo: logo6, title: 'Patient management', description: 'Patient management software optimizes the patient experience by managing flow, monitoring chronic conditions, tracking locations, maintaining records, and generating reports.\nDevEntia develops powerful solutions that improve patient logistics and eliminate long queues in healthcare facilities.' },
];
const healthcareProcesses = [
  {
    title: 'Requirements gathering',
    description:
      "The initial stage focuses on understanding the healthcare provider's specific needs and goals.\nIt involves identifying the problems the software should solve, required functionalities, and necessary regulatory compliance.",
  },
  {
    title: 'Planning and analysis',
    description:
      'In this phase, developers and project managers define the project scope, required resources, timelines, and detailed specifications. They also assess potential risks and plan mitigation strategies.',
  },
  {
    title: 'Design',
    description:
      'At this stage, the software architecture is designed, including documentation detailing its functionality. \nUser interface (UI) design is a key focus in healthcare software to ensure ease of use and accessibility.',
  },
  {
    title: 'Development',
    description:
      'During this phase, developers write the software code following the specifications from the design stage. \nThe process often involves multiple iterations, with development, testing, and refinement of software components.',
  },
  {
    title: 'Testing',
    description:
      'Rigorous testing is essential in healthcare software to ensure reliability, safety, and regulatory compliance. It verifies that the software meets all required healthcare standards.',
  },
  {
    title: 'Implementation',
    description:
      'After testing and approval, the software is deployed in the healthcare setting. \nThis phase may include staff training, data migration from legacy systems, and a phased rollout for a smooth transition.',
  },
  {
    title: 'Maintenance and updates',
    description:
      'Post-deployment, ongoing maintenance ensures issues are resolved, software is updated (including security patches), and new features or functionalities can be added as needed.',
  },
];



function Page() {
  return (
    <div>
  
      {/* H1 for SEO */}
      <h1 className="sr-only">
        HIPAA-Compliant Healthcare Software Development Services
      </h1>
      <Hero />

      {/* Services Section */}
      <ServicesSection
        heading="Healthcare software development services"
        servicesData={healthcareServices}
      />

      {/* ✅ Solutions Section with top word "Trends" */}
      <SolutionsSection
        topWord="Solutions"
        heading="Custom healthcare software development"
        subText="EffectiveSoft considerable experience encompasses the development of the following custom healthcare software."
        solutionsData={healthcareSolutions}
      />

       <OurProcessesSection
        heading="Our Processes"
        subHeading="Healthcare software development process"
        subText=''
        processes={healthcareProcesses}
      />
      <IndustriesSection />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Page;
