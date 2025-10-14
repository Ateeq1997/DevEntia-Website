"use client";
import React from "react";
import Image from "next/image";
import styles from "../home/home-css/home.module.css";

// ✅ Import actual blockchain images
import integration from "../../assets/images/integration.png";
import smart from "../../assets/images/smart.png";
import application from "../../assets/images/application.png";

const BLOCKCHAIN_ITEMS = [
  { src: integration },
  { src: smart },
  { src: application },
];

export default function BlockchainSection() {
  return (
    <section className="bg-white dark:bg-[#0b0b0d] text-black dark:text-white py-16 px-6 transition-colors duration-500">
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

        {/* ✅ 3 containers in one row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {BLOCKCHAIN_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${styles.techCard} bg-gray-100 dark:bg-[#0f1112] border border-transparent rounded-xl p-6 flex flex-col items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500`}
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

        {/* ✅ Global Button (same across all sections) */}
        <div className="mt-12">

        </div>
      </div>
    </section>
  );
}
