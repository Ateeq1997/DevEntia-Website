'use client';

import React from 'react';
import Image from 'next/image';

// 🔹 Import your images
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
    description:
      'RS Global Ties is a dynamic platform where boundaries fade and opportunities thrive......',
  },
  {
    id: 2,
    image: portfolio2,
    title: 'ISA Consulting',
    description:
      'Empowering Careers, Connecting Talent" reflects ISA\'s dedication to fostering........',
  },
  {
    id: 3,
    image: portfolio3,
    title: 'Dadi Rent Boat',
    description:
      'Discover unforgettable adventures with our boat and dinghy rentals. Whether you........',
  },
  {
    id: 4,
    image: portfolio4,
    title: 'Makewell.life',
    description:
      'Streamline patient management with integrated tools for appointments and.......',
  },
  {
    id: 5,
    image: portfolio5,
    title: 'Compass',
    description:
      'Your all-in-one platform to connect socials, create and schedule content, track analytics, and optimize campaigns with AI-powered insights.',
  },
  {
    id: 6,
    image: portfolio6,
    title: 'Origin',
    description:
      'Orgin.com, where you can hire expert website designers for any job......',
  },
];

const PortfolioSection = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 bg-white dark:bg-[#0D0D0D] transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto">
        {/* 🔹 Heading */}
        <h2
          className="
            text-left font-['Bai_Jamjuree'] font-bold
            text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]
            text-[#0D0D0D] dark:text-white mb-10 md:mb-16
          "
        >
          Our Portfolio
        </h2>

        {/* 🔹 Portfolio Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-10 sm:gap-12 xl:gap-16
          "
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col items-start text-left
                hover:-translate-y-1 transition-transform duration-300
              "
            >
              {/* Image */}
              <div className="w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-auto object-cover 
                    transition-transform duration-500 hover:scale-105
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  mt-5 text-[1.25rem] sm:text-[1.35rem] md:text-[1.4rem]
                  font-semibold text-[#0D0D0D] dark:text-white
                  font-['Bai_Jamjuree']
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2 text-[0.95rem] sm:text-[1rem] md:text-[1.05rem]
                  leading-[1.6] text-[#3A3A3A] dark:text-[#B2B2B2]
                  font-['Bai_Jamjuree']
                "
              >
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
