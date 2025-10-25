'use client';

import React from 'react';
import Image from 'next/image';
import bgimage from '@/assets/images/Backgroundofui.png';

const UXDesignSection = () => {
  return (
    <section
      className="
        relative mx-auto flex items-center justify-center text-center overflow-hidden bg-black
        w-full max-w-[1440px]
        h-[100vh] sm:h-[100vh] md:h-[900px] lg:h-[900px]
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={bgimage}
          alt="Background"
          fill
          className="
            object-contain
            scale-[1.3] sm:scale-[1.1] md:scale-100
          "
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10">
        <h1
          className="
            font-['Bai_Jamjuree'] font-medium text-white text-center
            text-[30px] sm:text-[42px] md:text-[56px] lg:text-[72px]
            leading-tight
          "
        >
          <span className="block">We research.</span>
          <span className="block">
            <span>Meet our </span>
            <span className="text-[#4848FF]">UX design studio</span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default UXDesignSection;
