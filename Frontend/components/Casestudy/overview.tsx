"use client";
import React from "react";

interface OverviewProps {
  title: string;
  description: string;
  image?: string;        
}

const Overview: React.FC<OverviewProps> = ({ title, description, image }) => {
  return (
    <section id="overview" className=" text-white py-16 px-6 flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-[56px] font-bold mb-4 relative">
        {title}
        <span className="block w-52 h-[2px] bg-white mx-auto mt-6"></span>
        <span className="block w-32 h-[2px] bg-white mx-auto mt-2 mb-4s"></span>

      </h2>

      {/* Description */}
      <p className=" opacity-80 text-base md:text-[30px] leading-relaxed mb-8 font-inter">
        {description}
      </p>

      {/* Image */}
      {image && (
        <div className="w-9xl  flex justify-center">
          <img
            src={image}
            alt={`${title} visual`}
            className="w-full  object-contain drop-shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Overview;
