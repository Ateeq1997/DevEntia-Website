"use client";
import React from "react";
import Image from "next/image";
import styles from "../home/home-css/home.module.css";

// ✅ Import actual image files
import analysis from "../../assets/images/analysis.png";
import deep from "../../assets/images/deepl.svg";
import vision from "../../assets/images/vision.png";
import nlp from "../../assets/images/nlp.svg";
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
          className="
            mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8
          "
        >
          {AI_ITEMS.map((item, idx) => (
           <div
  key={idx}
 className={`relative w-[165px] sm:w-[180px] lg:w-[200px]
  p-3 h-[250px] flex flex-col items-center justify-center
  shadow-[0_5px_5px_0_#2258E7]
  hover:shadow-[0_-0px_10px_0_rgb(34_88_231_/_0.2),0_15px_15px_0_rgb(34_88_231_/_0.2),10px_0_10px_0_rgb(34_88_231_/_0.25),-10px_0_10px_0_rgb(34_88_231_/_0.25)]
  bg-white dark:bg-[#0B0B0B] dark:hover:bg-black
  text-black dark:text-white transition-all duration-300
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2258E7]
  hover:after:opacity-0`}
>

              <div className="w-full h-full relative">
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
