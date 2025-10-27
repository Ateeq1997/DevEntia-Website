'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { IoArrowDownOutline } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import heroBgImg from '../../assets/images/about-us-hero-bg.webp';
import Button from '../home/Button';
const Hero = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#161616] h-screen">
      <Image
        src={heroBgImg}
        alt="people"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start ">
        <div className="flex flex-col items-start gap-6 px-[5%]">
          <div className="flex items-center gap-1 1200px:w-1/2">
            <h3 className="text-white/50 text-sm">
              Discover the Roots of Deventia <br /> and Our Guiding Principles
            </h3>
            
          </div>
          <h1 className="text-white text-start text-[3rem] md:text-[90px] font-bold leading-tight">
            Uncovering Our Evolution <br className="hidden lg:block" />
            and Principles
          </h1>
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
  );
};

export default Hero;
