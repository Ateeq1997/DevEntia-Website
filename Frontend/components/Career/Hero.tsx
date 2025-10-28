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

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex items-center justify-center bg-[#161616] h-[100svh] overflow-hidden"
      style={{
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
      />

  {/* Content */}
<div className="relative z-10 px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16 text-left w-full max-w-[1400px] ml-[-8px] sm:ml-[-16px] md:ml-[-24px] lg:ml-[-32px]">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
      <h3 className="text-white/60 text-sm sm:text-base md:text-lg">
        Start doing work that matters
      </h3>
    </div>

    <h1
      className="text-white font-bold leading-[1.1]
        text-3xl sm:text-4xl md:text-5xl lg:text-[5rem]
        w-full sm:max-w-[90%] md:max-w-[80%]"
    >
      Find your dream job.
    </h1>
  </div>
</div>

    </section>
  );
};

export default Hero;
