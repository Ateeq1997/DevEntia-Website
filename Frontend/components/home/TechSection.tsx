"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../home/home-css/home.module.css";

// ✅ Importing tech icons
import php from "../../assets/images/php (2).png";
import python from "../../assets/images/python (2).png";
import java from "../../assets/images/java(2).png";
import nodejs from "../../assets/images/node.png";
import laravel from "../../assets/images/laravel(2).png";
import cpp from "../../assets/images/cplusplus.png";
import flutter from "../../assets/images/flutter (2).png";
import mysql from "../../assets/images/mysql (2).png";
import mongodb from "../../assets/images/mongodb (2).png";
import aws from "../../assets/images/aws (2).png";
import vuejs from "../../assets/images/vuejs (2).png";
import postgresql from "../../assets/images/postgresql (2).png";
import kotlin from "../../assets/images/Kotlin (2).png";
import net from "../../assets/images/net.png";

type TechItem = {
  name: string;
  src: StaticImageData;
};

// ✅ Tech stack list
const TECH_ITEMS: TechItem[] = [
  { name: "Node.js", src: nodejs },
  { name: "Java", src: java },
  { name: "Python", src: python },
  { name: "Laravel", src: laravel },
  { name: "Kotlin", src: kotlin },
  { name: "C++", src: cpp },
  { name: "Flutter", src: flutter },
  { name: "PHP", src: php },
  { name: ".NET Core", src: net },
  { name: "AWS", src: aws },
  { name: "MySQL", src: mysql },
  { name: "MongoDB", src: mongodb },
  { name: "Vue.js", src: vuejs },
  { name: "PostgreSQL", src: postgresql },
];

const TechSection: React.FC = () => {
  return (
    <section
      className="relative z-[1] transition-colors duration-500 
      bg-[#ffffff] dark:bg-[#0b0b0d] py-16 px-6 overflow-visible scale-[0.98] md:scale-100"
    >
      <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[95%]  mx-auto px-2 sm:px-6">

        <div className="text-center">
          <p className="text-sm text-[#6b6cff] uppercase tracking-widest">Tech</p>
        </div>

        {/* === Heading === */}
        <h2
          className="mt-4 text-center text-4xl sm:text-5xl font-extrabold tracking-tight 
          text-black dark:text-white transition-colors duration-500"
        >
          Our Core Development Stack
        </h2>

        {/* === Description === */}
        <p
          className="mt-3 text-center max-w-2xl mx-auto text-sm 
          text-gray-800 dark:text-gray-300 transition-colors duration-500"
        >
          We use a modern, reliable tech stack to build fast, secure, and scalable
          digital solutions tailored to your needs.
        </p>

        {/* === Tech Stack Grid === */}
        <div
          className={`mt-10 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-4 
          justify-center justify-items-center ${styles.techGrid}`}
        >
          {TECH_ITEMS.map((item, index) => (
      <div
  key={index}
  className={`relative w-[165px] sm:w-full lg:w-[200px] 
  p-6 h-[250px] flex flex-col items-center justify-center
  shadow-[0_5px_5px_0_#2258E7]
  hover:shadow-[0_-0px_10px_0_rgb(34_88_231_/_0.2),0_15px_15px_0_rgb(34_88_231_/_0.2),10px_0_10px_0_rgb(34_88_231_/_0.25),-10px_0_10px_0_rgb(34_88_231_/_0.25)]
  bg-white dark:bg-[#0B0B0B] dark:hover:bg-black
  text-black dark:text-white transition-all duration-300
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2258E7]
  hover:after:opacity-0`}
>




              {/* Icon */}
              <div className="w-24 h-24 relative mb-0 mt-3 sm:mt-6">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-contain w-full h-full"
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Label */}
              <span
                className="mt-6 pb-2 text-[18px] font-medium text-gray-800 dark:text-gray-200 transition-colors"
                style={{
                  fontFamily: "'Bai Jamjuree', sans-serif",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
