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
  topWord?: string; // ✅ added
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
      {/* Hexagonal Background */}
      <div className="absolute -top-40 left-0 w-full h-[1000px] flex justify-center items-center pointer-events-none">
        <svg
          className="w-[130%] h-[130%] opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          fill="none"
          stroke="#cfd8ff"
        >
          <pattern
            id="hexPattern"
            width="100"
            height="86.6"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(3)"
          >
            <polygon
              points="50,0 100,25 100,75 50,100 0,75 0,25"
              stroke="#cfd8ff"
              strokeWidth="0.4"
              fill="none"
            />
          </pattern>
          <rect width="800" height="600" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Center lighter glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[#2a2a85]/45 blur-3xl rounded-full"></div>

      {/* Section Content */}
      <div className="relative z-10">
        {/* ✅ Dynamic top word (Services / Trends / etc.) */}
        <p className="text-[#C2C2C2] font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2">
          {topWord || 'Services'}
        </p>

        {/* Heading */}
        <h2 className="text-white font-semibold text-[36px] leading-[44px] font-['Bai_Jamjuree'] mb-4">
          {heading}
        </h2>

        {/* Paragraph */}
        <p className="text-[#C2C2C2] font-normal text-[18px] leading-[28px] font-['Bai_Jamjuree'] mb-12 whitespace-pre-line">
          {subText}
        </p>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col items-start p-6 rounded-3xl border border-[#99999950] bg-[#CACACA1A] md:h-[370px] w-full backdrop-blur-[1px]"
            >
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src={solution.logo}
                  alt={solution.title}
                  width={80}
                  height={80}
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-[32px] leading-[40px] font-['Bai_Jamjuree'] mb-2">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-[#C2C2C2] font-normal text-[18px] leading-[28px] font-['Bai_Jamjuree'] whitespace-pre-line">
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
