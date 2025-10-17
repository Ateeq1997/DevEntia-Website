'use client';

import React from 'react';
import Image from 'next/image';
import serviceLogo1 from '../../assets/images/Icon.png'; 
import serviceLogo2 from '../../assets/images/Icon22.png'; 
import serviceLogo3 from '../../assets/images/Icon23.png'; 
import serviceLogo4 from '../../assets/images/Icon4.png'; 
import serviceLogo5 from '../../assets/images/Icon5.png'; 
import serviceLogo6 from '../../assets/images/Icon6.png'; 

const services = [
  { id: 1, title: 'Healthcare', description: 'Full-cycle healthcare software, delivering secure, compliant, patient-focused solutions.', logo: serviceLogo1 },
  { id: 2, title: 'Fintech', description: 'End-to-end financial software for banking, trading, and analytics, ensuring compliance and efficiency.', logo: serviceLogo2 },
  { id: 3, title: 'Product Engineering', description: 'End-to-end product development from ideation to deployment and support.', logo: serviceLogo3 },
  { id: 4, title: 'Cloud Engineering', description: 'Cloud solutions including migration, app development, and performance optimization.', logo: serviceLogo4 },
  { id: 5, title: 'UI/UX design', description: 'Complete UI/UX services, creating intuitive and visually engaging digital experiences.', logo: serviceLogo5 },
  { id: 6, title: 'Artificial Intelligence', description: 'AI/ML solutions from data analysis to deployment, enabling automation and predictive insights.', logo: serviceLogo6 }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-[#161616] dark:bg-white transition-colors duration-500">
      <h2 className="text-3xl font-bold text-white dark:text-black text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative bg-transparent border border-white dark:border-black p-6 flex flex-col gap-4 transition-colors duration-500 rounded-lg min-h-[18rem] max-w-[24rem] mx-auto"
          >
            {/* Corner + signs exactly on border corners */}
            <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white dark:text-black font-bold text-lg">+</span>
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white dark:text-black font-bold text-lg">+</span>
            <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-white dark:text-black font-bold text-lg">+</span>
            <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-white dark:text-black font-bold text-lg">+</span>

            {/* Logo top left */}
            <div className="self-start w-12 h-12 relative">
              <Image
                src={service.logo}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Heading */}
            <h3 className="text-xl font-semibold text-white dark:text-black">
              {service.title}
            </h3>

            {/* Paragraph */}
            <p className="text-white/70 dark:text-black/70">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
