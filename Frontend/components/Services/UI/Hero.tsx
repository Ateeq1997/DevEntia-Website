'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from "../../home/Button";
import heroBgImg from '@/assets/images/uibackground.jpg';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] h-screen overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src={heroBgImg}
        alt="UI/UX background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        priority
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 md:px-20 lg:px-28">
        <div className="flex flex-col items-start gap-5 sm:gap-6 w-full max-w-[1100px] text-left">

          {/* 🔹 Heading */}
          <h1
            className="
              text-white font-bold leading-tight
              text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem]
            "
            style={{ maxWidth: '900px', lineHeight: '1.15' }}
          >
            UI/UX Design Services.
          </h1>

          {/* 🔹 Paragraph */}
          <p
            className="
              text-white/80
              text-base sm:text-lg md:text-[1.1rem]
              leading-relaxed sm:leading-[1.6]
              w-full max-w-[1000px]
            "
          >
            DevEntia&apos;s expert designers create exceptional user experiences and intuitive interfaces to elevate your digital products. 
            With deep insights into user behavior and industry best practices, we craft designs that seamlessly combine functionality and aesthetics. 
            Our approach keeps users engaged and delighted throughout their journey.
          </p>

          {/* 🔹 Button */}
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
