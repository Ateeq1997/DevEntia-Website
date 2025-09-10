"use client";
import React from "react";

// ---------- InfoSection ----------
export interface InfoCard {
  image: string;
  text: string;
}

interface SectionProps {
  title: string;
  items: InfoCard[];
  underlineWidth?: string;
  underlineWidth2?: string;
}

export const InfoSection: React.FC<SectionProps> = ({
  title,
  items,
  underlineWidth = "w-52",
  underlineWidth2 = "w-44",
}) => {
  return (
    <div className="px-[5%] py-6 flex flex-col items-center gap-16 justify-center">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-[28px] md:text-[40px] font-bold text-white font-inter">
          {title}
        </h2>
        <div className={`h-[2px] bg-white mx-auto mb-1 ${underlineWidth}`} />
        <div className={`h-[2px] bg-white mx-auto mb-12 ${underlineWidth2}`} />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-24 md:gap-2 lg:gap-8 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex items-end bg-[#161616] rounded-2xl px-6 py-6 shadow-lg h-[170px] lg:min-h-[210px]"
          >
            {/* Image badge */}
            <div className="absolute -top-16 md:-top-20 -left-3">
              <img
                src={item.image}
                alt={`Card image ${index + 1}`}
                className="w-44 h-40 lg:w-52 lg:h-48"
              />
            </div>

            {/* Text */}
            <p className="text-gray-200 text-sm lg:text-[24px] leading-tight font-inter">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- AppPreviewSection ----------
export interface AppPreviewCard {
  image: string; // phone/app preview image
}

interface AppPreviewSectionProps {
  description: string;
  cards: AppPreviewCard[];
}

export const AppPreviewSection: React.FC<AppPreviewSectionProps> = ({
  description,
  cards,
}) => {
  return (
    <div className="px-[5%] mb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Phone previews */}
      <div className="flex gap-6 relative">
        {cards.map((card, index) => (
          <img
            key={index}
            src={card.image}
            alt={`App Preview ${index + 1}`}
           className="w-lg md:max-w-2xl h-md "
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-[#FFFFFFCC] text-[22px] md:text-[41px] leading-tight font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

