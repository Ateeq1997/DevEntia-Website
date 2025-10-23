'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import heroBgImg from '../../../assets/images/pbackground.jpg';

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
            Product Engineering Services
          </h1>

      <p className="text-white/80 text-lg md:text-[1.1rem] leading-[1.6] w-full max-w-[1100px]">
 With our full-cycle product engineering services, we help businesses across industries create impactful software faster and more cost-effectively. From ideation to post-launch support, we guide clients at every step, delivering high-quality, user-focused products that meet customer expectations and bring innovative strategies to life.
</p>

          {/* Button */}
          <Link
            href="/Contact-us"
            className="flex items-center gap-2 px-6 py-3 
                       text-[15px] md:text-[18px] font-bold font-['Bai_Jamjuree'] leading-[100%]
                       shadow-[0_0_15px_5px_rgba(72,72,255,0.7)]
                       transition-all duration-300 ease-in-out"
            style={{
              backdropFilter: 'blur(45px)',
              background: '#4848FF',
              color: '#CFCEFB',
              borderRadius: '8px',
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
