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
    <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white dark:bg-[#161616] transition-colors duration-500">
      {/* Services Label */}
      <p className="text-black dark:text-white/80 font-medium text-lg sm:text-xl md:text-2xl leading-snug font-['Bai_Jamjuree'] mb-2">
        Services
      </p>

      {/* Main Heading */}
      <h2 className="text-black dark:text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[1.8rem] leading-snug font-['Bai_Jamjuree'] mb-10 sm:mb-12 break-words">
        {heading}
      </h2>

      {/* Service Rows */}
      <div className="flex flex-col gap-10 sm:gap-12">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="
              grid 
              grid-cols-1 
              md:grid-cols-[40px_250px_1fr] 
              gap-4 sm:gap-6 md:gap-10 
              items-start
            "
          >
            {/* 🔹 Mobile Layout: Number + Title in same line */}
            <div className="md:hidden flex items-center gap-3">
              <span className="text-blue-500 font-semibold text-base leading-relaxed font-['Bai_Jamjuree']">
                {service.id}
              </span>
              <h3 className="font-medium text-lg leading-snug text-black dark:text-white font-['Bai_Jamjuree']">
                {service.title}
              </h3>
            </div>

            {/* 🔹 Desktop Layout: Separate Columns */}
            <div className="hidden md:block text-blue-500 font-semibold text-base md:text-lg leading-relaxed font-['Bai_Jamjuree'] mt-1">
              {service.id}
            </div>

            <div className="hidden md:block font-medium text-lg md:text-xl lg:text-2xl leading-snug text-black dark:text-white font-['Bai_Jamjuree']">
              {service.title}
            </div>

            {/* Description (shared for all screens) */}
            <div className="text-black/90 dark:text-white/90 text-sm sm:text-base md:text-lg leading-relaxed md:ml-4 lg:ml-8 break-words whitespace-pre-line">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
