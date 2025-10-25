'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from '../../home/Button';
import heroBgImg from '../../../assets/images/aiback.jpg';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] h-[100vh] sm:h-[90vh] md:h-screen overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src={heroBgImg}
        alt="AI Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 md:px-20 lg:px-28">
        <div className="flex flex-col items-start gap-4 sm:gap-6 w-full max-w-[1200px]">
          {/* Heading */}
          <h1
            className="
              text-white text-start font-bold
              text-[2rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4rem]
              leading-[1.1] sm:leading-[1.2]
              w-full sm:max-w-[95%] md:max-w-[85%] lg:max-w-[70%]
            "
          >
            AI Development Services
          </h1>

          {/* Paragraph */}
          <p
            className="
              text-white/80 text-base sm:text-lg md:text-[1.1rem]
              leading-relaxed sm:leading-[1.6]
              w-full sm:max-w-[95%] md:max-w-[85%] lg:max-w-[65%]
            "
          >
            Partner with EffectiveSoft to unlock the full potential of artificial intelligence (AI)! 
            Our end-to-end AI development services — from strategy and data analysis to integration and deployment — 
            are designed to solve complex challenges across diverse industries.
          </p>

          {/* Button */}
          <div className="mt-4 sm:mt-6">
            <Button
              text="Let's Connect"
              href="/Contact-us"
              bgColor="#4848FF"
              textColor="#CFCEFB"
              hoverColor="#2E2EB5"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
