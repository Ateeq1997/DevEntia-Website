"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function ServiceCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
//cards

  const services = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "Our AI services empower businesses to overcome challenges and create revolutionary user experiences through advanced digital solutions.",
      image: "/home/ai-service.png",
      expertAreas: [
        "Generative AI",
        "Natural Language Processing (NLP)",
        "LLM",
        "Machine Learning",
        "AI Automation",
        "Predictive Analytics",
        "Generative AI Consulting"
      ]
    },
    {
      id: 2,
      title: "Cloud technologies",
      description: "From seamless cloud integration to effective implementation, we provide solutions that empower businesses and transform end-user interactions.",
      image: "/home/cloud.jpg",
      expertAreas: [
        "OCI consulting",
        "Cloud application support",
        "Azure consulting",
        "AWS consulting",
        "Cloud engineering",
        "SaaS development",
        "Cloud application support"
      ]
    },
    {
      id: 3,
      title: "Custom Web & App Development",
      description: "From intuitive mobile apps to robust web platforms, we create tailored digital solutions that align with your business goals, enhance user experience, and drive growth.",
      image: "/home/web.jpg",
      expertAreas: [
        "Web application development",
        "API integration & backend development",
        "Cross-platform development (Flutter, React Native)",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Custom mobile app development",
        "UI/UX design and prototyping"
      ]
    },
    {
      id: 4,
      title: "Healthcare",
      description: "We partner with healthcare providers to deliver tailored solutions that drive efficiency, improve care, and create exceptional patient experiences.",
      image: "/home/healthcare.png",
      expertAreas: [
        "AI custom solutions",
        "Data analytical platform",
        "Medical devices software",
        "Custom RCM solutions"
      ]
    }
  ];

 useEffect(() => {
  const checkDevice = () => setIsMobile(window.innerWidth < 1024);
  checkDevice();
  window.addEventListener("resize", checkDevice);

  const handleScroll = () => {
    if (!containerRef.current || isMobile) return;

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.visualViewport?.height || window.innerHeight;
    const scrollTop = window.pageYOffset;

    const containerStart = containerTop;
    const containerEnd = containerTop + containerHeight - windowHeight;

    if (scrollTop >= containerStart && scrollTop <= containerEnd) {
      const progress =
        (scrollTop - containerStart) / (containerEnd - containerStart);
      setScrollProgress(Math.max(0, Math.min(1, progress)));

      const totalCards = services.length;
      const cardProgress = progress * totalCards;
      setActiveCard(Math.min(Math.floor(cardProgress), totalCards - 1));
    }
  };

  if (!isMobile) {
    window.addEventListener("scroll", handleScroll);
    window.visualViewport?.addEventListener("resize", handleScroll); // ✅ fix zoom responsiveness
    handleScroll();
  }

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", checkDevice);
    window.visualViewport?.removeEventListener("resize", handleScroll);
  };
}, [services.length, isMobile]);


  const getCardStyle = (index: number) => {
    const totalCards = services.length;
    const cardSection = 1 / totalCards;
    const cardStart = index * cardSection;
    const cardEnd = (index + 1) * cardSection;
    const currentProgress = scrollProgress;

    if (index === 0) {
      // First card - always visible initially, then gets covered
      return {
        transform: `translateY(0%)`,
        opacity: 1,
        zIndex: 1,
      };
    }

    if (currentProgress < cardStart) {
      // Card hasn't appeared yet - positioned below viewport
      return {
        transform: `translateY(100%)`,
        opacity: 1,
        zIndex: index + 1,
      };
    } else if (currentProgress >= cardStart && currentProgress < cardEnd) {
      // Card is currently sliding up and covering previous cards
      const cardProgress = (currentProgress - cardStart) / cardSection;
      const translateY = (1 - cardProgress) * 100;
      
      return {
        transform: `translateY(${translateY}%)`,
        opacity: 1,
        zIndex: index + 1,
      };
    } else {
      // Card has finished sliding - stays in position covering previous cards
      return {
        transform: `translateY(0%)`,
        opacity: 1,
        zIndex: index + 1,
      };
    }
  };

  return (
    
    <div
  ref={containerRef}
  className="relative px-[5%] py-12 transition-colors duration-500 bg-white dark:bg-[#0B0B0B]"
 >

      {/* Section Title */}
      <div className="pb-4 pt-8">
        <h2 className="text-[16px] text-[#4848FF] mb-8">Services</h2>
        <h1 className="text-[30px] lg:text-[63px] font-bold leading-tight w-full md:w-[70%] text-black dark:text-white">
          Explore Our Services
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-6 md:gap-3 mt-2">
          <p className="text-[#1F1F1F] dark:text-[#C5C9D4] text-[16px]">
            Deventia transforms ideas into digital experiences through expert
            UI/UX design, web development, and motion graphics.
          </p>
          <Link href="/Services">
           <button className="underline text-[#4848FF] dark:text-[#C5C9D4] text-[16px]">
  View All
</button>

          </Link>
        </div>
      </div>

      {/* Cards Container */}
      {isMobile ? (
        // Mobile & Tablet: show all cards stacked normally
        <div className="flex flex-col gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="h-full flex flex-col bg-white dark:bg-[#151515] text-black dark:text-white rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-[250px]">
                <Image
                  src={service.image}
                  alt={`${service.title} Illustration`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[22px] font-semibold">{service.title}</h2>
                  <FaArrowRightLong className="text-[#4848FF] dark:text-white text-[18px] -rotate-45" />

                </div>
     <p className="text-[#1F1F1F] dark:text-[#C5C9D4] text-[14px] lg:text-[16px] leading-relaxed mb-12">
  {service.description}
</p>



                <div className="flex border-b border-[#D9D9D9] dark:border-[#333] pb-2 mb-4 text-[14px]">
                  <span className="w-1/2 text-black dark:text-white font-bold text-[15px]">Expert Areas</span>
                  <span className="w-1/2 text-black dark:text-white font-bold text-[15px]">Top Cases</span>
                </div>

                <ul className="space-y-2 text-[14px] dark:text-[#E5E7EB] list-disc px-4">
                  {service.expertAreas.map((area, areaIndex) => (
                    <li key={areaIndex} className="hover:text-black dark:hover:text-white transition-colors duration-200">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
    {/* Desktop: column layout with 600px per card */}
    <div className="mt-10 space-y-1 bg-white dark:bg-[#0B0B0B]">
      {services.map((service) => (
        <div
          key={service.id}
          className="sticky top-24 h-[600px] w-full mx-auto bg-white dark:bg-[#151515] text-black dark:text-white rounded-lg overflow-hidden  flex flex-row transition-colors duration-500"
        >
          {/* Image Section */}
          <div className="relative w-[44%] h-full flex-shrink-0">
            <Image
              src={service.image}
              alt={`${service.title} Illustration`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 "></div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center ">
            <div className="flex items-start justify-between mb-8 gap-4">
              <h2 className="text-[18px] lg:text-[24px] font-bold leading-tight flex-1 ">
                {service.title}
              </h2>
              <FaArrowRightLong className="text-[#4848FF] dark:text-white text-[18px] -rotate-45 cursor-pointer hover:scale-110 transition-transform duration-200 flex-shrink-0 mt-2" />

            </div>

   <p className="text-[#1F1F1F] dark:text-[#C5C9D4] text-[14px] lg:text-[16px] leading-relaxed mb-12">
  {service.description}
</p>


            <div className="grid grid-cols-2 gap-x-12 border-b border-[#D9D9D9] dark:border-[#333] pb-3 mb-8">
              <span className="text-black dark:text-white font-bold text-[16px] lg:text-[16px]">Expert Areas</span>
            </div>

            <div className="  flex-1">
              <ul className="space-y-3 text-[11px] lg:text-[15px] dark:text-[#E5E7EB] list-disc px-4 ">
                {service.expertAreas.map((area, areaIndex) => (
                  <li key={areaIndex} className="hover:text-black dark:hover:text-white transition-colors duration-200 leading-relaxed font-poppins">
                    {area}
                  </li>
                ))}
              </ul>
              <div className="text-[14px] lg:text-[16px] text-[#E5E7EB]">
                {/* Add Top Cases here if needed */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
      )}
    </div>
  );
}
