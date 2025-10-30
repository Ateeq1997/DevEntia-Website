"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MeetOurTeam = () => {
  const team = [
    { name: "Jenny Wilson", role: "Brand Designer focusing on clarity and emotional connection.", img: "/about/team/Rectangle 4496.png" },
    { name: "Albert Flores", role: "Marketing Lead passionate about impactful storytelling.", img: "/about/team/Rectangle 4496.png" },
    { name: "Cody Fisher", role: "Creative Director shaping strong visual identities.", img: "/about/team/Rectangle 4496.png" },
    { name: "Arlene McCoy", role: "UX Researcher building user-focused design systems.", img: "/about/team/Rectangle 4496.png" },
    { name: "Theresa Webb", role: "Frontend Developer crafting clean, responsive interfaces.", img: "/about/team/Rectangle 4496.png" },
  ];

  // ✅ Explicitly typed useRef
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (!carouselRef.current) return;
      const containerWidth = carouselRef.current.offsetWidth;

      // 🔹 Adjust card width based on breakpoints
      if (window.innerWidth < 640) setCardWidth(containerWidth - 10); // mobile
      else if (window.innerWidth < 1024) setCardWidth(containerWidth / 2 - 12); // tablet
      else setCardWidth(containerWidth / 3 - 16); // desktop
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // ✅ Add direction type
  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === "left" ? -cardWidth - 32 : cardWidth + 32;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };


  return (
    <section className="bg-white dark:bg-[#0B0D10] text-white px-[5%] py-16 relative overflow-hidden">
      {/* Header */}
      <div className="mx-auto text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-[53px] font-semibold mb-2 text-black dark:text-white">
          Meet Our Team
        </h2>
        <div className="w-16 h-[2px] bg-gray-400 mb-6 mx-auto lg:mx-0"></div>
        <p className="text-[#5C5E61] dark:text-[#FCFCFC] leading-sung w-full lg:max-w-3xl text-[16px] md:text-[22px] ">
          Our team is made up of dedicated professionals who share a passion for what
          they do. We’re not just agents; we’re trusted advisors ready to help you reach
          your goals.
        </p>

      </div>
       <div className="flex flex-row items-center gap-3 justify-end mt-8 block lg:hidden">
         <button
          onClick={() => scroll("left")}
            className="flex items-center justify-center bg-white text-black p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] transition-transform duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
         <button
          onClick={() => scroll("right")}
            className="flex items-center justify-center bg-[#4848FF] text-white p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] rounded-full shadow-[0_0_15px_rgba(72,72,255,1)] transition-transform duration-300 hover:scale-105"
        >
          <ArrowRight className="w-5 h-5 text-black" />
        </button>
       </div>
      {/* Carousel */}
      <div className="relative mt-12 flex items-center justify-center">
        {/* Left Arrow */}
       <button
  onClick={() => scroll("left")}
  className="hidden lg:flex items-center justify-center 
    bg-white text-black 
    p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] 
    rounded-full 
    shadow-[0_0_15px_rgba(0,0,0,0.3)] 
    dark:shadow-[0_0_15px_rgba(255,255,255,0.8)]
    transition-transform duration-300 hover:scale-105"
>
  <ArrowLeft className="w-5 h-5 text-black " />
</button>


        {/* Cards container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-auto lg:overflow-hidden scroll-smooth no-scrollbar w-full max-w-6xl mx-auto px-2"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] dark:bg-[#4848FF1A] px-4 w-full md:w-[320px] lg:w-[350px] py-4 rounded-2xl shadow-lg flex-shrink-0 transition-transform duration-300 "
              //style={{ width: `${cardWidth}px`, minWidth: `${cardWidth}px` }}
            >
              <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm mt-2 leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
            className="hidden lg:block  flex items-center justify-center bg-[#4848FF] text-white p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] rounded-full shadow-[0_0_15px_rgba(72,72,255,1)] transition-transform duration-300 hover:scale-105"
        >
          <ArrowRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </section>
  );
};

export default MeetOurTeam;
