"use client";
import React from "react";
import Image from "next/image";
import styles from "../home/home-css/home.module.css";

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

        {/* ✅ Keep your original spacing — 2 in first row, 1 in second on small screens */}
        <div
          className="
            mt-10
            grid 
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            gap-5 
            justify-center
            items-stretch
            max-w-5xl 
            mx-auto
            md:px-8 lg:px-16 xl:px-24
          "
        >
          {BLOCKCHAIN_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative ${styles.techCard}
               border border-transparent 
  p-4 flex flex-col items-center justify-center 
  shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 
  transition-transform duration-500 
  bg-white dark:bg-[#0f1112] text-black dark:text-white
  w-[85%] sm:w-[80%] md:w-full mx-auto
              `}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div className="w-28 h-28 relative">
                <Image
                  src={item.src}
                  alt={`Blockchain Icon ${idx + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="scale-110 hover:scale-125 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12"></div>
      </div>
    </section>
  );
}
