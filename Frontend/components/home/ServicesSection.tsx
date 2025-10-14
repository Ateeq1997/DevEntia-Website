"use client";
import React from "react";
import Image from "next/image";
import Group1 from "../../assets/images/Group1.png"; // for dark mode
import Group2 from "../../assets/images/Group2.png"; // for light mode

export default function ServicesSection() {
  return (
    <section
      className="relative py-20 overflow-hidden transition-colors duration-500
                 bg-[#ffffff] text-[#0b0b0d]
                 dark:bg-[#0b0b0d] dark:text-white"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-left">
        <p className="text-[#6b6cff] dark:text-[#6b6cff] text-sm font-medium uppercase tracking-widest">
          Our Services
        </p>
        <h2
          className="text-4xl sm:text-5xl font-extrabold mt-3 leading-tight max-w-3xl
                     text-[#0b0b0d] dark:text-white"
        >
          Enhance efficiency <br /> with our expertise.
        </h2>
      </div>

      {/* Timeline image (auto-switches on theme toggle) */}
      <div className="relative mt-16 flex justify-center items-center">
        {/* Light mode image */}
        <Image
          src={Group2}
          alt="Services timeline light"
          className="w-full max-w-[1200px] h-auto block dark:hidden transition-opacity duration-500"
          priority
        />

        {/* Dark mode image */}
        <Image
          src={Group1}
          alt="Services timeline dark"
          className="w-full max-w-[1200px] h-auto hidden dark:block transition-opacity duration-500"
          priority
        />
      </div>
    </section>
  );
}
