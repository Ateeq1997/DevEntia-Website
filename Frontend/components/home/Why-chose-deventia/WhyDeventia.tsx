"use client";

import React from "react";

const WhyDeventia = () => {
  return (
    <div
      className="relative py-20 px-[5%] text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/home/bgimg.png')" }}
    >
      {/* Heading */}
      <div className="relative mx-auto text-left">
        <p className="text-[#4E6BFF] text-lg font-semibold">Our Services</p>
        <h2 className="text-3xl md:text-[63px] font-bold leading-tight mt-2">
          Enhance efficiency <br /> with our expertise.
        </h2>
        <div className="w-[250px] h-[2px] bg-gray-300 mt-6" />
      </div>

      {/* Timeline container */}
      <div className="relative mx-auto -mt-20 z-10 w-full">
        {/* Background Line Image */}
        <img
          src="/home/Group 1982249958.png"
          alt="Timeline Line"
          className="  w-full h-full object-contain"
        />
 {/*step 1 */}



<div className="absolute left-[5%] bottom-[-0%] z-10 max-w-xs flex flex-row gap-5 items-center">
  <h1 className="text-[#B1B1FE] text-[110px] font-semibold leading-none">
    1
  </h1>

  {/* Step Content */}
  <div>
    <h3 className="text-xl md:text-[20px] font-bold mb-2">Planning</h3>
    <p className="text-sm md:text-[14px] text-[#C8CFD5] mb-2">
      Digital agency is an high test for business website work
    </p>
    <a
      href="#"
      className="text-[#FFFFFF] text-md font-semibold hover:underline"
    >
      Learn More +
    </a>
  </div>
</div>
<div className="absolute left-[16%] top-[22%] z-10 max-w-sm flex flex-row gap-5 items-centr">
  {/* Step Number */}
  <h1 className="text-[#B1B1FE] text-[110px] font-semibold leading-none">
    2
  </h1>

  {/* Step Content */}
  <div>
    <h3 className="text-xl md:text-[20px] font-bold mb-2">Design </h3>
    <p className="text-sm md:text-[14px] text-[#C8CFD5] mb-2">
    Digital agency is an high test for business website work    </p>
    <a
      href="#"
      className="text-[#FFFFFF] text-md font-semibold hover:underline"
    >
      Learn More +
    </a>
  </div>
</div>


       

        {/* Step 4 */}
        

        <div className="absolute left-[47%] top-[10%] z-10 max-w-sm flex flex-row gap-5 items-center">
  {/* Step Number */}
  <h1 className="text-[#B1B1FE] text-[110px] font-semibold leading-none">
    4
  </h1>

  {/* Step Content */}
  <div>
    <h3 className="text-xl md:text-[20px] font-bold mb-2">Testing</h3>
    <p className="text-sm md:text-[14px] text-[#C8CFD5] mb-2">
    Digital agency is an high test for business website work
        </p>
    <a
      href="#"
      className="text-[#FFFFFF] text-md font-semibold hover:underline"    >
      Learn More +
    </a>
  </div>
</div>



<div className="absolute left-[34%] top-[73%] z-10 max-w-sm  flex flex-row gap-5 items-center">
          {/* Step Number */}
  <h1 className="text-[#B1B1FE] text-[110px] font-semibold leading-none">
    3
  </h1>
  <div>

          <h3 className="text-xl md:text-2xl font-bold mb-2">Development</h3>
          <p className="text-sm md:text-base text-gray-300 mb-2">
            Digital agency is an high test for business website work
          </p>
          <a
            href="#"
            className="text-[#FFFFFF] text-md font-semibold hover:underline"
            >
            Learn More +
          </a>
          </div>
        </div>
       
        <div className="absolute right-[5%] bottom-[25%] z-10 max-w-sm  flex flex-row gap-5 items-center">
          {/* Step Number */}
  <h1 className="text-[#B1B1FE] text-[110px] font-semibold leading-none">
    5
  </h1>
  <div>

          <h3 className="text-xl md:text-2xl font-bold mb-2">Release</h3>
          <p className="text-sm md:text-base text-gray-300 mb-2">
            Digital agency is an high test for business website work
          </p>
          <a
            href="#"
            className="text-[#FFFFFF] text-md font-semibold hover:underline"
            >
            Learn More +
          </a>
          </div>
        </div>
       

        <div className="absolute right-[-5%] top-[-5%] z-10 max-w-sm  flex flex-row gap-5 items-center">
          {/* Step Number */}
  <h1 className="text-[#B1B1FE] text-[110px] font-semibold leading-none">
    6
  </h1>
  <div>

          <h3 className="text-xl md:text-2xl font-bold mb-2">Support & Improvement</h3>
          <p className="text-sm md:text-base text-gray-300 mb-2">
            Digital agency is an high test for business website work
          </p>
          <a
            href="#"
            className="text-[#FFFFFF] text-md font-semibold hover:underline"
            >
            Learn More +
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDeventia;
