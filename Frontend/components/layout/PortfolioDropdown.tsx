import React from "react";
import Image from "next/image";
import Link from "next/link";
import {StaticImageData} from 'next/image'

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
    text: "Project: Love Diet",
    href: "/Our-Portfolio/Projects/RS-Global-Ties",
  },
  {
    img: testImg2,
    text: "Project: Entergram CRM",
    href: "/Our-Portfolio/Projects/Private-CPA",
  },
  {
    img: testImg1,
    text: "Project: B2B",
    href: "/Our-Portfolio/Projects/ISA",
  },
  {
    img: testImg4,
    text: "Project: Make Well",
    href: "/Our-Portfolio/Projects/Makewell.life",
  },
];

const PortfolioDropdown: React.FC = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left section with links */}
        <div className="flex flex-col space-y-4 divide-y divide-[#dfdfdf77] ml-4 md:ml-0 border-r-2 border-gray-400 pr-6">
          <Link
            href="/Our-Portfolio/Projects/RS-Global-Ties"
            className="flex justify-between items-center text-base font-medium py-2 hover:text-gray-300 transition"
          >
            RS Global Ties
            <span>&rarr;</span>
          </Link>
          <Link
            href="/Our-Portfolio/Projects/Private-CPA"
            className="flex justify-between items-center text-base font-medium py-2 hover:text-gray-300 transition"
          >
            Private CPA
            <span>&rarr;</span>
          </Link>
          <Link
            href="/Our-Portfolio/Projects/ISA"
            className="flex justify-between items-center text-base font-medium py-2 hover:text-gray-300 transition"
          >
            ISA Consulting
            <span>&rarr;</span>
          </Link>
          <Link
            href="/Our-Portfolio/Projects/Makewell.life"
            className="flex justify-between items-center text-base font-medium py-2 hover:text-gray-300 transition"
          >
            Patient / Doctor
            <span>&rarr;</span>
          </Link>
          <Link
            href=""
            className="flex justify-between items-center text-base font-medium py-2 hover:text-gray-300 transition"
          >
            See All
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Right section with project cards */}
        <div className="grid grid-cols-2 gap-4 w-[35rem] ">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="relative group rounded-xl overflow-hidden bg-cover bg-center h-32 w-56 hover:scale-105 transition-transform"
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
