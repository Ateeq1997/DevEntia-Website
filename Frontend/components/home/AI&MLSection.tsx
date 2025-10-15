"use client";
import React from "react";
import Image from "next/image";
import styles from "../home/home-css/home.module.css";

// ✅ Import actual image files
import analysis from "../../assets/images/analysis.png";
import deep from "../../assets/images/deep.png";
import vision from "../../assets/images/vision.png";
import nlp from "../../assets/images/nlp.png";
import meuralicon from "../../assets/images/meuralicon.png";

const AI_ITEMS = [
  { src: analysis },
  { src: deep },
  { src: vision },
  { src: nlp },
  { src: meuralicon },
];

export default function AiMlSection() {
  return (
    <section className="bg-white dark:bg-[#0b0b0d] text-black dark:text-white py-16 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          AI & Machine Learning for Business
        </h2>

        {/* Paragraph */}
        <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-700 dark:text-gray-300">
          Drive smarter operations with tailored AI solutions. From predictive analytics to AI-driven chatbots, ISA helps businesses streamline processes, boost decision-making, and maximize efficiency.
        </p>

        {/* ✅ 5 containers for AI icons */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          {AI_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${styles.techCard} 
              bg-gray-100 dark:bg-[#0f1112]
              p-6 flex flex-col items-center justify-center 
              transition-transform duration-500 hover:scale-105 
              shadow-[inset_0_3px_8px_rgba(0,0,255,0.3),_0_0_15px_rgba(0,0,255,0.3),_5px_0_15px_rgba(0,0,255,0.3)] 
              dark:shadow-[inset_0_3px_8px_rgba(107,108,255,0.6),_0_0_25px_rgba(107,108,255,0.6),_5px_0_25px_rgba(107,108,255,0.6)]`}
            >
              <div className="w-28 h-28 relative">
                <Image
                  src={item.src}
                  alt={`AI Framework ${idx + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Global button (same method as Tech & Cloud sections) */}
        <div className="mt-12"></div>
      </div>
    </section>
  );
}
