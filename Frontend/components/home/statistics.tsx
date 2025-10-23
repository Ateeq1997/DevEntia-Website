"use client";
import React from "react";

const Statistics = () => {
  return (
    <section className="relative z-[1] w-full py-16 bg-white dark:bg-[#0B0B0D] transition-colors duration-700 ease-in-out">
      <div
        className="flex flex-col lg:flex-row items-center justify-center
        gap-10 lg:gap-16 px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-40
        w-full lg:max-w-[90rem] mx-auto overflow-x-hidden"
      >
        {/* Main stats container */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4
            items-center justify-center text-center lg:text-left
            gap-10 sm:gap-12 md:gap-14 lg:gap-16 w-full
          "
        >
          {[
            { value: "55+", label: "Project Complete" },
            { value: "40+", label: "Happy Customers" },
            { value: "2+", label: "Years Experiences" },
            { value: "10+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="
                relative flex flex-col gap-2 
                items-center lg:items-start 
                text-center lg:text-left 
                z-[1] w-full
              "
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
                  {stat.value}
                </span>
                <span
                  className="absolute w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] rounded-full blur-2xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(72,72,255,0.6) 0%, rgba(72,72,255,0.25) 70%, transparent 100%)",
                  }}
                ></span>
              </div>

              {/* Line under value */}
              <div className="h-[2px] bg-[black] dark:bg-[#CFDDE8] opacity-80 transition-colors duration-500 w-[70%] mx-auto lg:mx-0"></div>

              {/* Label */}
              <p className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-2 transition-colors duration-500 leading-snug text-[#4848FF] dark:text-[#CFDDE8]">
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
