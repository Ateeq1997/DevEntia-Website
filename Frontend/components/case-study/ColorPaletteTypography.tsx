"use client";
import React from "react";

const isLightColor = (hex: string) => {
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;
  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness > 180;
};

interface TypographyProps {
  colors: { name: string; code: string; number: string }[];
  font: string;
  typographyWeights: string[];
  bgImage?: string;
}

const ColorPaletteTypography: React.FC<TypographyProps> = ({
  colors,
  font,
  typographyWeights,
  bgImage,
}) => {
  return (
    <section className="w-full bg-white dark:bg-black text-white py-12 px-[5%] flex flex-col gap-10">
      <h2 className="text-black dark:text-white text-[30px] md:text-[50px] font-semibold">
        Color Palette & Typography
      </h2>

      {/* 🎨 Colors */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {colors.map((color) => {
          const textColor = isLightColor(color.code)
            ? "text-black"
            : "text-white";
          return (
            <div
              key={color.number}
              className={`w-full rounded-xl flex flex-col justify-between px-6 md:px-8 py-6 gap-20 shadow-lg ${textColor}`}
              style={{ backgroundColor: color.code }}
            >
              <p className="text-[17px] md:text-[22px] font-medium opacity-90">
                {color.name}
              </p>
              <p className="text-[30px] md:text-[42px] font-inter font-bold">
                {color.number}
              </p>
            </div>
          );
        })}
      </div>

      {/* ✍️ Typography */}
      <div
        className="w-full px-16 bg-gradient-to-t from-[#1E3A8A]/30 to-[#2563EB]/30 rounded-2xl py-16 flex flex-col items-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 to-[#2563EB]/90 rounded-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-4 items-center">
          <h3 className="font-extrabold text-[54px] md:text-[85px]  lg:text-[150px] text-white leading-tight">
            {font}
          </h3>

          <div className="flex flex-wrap justify-center gap-8 mt-4 mb-8">
            {typographyWeights.map((weight, index) => (
              <span
                key={index}
                className="text-white/80 text-sm md:text-[27px] font-extrabold tracking-wide"
              >
                {weight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPaletteTypography;
