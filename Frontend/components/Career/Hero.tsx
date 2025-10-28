'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import heroBgImg from '../../assets/images/Background Rectangel.png';

const Hero = () => {
  const [viewportScale, setViewportScale] = useState(1);

  // Handle zoom responsiveness
  useEffect(() => {
    const handleZoom = () => {
      const scale = window.visualViewport?.scale || 1;
      setViewportScale(scale);
    };
    window.visualViewport?.addEventListener('resize', handleZoom);
    handleZoom();

    return () => {
      window.visualViewport?.removeEventListener('resize', handleZoom);
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center bg-[#161616] overflow-hidden"
      style={{
        height: '90svh', // Reduced hero image height
        transform: `scale(${1 / viewportScale})`,
        transformOrigin: 'top center',
      }}
    >
      {/* Background Image */}
      <Image
        src={heroBgImg}
        alt="Hero Background"
        priority
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ maxHeight: '100%' }} // Prevent image from overflowing
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 w-full max-w-[1400px] mx-auto text-left">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-white/60 text-sm sm:text-base md:text-lg">
            Start doing work that matters
          </h3>

          <h1 className="text-white font-bold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] 
            w-full sm:max-w-[90%] md:max-w-[80%]">
            Find your dream job.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
