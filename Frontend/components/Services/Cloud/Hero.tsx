'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from "../../home/Button";
import heroBgImg from '../../../assets/images/Background-Rectangel.png';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] h-screen overflow-hidden">
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
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-28">
        <div className="flex flex-col items-start gap-6 w-full max-w-none">

          {/* Heading */}
          <h1
            className="text-white text-start font-bold leading-tight text-[2.6rem] md:text-[4rem]"
            style={{ maxWidth: '900px', lineHeight: '1.15' }}
          >
            Cloud Engineering.
          </h1>

      <p className="text-white/80 text-lg md:text-[1.1rem] leading-[1.6] w-full max-w-[1100px]">
 Cloud technology offers the agility, scalability, and cost-efficiency required for modern digital solutions.At DevEntia, we build your cloud foundation with custom services, including cloud engineering consulting, app development, and more.
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
