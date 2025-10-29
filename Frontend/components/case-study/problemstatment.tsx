"use client";
import React from "react";
import Image from "next/image";
import img from "../../assets/images/casestudy/Untitled-1 1.png";

interface PainPoint {
  title: string;
  description: string;
}

interface ProblemStatementProps {
  title: string;
  description: string;
  painpoints: PainPoint[];
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({
  title,
  description,
  painpoints,
}) => {
  return (
    <section className="bg-[#0A0F1C] text-white py-16 px-6 md:px-[5%] w-full">
      {/* Title & Description */}
      <div className="mx-auto text-left">
        <h2 className="text-3xl md:text-[50px] font-bold mb-6">{title}</h2>
        <p className="text-gray-300 text-base md:text-[20px] leading-relaxed mb-12">
          {description}
        </p>
      </div>

      {/* Header + Painpoints */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mt-12 mx-auto">
        {/* Left: Header */}
        <div className="flex flex-col gap-3 md:w-[25%]">
          <div className="flex items-center gap-3">
            <h3 className="text-[28px] md:text-[40px] font-semibold">User</h3>
            <Image src={img} alt="icon" width={40} height={40} />
          </div>
          <span className="text-[28px] md:text-[40px] font-semibold">
            Painpoints
          </span>
        </div>

        {/* Painpoint Layout */}
        <div className="flex-1">
          {/* Mobile/Tablet (Normal Sequence 1,2,3,4) */}
          <div className="flex flex-col gap-8 lg:hidden">
            {painpoints.map((point, index) => (
              <div
                key={index}
                className="relative bg-[#CACACA1A] rounded-2xl p-6 h-[250px] flex flex-col gap-5 justify-center 
                  transition-all border border-[#999999] w-full"
              >
                <h4 className="text-[#FCFCFC] text-lg md:text-[28px] font-semibold mb-2">
                  {index + 1}. {point.title}
                </h4>
                <hr className="border-[#707070] opacity-40" />
                <p className="text-[#FCFCFC] text-sm md:text-[22px] leading-tight">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop (1 & 3 left column, 2 & 4 right column) */}
          <div className="hidden lg:flex flex-row gap-8">
            {/* Left Column: 1 & 3 */}
            <div className="flex flex-col gap-8 w-1/2">
              {[painpoints[0], painpoints[2]].map(
                (point, i) =>
                  point && (
                    <div
                      key={i}
                      className="relative bg-[#CACACA1A] rounded-2xl p-6 h-[250px] flex flex-col gap-5 justify-center 
                      transition-all border border-[#999999] w-full"
                    >
                      <h4 className="text-[#FCFCFC] text-lg md:text-[28px] font-semibold mb-2">
                        {i === 0 ? "1." : "3."} {point.title}
                      </h4>
                      <hr className="border-[#707070] opacity-40" />
                      <p className="text-[#FCFCFC] text-sm md:text-[22px] leading-tight">
                        {point.description}
                      </p>
                    </div>
                  )
              )}
            </div>

            {/* Right Column: 2 & 4 */}
            <div className="flex flex-col gap-8 w-1/2 mt-24">
              {[painpoints[1], painpoints[3]].map(
                (point, i) =>
                  point && (
                    <div
                      key={i + 2}
                      className="relative bg-[#CACACA1A] rounded-2xl p-6 h-[250px] flex flex-col gap-5 justify-center 
                      transition-all border border-[#999999] w-full"
                    >
                      <h4 className="text-[#FCFCFC] text-lg md:text-[28px] font-semibold mb-2">
                        {i === 0 ? "2." : "4."} {point.title}
                      </h4>
                      <hr className="border-[#707070] opacity-40" />
                      <p className="text-[#FCFCFC] text-sm md:text-[22px] leading-tight">
                        {point.description}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
