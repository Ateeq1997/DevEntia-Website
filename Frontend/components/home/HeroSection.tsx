"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface HeroContent {
  video: string;
  title: string;
  subtitle: string;
}

const heroContents: HeroContent[] = [
  {
    video: "https://res.cloudinary.com/dhsgpxu04/video/upload/v1735372583/Man_showing_different_digital_data_around_the_world_Free_Stock_Video_Footage_xcs8h5.mp4",
    title: "Where Innovation Meets Imagination",
    subtitle: "Shaping the future with transformative innovation and boundless imagination.",
  },
  {
    video: "https://res.cloudinary.com/dhsgpxu04/video/upload/v1735372705/Earth_at_night_from_space_Free_Stock_Video_Footage_2_yuxerd.mp4",
    title: "Empowering the World with Seamless IT Solutions",
    subtitle: "Delivering end-to-end software services that drive innovation and global success.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

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
        setIsChanging(false);
        setProgress(0);
      }, 500);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentIndex]);

  const handleSlideChange = (index: number) => {
    if (index === currentIndex) return;
    
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsChanging(false);
      setProgress(0);
    }, 300);
  };

  const ProgressIndicator = ({ index, isMobile }: { index: number; isMobile: boolean }) => {
    const baseClasses = "relative cursor-pointer transition-all duration-300";
    const dimensionClasses = isMobile
      ? `${index === currentIndex ? 'w-10 h-2' : 'w-2 h-2'}`
      : `${index === currentIndex ? 'w-2 h-10' : 'w-2 h-2'}`;

    return (
      <div className={`${baseClasses} ${dimensionClasses}`}>
        {index === currentIndex ? (
          <div className="w-full h-full rounded-full overflow-hidden">
            <div className={`absolute inset-0 ${
              isHovered === index ? 'bg-white/30' : 'bg-white/10'
            } rounded-full`} />
            <div 
              className={`absolute bg-[#4848FF80] rounded-full transition-all duration-300 ease-linear
                ${isMobile ? 'left-0 top-0 h-full' : 'bottom-0 left-0 w-full'}`}
              style={isMobile 
                ? { width: `${progress}%` }
                : { height: `${progress}%` }
              }
            />
          </div>
        ) : (
          <div className={`w-full h-full rounded-full ${
            isHovered === index ? 'bg-white/30' : 'bg-white/10'
          }`} />
        )}
      </div>
    );
  };

  return (
      <section className="h-[80vh] sm:h-[70vh] md:h-[100vh] max-h-[50rem] relative overflow-hidden max-w-screen">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            key={heroContents[currentIndex].video}
            autoPlay
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isChanging ? 'opacity-10' : 'opacity-60'
            }`}
          >
            <source src={heroContents[currentIndex].video} type="video/mp4" />
          </video>
          <div className="absolute inset-0" />
        </div>
  
        <div className="relative z-10 flex flex-col items-start justify-center h-full w-full px-[5%] mx-auto">
          <div
            className={`transition-opacity duration-500 ${
              isChanging ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-screen-md">
              {heroContents[currentIndex].title}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-10">
              {heroContents[currentIndex].subtitle}
            </p>
            <div className="flex gap-6">
              <Link
                href="/Contact-us"
                className="fill-on-hover-btn rounded-full hover:text-white font-BaiJamjuree font-semibold w-full lg:w-fit text-center mb-8 md:mb-0"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
  
          <div 
            className="flex gap-6 absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:bottom-auto lg:translate-x-0 lg:top-1/2 lg:right-8 lg:-translate-y-1/2 lg:flex-col"
            onMouseEnter={() => setIsHovered(currentIndex)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {heroContents.map((_, index) => (
              <div 
                key={index}
                onClick={() => handleSlideChange(index)}
              >
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