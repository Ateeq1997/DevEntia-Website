"use client";
import React from "react";

const Statistics = () => {
  return (
    <section className="relative z-[1] w-full py-16 bg-white dark:bg-[#0B0B0D] transition-colors duration-700 ease-in-out">
      <div
        className="flex flex-col lg:flex-row items-start justify-center
        gap-10 lg:gap-16 px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40
        max-w-[90rem] mx-auto overflow-visible"
      >
        {/* Main stats container */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-2 lg:flex
            items-start justify-center gap-10 lg:gap-16 w-full
          "
        >
          {/* Single Stat */}
          {[
            { value: "55+", label: "Project Complete" },
            { value: "40+", label: "Happy Customers" },
            { value: "2+", label: "Years Experiences" },
            { value: "10+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-2 items-start text-left z-[1] w-full sm:w-auto"
            >
              {/* Value */}
              <div className="relative flex items-center justify-start">
                <span
                  className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[130px] font-medium font-bai text-transparent relative"
                  style={{
                    WebkitTextStroke: "2px #4848FF",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="absolute w-[90px] sm:w-[110px] md:w-[120px] h-[90px] sm:h-[110px] md:h-[120px] rounded-full blur-2xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(72,72,255,0.6) 0%, rgba(72,72,255,0.25) 70%, transparent 100%)",
                  }}
                ></span>
              </div>

              {/* Shorter Line */}
              <div className="w-[70%] sm:w-[80%] h-[2px] bg-black dark:bg-white opacity-70 transition-colors duration-500"></div>

              {/* Label */}
              <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-gray-800 dark:text-[#CFDDE8] mt-2 transition-colors duration-500 leading-snug text-left">
                {stat.label.includes(" ")
                  ? stat.label.split(" ").map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {i === 0 && <br />}
                      </React.Fragment>
                    ))
                  : stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
