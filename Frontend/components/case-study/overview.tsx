"use client";
import Image from "next/image";
import React from "react";

interface Feature {
  id: number;
  text: string;
}

interface OverviewSectionProps {
  title?: string;
  content: string;
  image: string;
    features?: Feature[];

}

const OverviewSection = ({
  title = "Overview",
  content,
  image,
    features = [],

}: OverviewSectionProps) => {
  return (
    <section className="relative w-full py-16 md:py-24 px-[5%] bg-white dark:bg-black transition-colors duration-500 text-gray-900 dark:text-white">
      <div className="w-full flex flex-col   gap-8 ">
        {/* Title */}
        <h2 className="text-3xl md:text-[70px] text-black dark:text-[#FFFFFF] font-bold mb-4">{title}</h2>

        {/* Description */}
        <p
          className="text-gray-700 dark:text-gray-300 text-sm md:text-[28px] leading-relaxed "
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Image */}
        <div className="relative w-full px-[5%] mt-10">
          <Image
            src={image}
            alt={`${title} preview`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain rounded-lg"
            priority
          />
        </div>

        {features.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-[2%]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center justify-center bg-[#E8F2FF] dark:bg-[#4848FF1A] text-center rounded-2xl py-14 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-5xl md:text-[150px] font-extrabold text-[#4848FF] dark:text-[#4848FF] mb-5">
                  {feature.id.toString().padStart(2, "0")}
                </h3>
                <p className="text-[#000000] dark:text-[#FCFCFC] text-base md:text-[25px] px-4">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OverviewSection;
