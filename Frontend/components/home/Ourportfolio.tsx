"use client";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import styles from "../home/home-css/home.module.css";

import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";

const Ourportfolio = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild
        ? (scrollRef.current.firstChild as HTMLElement).clientWidth + 24
        : 300;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const cards = [
    { img: project1, title: "Simmple Tax", desc: "Simpple.Tax is a next-generation tax platform that blends AI and expert CPAs to make filing simple, fast, and stress.....", link: "/Our-Portfolio/Projects/RS-Global-Ties" },
    { img: project2, title: "Falke", desc: "Falke is an all-in-one platform designed to simplify employee, project, and client management. From handling invoices.....", link: "/Our-Portfolio/Projects/Falke" },
    { img: project3, title: "Healthi Plate", desc: "Healthi Plate is a nutrition-focused mobile app that empowers users to set personal health goals, choose goal-aligned.....", link: "/Our-Portfolio/Projects/Another-Project" },
     { img: project4, title: "Aneuro", desc: "Aneuro is a nutrition-focused mobile app that empowers users to set personal health goals, choose goal-aligned.....", link: "/Our-Portfolio/Projects/Another-Project" },
  ];

  return (
 <div className="portfolio-container py-12 px-[5%] font-bai 
                bg-[#E9EBF0] dark:bg-[#0b0b0d] 
                text-gray-900 dark:text-white 
                transition-colors duration-500">


      <h2 className="text-[16px] text-[#4848FF] mb-8">OUR PORTFOLIO</h2>

      {/* Heading + description */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <h1 className="text-[30px] lg:text-[63px] font-bold leading-tight w-full md:w-[70%]">
          Explore our new recently completed projects.
        </h1>
        <p className="text-[13px] md:text-[16px] flex-1 text-gray-700 dark:text-[#E5E5E6] transition-colors duration-500">
          We are web designers, developers, project managers, and digital solutions using the latest trends and technologies.
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
            className="flex items-center gap-2 bg-[#4848FF] text-white p-5 font-semibold text-[14px] md:text-[19px] rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(72,72,255,1)]"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
     <div
  ref={scrollRef}
  className="scroll-container flex gap-6 items-start w-full mt-6 overflow-hidden"
>
  {cards.map((card, index) => (
    <div
      key={index}
      className="
        flex-shrink-0
        w-[95%] sm:w-[85%] md:w-[calc((100%-2rem)/3)]
        bg-[#F5F6FA] dark:bg-[#151515]
        rounded-lg flex flex-col gap-4 overflow-hidden
        transition-all duration-500 ease-in-out
      "
    >
      <div className="relative w-full h-[200px] md:h-[220px] lg:h-[270px] bg-gray-200 dark:bg-gray-700">
        <Image src={card.img} alt={card.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] lg:text-[20px] font-bold">{card.title}</h3>
          <Link
            href={card.link}
            className="font-bold flex items-center gap-2 text-[18px] lg:text-[20px]
                       text-black dark:text-white transition-colors duration-500"
          >
            &gt;
          </Link>
        </div>
        <p className="text-gray-600 dark:text-[#E5E5E6] text-[12px] lg:text-[14px] transition-colors duration-500">
          {card.desc}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
  
  );
};

export default Ourportfolio;
