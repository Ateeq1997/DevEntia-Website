'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import heroBgImg from '../../../assets/images/fintech.jpg';

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
      <div className="absolute inset-0 flex items-center justify-start p-8">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          <h1 className="text-white text-start text-[2.5rem] md:text-[4rem] font-bold leading-snug">
            Financial Software Development
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl">
            Banking, financial services, and insurance (BFSI) firms constantly face pressure from regulators, customers, and competitors.
            Custom financial software is a key solution to navigate this complexity.
            At DevEntia, we offer full-cycle financial software development to help BFSI organizations streamline processes,
            meet regulatory and market demands, and deliver seamless customer experiences.
          </p>

          <Link
            href="/Contact-us"
            className="flex items-center gap-2 px-5 py-3 
                       text-[14px] md:text-[19px] font-bold font-['Bai_Jamjuree'] leading-[100%]
                       shadow-[0_0_15px_5px_rgba(72,72,255,0.7)]
                       transition-all duration-300 ease-in-out"
            style={{
              backdropFilter: 'blur(45px)',
              background: '#4848FF',
              color: '#CFCEFB',
            }}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
