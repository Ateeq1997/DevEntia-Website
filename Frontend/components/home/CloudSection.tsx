"use client";

import Image from "next/image";
import React from "react";
import styles from "../home/home-css/home.module.css";

// ✅ Import actual images
import docker from "../../assets/images/docker.png";
import aws2 from "../../assets/images/aws2.png";
import googlecloud from "../../assets/images/googlecloud.png";
import kubernetes from "../../assets/images/kubernetes.png";
import jenkins from "../../assets/images/jenkins.png";

type CloudItem = {
  src: any;
};

const CLOUD_ITEMS: CloudItem[] = [
  { src: docker },
  { src: aws2 },
  { src: googlecloud },
  { src: kubernetes },
  { src: jenkins },
];

export default function CloudSection() {
  return (
    <section
      className="relative z-[9999] transition-colors duration-500 
      bg-[#0b0b0d] dark:bg-[#0b0b0d] bg-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
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

        {/* ✅ 5 containers */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {CLOUD_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${styles.techCard} border border-transparent rounded-xl 
              p-6 flex flex-col items-center justify-center 
              shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 
              transition-transform duration-500 
              bg-white dark:bg-[#0f1112] text-black dark:text-white`}
            >
              <div className="w-20 h-20 relative">
                <Image
                  src={item.src}
                  alt={`Cloud platform ${idx + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
