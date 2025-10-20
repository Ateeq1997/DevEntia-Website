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
    <section
      className="bg-white dark:bg-[#0b0b0d] text-black dark:text-white 
      py-16 px-4 sm:px-6 md:px-10 transition-colors duration-500"
    >
      <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          AI & Machine Learning for Business
        </h2>

        {/* Paragraph */}
        <p
          className="mt-3 max-w-2xl mx-auto text-sm sm:text-base 
          text-gray-700 dark:text-gray-300"
        >
          Drive smarter operations with tailored AI solutions. From predictive
          analytics to AI-driven chatbots, ISA helps businesses streamline
          processes, boost decision-making, and maximize efficiency.
        </p>

        {/* ✅ 5 containers for AI icons */}
        <div
          className="mt-10 grid 
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
          gap-x-4 sm:gap-x-6 md:gap-x-8 
          gap-y-6 
          justify-items-center items-center"
        >
          {AI_ITEMS.map((item, idx) => (
           <div
  key={idx}
  className={`relative ${styles.techCard} border border-transparent 
  p-4 flex flex-col items-center justify-center 
  shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 
  transition-transform duration-500 
  bg-white dark:bg-[#0f1112] text-black dark:text-white
  w-[85%] sm:w-[80%] md:w-full mx-auto`}
>

              <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 relative">
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

        <div className="mt-12"></div>
      </div>
    </section>
  );
}
