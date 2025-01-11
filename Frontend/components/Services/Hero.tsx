'use client';

import Link from 'next/link';
import React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <header className="relative bg-[#161616] h-screen max-h-[50rem] ">
      <video
        autoPlay
        playsInline
        controls={false}
        muted
        loop
        className="absolute top-0 left-0 w-full h-full !object-right object-cover lg:|!object-fill"
      >
        <source src={'/servicebgvedio.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[#7571e686]"></div>
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="flex flex-col items-start gap-6 px-[5%]">
          <div className="flex items-center gap-1 1200px:w-1/2">
            <h3 className="text-white/50 text-sm">
              Unlock Opportunities Explore <br /> Our Tailored Solutions
            </h3>
            <div
              onClick={handleScroll}
              className=" border border-white flex items-center justify-center cursor-pointer"
            >
              <IoArrowDownOutline
                size={40}
                color="#fff"
                className="hover:animate-bounce transition-all duration-700 ease-in-out p-2"
              />
            </div>
          </div>
          <h1 className="text-white text-start text-[3rem] 500px:text-[5rem] font-bold leading-tight">
          Discover Our Services and Empower Your Success
          </h1>
          <Link
            href={'/Contact-us'}
            className="flex items-center gap-2 flex-wrap hover:bg-[#4848FF] hover:scale-110 transition-all duration-700 ease-in-out"
          >
            <p className="p-4 bg-[#4848FF] text-white flex items-center gap-2">
              Let&apos;s Connect
            </p>
            <div className="p-4 bg-[#4848FF] flex items-center justify-center">
              <MdOutlineArrowOutward size={25} color="#fff" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
