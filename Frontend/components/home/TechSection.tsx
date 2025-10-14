"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../home/home-css/home.module.css";

// ✅ Importing tech icons
import php from "../../assets/images/php.png";
import python from "../../assets/images/python.png";
import java from "../../assets/images/java.png";
import nodejs from "../../assets/images/nodejs.png";
import laravel from "../../assets/images/laravel.png";
import cpp from "../../assets/images/cpp.png";
import flutter from "../../assets/images/flutter.png";
import mysql from "../../assets/images/mysql.png";
import mongodb from "../../assets/images/mongodb.png";
import aws from "../../assets/images/aws.png";
import vuejs from "../../assets/images/vuejs.png";
import postgresql from "../../assets/images/postgresql.png";
import kotlin from "../../assets/images/Kotlin.png";

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
  { name: "Kotlin", src: kotlin },
  { name: "C++", src: cpp },
  { name: "Flutter", src: flutter },
  { name: "PHP", src: php },
  { name: ".NET Core", src: python },
  { name: "MySQL", src: mysql },
  { name: "C++", src: cpp },
  { name: "MongoDB", src: mongodb },
  { name: "AWS", src: aws },
    { name: "Node.js", src: nodejs },
  { name: "Vue.js", src: vuejs },
  { name: "PostgreSQL", src: postgresql },
    { name: "MongoDB", src: mongodb },
];

const TechSection: React.FC = () => {
  return (
    <section
      className="relative z-[9999] transition-colors duration-500 
      bg-[#0b0b0d] dark:bg-[#0b0b0d] bg-white py-16 px-6"
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
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TECH_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`relative ${styles.techCard} border border-transparent rounded-xl p-6 flex flex-col items-center justify-start 
              shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 
              transition-transform duration-500 
              bg-white dark:bg-[#0f1112] text-black dark:text-white`}
            >
              {/* Icon */}
              <div className="w-20 h-20 relative mb-4">
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
