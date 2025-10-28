"use client";
import Image from "next/image";
import React from "react";
import about from "../../assets/images/aboutus/Images.png";

const AboutUs: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B0B0F] text-white py-16 px-[5%] ">
      {/* ====== BACKGROUND GRADIENTS ====== */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#6C7F9F]/40 via-transparent to-transparent rounded-full blur-3xl"></div>

        <div className="absolute -top-[10%] left-[20%] w-[60%] h-[850px] w-[] bg-gradient-to-b from-[#854CFF47] via-transparent to-transparent rounded-xl blur-xl"></div>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row gap-12 lg:gap-0 items-center relative z-10">
        {/* ====== LEFT TEXT SECTION ====== */}
        <div className="w-full lg:w-[55%] relative">
          <h2 className="text-4xl lg:text-5xl text-black dark:text-white font-bold mb-6">About Us</h2>
          <p className="text-[#4D4D4D] dark:text-[#DAE3FE] mb-10 leading-relaxed text-sm md:text-[20px] text-[#4D4D4D] dark:text-[#DAE3FE]">
            At DevEntia, we are a team driven by integrity,
            innovation, and a commitment to excellence. Our mission is to set new
            standards in the industry while empowering clients to reach their full
            potential.
          </p>

          {/* ====== 4 POINTS SECTION ====== */}
         <div className="relative z-10">
  {/* Gradient background container */}
  <div className="hidden dark:lg:block absolute inset-0 flex  items-center justify-center z-0 left-[40%]">
<div
  className="absolute left-[50%] bottom-20 
  w-[400px] h-[400px]
  bg-[radial-gradient(circle_at_center,_rgba(43,30,90,0.9)_0%,_rgba(108,127,159,0.2)_80%,_rgba(108,127,159,0.25)_10%,_transparent_100%)]
  blur-[4px] opacity-90 rounded-full pointer-events-none z-0"
></div>
  </div>

  {/* Grid Content */}
  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 z-10">
    <div>
      <h1 className="text-2xl md:text-[24px] font-bold mb-2 text-black dark:text-white ">1.</h1>
      <h3 className="text-2xl md:text-[24px] font-bold mb-2 text-black dark:text-white">Who We Are</h3>
      <p className="w-full lg:w-[250px] text-[#4D4D4D] dark:text-[#DAE3FE] text-sm md:text-[16px] leading-relaxed">
        We are a team driven by integrity, creativity, and innovation. Our
        mission is to raise standards and empower our clients.
      </p>
    </div>

    <div>
       <h1 className="text-2xl md:text-[24px] font-bold mb-2 text-black dark:text-white">2.</h1>
      <h3 className="text-2xl md:text-[24px] font-bold mb-2  text-black dark:text-white">What Do We Do</h3>
      <p className="w-full lg:w-[250px]  text-[#4D4D4D] dark:text-[#DAE3FE] text-sm md:text-[16px] leading-relaxed">
        We design and deliver smart, innovative solutions. Each project is
        crafted to exceed expectations and inspire growth.
      </p>
    </div>

    <div>
        <h1 className="text-2xl md:text-[24px] font-bold mb-2 text-black dark:text-white">3.</h1>
      <h3 className="text-2xl md:text-[24px] font-bold mb-2   text-black dark:text-white">How Do We Help</h3>
      <p className="w-full lg:w-[250px]  text-[#4D4D4D] dark:text-[#DAE3FE] text-sm  md:text-[16px] leading-relaxed">
        By focusing on quality and client needs, we create lasting partnerships.
        Our goal is to support success at every step.
      </p>
    </div>

    <div>
      <h1 className="text-2xl md:text-[24px] font-bold mb-2 text-black dark:text-white">4.</h1>
      <h3 className="text-2xl md:text-[24px] font-bold mb-2 text-black dark:text-white ">Create Success Story</h3>
      <p className="w-full lg:w-[250px] text-[#4D4D4D] dark:text-[#DAE3FE] text-sm md:text-[16px] leading-relaxed">
        Together, we turn ideas into achievements that matter. Every milestone
        becomes part of a bigger success story.
      </p>
    </div>
  </div>
</div>

        </div>

        {/* ====== RIGHT IMAGE SECTION ====== */}
        <div className="flex-1 justify-items-center relative z-10 ">
          <Image
            src={about}
            alt="Team Collaboration"
            width={500}
            className=" "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
