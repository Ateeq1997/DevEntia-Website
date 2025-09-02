"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface HeroContent {
  video: string;
  titles: string[];
}

const heroContents: HeroContent[] = [
  {
    video: "https://res.cloudinary.com/dhsgpxu04/video/upload/v1735372583/Man_showing_different_digital_data_around_the_world_Free_Stock_Video_Footage_xcs8h5.mp4",
    titles: [
      "Where Innovation Meets Imagination",
      "Empowering Brands Through Smart Solutions",
    ],
  },
  {
    video: "https://res.cloudinary.com/dhsgpxu04/video/upload/v1735372705/Earth_at_night_from_space_Free_Stock_Video_Footage_2_yuxerd.mp4",
    titles: [
      "Turning Ideas into Scalable Success",
      "Solving Real Problems With Smart Technology",
    ],
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0); // ✅ added
  const [isChanging, setIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // Handle video progress
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
        setSubIndex(0); // reset titles when slide changes ✅
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

  // Cycle through titles (inside the same video)
  useEffect(() => {
    const titleTimer = setInterval(() => {
      setSubIndex((prev) => {
        const titles = heroContents[currentIndex].titles;
        return (prev + 1) % titles.length;
      });
    }, 4000); // ⏳ switch text every 4s

    return () => clearInterval(titleTimer);
  }, [currentIndex]);

  const handleSlideChange = (index: number) => {
    if (index === currentIndex) return;

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setSubIndex(0); // ✅ reset title
      setIsChanging(false);
      setProgress(0);
    }, 300);
  };

  const ProgressIndicator = ({ index, isMobile }: { index: number; isMobile: boolean }) => {
    const baseClasses = "relative cursor-pointer transition-all duration-300";
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
              className={`absolute bg-[#4848FF] rounded-full transition-all duration-300 ease-linear
                ${isMobile ? "left-0 top-0 h-full" : "bottom-0 left-0 w-full"}`}
              style={
                isMobile
                  ? { width: `${progress}%` }
                  : { height: `${progress}%` }
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
    <section className="h-[100vh] max-h-[50rem] relative overflow-hidden max-w-screen">
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
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full w-full px-[5%] mx-auto">
        <div
          className={`transition-opacity duration-500 ${
            isChanging ? "opacity-0" : "opacity-100"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={heroContents[currentIndex].titles[subIndex]} 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="text-3xl  md:text-[90px] font-bold leading-tight mb-6 max-w-screen-xl"
            >
              {heroContents[currentIndex].titles[subIndex]}
            </motion.h1>
          </AnimatePresence>

 <div className="flex gap-6 mt-20">
  <Link
    href={"/Contact-us"}
    className="flex items-center gap-2 flex-wrap bg-[#4848FF] hover:bg-blue-700 px-5 font-semibold text-[14px] md:text-[19px] py-3  transition-all duration-700 ease-in-out "
  >
    <p className=" text-white flex items-center ">Let&apos;s Connect</p>
  </Link>

  <Link
    href={"/Services"}
    className="flex items-center gap-2 flex-wrap bg-white text-[#4848FF] px-5 font-semibold text-[14px] md:text-[19px] py-3   transition-all duration-700 ease-in-out"
  >
    <p className="flex items-center ">Explore Services</p>
  </Link>
</div>


        </div>

        <div
          className="flex gap-6 absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:bottom-auto lg:translate-x-0 lg:top-1/2 lg:right-8 lg:-translate-y-1/2 lg:flex-col"
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
      </div>
    </section>
  );
};

export default HeroSection;
