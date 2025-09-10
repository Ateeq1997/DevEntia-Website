"use client";
import React from "react";

interface LineItem {
  src: string;
  className: string;
  rotate?: string;
  width?: string;
}

interface StoryItem {
  image: string;
  title: string;
  description: string;
  lines?: LineItem[];
}

interface StoryboardProps {
  title: string;
  subtitle: string;
  steps: StoryItem[];
  backgroundImage?: string;
}

const Storyboard: React.FC<StoryboardProps> = ({
  title,
  subtitle,
  steps,
  backgroundImage = "/casestudy/userstorybg.png",
}) => {
  const leftSteps = steps.filter((_, idx) => idx % 2 === 0);
  const rightSteps = steps.filter((_, idx) => idx % 2 !== 0);

  return (
    <div
      className="relative px-[5%] py-16 text-white overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header */}
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <h2 className="text-[28px] md:text-[55px] font-bold font-inter">
          {title}
        </h2>
        <p className="text-gray-300 text-[15px] md:text-[24px] leading-tight mt-3 font-inter">
          {subtitle}
        </p>
      </div>

      {/* --- DESKTOP / LARGE SCREENS --- */}
      <div className="hidden lg:flex flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-center gap-16">
          {leftSteps.map((step, index) => (
            <div
              key={`left-${index}`}
              className="relative flex flex-row items-start overflow-visible"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-[160px] md:w-[200px] lg:w-full z-10"
              />
              <div className="mt-6 text-center max-w-lg">
                <h3 className="text-[18px] md:text-[27px] lg:text-[34px] font-semibold font-inter mb-2">
                  {step.title}
                </h3>
                <p className="text-[#FFFFFFCC] text-[14px] md:text-[20px] lg:text-[24px] font-inter leading-tight">
                  {step.description}
                </p>
              </div>

              {step.lines?.map((line, i) => (
                <img
                  key={`left-line-${index}-${i}`}
                  src={line.src}
                  alt={`flow-line-${i}`}
                  className={`absolute hidden lg:block max-w-none ${line.className} ${line.rotate ?? ""}`}
                  style={{ width: line.width }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col items-center gap-24 mt-32">
          {rightSteps.map((step, index) => (
            <div
              key={`right-${index}`}
              className="relative flex flex-row items-start overflow-visible"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-[160px] md:w-[200px] lg:w-[260px] z-10"
              />
              <div className="mt-24 text-center max-w-lg">
                <h3 className="text-[18px] md:text-[27px] lg:text-[34px] font-semibold font-inter mb-2">
                  {step.title}
                </h3>
                <p className="text-[#FFFFFFCC] text-[14px] md:text-[20px] lg:text-[24px] font-inter leading-tight">
                  {step.description}
                </p>
              </div>

              {step.lines?.map((line, i) => (
                <img
                  key={`right-line-${index}-${i}`}
                  src={line.src}
                  alt={`flow-line-${i}`}
                  className={`absolute hidden lg:block max-w-none ${line.className} ${line.rotate ?? ""}`}
                  style={{ width: line.width }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- MOBILE / TABLET LAYOUT --- */}
      <div className="flex flex-col gap-16 lg:hidden">
        {steps.map((step, index) => {
          const isRight = index % 2 !== 0; // steps 2,4,6,...
          return (
            <div
              key={`mobile-${index}`}
              className={`relative flex flex-row items-center text-center ${
                isRight ? "pl-8" : ""
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-[160px] md:w-[200px] z-10"
              />
              <div className="mt-6 max-w-md">
                <h3 className="text-[18px] md:text-[27px] font-semibold font-inter mb-2">
                  {step.title}
                </h3>
                <p className="text-[#FFFFFFCC] text-[14px] md:text-[20px] font-inter leading-tight">
                  {step.description}
                </p>
              </div>

             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Storyboard;
