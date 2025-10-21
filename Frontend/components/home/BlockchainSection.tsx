"use client";
import React from "react";
import Image from "next/image";

// ✅ Import actual blockchain images
import integration from "../../assets/images/integration (2).png";
import smart from "../../assets/images/contract.png";
import application from "../../assets/images/application (2).png";

const BLOCKCHAIN_ITEMS = [
  { src: integration },
  { src: smart },
  { src: application },
];

export default function BlockchainSection() {
  return (
    <section className="bg-white dark:bg-[#0b0b0d] text-black dark:text-white py-16 px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Blockchain Development
        </h2>

        {/* Paragraph */}
        <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-700 dark:text-gray-300">
          We build decentralized, transparent, and secure blockchain-based
          applications leveraging leading blockchain networks and technologies.
        </p>

        {/* ✅ Compact, wrapped cards */}
        <div
          className="
            mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-6
          "
        >
          {BLOCKCHAIN_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-shrink-0 
  w-[165px] sm:w-[180px] lg:w-[200px] 
  p-3 h-[250px] flex flex-col items-center justify-center
  shadow-[0_5px_5px_0_#2258E7]
  hover:shadow-[0_-0px_10px_0_rgb(34_88_231_/_0.2),0_15px_15px_0_rgb(34_88_231_/_0.2),10px_0_10px_0_rgb(34_88_231_/_0.25),-10px_0_10px_0_rgb(34_88_231_/_0.25)]
  bg-white dark:bg-[#0B0B0B] dark:hover:bg-black
  text-black dark:text-white transition-all duration-300
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2258E7]
  hover:after:opacity-0`}
            >
              <div className="w-full sm:w-full h-full sm:h-28 relative">
                <Image
                  src={item.src}
                  alt={`Blockchain Icon ${idx + 1}`}
                  fill
                  className="object-contain  transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
