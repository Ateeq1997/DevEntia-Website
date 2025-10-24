'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from "../../home/Button";
import heroBgImg from '../../../assets/images/Background.png';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] h-screen overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src={heroBgImg}
        alt="healthcare background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        priority
      />

      {/* 🔹 Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 lg:pl-[6rem]">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          {/* Heading */}
          <h1 className="text-white text-start text-[2.5rem] md:text-[4rem] font-bold leading-snug max-w-[900px]">
            Healthcare Software Development
          </h1>

          {/* Paragraph - Adjusted for ~4 lines */}
          <p className="text-white/80 text-lg md:text-[1.1rem] leading-[1.7] max-w-[950px]">
            Transform healthcare with DevEntia&apos;s expertise in building innovative, customized
            solutions for medical facilities. Our healthcare software development services empower
            providers and institutions to optimize operations, enhance patient engagement, and
            leverage data-driven insights for a smarter, more efficient healthcare ecosystem.
          </p>

          {/* Button */}
          <Button
        text="Let's Connect"
        href="/Contact-us"
        bgColor="#4848FF"
        textColor="#CFCEFB"
        hoverColor="#2E2EB5"
      />
 
        </div>
      </div>
    </header>
  );
};

export default Hero;
