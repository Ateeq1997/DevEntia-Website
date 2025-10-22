"use client";

import Image from "next/image";
import React from "react";
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
      bg-white dark:bg-[#0b0b0d] py-16 px-4 sm:px-6 md:px-10 overflow-visible"
    >
      <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[95%] mx-auto">
        {/* Label */}
        <div className="text-center">
          <p className="text-sm text-[#6b6cff] uppercase tracking-widest">Cloud</p>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-black dark:text-white">
          Cloud Capabilities
        </h2>

        {/* Description */}
        <p className="mt-3 text-center max-w-2xl mx-auto text-sm text-gray-800 dark:text-gray-300">
          Backed by AWS, our platform guarantees high reliability and scalability.
          We leverage Docker and Kubernetes to simplify containerization and
          orchestration, enabling seamless deployment workflows.
        </p>

        {/* ✅ Responsive Flex Wrap Layout */}
       <div className="flex items-center justify-center">
        <div
          className={`
            mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  items-center gap-4 lg:gap-6 justify-center justify-items-center  `}
        >
          {CLOUD_ITEMS.map((item, idx) => (
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
              <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 relative">
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
      </div>
    </section>
  );
}
