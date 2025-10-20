"use client";

import Image from "next/image";
import React from "react";
import styles from "../home/home-css/home.module.css";

// ✅ Import actual images
import docker from "../../assets/images/docker (2).png";
import aws2 from "../../assets/images/aws (3).png";
import googlecloud from "../../assets/images/googlecloud (2).png";
import kubernetes from "../../assets/images/Kubernetes (2).png";
import jenkins from "../../assets/images/jenkins (2).png";
import jenkins1 from "../../assets/images/jenkins (3).png";

type CloudItem = {
  src: any;
  alt: string;
};

const CLOUD_ITEMS: CloudItem[] = [
  { src: docker, alt: "Docker" },
  { src: aws2, alt: "AWS" },
  { src: googlecloud, alt: "Google Cloud" },
  { src: kubernetes, alt: "Kubernetes" },
  { src: jenkins, alt: "Jenkins" },
];

export default function CloudSection() {
  return (
    <section
      className="relative z-[1] transition-colors duration-500 
      bg-[#0b0b0d] dark:bg-[#0b0b0d] bg-white py-16 px-4 sm:px-6 md:px-10 overflow-visible"
    >
      <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-7xl mx-auto">
        {/* Small label */}
        <div className="text-center">
          <p className="text-sm text-[#6b6cff] uppercase tracking-widest">
            Cloud
          </p>
        </div>

        {/* Heading */}
        <h2
          className="mt-4 text-center text-4xl sm:text-5xl font-extrabold tracking-tight
          text-black dark:text-white transition-colors duration-500"
        >
          Cloud Capabilities
        </h2>

        {/* Paragraph */}
        <p
          className="mt-3 text-center max-w-2xl mx-auto text-sm 
          text-gray-800 dark:text-gray-300 transition-colors duration-500"
        >
          Backed by AWS, our platform guarantees high reliability and scalability.
          We leverage Docker and Kubernetes to simplify containerization and
          orchestration, enabling seamless deployment workflows.
        </p>

        {/* ✅ Responsive Cloud Item Grid */}
        <div
          className="
            mt-8
            grid
            grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-x-4 sm:gap-x-5 md:gap-x-6
            gap-y-6
            justify-center
            items-center
          "
        >
          {CLOUD_ITEMS.map((item, idx) => (
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
                {/* ✅ Conditional Jenkins Display */}
                {idx === 4 ? (
                  <>
                    <Image
                      src={jenkins1}
                      alt="Jenkins Light"
                      fill
                      className="block dark:hidden object-contain"
                    />
                    <Image
                      src={jenkins}
                      alt="Jenkins Dark"
                      fill
                      className="hidden dark:block object-contain"
                    />
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
