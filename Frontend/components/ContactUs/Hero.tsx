import heroBgImg from '../../assets/images/contact us hero bg.webp';
import Image from 'next/image';
import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-[#0B0B0B] h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] flex flex-col justify-center items-center gap-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroBgImg}
        alt="people"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        priority
      />

      {/* 🔹 Lighter Blue Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A80]/50 via-[#1A1A80]/40 to-[#000000]/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="text-white text-base sm:text-lg md:text-xl">
          Welcome To{" "}
          <span className="text-[#0077FF] font-bold text-lg md:text-xl">
            DevEntia Tech
          </span>
        </p>

        <h1 className="text-white text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-tight">
          Let&apos;s Talk!
        </h1>

        <hr className="w-1/3 h-1 bg-[#0077FF] rounded-full border-none my-3" />

        <p className="text-white/90 text-center max-w-2xl px-3 text-sm sm:text-base md:text-lg">
          Where Innovation Meets Imagination
        </p>
      </div>
    </header>
  );
};

export default Hero;
