"use client";
import { euroStyle } from "@/utils/fonts";
import vectorLine from "../../../assets/images/Vector-line.png";
import vectorExplore from "../../../assets/images/Vectorexplore.png";
import Image from "next/image";
import React from "react";
import { projects } from "@/data/data";
import ProjectCard from "./ProjectCard";
import BlueGlowEffect from "../BlueGlowEffect";
const Projects = () => {
  return (
    <div className="h-[100%] font-bai relative md:min-h-screen bg-[#141414] px-14 py-10 overflow-hidden">
      <BlueGlowEffect
        className="top-4 absolute -left-4  "
        size={400}
        blur={100}
        opacity={0.5}
        rotate={0}
      />

      {/* parents div */}
      <div className="relative h-full md:h-[612px]">
        {/* text div */}
        <div className="relative mb-14 md:mb-0">
          <h2 className="text-xl md:text-4xl lg:text-5xl text-white font-medium mb-4">
            Explore Some Of
            <br />
            Our Latest Projects
          </h2>
          <Image
            src={vectorLine}
            alt=""
            className="absolute w-[120px] md:w-[236px]  -bottom-4"
          />
        </div>
        {/* cards div for absolute*/}
        <div className="w-full h-full md:absolute md:top-0 ">
          {/* card */}
          <div className="relative flex md:flex-row flex-col md:gap-0 gap-14 w-full h-full">
            <div className="md:absolute md:left-0 md:bottom-0 w-full md:w-[30%]">
              <ProjectCard project={projects[0]} />
            </div>

            <div className="md:absolute left-0 md:left-[35%]  md:top-1/2 md:-translate-y-1/2 w-full md:w-[30%]">
              <ProjectCard project={projects[1]} />
            </div>

            <div className="md:absolute left-0 md:left-[70%] md:top-0 w-full md:w-[30%]">
              <ProjectCard project={projects[2]} />
            </div>

            <div className="absolute hidden md:flex bottom-0 right-12 lg:right-20 text-white">
              <div className="relative w-[130px h-[190px]">
                <p className="text-2xl italic font-light">Explore More</p>
                <Image
                  src={vectorExplore}
                  alt="vectorexplore"
                  className="absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
