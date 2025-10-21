'use client';

import React from 'react';
import Image from 'next/image';
import missionImg1 from '../../assets/images/mission1.png';
import missionImg2 from '../../assets/images/mission2.png';
import missionImg3 from '../../assets/images/mission3.png';

const OurMission = () => {
  return (
    // Swapped theme colors
    <section className="py-20 px-5 md:px-10 bg-white dark:bg-[#161616] transition-colors duration-500">
      {/* Button + Heading + Paragraph in same row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
        {/* Left side — Button + Heading */}
        <div className="flex flex-col items-start gap-4 lg:w-1/2">
          <button className="px-6 py-2 border border-black dark:border-white text-black dark:text-white bg-transparent rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition duration-300">
            Empowerment
          </button>
          <h2 className="text-3xl font-bold text-black dark:text-white">
            About Our Mission
          </h2>
        </div>

        {/* Right side — Paragraph */}
        <p className="text-black/70 dark:text-white/70 lg:w-1/2">
          Our mission is to empower businesses with innovative, reliable, and scalable digital solutions.
          We strive to drive growth, efficiency, and transformation across industries.
        </p>
      </div>

      {/* Three Images in a row */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {[missionImg1, missionImg2, missionImg3].map((img, i) => (
          <div
            key={i}
            className="relative rounded-md overflow-hidden"
            style={{ width: '700px', height: '500px' }}
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
