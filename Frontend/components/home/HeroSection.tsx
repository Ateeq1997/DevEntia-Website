"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
interface HeroContent {
  video: string;
  titles: string[];
}

const heroContents: HeroContent[] = [
  {
    video:
      "https://res.cloudinary.com/dhsgpxu04/video/upload/v1761735581/digital-matrix-technology-binary-code-blue-backgro-2025-10-17-00-21-17-utc_ph4evu.mp4",
    titles: [
      "Where Innovation Meets Imagination",
      "Empowering Brands Through Smart Solutions",
    ],
  },
  {
    video:
      "https://res.cloudinary.com/dhsgpxu04/video/upload/v1735372705/Earth_at_night_from_space_Free_Stock_Video_Footage_2_yuxerd.mp4",
    titles: [
      "Turning Ideas into Scalable Success",
      "Solving Real Problems With Smart Technology",
    ],
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // ✅ video progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(currentProgress);
      }
    };

    const handleVideoEnd = () => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroContents.length);
        setSubIndex(0);
        setIsChanging(false);
        setProgress(0);
      }, 500);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentIndex]);

  // ✅ cycle through titles
  useEffect(() => {
    const titleTimer = setInterval(() => {
      setSubIndex((prev) => {
        const titles = heroContents[currentIndex].titles;
        return (prev + 1) % titles.length;
      });
    }, 4000);
    return () => clearInterval(titleTimer);
  }, [currentIndex]);

  const handleSlideChange = (index: number) => {
    if (index === currentIndex) return;
    if (videoRef.current) videoRef.current.currentTime = 0;
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setSubIndex(0);
      setIsChanging(false);
      setProgress(0);
    }, 300);
  };

  const ProgressIndicator = ({
    index,
    isMobile,
  }: {
    index: number;
    isMobile: boolean;
  }) => {
    const baseClasses =
      "relative cursor-pointer transition-all duration-300 flex-shrink-0";
    const dimensionClasses = isMobile
      ? `${index === currentIndex ? "w-10 h-2" : "w-2 h-2"}`
      : `${index === currentIndex ? "w-2 h-10" : "w-2 h-2"}`;

    return (
      <div className={`${baseClasses} ${dimensionClasses}`}>
        {index === currentIndex ? (
          <div className="w-full h-full rounded-full overflow-hidden">
            <div
              className={`absolute inset-0 ${
                isHovered === index ? "bg-white/30" : "bg-white/10"
              } rounded-full`}
            />
            <div
              className={`absolute bg-[#4848FF] rounded-full transition-all duration-300 ease-linear ${
                isMobile ? "left-0 top-0 h-full" : "bottom-0 left-0 w-full"
              }`}
              style={
                isMobile ? { width: `${progress}%` } : { height: `${progress}%` }
              }
            />
          </div>
        ) : (
          <div
            className={`w-full h-full rounded-full ${
              isHovered === index ? "bg-white/30" : "bg-white/10"
            }`}
          />
        )}
      </div>
    );
  };

  return (
    <section className="relative bg-[#0B0B0B] h-[80vh] sm:h-[80vh] md:h-[70vh] lg:h-[45rem]">
      {/* ✅ background video */}
     <div className="absolute inset-0 z-0">
  <video
    ref={videoRef}
    key={heroContents[currentIndex].video}
    autoPlay
    muted
    playsInline
    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
      isChanging ? "opacity-10" : "opacity-60"
    }`}
  >
    <source src={heroContents[currentIndex].video} type="video/mp4" />
  </video>

  {/* ✅ Dark Blur Overlay (50% opacity) */}
  <div className="absolute inset-0 bg-[#0A0F3C]/30 " />
</div>


      {/* ✅ content */}
     <div className="relative z-10 flex flex-col items-start justify-center h-full w-full px-[5%] mx-auto ">

        <div
          className={`transition-opacity duration-500 ${
            isChanging ? "opacity-0" : "opacity-100"
          } flex flex-col flex-wrap gap-6`}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={heroContents[currentIndex].titles[subIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="text-3xl md:text-[90px] font-bold leading-[1.1] mb-6 max-w-[95%] md:max-w-[85%] text-white"
            >
              {heroContents[currentIndex].titles[subIndex]}
            </motion.h1>
          </AnimatePresence>

 <p
  className="text-white text-lg md:text-xl max-w-[900px] leading-relaxed -mt-2 md:-mt-10"
>
  At DevEntia Tech, we craft intelligent digital solutions that turn
  bold ideas into powerful products. From custom software development
  to immersive UI/UX design, our expert team merges cutting-edge
  technology with strategic thinking to drive innovation.
</p>


<div
  className="flex flex-wrap gap-4 md:gap-6 mt-6"
>
 <Button
        text="Let's Connect"
        href="/Contact-us"
        bgColor="#4848FF"
        textColor="#CFCEFB"
        hoverColor="#2E2EB5"
      />
 
  <Button
        text="Explore Services"
        href="/Services"
        bgColor="#ffffff"
        textColor="#4848FF"
        hoverColor="#4848FF"
        hoverTextColor= '#ffffff'
      />
 
</div>
        </div>

        {/* ✅ progress indicators */}
        <div
          className="flex gap-6 absolute bottom-8 left-1/2 -translate-x-1/2 
                     lg:left-auto lg:bottom-auto lg:translate-x-0 lg:top-1/2 lg:right-8 
                     lg:-translate-y-1/2 lg:flex-col"
          onMouseEnter={() => setIsHovered(currentIndex)}
          onMouseLeave={() => setIsHovered(null)}
        >
          {heroContents.map((_, index) => (
            <div key={index} onClick={() => handleSlideChange(index)}>
              <div className="lg:hidden">
                <ProgressIndicator index={index} isMobile={true} />
              </div>
              <div className="hidden lg:block">
                <ProgressIndicator index={index} isMobile={false} />
              </div>
            </div>
          ))}
        </div>

       {/* ✅ Floating WhatsApp + Quote Button */}
<div
  className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[100%] max-w-[1770px] flex items-center justify-between px-2 z-[999]"
>
  {/* WhatsApp Icon */}
  <a
    href="https://wa.me/923448967017"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="sm:w-[26px] sm:h-[26px]"
    >
      <path d="M13.601 2.326A7.857 7.857 0 0 0 8.002 0C3.584 0 .002 3.582.002 8c0 1.411.37 2.787 1.075 4.002L0 16l4.111-1.062A7.964 7.964 0 0 0 8.002 16c4.418 0 8-3.582 8-8 0-2.134-.83-4.142-2.399-5.674Zm-5.6 12.672a6.627 6.627 0 0 1-3.383-.924l-.243-.144-2.44.63.651-2.381-.158-.245A6.623 6.623 0 0 1 1.373 8c0-3.652 2.975-6.627 6.627-6.627 1.77 0 3.433.69 4.686 1.943a6.588 6.588 0 0 1 1.94 4.684c0 3.652-2.975 6.627-6.626 6.627ZM11.153 9.5c-.192-.096-1.13-.558-1.305-.622-.175-.065-.302-.096-.43.096-.128.192-.494.622-.605.75-.112.128-.224.144-.416.048-.192-.096-.81-.298-1.542-.95-.57-.508-.955-1.134-1.067-1.326-.112-.192-.012-.296.084-.392.087-.086.192-.224.288-.336.096-.112.128-.192.192-.32.064-.128.032-.24-.016-.336-.048-.096-.43-1.037-.589-1.421-.155-.372-.312-.322-.43-.328h-.37c-.128 0-.336.048-.512.24-.176.192-.672.658-.672 1.606s.688 1.856.784 1.984c.096.128 1.352 2.064 3.28 2.894 1.928.83 1.928.554 2.276.52.349-.032 1.13-.46 1.29-.904.16-.445.16-.826.112-.904-.048-.08-.176-.128-.368-.224Z" />
    </svg>
  </a>

  {/* Get a Quote Button */}
  <Link
    href="/Contact-us"
    className="font-semibold text-[14px] sm:text-[14px] px-3 sm:px-3 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 text-[#4848FF] border-2 border-[#4848FF] dark:text-white dark:border-[#FFFFFF20] rounded-lg bg-transparent"
  >
    Get a Quote
  </Link>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
