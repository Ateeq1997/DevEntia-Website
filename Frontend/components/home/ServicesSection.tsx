"use client";
import React from "react";
import Image from "next/image";
import Group1 from "../../assets/images/Group1.png"; // dark mode timeline
import Group2 from "../../assets/images/Group2.png"; // light mode timeline
import Group3 from "../../assets/images/Maskgroup.png"; // background glow

export default function ServicesSection() {
  return (
    <section
      className="relative py-20 overflow-hidden transition-colors duration-500
                 bg-[#ffffff] text-[#0b0b0d]
                 dark:bg-[#0b0b0d] dark:text-white"
    >
      {/* 🔹 Background glow image (visible in dark mode only) */}
      <div className="absolute inset-0 hidden dark:block">
        <Image
          src={Group3}
          alt="Background glow"
          fill
          priority
          className="object-cover opacity-90 brightness-[1.6] contrast-[1.4] saturate-[1.3] blur-[2px]"
        />
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
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

      {/* Timeline image */}
      <div className="relative mt-16 flex justify-center items-center w-full px-4 sm:px-8 z-10">
        <div className="w-full max-w-[1200px]">
          {/* Light mode image */}
          <Image
            src={Group2}
            alt="Services timeline light"
            className="w-full h-auto block dark:hidden transition-all duration-500"
            priority
          />
          {/* Dark mode image */}
          <Image
            src={Group1}
            alt="Services timeline dark"
            className="w-full h-auto hidden dark:block transition-all duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
}
