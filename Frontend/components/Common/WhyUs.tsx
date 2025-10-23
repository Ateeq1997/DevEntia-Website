'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  darkLogo: any; // Next.js Image import
  lightLogo: any;
}

interface WhyUsProps {
  heading: string;
  services: ServiceItem[];
}

const WhyUs: React.FC<WhyUsProps> = ({ heading, services }) => {
  return (
    <section className="py-20 px-5 md:px-20 bg-white dark:bg-[#161616] transition-colors duration-500">
      {/* Section Titles */}
      <div className="mb-16">
        <p className="text-[20px] font-medium font-['Bai_Jamjuree'] text-[#323232] dark:text-[#B2B2B2] mb-2">
          Why us
        </p>
        <h2 className="text-[32px] font-semibold font-['Bai_Jamjuree'] text-black dark:text-white">
          {heading}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/Services/${service.title.replace(/\s+/g, '')}`}
            className="group relative bg-transparent border border-black dark:border-[#404040] 
                       p-8 flex flex-col justify-start gap-6 transition-all duration-500 
                       w-full h-full hover:scale-[1.03] hover:border-blue-500"
          >
            {/* Corner + signs */}
            <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-black dark:text-white font-bold text-lg">+</span>
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-black dark:text-white font-bold text-lg">+</span>
            <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-black dark:text-white font-bold text-lg">+</span>
            <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-black dark:text-white font-bold text-lg">+</span>

            {/* Logo */}
            <div className="relative self-start w-20 h-20">
              <div className="absolute inset-0 w-24 h-24 bg-blue-500/40 blur-2xl rounded-full -z-0 group-hover:bg-blue-500/60 transition-all duration-500"></div>

              <Image
                src={service.lightLogo}
                alt={service.title}
                className="w-full h-full object-contain relative z-10 dark:hidden"
              />
              <Image
                src={service.darkLogo}
                alt={service.title}
                className="w-full h-full object-contain relative z-10 hidden dark:block"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-black dark:text-white mt-2 group-hover:text-blue-500 transition-colors">
              {service.title}
            </h3>
            <p className="text-black/70 dark:text-white/70 leading-relaxed break-words whitespace-pre-line">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
