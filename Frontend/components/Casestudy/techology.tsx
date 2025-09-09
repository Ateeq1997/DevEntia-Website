"use client";
import React from "react";

interface TechnologyCardProps {
  image: string;
  title: string;
  description: string;
}

interface TechnologyProps {
  techList: TechnologyCardProps[];
}

const Technology: React.FC<TechnologyProps> = ({ techList }) => {
  return (
    <div className="px-[5%] py-12 flex flex-col items-center justify-center">
      <h1 className="text-[24px] md:text-[56px] font-inter font-bold text-white">
        Technology Used
      </h1>
      <div className="w-12 sm:w-[380px] h-[2px] bg-white mx-auto mt-0" />
      <div className="w-12 sm:w-[340px] h-[2px] bg-white mx-auto mt-2 " />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
        {techList.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform"
          >
            <img
              src={tech.image}
              alt={tech.title}
              className="w-52 h-52 object-contain "
            />
            <h3 className="text-[#FFFFFFCC] text-[25px] font-semibold font-inter ">{tech.title}</h3>
            <p className="text-[#FFFFFFCC] text-sm mt-1 font-inter">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
