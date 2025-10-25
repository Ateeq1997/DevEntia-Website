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
      <div className=" mx-auto text-left">
        <h2 className="text-3xl md:text-[50px] font-bold mb-6">{title}</h2>
        <p className="text-gray-300 text-base md:text-[20px] leading-relaxed mb-12 ">
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

        {/* Right: Painpoint Cards */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-y-8 md:gap-y-0 md:gap-x-8 flex-1">
  {painpoints?.map((point, index) => (
    <div
      key={index}
      className={`relative bg-[#CACACA1A] rounded-2xl p-6 h-[250px] flex flex-col gap-5 justify-center 
        transition-all border border-[#999999] w-full md:w-[48%]
        ${
          index === 1 || index === 3
            ? "md:mt-24" // only 2nd and 4th cards are staggered down
            : "md:mt-0"
        }`}
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

      </div>
    </section>
  );
};

export default ProblemStatement;
