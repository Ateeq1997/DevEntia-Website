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
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };

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

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
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

  return (
    <section className="relative h-[100vh] w-full bg-black text-white overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl px-[5%]">
        <div
          className={`transition-opacity duration-500 ${
            isChanging ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-5xl">
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

        <div className="hidden lg:flex absolute lg:top-1/2 lg:-right-40 transform -translate-y-1/2 flex-col gap-6">
          {heroContents.map((_, index) => (
            <div 
              key={index} 
              className={`relative flex items-center cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'h-10' : 'h-4'
              }`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => handleSlideChange(index)}
            >
              {index === currentIndex ? (
                <div className="w-2 h-full rounded-full overflow-hidden">
                  <div className={`absolute inset-0 ${
                    isHovered === index ? 'bg-white/30' : 'bg-white/10'
                  } transition-all duration-300 rounded-full`} />
                  <div 
                    className="absolute bottom-0 left-0 w-full bg-[#4848FF80] rounded-full transition-all duration-300 ease-linear"
                    style={{ height: `${progress}%` }} 
                  />
                </div>
              ) : (
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isHovered === index ? 'bg-white/30' : 'bg-white/10'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;