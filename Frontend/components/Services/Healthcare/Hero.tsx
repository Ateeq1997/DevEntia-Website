'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from '../../home/Button';
import heroBgImg from '../../../assets/images/Background.png';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] h-screen max-h-[55rem] overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src={heroBgImg}
        alt="healthcare background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        priority
      />

      {/* 🔹 Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔹 Content */}
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-16 lg:pl-[6rem]">
        <div className="flex flex-col items-start gap-6 w-full max-w-[75rem]">
          {/* Heading */}
          <h1
            className="
              text-white text-start font-bold leading-tight
              text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem]
              max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%]
            "
          >
            Healthcare Software Development
          </h1>

          {/* Paragraph */}
          <p
            className="
              text-white/80 text-base sm:text-lg md:text-[1.1rem]
              leading-relaxed sm:leading-[1.7]
              max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%]
              text-justify sm:text-left
            "
            style={{
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            Transform healthcare with DevEntia&apos;s expertise in building innovative, customized
            solutions for medical facilities. Our healthcare software development services empower
            providers and institutions to optimize operations, enhance patient engagement, and
            leverage data-driven insights for a smarter, more efficient healthcare ecosystem.
          </p>

          {/* Button */}
          <div className="mt-2 sm:mt-4">
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
