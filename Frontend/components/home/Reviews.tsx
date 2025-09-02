"use client";

import React, { useRef } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const reviews = [
  {
    text: "“I’m so impressed by your dedication to learning. I know it wasn’t easy when that technology solution you presented didn’t work out.”",
    name: "Bessie Cooper",
    role: "Marketing Coordinator, HCAB",
    image: "/home/Component 20.png",
  },
  {
    text: "“I’m so impressed by your dedication to learning. I know it wasn’t easy when that technology solution you presented didn’t work out.”",
    name: "Darlene Robertson",
    role: "Product Manager, TechFlow",
    image: "/home/Component 20.png",
  },
  {
    text: "“I’m so impressed by your dedication to learning. I know it wasn’t easy when that technology solution you presented didn’t work out.”",
    name: "Jane Cooper",
    role: "CTO, InnovateX",
    image: "/home/Component 20.png",
  },
];

const Reviews = () => {
 const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="py-16 px-[5%] text-white text-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/home/bg.png')" }}
    >
      {/* Subtitle */}
      <p className="text-[16px] text-[#8A8AFD]">Client Feedback</p>

      {/* Title */}
      <h2 className="text-3xl md:text-[63px] font-bold mt-3 text-white leading-tight">
        Happy Words From <br /> Happy Customer
      </h2>
<div className="flex justify-center mt-4">
  <div className="w-[200px] h-[2px] bg-gray-400" />
</div>     
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden mt-6 scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 snap-center px-4"
          >
            <div className="max-w-xl mx-auto  shadow-lg">
              {/* Review Text */}
              <p className="text-[14px] md:text-[18px] text-[#C8CFD5] leading-relaxed">
                {review.text}
              </p>

              {/* Customer Image */}
              <div className="mt-8 flex justify-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-2 border-gray-600"
                />
              </div>

              {/* Customer Info */}
              <div className="mt-4">
                <h3 className="font-semibold text-[18px] md:text-[24px]">
                  {review.name}
                </h3>
                <p className="text-[#C8CFD5] text-[14px]">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={scrollLeft}
          className="flex items-center gap-2 bg-white text-black p-4 font-semibold text-[14px] md:text-[19px] rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(255,255,255,1)]"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={scrollRight}
          className="flex items-center gap-2 bg-[#4848FF] text-black p-4 font-semibold text-[14px] md:text-[19px] rounded-full  transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(72,72,255,1)]"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
