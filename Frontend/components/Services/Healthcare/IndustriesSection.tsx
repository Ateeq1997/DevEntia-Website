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
DevEntia\'s custom medical software supports bio- and blood banking, microbiome research, and genomic data tracking.`,
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
DevEntia\'s systems assist chemists in molecular modeling, reaction tracking, and maintaining compliance with safety standards.`,
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
DevEntia\'s platforms help veterinary organizations optimize workflows, enhance research, and deliver better animal healthcare outcomes.`,
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
    <section className="relative pt-20 pb-0 px-5 md:px-20 bg-white dark:bg-[#06091a] transition-colors duration-500 overflow-hidden">
      {/* 🔹 Softer purple blur background */}
      <div className="absolute top-[50px] left-0 w-full h-[260px] bg-[#eae3ff]/25 dark:bg-[#3a2f72]/20 -z-10 rounded-2xl blur-[60px]" />

      {/* Section Title */}
      <p className="text-[#323232] dark:text-[#FFFFFF] font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2">
        Industries
      </p>

      {/* Heading */}
      <h2 className="font-['Bai_Jamjuree'] font-semibold text-[36px] leading-[44px] mb-4 transition-colors duration-300 text-black dark:text-white">
        Build Healthcare software for
      </h2>

      {/* Paragraph */}
      <p className="text-[#323232] dark:text-[#FFFFFF] text-[18px] leading-[28px] font-['Bai_Jamjuree'] mb-12 max-w-3xl">
        As a leader in healthcare software outsourcing, EffectiveSoft offers custom solution
        development for a wide range of businesses.
      </p>

      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
        {/* Left side — clickable industry names */}
        <div className="flex-1 w-full">
          {industriesData.map((industry, index) => (
            <div key={industry.id}>
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left py-4 px-4 transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#e9ddff] dark:bg-[#3b3270]/70"
                    : "bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-[#101020]"
                }`}
              >
                {/* ✅ Heading color fixed */}
                <h3 className="font-['Bai_Jamjuree'] text-[20px] leading-[30px] font-semibold transition-colors duration-300 text-black dark:text-white">
                  {industry.name}
                </h3>

                {index === activeIndex && (
                  <p className="text-[18px] leading-[28px] font-['Bai_Jamjuree'] mt-2 text-[#323232] dark:text-[#FFFFFF] whitespace-pre-line">
                    {industry.description}
                  </p>
                )}
              </button>

              {/* Divider line */}
              {index < industriesData.length - 1 && (
                <div className="h-[1px] w-full bg-[#B2B2B2]/40 dark:bg-[#ffffff1a]" />
              )}
            </div>
          ))}
        </div>

        {/* Right side — dynamic image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[704px] h-[690px]">
            <Image
              src={activeIndustry.image}
              alt={activeIndustry.name}
              width={704}
              height={690}
              className="object-contain transition-opacity duration-700 opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
