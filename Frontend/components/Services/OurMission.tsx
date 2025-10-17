'use client';

import React from 'react';
import Image from 'next/image';
import missionImg1 from '../../assets/images/mission1.png';
import missionImg2 from '../../assets/images/mission2.png';
import missionImg3 from '../../assets/images/mission3.png';

const OurMission = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-[#161616] dark:bg-white transition-colors duration-500">
      {/* Transparent Button */}
      <div className="mb-6">
        <button className="px-6 py-2 border border-white dark:border-black text-white dark:text-black bg-transparent rounded-full hover:bg-white/10 transition duration-300">
          Empowerment
        </button>
      </div>

      {/* Heading + Paragraph */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start">
        <h2 className="text-3xl font-bold text-white dark:text-black lg:w-1/2">
          Our Mission
        </h2>
        <p className="text-white/70 dark:text-black/70 lg:w-1/2">
          Our mission is to empower businesses and individuals through innovative solutions, cutting-edge technology, and sustainable practices that create measurable impact and lasting value.
        </p>
      </div>

      {/* Three Images in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="w-full aspect-square relative">
          <Image src={missionImg1} alt="Mission 1" className="object-cover rounded-md" fill />
        </div>
        <div className="w-full aspect-square relative">
          <Image src={missionImg2} alt="Mission 2" className="object-cover rounded-md" fill />
        </div>
        <div className="w-full aspect-square relative">
          <Image src={missionImg3} alt="Mission 3" className="object-cover rounded-md" fill />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
