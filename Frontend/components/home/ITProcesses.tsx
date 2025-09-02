"use client";

import React from "react";
import Image from "next/image";

export default function ITProcess() {
  return (
    <section className="relative text-white px-[5%] py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Decorative Shapes */}
      <div className="absolute w-8 h-8 top-0 left-24 rounded-full bg-gradient-to-r from-[#4848FF] via-[#2B2B99] to-[#2B2B99] p-[2px]" />
      <div className="absolute w-6 h-6 bottom-6 left-64 rounded-full bg-gradient-to-r from-[#4848FF] via-[#2B2B99] to-[#2B2B99] p-[2px]" />
      <div className="absolute w-6 h-6 bottom-2 left-0 rounded-full bg-gradient-to-r from-[#4848FF] via-[#2B2B99] to-[#2B2B99] p-[2px]" />

      {/* Left Side - Text */}
      <div>
        <h2 className="text-[30px] md:text-[64px] font-semibold leading-tight">
          IT Staff Augmentation
        </h2>
        <p className="text-[#C8CFD5] mt-6 leading-relaxed font-poppins">
          IT Staff Augmentation helps businesses quickly scale their teams by
          providing skilled IT professionals on demand. Whether you need
          developers, designers, or cybersecurity experts, our flexible hiring
          solutions ensure seamless integration with your in-house team. This
          cost-effective approach accelerates project delivery, fills skill
          gaps, and enhances productivity without the long-term commitment of
          traditional hiring. Let us help you build a strong, agile workforce
          tailored to your needs.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="relative flex justify-center items-center">
        <Image
          src="/home/Itstaff.png"
          width={500}
          height={500}
          alt="IT Staff"
          className="object-contain "
        />
      </div>
    </section>
  );
}
