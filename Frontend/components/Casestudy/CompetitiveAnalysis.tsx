"use client";

import React from "react";
import Image from "next/image";

export interface CompetitorCard {
  id: string;
  description: string;
  icon: string;      // emoji, /public path, or remote URL
  bgColor?: string;
  textColor?: string;
}

interface CompetitiveAnalysisProps {
  title?: string;
  competitors: CompetitorCard[];
  backgroundImage?: string;
  className?: string;
}

const CompetitiveAnalysis: React.FC<CompetitiveAnalysisProps> = ({
  title = "Competitive Analysis",
  competitors,
  backgroundImage = "/casestudy/Group1982249966.png",
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col items-center py-12 px-4 sm:px-6 md:px-10 lg:px-16 ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay for legibility (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-5xl text-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter">
          {title}
        </h1>
        <div className="w-12 sm:w-[300px] h-[1px] bg-white mx-auto mt-2 mb-2" />
        <div className="w-12 sm:w-[200px] h-[1px] bg-white mx-auto mt-2 mb-8 sm:mb-10" />

        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 sm:gap-8 lg:gap-10
            mt-10 sm:mt-16 lg:mt-24
            justify-items-center
          "
        >
          {competitors.map((competitor, index) => {
            const isMiddle = competitors.length === 3 && index === 1;

            const cardStyle = isMiddle
              ? "linear-gradient(to bottom, #402B87, #100B21)"
              : "linear-gradient(to bottom, #4848FF, #2B2B99)";

            return (
              <div
                key={competitor.id}
                className={`
                  relative
                  w-64 max-w-full sm:w-60 md:w-64
                  h-[280px] sm:h-[300px] md:h-[330px]
                  p-4 sm:p-6 flex flex-col items-center justify-center
                  text-center shadow-xl transform transition-transform duration-300 hover:scale-105
                  ${competitor.textColor || "text-white"}
                  ${isMiddle ? "lg:-mt-12" : ""}
                `}
                style={{
                  background: cardStyle,
                  borderRadius: "0rem",
                }}
              >
                {/* Icon */}
                <div className="mb-3 sm:mb-4">
                  {competitor.icon.startsWith("http") || competitor.icon.startsWith("/") ? (
                    <Image
                      src={competitor.icon}
                      alt={competitor.description}
                      width={62}
                      height={72}
                      className="object-contain max-w-full h-auto"
                    />
                  ) : (
                    <span className="text-4xl sm:text-5xl">{competitor.icon}</span>
                  )}
                </div>

                <p className="text-base sm:text-lg md:text-xl font-inter opacity-90 mt-1">
                  {competitor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;
