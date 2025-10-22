'use client';

import React from 'react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  heading: string;
  servicesData: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ heading, servicesData }) => {
  return (
    <section className="py-20 px-5 md:px-20 bg-white dark:bg-[#161616] transition-colors duration-500">
      {/* First Services Word */}
      <p className="text-black dark:text-blue-500 font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2">
        Services
      </p>

      {/* Main Heading */}
      <h2 className="text-black dark:text-white font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-12 break-words">
        {heading}
      </h2>

      {/* Rows */}
      <div className="flex flex-col gap-12">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-1 md:grid-cols-[40px_300px_1fr] gap-10 md:gap-8 items-start"
          >
            {/* Number */}
            <div className="text-blue-500 font-normal text-[16px] leading-[24px] font-['Bai_Jamjuree'] mt-[2px]">
              {service.id}
            </div>

            {/* Heading */}
            <div
              className="font-medium text-[18px] md:text-[24px] leading-[32px] text-black dark:text-white break-words whitespace-normal"
            >
              {service.title}
            </div>

            {/* Paragraph */}
            <div className="text-black/90 dark:text-white/90 text-[16px] md:text-[18px] leading-[28px] md:ml-8">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
