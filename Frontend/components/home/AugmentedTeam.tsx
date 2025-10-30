"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Founder from "../../assets/images/Image (3).png";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "./Button";
const AugmentedTeam = () => {
  const [viewportScale, setViewportScale] = useState(1);

  useEffect(() => {
    const handleZoom = () => {
      const scale = window.visualViewport?.scale || 1;
      setViewportScale(scale);
    };

    window.visualViewport?.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.visualViewport?.removeEventListener("resize", handleZoom);
    };
  }, []);

  return (
    <section
      className="flex gap-12 flex-col lg:flex-row p-[5%] items-center bg-white dark:bg-[#151515] transition-colors duration-500"
      style={{
        transform: `scale(${1 / viewportScale})`,
        transformOrigin: "top center",
      }}
    >
      {/* Left Side Image */}
      <Image
        src={Founder}
        alt="Co Founder"
        className="w-full lg:w-[45%] xs:h-[50svh] sm:h-[80svh] md:h-screen max-h-[30rem]"
      />

      {/* Right Side Content */}
      <div className="relative w-full lg:w-[50%] mt-8 lg:mt-0">
        {/* Process word on top left */}
        <p className="text-[#6D7792] dark:text-[#A7ADBE] text-lg font-semibold absolute left-0 -top-4">
          Process
        </p>

        <div className="mt-12">
          <h1 className="font-bold text-3xl lg:text-4xl text-black dark:text-white">
            Augmented Teams
          </h1>
          <p className="text-lg mt-4 text-left sm:text-justify text-[#333333] dark:text-[#A7ADBE] ">
            This outsourcing model implies enhancing your staff structure with
            talents provided by a vendor, EffectiveSoft. The skilled personnel
            are added to your development team that is managed by your project
            manager. Enhancing a team with outsourced staff usually involves a
            short-term cooperation necessary to meet technical needs of a
            project.
          </p>

       <div className="mt-8 w-[180px]">
 <div className="mt-8 w-[180px]">
  <Button
    text="Contact Us"
    href="/Contact-us"
    bgColor="#4848FF"
    textColor="#CFCEFB"
    hoverColor="#2E2EB5"
    icon={<MdOutlineArrowOutward size={18} />}
    iconPosition="right"
    shadowColor="transparent" // 👈 disables the glow
  />
</div>

</div>

        </div>
      </div>
    </section>
  );
};

export default AugmentedTeam;
