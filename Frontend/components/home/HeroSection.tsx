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

      </div>
    </section>
  );
};

export default HeroSection;
