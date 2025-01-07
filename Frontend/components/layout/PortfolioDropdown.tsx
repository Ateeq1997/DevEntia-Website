import React from "react";
import Image from "next/image";
import Link from "next/link";
import {StaticImageData} from 'next/image'
import { FaChevronDown } from "react-icons/fa";
import testImg from '@/assets/images/liveDiet.png' 
import testImg1 from '@/assets/images/B2b.png'
import testImg2 from '@/assets/images/intergramCRM.png'
import testImg4 from '@/assets/images/Shot.png'

interface Project {
  img: StaticImageData;
  text: string;
  href: string;
}

const projects: Project[] = [
  {
    img: testImg,
    text: "Love Diet",
    href: "/Our-Portfolio/Projects/RS-Global-Ties",
  },
  {
    img: testImg2,
    text: "Entergram",
    href: "/Our-Portfolio/Projects/Private-CPA",
  },
  {
    img: testImg1,
    text: "RS-Global Ties",
    href: "/Our-Portfolio/Projects/ISA",
  },
  // {
  //   img: testImg4,
  //   text: "GoGetWell.ai",
  //   href: "/Our-Portfolio/Projects/GoGetWell",
  // },
];

const PortfolioDropdown: React.FC = () => {
  return (
    <div 
    style={{
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    }}

    className="bg-black text-white px-7 py-8 rounded-2xl ">
      <div className="flex flex-col md:flex-row justify-evenly gap-16">
        {/* Left section with links */}
        <div className="flex flex-col divide-y divide-[#dfdfdf77] ml-4 md:ml-0  pr-8 w-1/3">
          <Link
            href="/Our-Portfolio/Projects/RS-Global-Ties"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-gray-300 transition"
          >
            Love Diet
            <FaChevronDown className="-rotate-90" />
            </Link>
          <Link
            href="/Our-Portfolio/Projects/Private-CPA"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-gray-300 transition"
          >
            Entergram
            <FaChevronDown className="-rotate-90" />
            </Link>
          <Link
            href="/Our-Portfolio/Projects/ISA"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-gray-300 transition"
          >
            RS-Global Ties
            <FaChevronDown className="-rotate-90" />
            </Link>
          {/* <Link
            href="/Our-Portfolio/Projects/Makewell.life"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-gray-300 transition"
          >
           GoGetWell.ai
           <FaChevronDown className="-rotate-90" />
           </Link> */}
          <Link
            href="/Our-Portfolio"
            className="flex justify-between items-center text-base font-medium py-4 hover:text-gray-300 transition"
          >
            See All
            
          </Link>
        </div>

        {/* Right section with project cards */}
        <div className="grid grid-cols-2 gap-y-4 w-[31vw] ">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="relative group rounded-xl overflow-hidden bg-cover bg-center h-32 w-48 hover:scale-105 transition-transform"
              style={{
                backgroundImage: `url(${project.img.src})`,
              }}
            >
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100"></div> */}
              <p className="absolute bottom-0 left-0 w-full bg-[#0e0e0e88] backdrop-blur-sm text-white text-sm font-semibold p-2 text-start rounded-b-xl">
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
