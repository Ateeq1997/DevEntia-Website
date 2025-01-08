"use client";
import React, { useState, useEffect, useRef } from "react";

const PositiveImpactSection = () => {
  const stats = [
    { label: "Projects", value: 30 },
    { label: "Team Members", value: 15 },
    { label: "Clients", value: 10 },
    { label: "YEARS", value: 1.5 }
  ];

  const [counts, setCounts] = useState(stats.map(() => 1));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            // Calculate step size based on total value
            const stepSize = stat.value / steps;
            newCounts[index] = Math.min(
              stat.value,
              newCounts[index] + stepSize
            );
          }
          return newCounts;
        });
      }, stepTime);
    });

    setTimeout(() => {
      intervals.forEach(interval => clearInterval(interval));
      // Ensure final values are exact
      setCounts(stats.map(stat => stat.value));
    }, duration);
  };

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-[5%] md:px-[5%] lg:px-[5%] sm:h-[100vh] h-[100vh] lg:h-[70vh] flex justify-center max-h-[50rem]">
      <div className=" flex flex-col lg:flex-row  items-center gap-24">
        <div className="lg:w-1/2 pr-7">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Empowering Change Through Innovation and Technology
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          We craft digital solutions that spark transformation, fuel growth, and create lasting value. Together, we turn challenges into opportunities, driving success for all through the power of technology.
          </p>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 sm:gap-8 text-center pl-8 h-60 relative">
          <div className="absolute left-0 top-0 h-full hidden lg:block">
            <div className="h-[68px] w-px bg-white"></div>
            <div className="w-3 h-3 bg-black border-t border-r border-white rotate-45 absolute -left-[6px] top-[58px]"></div>
            <div className="h-[calc(100%-68px)] w-px bg-white absolute top-[72px]"></div>
          </div>

          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl sm:text-4xl md:font-extrabold md:text-6xl">
                {stat.label === "YEARS" 
                  ? counts[index].toFixed(1) + "+"
                  : Math.floor(counts[index]) + "+"}
              </span>
              <span className="text-gray-400 text-sm sm:text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositiveImpactSection;