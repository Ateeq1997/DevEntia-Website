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
    className="flex items-center gap-2 flex-wrap bg-[#4848FF] px-5 font-semibold text-[14px] md:text-[19px] py-3 rounded-full hover:scale-110 transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(72,72,255,1)]"
  >
    <p className=" text-white flex items-center ">Let&apos;s Connect</p>
  </Link>

  <Link
    href={"/Services"}
    className="flex items-center gap-2 flex-wrap bg-white text-[#4848FF] px-5 font-semibold text-[14px] md:text-[19px] py-3 rounded-full hover:scale-110 transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(255,255,255,1)]"
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

        {/* ✅ Bottom Fixed WhatsApp + Get a Quote Button */}
        <div className="absolute bottom-6 left-0 w-full flex items-center justify-between px-[5%] z-20">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.857 7.857 0 0 0 8.002 0C3.584 0 .002 3.582.002 8c0 1.411.37 2.787 1.075 4.002L0 16l4.111-1.062A7.964 7.964 0 0 0 8.002 16c4.418 0 8-3.582 8-8 0-2.134-.83-4.142-2.399-5.674ZM8.002 14.5a6.48 6.48 0 0 1-3.295-.894l-.236-.14-2.437.63.649-2.38-.153-.244A6.497 6.497 0 0 1 1.5 8c0-3.59 2.912-6.5 6.502-6.5a6.466 6.466 0 0 1 4.606 1.898A6.46 6.46 0 0 1 14.5 8c0 3.59-2.912 6.5-6.498 6.5Zm3.645-4.736c-.197-.099-1.166-.574-1.348-.639-.182-.066-.315-.099-.448.099s-.514.639-.63.77c-.115.132-.232.148-.429.049-.197-.099-.831-.305-1.583-.974-.584-.52-.977-1.162-1.091-1.358-.115-.197-.012-.304.087-.403.089-.088.197-.23.296-.345.098-.115.131-.197.197-.33.065-.132.033-.247-.016-.346-.05-.099-.448-1.086-.614-1.486-.162-.389-.326-.336-.448-.342-.115-.006-.247-.007-.38-.007a.73.73 0 0 0-.528.247c-.182.197-.695.679-.695 1.656s.712 1.921.812 2.054c.099.132 1.403 2.143 3.402 3.004.476.205.847.326 1.136.418.477.152.91.13 1.253.079.383-.058 1.165-.476 1.33-.936.164-.46.164-.854.115-.936-.049-.082-.18-.13-.377-.23Z" />
            </svg>
          </a>

          {/* Get a Quote Button */}
       <Link
  href="/Contact-us"
  className="text-white font-semibold text-[16px] px-6 py-3 rounded-full transition-all duration-300 
             hover:scale-105 shadow-[0_0_15px_rgba(72,72,255,0.8)]"
  style={{
    backgroundColor: 'tranparent',
    border: '2px solid white',
  }}
>
  Get a Quote
</Link>



        </div>

      </div>
    </section>
  );
};

export default HeroSection;
