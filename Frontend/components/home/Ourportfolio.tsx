"use client";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Ourportfolio = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Scroll function
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild
        ? (scrollRef.current.firstChild as HTMLElement).clientWidth + 48
        : 300;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-12 px-[5%] font-bai bg-white dark:bg-[#0b0b0d] text-gray-900 dark:text-white transition-colors duration-500">
      <h2 className="text-[16px] text-[#4848FF] mb-8">OUR PORTFOLIO</h2>

      {/* Heading + description */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <h1 className="text-[30px] lg:text-[63px] font-bold leading-tight w-full md:w-[70%]">
          Explore our new recently completed projects.
        </h1>
        <p className="text-[13px] md:text-[16px] flex-1 text-gray-700 dark:text-[#E5E5E6] transition-colors duration-500">
          We are web designers, developers, project managers, and digital
          solutions using the latest trends and technologies.
        </p>
      </div>

      {/* Line + Arrows */}
      <div className="flex flex-row items-center justify-between mt-8">
        <div className="w-[180px] h-[2px] bg-gray-300 dark:bg-gray-600 transition-colors duration-500" />
        <div className="flex flex-row items-center gap-5">
          <button
            onClick={() => scroll("left")}
            className="flex items-center gap-2 bg-white text-black p-5 font-semibold text-[14px] md:text-[19px] rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(255,255,255,1)]"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center gap-2 bg-[#4848FF] text-black p-5 font-semibold text-[14px] md:text-[19px] rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(72,72,255,1)]"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-12 items-center w-full mt-6 overflow-x-hidden transition-colors duration-500"
      >
        {/* CARD 1 */}
        <div className="min-w-full md:min-w-[calc(50%-1.5rem)] bg-[#151515] dark:bg-[#151515] bg-[#f8f9fb] rounded-lg flex flex-col gap-8 overflow-hidden transition-colors duration-500">
          <div className="bg-gray-200 dark:bg-gray-700">
            <img
              src="/home/project1.png"
              alt="img"
              className="w-full h-auto lg:h-auto object-cover"
            />
          </div>
          <div className="flex flex-row items-center justify-between p-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[15px] lg:text-[24px] font-bold">
                RS Global Ties
              </h3>
              <p className="text-gray-600 dark:text-[#E5E5E6] text-[12px] lg:text-[14px] transition-colors duration-500">
                Development. Jan 19, 2024
              </p>
            </div>
           <Link
  href={"/Our-Portfolio/Projects/RS-Global-Ties"}
  className="relative overflow-hidden flex items-center px-4 lg:px-5 py-3  
             font-medium text-[12px] lg:text-[19px] bg-[#4848FF] 
             transition-all duration-700 ease-in-out group"
>
  <span className="relative z-10 flex items-center gap-3 text-white transition-colors duration-300">
    See Project <FaArrowRightLong />
  </span>
  <span className="absolute inset-0 bg-blue-800 transform -translate-x-full 
                   group-hover:translate-x-0 transition-transform duration-700 ease-in-out">
  </span>
</Link>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="min-w-full md:min-w-[calc(50%-1.5rem)] bg-[#151515] dark:bg-[#151515] bg-[#f8f9fb] rounded-lg flex flex-col gap-8 overflow-hidden transition-colors duration-500">
          <div className="bg-gray-200 dark:bg-gray-700">
            <img
              src="/home/project2.png"
              alt="img"
              className="w-full h-auto lg:h-auto object-cover"
            />
          </div>
          <div className="flex flex-row items-center justify-between p-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] lg:text-[24px] font-bold">
                Dadi Rent Boat
              </h3>
              <p className="text-gray-600 dark:text-[#E5E5E6] text-[12px] lg:text-[14px] transition-colors duration-500">
                Development. Jan 19, 2025
              </p>
            </div>
         <Link
  href={"/Our-Portfolio/Projects/Dadi-Rent-Boat"}
  className="relative overflow-hidden flex items-center px-4 lg:px-5 py-3  
             font-medium text-[12px] lg:text-[19px] bg-[#4848FF] 
             transition-all duration-700 ease-in-out group"
>
  <span className="relative z-10 flex items-center gap-3 text-white transition-colors duration-300">
    See Project <FaArrowRightLong />
  </span>
  <span className="absolute inset-0 bg-blue-800 transform -translate-x-full 
                   group-hover:translate-x-0 transition-transform duration-700 ease-in-out">
  </span>
</Link>

          </div>
        </div>

        {/* CARD 3 */}
        <div className="min-w-full md:min-w-[calc(50%-1.5rem)] bg-[#151515] dark:bg-[#151515] bg-[#f8f9fb] rounded-lg flex flex-col gap-8 overflow-hidden transition-colors duration-500">
          <div className="bg-gray-200 dark:bg-gray-700">
            <img
              src="/home/project2.png"
              alt="img"
              className="w-full h-auto lg:h-auto object-cover"
            />
          </div>
          <div className="flex flex-row items-center justify-between p-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] lg:text-[24px] font-bold">
                Dadi Rent Boat
              </h3>
              <p className="text-gray-600 dark:text-[#E5E5E6] text-[12px] lg:text-[14px] transition-colors duration-500">
                Development. Jan 19, 2025
              </p>
            </div>
          <Link
  href={"/Our-Portfolio/Projects/Dadi-Rent-Boat"}
  className="relative overflow-hidden flex items-center px-4 lg:px-5 py-3  
             font-medium text-[12px] lg:text-[19px] bg-[#4848FF] 
             transition-all duration-700 ease-in-out group"
>
  <span className="relative z-10 flex items-center gap-3 text-white transition-colors duration-300">
    See Project <FaArrowRightLong />
  </span>
  <span className="absolute inset-0 bg-blue-800 transform -translate-x-full 
                   group-hover:translate-x-0 transition-transform duration-700 ease-in-out">
  </span>
</Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourportfolio;
