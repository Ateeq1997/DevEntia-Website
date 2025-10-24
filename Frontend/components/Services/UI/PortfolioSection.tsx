'use client';

import React from 'react';
import Image from 'next/image';

// Example image imports (replace with your own)
import portfolio1 from '@/assets/images/mg1.png';
import portfolio2 from '@/assets/images/mg2.jpg';
import portfolio3 from '@/assets/images/mg3.png';
import portfolio4 from '@/assets/images/mg0.png';
import portfolio5 from '@/assets/images/mg5.jpg';
import portfolio6 from '@/assets/images/mg6.png';

const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    title: 'RS global ties',
    description: 'RS Global Ties is a dynamic platform where boundaries fade and opportunities thrive......',
  },
  {
    id: 2,
    image: portfolio2,
    title: 'ISA Consulting',
    description: 'Empowering Careers, Connecting Talent" reflects ISA\'s dedication to fostering........',
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Dadi Rent Boat',
    description: 'Discover unforgettable adventures with our boat and dinghy rentals. Whether you........',
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Makewell.life',
    description: 'Streamline patient management with integrated tools for appointments and.......',
  },
  {
    id: 5,
    image: portfolio5,
    title: 'Compass',
    description: 'Your all-in-one platform to connect socials, create and schedule content, track analytics, and optimize campaigns with AI-powered insights.',
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Origin',
    description: 'Orgin.com, where you can hire expert website designers for any job......',
  },
];

const PortfolioSection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-white dark:bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-left text-[36px] md:text-[48px] font-['Bai_Jamjuree'] font-bold text-[#0D0D0D] dark:text-white mb-12">
         Our Portfolio
        </h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioItems.map((item) => (
            <div key={item.id} className="flex flex-col items-start text-left">
              {/* Image */}
              <div className="w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Heading */}
              <h3 className="mt-6 text-[22px] font-semibold text-[#0D0D0D] dark:text-white font-['Bai_Jamjuree']">
                {item.title}
              </h3>

              {/* Paragraph */}
              <p className="mt-2 text-[16px] leading-[26px] font-normal text-[#3A3A3A] dark:text-[#B2B2B2] font-['Bai_Jamjuree']">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
