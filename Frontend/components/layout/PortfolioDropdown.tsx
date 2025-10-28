"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import testImg from '../../assets/images/casestudy/healtiplate.png'
import testImg1 from '../../assets/images/casestudy/falke.png'
import testImg2 from '../../assets/images/casestudy/simmple.png'
import testImg3 from '../../assets/images/casestudy/aneuro.png'

// import testImg from "@/assets/images/liveDiet.png";
// import testImg1 from "@/assets/images/B2b.png";
// import testImg2 from "@/assets/images/intergramCRM.png";
// import testImg4 from "@/assets/images/simpple.png";

interface Project {
  img: StaticImageData;
  text: string;
  href: string;
}

const projects: Project[] = [
{
  img: testImg2,
  text: "Simmple Tax",
  href: "/Casestudy/1",
},

  {
    img: testImg1,
    text: "Falke",
    href: "/Casestudy/2",
  },
  {
    img: testImg,
    text: "Healthi Plate",
   href: "/Casestudy/3",
  },
  {
    img: testImg3,
    text: "Aneuro",
    href: "/Casestudy/4",
  },
];

const PortfolioDropdown: React.FC = () => {
  return (
    <div
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      className="
        px-7 py-8 rounded-2xl 
        transition-colors duration-500 
        bg-white text-[#0b0b0d] 
        dark:bg-[#0b0b0d] dark:text-white
      "
    >
      <div className="flex flex-col md:flex-row justify-evenly gap-16">
        {/* Left section with links */}
        <div className="flex flex-col divide-y divide-[#dfdfdf77] ml-4 md:ml-0 pr-8 w-1/3">
          <Link
            href="/Casestudy/1"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-[#6b6cff] transition-colors duration-300"
          >
            Simmple Tax
            <FaChevronDown className="-rotate-90" />
          </Link>

          <Link
            href="/Casestudy/2"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-[#6b6cff] transition-colors duration-300"
          >
           Falke
            <FaChevronDown className="-rotate-90" />
          </Link>

          <Link
            href="/Casestudy/3"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-[#6b6cff] transition-colors duration-300"
          >
            Healthi Plate
            <FaChevronDown className="-rotate-90" />
          </Link>

          <Link
            href="/Casestudy/4"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-[#6b6cff] transition-colors duration-300"
          >
            Aneuro
            <FaChevronDown className="-rotate-90" />
          </Link>

          <Link
            href="/Our-Portfolio"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-[#6b6cff] transition-colors duration-300"
          >
            See All
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Right section with project cards */}
        <div className="grid grid-cols-2 gap-y-4 w-[31vw]">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="relative group rounded-xl overflow-hidden bg-cover bg-center h-32 w-48 hover:scale-105 transition-transform"
              style={{
                backgroundImage: `url(${project.img.src})`,
              }}
            >
              <p
                className="
                  absolute bottom-0 left-0 w-full 
                  bg-[#ffffffcc] text-[#0b0b0d] 
                  dark:bg-[#0e0e0e88] dark:text-white
                  backdrop-blur-sm 
                  text-sm font-semibold 
                  p-2 text-start rounded-b-xl
                  transition-colors duration-300
                "
              >
                {project.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDropdown;
