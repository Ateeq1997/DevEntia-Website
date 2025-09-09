"use client";

import React from "react";

interface ColorSwatchProps {
  hex: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ hex }) => (
    <div className="flex w-full items-center justify-between">
    {/* Outer Glow Circle */}
    <div
      className="relative w-32 h-32 rounded-full border border-[#3737FF] flex items-center justify-center"
      style={{ boxShadow: "0 0 12px rgba(72,72,255,0.7)" }}
    >
      {/* Inner Circle */}
      <div
        className="w-20 h-20 rounded-full"
        style={{ backgroundColor: hex }}
      ></div>
    </div>
  
    {/* Hex + underline */}
    <div className="relative flex flex-col items-start">
      <div className="absolute bottom-0 -translate-y-1/2 -left-[20px] w-[110px] lg:w-[200px] h-[2px] bg-white"></div>
  
      {/* Hex code */}
      <span className="text-white text-sm px-1 font-inter ml-6 lg:ml-28">{hex}</span>
  
    </div>
  </div>
  
);

interface StyleGuideProps {
  title: string;
  fontFamily: string;
  colors: { hex: string }[];
  previewGradient: string;
}
const StyleGuideCard: React.FC<StyleGuideProps> = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-[5%] py-16  overflow-hidden w-full">

      <h1 className="text-[24px] md:text-[56px] text-white font-semibold relative mb-12">
        Style Guide
        <span className="block w-52 h-0.5 bg-white mx-auto mt-1"></span>
        <span className="block w-32 h-0.5 bg-white mx-auto mt-1"></span>

      </h1>

      <div className="flex flex-col md:flex-row items-start w-full justify-center gap-8 lg:gap-32 mt-8 w-full">
        <div className="flex flex-col gap-20 mt-8">
          <ColorSwatch hex="#127CC0" />
          <ColorSwatch hex="#FFFFFF" />
        </div>

        <div className="bg-[#4848FF4D] h-[600px] flex flex-col items-center py-6 px-8 shadow-lg gap-6 w-full md:w-auto">
          <div className="w-full md:lg-[200px] lg:w-[260px] h-[260px] rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 mb-6"></div>
          <div className="text-white text-4xl font-bold mt-2 text-[24px] md:text-[100px]">Aa</div>
          <span className="w-52 h-0.5 bg-[#127CC0] font-inter mt-4"></span>
          <p className="text-white text-lg font-inter text-[16px]  opacity-[70%] md:text-[40px] mb-12 leading-tight text-center">Inter Family</p>
        </div>

        <div className="flex flex-col gap-20 mt-8">
          <ColorSwatch hex="#000000" />
          <ColorSwatch hex="#E2E8F7" />
        </div>
      </div>
    </div>
  );
};

export default StyleGuideCard;
