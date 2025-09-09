"use client";
import React from "react";

// 🔹 Reusable Card component
type CardProps = {
  text: string;
};

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div className="flex flex-row bg-gradient-to-b from-[#4848FF] to-[#2B2B99] text-white px-5 py-6 rounded-xl shadow-lg flex items-start gap-2 text-sm md:text-[26px] font-medium w-[350px]">
    <span className="text-xs flex-shrink-0">
      <img src="/casestudy/icon.png" className="w-10 h-10" alt="icon" />
    </span>
    <p className="leading-snug font-inter text-[18px] md:text-[26px] ">{text}</p>
  </div>
  
  );
};

// 🔹 Section Component
type SectionProps = {
  title: string;
  description: string;
  items: string[];
};

const Ideation: React.FC<SectionProps> = ({ title, description, items }) => {
  return (
    <section className="text-center text-white py-10 px-6">
      {/* Title */}
      <h2 className="text-3xl md:text-[56px] font-bold mb-6 font-inter underline underline-offset-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-3xl leading-tight mt-12 mx-auto mb-8 text-sm md:text-[26px] font-inter">
        {description}
      </p>

      {/* First row → 2 cards */}
      <div className="flex justify-center gap-6 mb-6 flex-wrap ">
        {items.slice(0, 2).map((text, i) => (
          <Card key={i} text={text} />
        ))}
      </div>

      {/* Second row → 3 cards */}
      <div className="flex justify-center gap-6 flex-wrap text-[27px]">
        {items.slice(2, 5).map((text, i) => (
          <Card key={i + 2} text={text} />
        ))}
      </div>
    </section>
  );
};

export default Ideation;
