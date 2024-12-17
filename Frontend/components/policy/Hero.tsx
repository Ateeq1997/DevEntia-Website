"use client";
import React from "react";
import Image from "next/image";
import heroBgImg from "@/assets/images/privacy-bg.png";

const Hero = ({ text }: { text: String }) => {
  return (
    <header className="relative  h-[75vh]">
      <div className="absolute h-full w-full top-0 left-o"></div>
      <Image
        src={heroBgImg}
        alt="people"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start  p-6 md:p-12 lg:p-20  z-50">
        <h1 className="text-white text-start text-[3rem] 500px:text-[5rem] font-bold leading-tight">
          {text}
        </h1>
      </div>
      {/* this is a comment */}
    </header>
  );
};

export default Hero;
