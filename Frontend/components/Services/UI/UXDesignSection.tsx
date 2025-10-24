'use client';

import React from 'react';
import Image from 'next/image';
import bgimage from '@/assets/images/Backgroundofui.png';

const UXDesignSection = () => {
  return (
    <section
      className="relative mx-auto flex items-center justify-center text-center overflow-hidden bg-black"
      style={{ width: '1440px', height: '900px' }}
    >
      {/* Background Image */}
      <Image
        src={bgimage}
        alt="Background"
        fill
        className="object-contain"
        priority
      />

      {/* Optional overlay for shading consistency */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="font-['Bai_Jamjuree'] font-medium text-[48px] md:text-[72px] leading-[88px] tracking-[-1.15px] text-white text-center">
          <span className="block text-white">We research.</span>
          <span className="block">
            <span className="text-white">Meet our </span>
            <span className="text-[#4848FF]">UX design studio</span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default UXDesignSection;
