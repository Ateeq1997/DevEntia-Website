"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroContents.length);
        setIsChanging(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50rem] w-full bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={heroContents[currentIndex].video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isChanging ? 'opacity-0' : 'opacity-50'
          }`}
        >
          <source src={heroContents[currentIndex].video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 max-w-7xl mx-auto">
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
            <button className="px-8 py-3 bg-[#4848FF] rounded-full hover:bg-[#4e4ed3] transition-colors">
              Let&apos;s Connect
            </button>
           
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroContents.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsChanging(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsChanging(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? 'bg-[#4848FF] w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;