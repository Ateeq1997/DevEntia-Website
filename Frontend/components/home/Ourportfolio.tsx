"use client";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import portfolioData from "./portfolioData";

const Ourportfolio = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.firstChild
          ? (scrollRef.current.firstChild as HTMLElement).clientWidth + 24
          : 300;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="portfolio-container py-12 px-[4%] sm:px-[5%] font-bai 
                 bg-[#E9EBF0] dark:bg-[#0b0b0d] 
                 text-gray-900 dark:text-white 
                 transition-colors duration-500"
    >
      {/* Section Heading */}
      <h2 className="text-[14px] sm:text-[16px] text-[#4848FF] mb-6 sm:mb-8 text-center md:text-left">
        OUR PORTFOLIO
      </h2>

      {/* Heading + Description */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[63px] font-bold leading-tight w-full md:w-[70%] text-center md:text-left">
          Explore our new recently completed projects.
        </h1>
        <p className="text-[13px] sm:text-[15px] md:text-[16px] flex-1 text-gray-700 dark:text-[#E5E5E6] text-center md:text-left transition-colors duration-500 max-w-[600px]">
          We are web designers, developers, project managers, and digital
          solutions using the latest trends and technologies.
        </p>
      </div>

      {/* Line + Arrows */}
      <div className="flex flex-wrap items-center justify-between mt-8 gap-4">
        <div className="w-[120px] sm:w-[150px] md:w-[180px] h-[2px] bg-gray-300 dark:bg-gray-600 transition-colors duration-500 mx-auto md:mx-0" />
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 w-full md:w-auto justify-end md:justify-center">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center bg-white text-black p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] transition-transform duration-300 hover:scale-105"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center bg-[#4848FF] text-white p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] rounded-full shadow-[0_0_15px_rgba(72,72,255,1)] transition-transform duration-300 hover:scale-105"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="scroll-container flex gap-4 md:gap-4 items-stretch w-full mt-6 overflow-x-hidden select-none cursor-default"
      >
        {portfolioData.map((card) => (
          <Link
            key={card.id}
            href={`/Casestudy/${card.id}`} 
            className="flex-shrink-0 w-[90%] sm:w-[45%] md:w-[32%] lg:w-[24%]
                       bg-[#F5F6FA] dark:bg-[#151515] rounded-lg flex flex-col gap-4 overflow-hidden
                       transition-all duration-500 ease-in-out"
          >
            <div className="relative w-full h-[180px] sm:h-[210px] md:h-[240px] lg:h-[270px] bg-gray-200 dark:bg-gray-700">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-3 sm:p-4 gap-2 sm:gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] sm:text-[18px] lg:text-[20px] font-bold">
                  {card.title}
                </h3>
                <Link
                  href={`/Casestudy/${card.id}`} // 👈 Dynamic route
                  className="font-bold flex items-center gap-2 text-[16px] sm:text-[18px] lg:text-[20px]
                       text-black dark:text-white transition-colors duration-500"
                >
                  &gt;
                </Link>
              </div>
              <p className="text-gray-600 dark:text-[#E5E5E6] text-[12px] sm:text-[13px] lg:text-[14px] transition-colors duration-500">
                {card.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ourportfolio;
