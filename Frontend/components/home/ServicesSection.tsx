"use client";
import React from "react";
import Image from "next/image";
import Group1 from "../../assets/images/Group1.png"; // dark mode timeline
import Group2 from "../../assets/images/Group2.png"; // light mode timeline
import Group3 from "../../assets/images/Maskgroup.png"; // background glow
import Services from "../../assets/images/services.png"; // background glow
import Servicesimg from '../../assets/images/servicesimgmobile.png';


export default function ServicesSection() {
  return (
    <section
      className="relative py-20 overflow-hidden transition-colors duration-500
                 bg-[#ffffff] text-[#0b0b0d]
                 dark:bg-[#0b0b0d] dark:text-white"
    >
      {/* 🔹 Background glow image (visible in dark mode only) */}
      <div className="absolute inset-0 hidden dark:block">
        <Image
          src={Group3}
          alt="Background glow"
          fill
          priority
          className="object-cover opacity-90 brightness-[1.6] contrast-[1.4] saturate-[1.3] blur-[2px]"
        />
      </div>

      {/* Header */}
      <div className="relative max-w-[95%] mx-auto px-6 lg:px-10 text-left z-0">
        <p className="text-[#6b6cff] dark:text-[#6b6cff] text-sm font-medium uppercase tracking-widest">
          Our Services
        </p>
        <h2
          className="text-4xl sm:text-5xl font-extrabold mt-3 leading-tight max-w-3xl
                     text-[#0b0b0d] dark:text-white"
        >
          Enhance efficiency <br /> with our expertise.
        </h2>
      </div>

      {/* Timeline image */}
      <div className="relative mt-2 flex justify-center items-center w-full px-4 sm:px-8 z-0  ">
        <div className="w-full max-w-[1200px]">
          {/* Light mode image 
          <Image
            src={Group2}
            alt="Services timeline light"
            className="w-full h-auto block dark:hidden transition-all duration-500"
            priority
          /> */}
          {/* Dark mode image */}
          <div className="relative dark:hidden hidden lg:block">
                <Image src={Services} alt="img" className="object-contain w-full h-full" />

                <div className="absolute -bottom-12 left-5 flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#4848FF] text-[110px]">1</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className=" text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-24 left-36 flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#4848FF] text-[110px]">2</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Designing</h2>
                       <p className="text-[#5C5E61] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className=" text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                <div className="absolute bottom-12 left-[420px] flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#4848FF] text-[110px]">3</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Development</h2>
                       <p className="text-[#5C5E61] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className=" text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-7 right-[320px] flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#4848FF] text-[110px]">4</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Testing</h2>
                       <p className="text-[#5C5E61] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className=" text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute bottom-32 right-[70px] flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#4848FF] text-[110px]">5</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Release</h2>
                       <p className="text-[#5C5E61] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className=" text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute -top-12 -right-14 flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#4848FF] text-[70px] lg:text-[110px]">6</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[16px] lg:text-[20px] font-semibold">Support & Improvement</h2>
                       <p className="text-[#5C5E61] text-[12px] lg:text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className=" text-[12px] lg:text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>
          </div>
            
          <div className="relative dark:hidden lg:hidden block w-full md:max-w-lg mx-auto mt-12">
            <div className="flex items-center justify-center">
                <Image src={Servicesimg} alt="img" className="object-contain " />
            </div>
            <div className="absolute top-4 -left-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">1</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] md:text-[8px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-12 -right-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">2</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>

                <div className="absolute top-32 -left-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">3</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-52 -right-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">4</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>
                 <div className="absolute bottom-20 -left-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">5</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px] md:text-[8px]">Learn More +</p>
                    </div>
                </div>
                 <div className="absolute bottom-6 -right-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">6</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>
          </div>

<div className="hidden dark:lg:block relative">
                <Image src={Services} alt="img" className="object-contain w-full h-full" />

                <div className="absolute -bottom-12 left-5 flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#B1B1FE] text-[110px]">1</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Planning</h2>
                       <p className="text-[#C8CFD5] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className="text-white text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-24 left-36 flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#B1B1FE] text-[110px]">2</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Designing</h2>
                       <p className="text-[#C8CFD5] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className="text-white text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                <div className="absolute bottom-12 left-[420px] flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#B1B1FE] text-[110px]">3</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Development</h2>
                       <p className="text-[#C8CFD5] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className="text-white text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-7 right-[320px] flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#B1B1FE] text-[110px]">4</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Testing</h2>
                       <p className="text-[#C8CFD5] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className="text-white text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute bottom-32 right-[70px] flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#B1B1FE] text-[110px]">5</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[20px] font-semibold">Release</h2>
                       <p className="text-[#C8CFD5] text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className="text-white text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute -top-12 -right-14 flex flex-row items-center gap-4">
                    <h1 className="font-bold text-[#B1B1FE] text-[70px] lg:text-[110px]">6</h1>
                    <div className="flex flex-col gap-2">
                       <h2 className="text-[16px] lg:text-[20px] font-semibold">Support & Improvement</h2>
                       <p className="text-[#C8CFD5] text-[12px] lg:text-[14px]">Digital agency is an high test for<br/> business website work</p>
                       <p className="text-white text-[12px] lg:text-[14px] cursor-pointer">Learn More +</p>
                    </div>
                </div>
          </div>
          

<div className="relative hidden dark:block lg:dark:hidden w-full md:max-w-lg mx-auto mt-12">
            <div className="flex items-center justify-center">
                <Image src={Servicesimg} alt="img" className="object-contain " />
            </div>
            <div className="absolute top-4 -left-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">1</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] md:text-[8px] cursor-pointer">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-12 -right-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">2</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>

                <div className="absolute top-32 -left-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">3</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>

                 <div className="absolute top-52 -right-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">4</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>
                 <div className="absolute bottom-20 -left-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">5</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px] md:text-[8px]">Learn More +</p>
                    </div>
                </div>
                 <div className="absolute bottom-6 -right-2 flex flex-row items-center gap-2">
                    <h1 className="font-bold text-[#4848FF] text-[30px] md:text-[40px]">6</h1>
                    <div className="flex flex-col gap-1">
                       <h2 className="text-[9px] md:text-[11px] font-semibold">Planning</h2>
                       <p className="text-[#5C5E61] text-[6px] md:text-[8px]">Digital agency is an high test<br/> for business website work</p>
                       <p className=" text-[6px] cursor-pointer md:text-[8px]">Learn More +</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
