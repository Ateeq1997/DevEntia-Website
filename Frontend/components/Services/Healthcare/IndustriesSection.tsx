"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import chemistryImg from "@/assets/images/chemistry.png";
import veternaryImg from "@/assets/images/veternary.png";
import biologyImg from "@/assets/images/biotech.png";
import pharmacyImg from "@/assets/images/pharma.png";
import researchImg from "@/assets/images/science.png";

const industriesData = [
  {
    id: 1,
    name: "Biotech and laboratory",
    description: `Biotech software and laboratory information management systems streamline lab operations by converting large, complex datasets into actionable insights.
DevEntia's custom medical software supports bio- and blood banking, microbiome research, and genomic data tracking.`,
    image: biologyImg,
  },
  {
    id: 2,
    name: "Science",
    description: `Scientific research platforms enhance data accuracy and accelerate discoveries through automation and intelligent analysis.
DevEntia develops integrated tools that help physicists and researchers manage experiments, visualize results, and share insights efficiently.`,
    image: researchImg,
  },
  {
    id: 3,
    name: "Chemistry",
    description: `Our chemistry software solutions optimize lab workflows and ensure precise data management across complex experiments.
DevEntia's systems assist chemists in molecular modeling, reaction tracking, and maintaining compliance with safety standards.`,
    image: chemistryImg,
  },
  {
    id: 4,
    name: "Pharma",
    description: `Pharmaceutical management software enhances research, manufacturing, and regulatory processes for improved efficiency and compliance.
DevEntia delivers digital solutions that support clinical trials, drug tracking, and end-to-end production visibility.`,
    image: pharmacyImg,
  },
  {
    id: 5,
    name: "Veterinary",
    description: `Veterinary software solutions simplify patient data management and support diagnostics through smart, integrated tools.
DevEntia's platforms help veterinary organizations optimize workflows, enhance research, and deliver better animal healthcare outcomes.`,
    image: veternaryImg,
  },
];

const IndustriesSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const activeIndustry = industriesData[activeIndex];

  return (
    <section className="relative pt-16 pb-8 px-4 sm:px-6 md:px-12 lg:px-20 bg-white dark:bg-[#06091a] transition-colors duration-500 overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-[50px] left-0 w-full h-[260px] bg-[#eae3ff]/25 dark:bg-[#3a2f72]/20 -z-10 rounded-2xl blur-[60px]" />

      {/* Section Title */}
      <p className="text-[#323232] dark:text-white font-medium text-lg sm:text-xl md:text-2xl leading-tight font-['Bai_Jamjuree'] mb-2">
        Industries
      </p>

      {/* Heading */}
      <h2 className="font-['Bai_Jamjuree'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-snug mb-4 text-black dark:text-white transition-colors duration-300">
        Build Healthcare software for
      </h2>

      {/* Paragraph */}
      <p className="text-[#323232] dark:text-white text-base sm:text-lg md:text-xl leading-relaxed font-['Bai_Jamjuree'] mb-10 md:mb-12 max-w-3xl">
        As a leader in healthcare software outsourcing, EffectiveSoft offers
        custom solution development for a wide range of businesses.
      </p>

      {/* Desktop layout (text left / image right) */}
      <div className="hidden lg:flex flex-row items-start gap-10 lg:gap-16 xl:gap-20">
        {/* Left side — industries list */}
        <div className="flex-1 w-full">
          {industriesData.map((industry, index) => (
            <div key={industry.id}>
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left py-4 px-4 rounded-lg transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#e9ddff] dark:bg-[#3b3270]/70"
                    : "bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-[#101020]"
                }`}
              >
                <h3 className="font-['Bai_Jamjuree'] text-lg sm:text-xl md:text-2xl leading-snug font-semibold text-black dark:text-white transition-colors duration-300">
                  {industry.name}
                </h3>

                {index === activeIndex && (
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed font-['Bai_Jamjuree'] mt-2 text-[#323232] dark:text-white whitespace-pre-line">
                    {industry.description}
                  </p>
                )}
              </button>

              {index < industriesData.length - 1 && (
                <div className="h-[1px] w-full bg-[#B2B2B2]/40 dark:bg-[#ffffff1a]" />
              )}
            </div>
          ))}
        </div>

        {/* Right side — image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[90%] sm:w-[80%] md:w-[500px] lg:w-[550px] xl:w-[704px] h-auto aspect-[1/1]">
            <Image
              src={activeIndustry.image}
              alt={activeIndustry.name}
              fill
              className="object-contain transition-opacity duration-700 opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Mobile layout — show image below active industry */}
      <div className="flex flex-col lg:hidden gap-4">
        {industriesData.map((industry, index) => (
          <div key={industry.id}>
            <button
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left py-3 px-3 rounded-md transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#e9ddff] dark:bg-[#3b3270]/70"
                  : "bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-[#101020]"
              }`}
            >
              <h3 className="font-['Bai_Jamjuree'] text-lg font-semibold text-black dark:text-white">
                {industry.name}
              </h3>
            </button>

            {/* If active — show text + image below */}
            {index === activeIndex && (
              <div className="mt-2 mb-4 px-3">
                <p className="text-base leading-relaxed text-[#323232] dark:text-white font-['Bai_Jamjuree'] whitespace-pre-line mb-4">
                  {industry.description}
                </p>
                <div className="relative w-full h-[300px] sm:h-[380px] flex justify-center items-center">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-contain rounded-lg transition-all duration-700"
                  />
                </div>
              </div>
            )}

            {index < industriesData.length - 1 && (
              <div className="h-[1px] w-full bg-[#B2B2B2]/40 dark:bg-[#ffffff1a]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
