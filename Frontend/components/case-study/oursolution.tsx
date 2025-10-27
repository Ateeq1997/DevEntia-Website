"use client";
import React from "react";
import Image from "next/image";
import img from "../../assets/images/casestudy/sol.png";

interface Solution {
  id: number;
  title: string;
  description: string;
}

interface OurSolutionProps {
  solutions: Solution[];
}

const OurSolution: React.FC<OurSolutionProps> = ({ solutions }) => {
  return (
    <section className="bg-[#E5F0FF] dark:bg-[#050A18] text-white py-20 w-full">
      <div className="px-[5%] mx-auto flex flex-col md:flex-row gap-20 w-full">
        {/* Left Side Title */}
        <div className="flex flex-col gap-0 w-[20%] text-black dark:text-white">
          <div className="flex items-center gap-3">
            <h3 className="text-[28px] md:text-[40px] font-semibold">Our</h3>
            <Image src={img} alt="icon" width={50} height={40} />
          </div>
          <span className="text-[28px] md:text-[40px] font-semibold">
            Solution
          </span>
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col items-center lg:flex-row gap-8 w-full">
          {/* Left Column (3 Cards) */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            {solutions.slice(0, 3).map((solution) => (
              <div
                key={solution.id}
                className="bg-[#4848FF] border border-[#999999] py-12 px-10 rounded-xl w-full transition"
              >
                <h3 className="text-[#FCFCFC] text-[30px] font-semibold mb-4">
                  {solution.title}
                </h3>
                <hr />
                <p className="text-[#FCFCFC] text-[30px] mt-6 leading-tight">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (2 Cards) */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            {solutions.slice(3, 5).map((solution) => (
              <div
                key={solution.id}
                className="bg-[#4848FF] border border-[#999999] py-12 px-10 rounded-xl w-full transition"
              >
                <h3 className="text-[#FCFCFC] text-[30px] font-semibold mb-4">
                  {solution.title}
                </h3>
                <hr />
                <p className="text-[#FCFCFC] text-[30px] mt-6 leading-tight">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
