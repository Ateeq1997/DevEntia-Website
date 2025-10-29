"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Technology {
  id: number;
  name: string;
  description: string;
  icon: string | StaticImageData; // ✅ accept both
  color?: string; // optional accent color for text
}

interface TechnologyUsedProps {
  title?: string;
  technologies: Technology[];
}

const TechnologyUsed: React.FC<TechnologyUsedProps> = ({
  title = "Technology Used",
  technologies,
}) => {
  return (
    <section className="w-full py-16 px-[5%] bg-white dark:bg-black text-white">
      <h2 className="text-[30px] md:text-[50px] text-black dark:text-[#FCFCFC] font-semibold mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 justify-center gap-10">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center text-center w-full transition-transform hover:scale-105"
          >
            <div className="mb-4 w-[150px] h-[150px] relative">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={100}
                className="object-contain"
              />
            </div>
            <h3
              className={`text-lg md:text-[28px] font-semibold mb-1 text-[#515151] dark:text-[#4848FF]`}
              //style={{ color: tech.color || "#60A5FA" }}
            >
              {tech.name}
            </h3>
            <p className="text-sm md:text-[20px] text-[#4D4D4D] dark:text-[#FCFCFC] max-w-[3000px] leading-sung mt-2">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyUsed;
