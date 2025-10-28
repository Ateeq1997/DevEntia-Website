'use client';

import React from 'react';
import Button from ".././home/Button";

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] h-screen max-h-[50rem] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        playsInline
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      >
        <source src="/servicebgvedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-[5%]">
        <div className="flex flex-col items-start gap-5 w-full max-w-[80rem]">
          
          {/* Small Text */}
          <h3 className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
            Unlock Opportunities Explore Our Tailored Solutions
          </h3>

          {/* Heading — now truly responsive and never cut off */}
          <h1
            className="
              text-white text-start font-bold leading-[1.1]
              text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.2rem]
              w-full sm:max-w-[95%] md:max-w-[85%] lg:max-w-[70%] xl:max-w-[65%]
              break-words
            "
            style={{
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            Discover Our Services and Empower Your Success
          </h1>

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
