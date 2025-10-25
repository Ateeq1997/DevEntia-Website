'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from "../../home/Button";
import heroBgImg from '../../../assets/images/fintech.jpg';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] min-h-screen overflow-hidden flex items-center">
      {/* 🔹 Background Image */}
      <Image
        src={heroBgImg}
        alt="people"
        className="absolute top-0 left-0 w-full h-full object-cover"
        priority
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 w-full flex items-center justify-start px-6 sm:px-10 md:px-20 lg:px-28 py-10 sm:py-16">
        <div className="flex flex-col items-start gap-6 w-full max-w-[1200px]">
          {/* Heading */}
          <h1
            className="text-white text-start font-bold leading-tight 
            text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[4rem] 
            tracking-tight"
            style={{ lineHeight: '1.15', maxWidth: '900px' }}
          >
            Financial Software Development Solutions
          </h1>

          {/* Paragraph */}
          <p
            className="text-white/80 text-base sm:text-lg md:text-[1.1rem] 
            leading-relaxed sm:leading-[1.6] max-w-[1100px]"
          >
            Banking, financial services, and insurance (BFSI) firms constantly face pressure from
            regulators, customers, and competitors. Custom financial software is a key solution to
            navigate this complexity. At DevEntia, we offer full-cycle financial software
            development to help BFSI organizations streamline processes, meet regulatory and market
            demands, and deliver seamless customer experiences.
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
