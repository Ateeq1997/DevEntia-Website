"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface Technology {
  id: number;
  name: string;
  description: string;
  icon: string | StaticImageData;
  color?: string;
}

interface TechnologyUsedProps {
  title?: string;
  technologies: Technology[];
}

const TechnologyUsed: React.FC<TechnologyUsedProps> = ({
  title = "Technology Used",
  technologies,
}) => {
  // Split technologies into two parts
  const firstRow = technologies.slice(0, 5);
  const remaining = technologies.slice(5);

  return (
    <section className="w-full py-16 px-[5%] bg-white dark:bg-black text-white">
      <h2 className="text-[30px] md:text-[50px] text-black dark:text-[#FCFCFC] font-semibold mb-12">
        {title}
      </h2>

      {/* First 5 in grid */}
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-5
          gap-10 
          justify-items-center
        "
      >
        {firstRow.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center justify-center text-center w-full transition-transform hover:scale-105"
          >
            <div className="mb-4  relative">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={110}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg md:text-[28px] font-semibold mb-1 text-[#515151] dark:text-[#4848FF]">
              {tech.name}
            </h3>
            <p className="text-sm md:text-[20px] text-[#4D4D4D] dark:text-[#FCFCFC] leading-snug mt-2">
              {tech.description}
            </p>
          </div>
        ))}
      </div>

      {/* Remaining centered */}
      {remaining.length > 0 && (
        <div className="flex justify-center flex-wrap gap-10 mt-12">
          {remaining.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center text-center justify-center w-[150px] sm:w-[180px] md:w-[200px] transition-transform hover:scale-105"
            >
              <div className="mb-4 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={110}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg md:text-[28px] font-semibold mb-1 text-[#515151] dark:text-[#4848FF]">
                {tech.name}
              </h3>
              <p className="text-sm md:text-[20px] text-[#4D4D4D] dark:text-[#FCFCFC] leading-snug mt-2">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TechnologyUsed;
