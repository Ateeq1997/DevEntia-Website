'use client';

import React from 'react';
import Image from 'next/image';
import missionImg1 from '../../assets/images/mission1.png';
import missionImg2 from '../../assets/images/mission2.png';
import missionImg3 from '../../assets/images/Frame.png';

const OurMission = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-white dark:bg-[#161616] transition-colors duration-500">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 mb-10 sm:mb-12">
        {/* Left side */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 lg:w-1/2">
          <button className="px-5 sm:px-6 py-2 border border-black dark:border-white text-black dark:text-white bg-transparent rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition duration-300 text-sm sm:text-base">
            Empowerment
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
            ABOUT OUR MISSION
          </h2>
        </div>

        {/* Right side */}
        <p className="text-sm sm:text-base text-black/70 dark:text-white/70 lg:w-1/2 leading-relaxed">
          Our mission is to empower businesses with innovative, reliable, and scalable digital solutions.
          We strive to drive growth, efficiency, and transformation across industries.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 flex-wrap md:flex-nowrap">
        {[missionImg1, missionImg2, missionImg3].map((img, i) => (
          <div
            key={i}
            className="relative rounded-md overflow-hidden 
                       w-full sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] 
                       h-[220px] sm:h-[260px] md:h-[300px] lg:h-[400px] xl:h-[450px]"
          >
            <Image
              src={img}
              alt={`Mission ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
