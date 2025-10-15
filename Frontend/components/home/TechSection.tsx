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

type TechItem = {
  name: string;
  src: StaticImageData;
};

// ✅ Tech stack list
const TECH_ITEMS: TechItem[] = [
  { name: "Kotlin", src: kotlin },
  { name: "Java", src: java },
  { name: "Node.js", src: nodejs },
  { name: "Python", src: python },
  { name: "Laravel", src: laravel },
  { name: "C++", src: cpp },
  { name: "Flutter", src: flutter },
  { name: "PHP", src: php },
  { name: ".NET Core", src: python },
  { name: "MySQL", src: mysql },
  { name: "MongoDB", src: mongodb },
  { name: "AWS", src: aws },
  { name: "Vue.js", src: vuejs },
  { name: "PostgreSQL", src: postgresql },
];

const TechSection: React.FC = () => {
  return (
    <section
      className="relative z-[9999] transition-colors duration-500 
      bg-[#ffffff] dark:bg-[#0b0b0d] py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* === Section Label === */}
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
          className={`mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 
          justify-center justify-items-center ${styles.techGrid}`}
        >
        {TECH_ITEMS.map((item, index) => (
    <div
      key={index}
      className={`relative ${styles.techCard} border border-transparent 
      p-6 flex flex-col items-center justify-center 
      shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 
      transition-transform duration-500 
      bg-white dark:bg-[#0f1112] text-black dark:text-white`}
    >
      {/* Icon */}
      <div className="w-24 h-24 relative mb-4">
        <Image
          src={item.src}
          alt={item.name}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

              {/* Label */}
              <span
                className="mt-auto pb-2 text-sm 
                text-gray-800 dark:text-gray-200 transition-colors duration-500"
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
