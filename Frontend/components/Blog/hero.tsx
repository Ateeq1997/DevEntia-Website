"use client";

import { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
      <div className="relative max-w-[1750px] px-4 md:px-6 lg:px-12 2xl:px-24 pt-10 pb-8 md:pb-16 mx-auto text-white overflow-visible">
        {/* Background */}
        <div className="absolute inset-0 z-0 " />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-[1550px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-start gap-6 md:gap-8 lg:gap-12">
            {/* Left: Title */}
            <div className="text-center md:text-left">
              <p className={`text-[#8A8AFD] font-inter font-semibold text-[12px] md:text-[14px] tracking-wide mb-2 md:mb-3 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Blog & News
              </p>
              <h1 className={`text-white font-semibold leading-tight text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[56px] transition-all duration-1000 ease-out delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="inline-block animate-fade-in-up">Read Our Latest News &</span>
                <br className="hidden sm:block" />
                <span className="inline-block animate-fade-in-up delay-500">Blog Get Every Updates</span>
              </h1>
              <div className={`mt-3 md:mt-4 h-[2px] w-32 md:w-40 bg-gray-600 mx-auto md:mx-0 transition-all duration-1000 ease-out delay-700 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`} />
            </div>

            {/* Right: Description + Arrows */}
            <div className="flex flex-col items-center md:items-end gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-10">
              <p className={`text-white/80 text-sm md:text-base max-w-sm text-center md:text-left transition-all duration-1000 ease-out delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                We are web designers, developers, project managers, and digital solutions using the latest
                trends and technologies.
              </p>
              <div className={`hidden md:flex items-center gap-3 md:gap-4 -mt-4 md:-mt-8 transition-all duration-1000 ease-out delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="relative animate-pulse">
                  <span className="pointer-events-none absolute -inset-2 rounded-full bg-white/25 blur-md" />
                  <button aria-label="Previous" className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-[#0A0D12] flex items-center justify-center shadow-md hover:opacity-90 transition-all duration-300 hover:scale-110">
                    <span className="text-xl md:text-2xl">←</span>
                  </button>
                </div>
                <div className="relative animate-pulse">
                  <span className="pointer-events-none absolute -inset-2 rounded-full bg-[#4A55FF]/35 blur-md" />
                  <button aria-label="Next" className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#4A55FF] text-white flex items-center justify-center shadow-md hover:opacity-90 transition-all duration-300 hover:scale-110">
                    <span className="text-xl md:text-2xl">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>
    );
};

export default Hero;
