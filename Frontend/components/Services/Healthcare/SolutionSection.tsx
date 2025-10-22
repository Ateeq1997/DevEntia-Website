'use client';

import React from 'react';
import Image from 'next/image';

import logo1 from '@/assets/images/logo1.png';
import logo2 from '@/assets/images/logo2.png';
import logo3 from '@/assets/images/logo3.png';
import logo4 from '@/assets/images/logo4.png';
import logo5 from '@/assets/images/logo5.png';
import logo6 from '@/assets/images/logo6.png';

const solutionsData = [
  {
    id: 1,
    logo: logo1,
    title: 'EMR / EHR',
    description:
      'Electronic records help hospital staff manage complex data and streamline workflows, boosting productivity.\n DevEntia develops healthcare platforms, including EMR/EHR systems, to replace paper records and securely collect, access, store, and share patient data.',
  },
  {
    id: 2,
    logo: logo2,
    title: 'Medical CRMs',
    description:
      'Customer relationship management (CRM) systems help build strong connections with patients and healthcare organizations. They store medical history and patient information and support automated communications, such as email notifications.',
  },
  {
    id: 3,
    logo: logo3,
    title: 'Medical devices software',
    description:
      'High-quality, integrated solutions for medical devices are increasingly in demand.\nDevEntia delivers secure, custom healthcare apps tailored to meet specific industry requirements.',
  },
  {
    id: 4,
    logo: logo4,
    title: 'Imaging software',
    description:
      'Imaging software is essential for any diagnostics department. DevEntia develops encoding software and custom visualization and analytical tools to process MRI, PET, and CT images.\nOur applications meet modern diagnostic lab requirements and comply with DICOM and other standards.',
  },
  {
    id: 5,
    logo: logo5,
    title: 'Medical practice management',
    description:
      'Practice management software (PMS) streamlines the daily operations of medical practices. \nThese applications provide access to patient records, handle registration and appointment scheduling, manage billing and insurance, and generate timely reports.',
  },
  {
    id: 6,
    logo: logo6,
    title: 'Patient management',
    description:
      'Patient management software optimizes the patient experience by managing flow, monitoring chronic conditions, tracking locations, maintaining records, and generating reports.\nDevEntia develops powerful solutions that improve patient logistics and eliminate long queues in healthcare facilities.',
  },
];

const SolutionsSection = () => {
  return (
    <section className="relative py-20 px-5 md:px-20 overflow-hidden transition-colors duration-500"
      style={{
        background: 'linear-gradient(to bottom, #06091a 0%, #1d1d5d 50%, #06091a 100%)',
      }}
    >
      {/* Hexagonal Background */}
      <div className="absolute -top-40 left-0 w-full h-[1000px] flex justify-center items-center pointer-events-none">
        <svg
          className="w-[130%] h-[130%] opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          fill="none"
          stroke="#cfd8ff" // light blue-white tone
        >
          <pattern
            id="hexPattern"
            width="100"
            height="86.6"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(3)"
          >
            <polygon
              points="50,0 100,25 100,75 50,100 0,75 0,25"
              stroke="#cfd8ff"
              strokeWidth="0.4"
              fill="none"
            />
          </pattern>
          <rect width="800" height="600" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Center lighter glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[#2a2a85]/45 blur-3xl rounded-full"></div>

      {/* Section Content */}
      <div className="relative z-10">
        {/* Services word */}
        <p className="text-[#C2C2C2] font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2">
          Services
        </p>

        {/* Heading */}
        <h2 className="text-white font-semibold text-[36px] leading-[44px] font-['Bai_Jamjuree'] mb-4">
          Our Cutting-Edge Solutions
        </h2>

        {/* Paragraph */}
        <p className="text-[#C2C2C2] font-normal text-[18px] leading-[28px] font-['Bai_Jamjuree'] mb-12 whitespace-nowrap">
          Explore our comprehensive solutions that drive innovation, efficiency, and success across your organization.
        </p>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col items-start p-6 rounded-3xl border border-[#99999950] bg-[#CACACA1A] md:h-[370px] w-full backdrop-blur-[1px]"
            >
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src={solution.logo}
                  alt={solution.title}
                  width={80}
                  height={80}
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-[32px] leading-[40px] font-['Bai_Jamjuree'] mb-2">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-[#C2C2C2] font-normal text-[18px] leading-[28px] font-['Bai_Jamjuree'] whitespace-pre-line">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
