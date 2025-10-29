"use client";
import Image from "next/image";

const OurMissionAndVission = () => {
  return (
    <section className="relative w-full py-20 text-white bg-gradient-to-r from-[#2B1363] via-[#1A103D] to-[#000000] overflow-hidden">
      <div className="w-full px-[5%] mx-auto flex md:flex-col md:flex-row justify-between gap-12 items-center gap-12">
        
        {/* Left Side - Text */}
        <div className="z-10 w-[50%]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
          <div className="w-16 h-[2px] bg-[#854CFF] mb-6"></div>
          <p className="text-gray-300 leading-relaxed text-[15px]">
            We’ve worked extensively in terms of geography and sector,
            developing a variety of work — products, services, and experiences —
            that has taught us that a well-defined visual strategy is key to
            bring visibility, credibility, and funds to any organisation.
            Starting in 2017, we decided to plant a tree for each client that we
            work with.
          </p>
        </div>

        {/* Right Side - Custom Image Shape */}
        <div className=" flex-1 justify-center items-center">
              <Image
                src="/about/Vision.png"
                alt="Our Vision"
                fill
                className="object-contain "
              />
           
        </div>

      </div>
    </section>
  );
};

export default OurMissionAndVission;
