"use client";             


import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface HeroProps {
  bgImage?: string;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  sideImage?: string;
  reverse?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  bgImage,
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
  sideImage,
  reverse = false,
}) => {
  return (
    <section
    className="h-[100vh] max-h-[50rem] relative overflow-hidden max-w-screen"
      style={{
        background: bgImage
          ? `url(${bgImage}) center/cover no-repeat`
          : "#0e0c11",
      }}
    >
      {/* Overlay for darkening if needed 
      <div className="absolute inset-0 bg-black/40" />
*/}
      <div
        className={`relative z-10 w-full px-[5%] mx-auto flex flex-col md:flex-row items-center py-12 gap-8 mt-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <div className="w-full md:w-[40%] text-white text-center md:text-left">
          <h1 className="text-3xl md:text-[64px] leading-tight font-bold mb-6 font-inter">{title}</h1>
          {subtitle && (
            <p className="opacity-80 mb-10 text-lg md:text-[26px] font-inter leading-snug">
  {subtitle}
</p>
          )}
          {buttonLabel && (
            <button
            onClick={() => {
              const element = document.getElementById("overview");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border border-white/70 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            {buttonLabel}
          </button>
          )}
        </div>

        {/* Side image */}
        {sideImage && (
          <div className="w-full md:flex-1 flex justify-center">
            <img
              src={sideImage}
              alt="Hero Visual"
              className=" object-contain drop-shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
