'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import serviceLogo1 from '../../assets/images/Icon.png'; 
import serviceLogo2 from '../../assets/images/Icon22.png'; 
import serviceLogo3 from '../../assets/images/Icon23.png'; 
import serviceLogo4 from '../../assets/images/Icon4.png'; 
import serviceLogo5 from '../../assets/images/Icon5.png'; 
import serviceLogo6 from '../../assets/images/Icon6.png'; 

import serviceLogo7 from '../../assets/images/Icon(1).png'; 
import serviceLogo8 from '../../assets/images/Icon(22).png'; 
import serviceLogo9 from '../../assets/images/Icon(23).png'; 
import serviceLogo10 from '../../assets/images/Icon(4).png'; 
import serviceLogo11 from '../../assets/images/Icon(5).png'; 
import serviceLogo12 from '../../assets/images/Icon(6).png'; 

const services = [
  {
    id: 1,
    title: 'Healthcare',
    description:
      'Full-cycle healthcare software, delivering secure, compliant, patient-focused solutions.',
    darkLogo: serviceLogo1,
    lightLogo: serviceLogo7,
  },
  {
    id: 2,
    title: 'Fintech',
    description:
      'End-to-end financial software for banking, trading, and analytics, ensuring compliance and efficiency.',
    darkLogo: serviceLogo2,
    lightLogo: serviceLogo8,
  },
  {
    id: 3,
    title: 'Product Engineering',
    description:
      'End-to-end product development from ideation to deployment and support.',
    darkLogo: serviceLogo3,
    lightLogo: serviceLogo9,
  },
  {
    id: 4,
    title: 'Cloud Engineering',
    description:
      'Cloud solutions including migration, app development, and performance optimization.',
    darkLogo: serviceLogo4,
    lightLogo: serviceLogo10,
  },
  {
    id: 5,
    title: 'UI/UX design',
    description:
      'Complete UI/UX services, creating intuitive and visually engaging digital experiences.',
    darkLogo: serviceLogo5,
    lightLogo: serviceLogo11,
  },
  {
    id: 6,
    title: 'Artificial Intelligence',
    description:
      'AI/ML solutions from data analysis to deployment, enabling automation and predictive insights.',
    darkLogo: serviceLogo6,
    lightLogo: serviceLogo12,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-16 bg-white dark:bg-[#161616] transition-colors duration-500">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-10 sm:mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/Services/${service.title.replace(/\s+/g, '')}`}
            className="group relative bg-transparent border border-black dark:border-[#404040]
                       p-6 sm:p-8 pt-20 sm:pt-24 flex flex-col gap-4 sm:gap-6 transition-all duration-500
                       min-h-[20rem] sm:min-h-[23rem] md:min-h-[25rem] w-full max-w-[22rem] sm:max-w-[23rem]
                       mx-auto hover:scale-[1.03] hover:border-blue-500"
          >
            {/* Corner + signs */}
            <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-black dark:text-white font-bold text-base sm:text-lg">
              +
            </span>
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-black dark:text-white font-bold text-base sm:text-lg">
              +
            </span>
            <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-black dark:text-white font-bold text-base sm:text-lg">
              +
            </span>
            <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-black dark:text-white font-bold text-base sm:text-lg">
              +
            </span>

            {/* Logo with glow */}
            <div className="relative self-start w-16 h-16 sm:w-20 sm:h-20 -mt-2 sm:-mt-4 mb-3 sm:mb-4">
              <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/40 blur-2xl rounded-full -z-0 group-hover:bg-blue-500/60 transition-all duration-500"></div>

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

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black dark:text-white mt-1 sm:mt-2 group-hover:text-blue-500 transition-colors">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
