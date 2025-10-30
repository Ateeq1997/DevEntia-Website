"use client";
import Image from "next/image";

const OurMissionAndVission = () => {
  return (
<section className="relative w-full py-8 lg:py-0 text-white bg-[#E8F2FF] dark:bg-[linear-gradient(to_right,#1B0C4A_40%,#000000_60%)] overflow-hidden">      
  <div className="w-full  mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* Left Side - Text */}
        <div className="z-10 w-full lg:w-1/2 pl-[5%] text-center md:text-left">
          <h2 className="text-3xl text-black dark:text-white md:text-[53px] font-bold mb-4">Our Vision</h2>
          <div className="w-16 h-[2px] bg-[#854CFF] mb-6 mx-auto md:mx-0"></div>
          <p className=" leading-sung text-[15px] md:text-[24px] text-[#5C5E61] dark:text-white">
            We’ve worked extensively in terms of geography and sector,
            developing a variety of work — products, services, and experiences —
            that has taught us that a well-defined visual strategy is key to
            bringing visibility, credibility, and funds to any organisation.
            Starting in 2017, we decided to plant a tree for each client that we
            work with.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[600px] flex justify-center lg:justify-end">
          <Image
            src="/about/Vision.png"
            alt="Our Vision"
            fill
            className="object-contain lg:object-cover md:object-right"
          />
        </div>

      </div>
    </section>
  );
};

export default OurMissionAndVission;
