'use client';

import React from 'react';
import Image from 'next/image';

interface SolutionItem {
  id: number;
  logo: any;
  title: string;
  description: string;
}

interface SolutionsSectionProps {
  heading: string;
  topWord?: string;
  subText: string;
  solutionsData: SolutionItem[];
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  topWord,
  heading,
  subText,
  solutionsData,
}) => {
  return (
    <section
      className="relative py-20 px-5 md:px-20 overflow-hidden transition-colors duration-500"
      style={{
        background:
          'linear-gradient(to bottom, #06091a 0%, #1d1d5d 50%, #06091a 100%)',
      }}
    >
      {/* ✅ Dynamic Hexagonal Background */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start pointer-events-none">
        <svg
          className="w-[150%] h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          fill="none"
          stroke="#cfd8ff"
          preserveAspectRatio="none"
        >
          <pattern
            id="hexPattern"
            width="80"
            height="69.3"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(2.5)" 
          >
            <polygon
              points="40,0 80,20 80,60 40,80 0,60 0,20"
              stroke="#cfd8ff"
              strokeWidth="0.3"
              fill="none"
            />
          </pattern>
          {/* Fill full dynamic area */}
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[#2a2a85]/45 blur-3xl rounded-full"></div>

      {/* Section Content */}
      <div className="relative z-10">
        {/* Top Word */}
        <p className="text-[#C2C2C2] font-medium text-[20px] sm:text-[22px] md:text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2">
          {topWord || 'Services'}
        </p>

        {/* Heading */}
        <h2 className="text-white font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[44px] font-['Bai_Jamjuree'] mb-4">
          {heading}
        </h2>

        {/* Sub Text */}
        <p className="text-[#C2C2C2] font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] font-['Bai_Jamjuree'] mb-12 whitespace-pre-line">
          {subText}
        </p>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col items-start p-6 sm:p-8 rounded-3xl border border-[#99999950] bg-[#CACACA1A] w-full backdrop-blur-[1px] hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Logo */}
              <div className="mb-4 sm:mb-6">
                <Image
                  src={solution.logo}
                  alt={solution.title}
                  width={80}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-[34px] sm:leading-[40px] font-['Bai_Jamjuree'] mb-2">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-[#C2C2C2] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] font-['Bai_Jamjuree'] whitespace-pre-line">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
