"use client";
import React, { useEffect, useRef, useState } from "react";

const StatsWithStatisticsStyle = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  // Stats data with display format
  const stats = [
    { number: 125, display: "125+", label1: "Projects", label2: "Completed" },
    { number: 8, display: "08", label1: "Years of", label2: "Experience" },
    { number: 2000, display: "2k+", label1: "Happy", label2: "Customers" },
    { number: 38, display: "38", label1: "Awards", label2: "Achievement" },
  ];

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={statsRef}
      className="relative z-[1] w-full py-16 bg-white dark:bg-[#0B0B0D] transition-colors duration-700 ease-in-out"
    >
      <div
        className="flex flex-col lg:flex-row items-center justify-center
        gap-10 lg:gap-16 px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-40
        w-full lg:max-w-[90rem] mx-auto overflow-x-hidden"
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4
            items-center justify-center text-center lg:text-left
            gap-10 sm:gap-12 md:gap-14 lg:gap-16 w-full"
        >
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.number}
              display={stat.display}
              label1={stat.label1}
              label2={stat.label2}
              start={startCount}
              className={index === 0 ? "lg:-ml-6 xl:-ml-10" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Stat Component
const AnimatedStat = ({
  value,
  display,
  label1,
  label2,
  start,
  className = "",
}: {
  value: number;
  display: string;
  label1: string;
  label2: string;
  start: boolean;
  className?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  // Determine what to display
  const displayValue =
    display.includes("k")
      ? count >= value
        ? display
        : Math.floor(count / 1000) + "k"
      : count >= value
      ? display
      : count < 10 && display.length === 2
      ? "0" + count
      : count;

  return (
    <div
      className={`relative flex flex-col gap-2 
        items-center lg:items-start 
        text-center lg:text-left 
        z-[1] w-full ${className}`}
    >
      {/* Value */}
      <div className="relative flex items-center justify-center lg:justify-start">
        <span
          className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-medium font-bai text-transparent relative"
          style={{
            WebkitTextStroke: "2px #4848FF",
            color: "transparent",
          }}
        >
          {displayValue}
        </span>
        <span
          className="absolute w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] rounded-full blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(72,72,255,0.6) 0%, rgba(72,72,255,0.25) 70%, transparent 100%)",
          }}
        ></span>
      </div>

      {/* Line */}
      <div className="h-[2px] bg-[black] dark:bg-[#CFDDE8] opacity-80 transition-colors duration-500 w-[70%] mx-auto lg:mx-0"></div>

      {/* Labels */}
      <p className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-2 transition-colors duration-500 leading-snug text-[#4848FF] dark:text-[#CFDDE8]">
        {label1} <br /> {label2}
      </p>
    </div>
  );
};

export default StatsWithStatisticsStyle;
