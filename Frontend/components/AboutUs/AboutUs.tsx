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

      <div className="mx-auto flex flex-col md:flex-row gap-12 items-start relative z-10">
        {/* ====== LEFT TEXT SECTION ====== */}
        <div className="w-[50%] relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-gray-300 mb-10 max-w-xl">
            At <span className="text-[#6C7F9F] font-semibold">DevEntia</span>, we are a team driven by integrity,
            innovation, and a commitment to excellence. Our mission is to set new
            standards in the industry while empowering clients to reach their full
            potential.
          </p>

          {/* ====== 4 POINTS SECTION ====== */}
         <div className="relative z-10">
  {/* Gradient background container */}
  <div className="hidden dark:lg:block absolute inset-0 flex items-center justify-center z-0 left-[40%]">
<div
  className="absolute left-[50%] top-0 -translate-x-1/2 
  w-[420px] h-[420px]
  bg-[radial-gradient(circle_at_center,_rgba(43,30,90,0.9)_0%,_rgba(108,127,159,0.5)_40%,_rgba(108,127,159,0.25)_70%,_transparent_100%)]
  blur-[40px] opacity-90 rounded-full pointer-events-none z-0"
></div>
  </div>

  {/* Grid Content */}
  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 z-10">
    <div>
      <h3 className="text-2xl font-semibold mb-2">1. Who We Are</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        We are a team driven by integrity, creativity, and innovation. Our
        mission is to raise standards and empower our clients.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-2">2. What Do We Do</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        We design and deliver smart, innovative solutions. Each project is
        crafted to exceed expectations and inspire growth.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-2">3. How Do We Help</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        By focusing on quality and client needs, we create lasting partnerships.
        Our goal is to support success at every step.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-2">4. Create Success Story</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Together, we turn ideas into achievements that matter. Every milestone
        becomes part of a bigger success story.
      </p>
    </div>
  </div>
</div>

        </div>

        {/* ====== RIGHT IMAGE SECTION ====== */}
        <div className="flex-1 justify-items-center relative">
          <Image
            src={about}
            alt="Team Collaboration"
            className="rounded-xl shadow-lg object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
