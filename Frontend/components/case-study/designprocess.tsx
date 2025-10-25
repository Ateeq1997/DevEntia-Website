"use client";
import React from "react";

const DesignProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "User Research / In-Dept Interview",
    },
    {
      number: "02",
      title: "Define",
      description: "Product Hypothesis / User Stories",
    },
    {
      number: "03",
      title: "Design",
      description: "Style Guide / Hi-Fi Wireframes",
    },
    {
      number: "04",
      title: "Deliver",
      description: "User Interface / Modern UI Design",
    },
  ];

  return (
    <section className="bg-white dark:bg-black text-white py-16 px-6 md:px-[5%] w-full">
      {/* Section Title */}
      <h2 className="text-3xl md:text-[50px] text-black dark:text-white font-bold mb-10">
        Design Process
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 md:p-8 transition-all duration-300
              ${
                index === 2
                  ? "bg-[#1A1AFF] text-white"
                  : "bg-[#E8F2FF] dark:bg-[#1C1C1C] dark:hover:bg-[#252525]"
              }
            `}
          >
            <div className="flex flex-row items-center gap-4">
              <h3
                className={`text-[78px] lg:text-[150px] font-bold leading-none mb-2 font-inter
                  ${
                    index === 2
                      ? "text-white drop-shadow-[0_4px_12px_#6C7F9F]"
                      : "text-transparent bg-clip-text bg-[#6C7F9F] dark:bg-[#4848FF] drop-shadow-[0_2px_8px_#6C7F9F]"
                  }`}
              >
                {step.number}
              </h3>
              <div className="flex flex-col gap-3">
              <h4 className={`text-xl md:text-[40px] text-black dark:text-white font-semibold mb-1
                ${
                index === 2
                  ? " text-white"
                  : "text-black darktext-white "
              }
                `}>
                {step.title}
              </h4>
              <p className={`text-lg md:text-[30px]
              ${
                index === 2
                  ? "text-white"
                  : "text-[#5C5E61] dark:text-[#CACACA] "
              }
            `}>
                {step.description}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignProcess;
