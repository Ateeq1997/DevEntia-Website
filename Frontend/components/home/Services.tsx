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
    // Check if device is mobile or tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      const containerStart = containerTop;
      const containerEnd = containerTop + containerHeight - windowHeight;

      if (scrollTop >= containerStart && scrollTop <= containerEnd) {
        const progress = (scrollTop - containerStart) / (containerEnd - containerStart);
        const totalCards = services.length;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
        
        const cardProgress = progress * totalCards;
        setActiveCard(Math.min(Math.floor(cardProgress), totalCards - 1));
      }
    };

    if (!isMobile) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkDevice);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [services.length, isMobile]);

  const getCardStyle = (index:number) => {
    const totalCards = services.length;
    const cardSection = 1 / totalCards; 
    const cardStart = index * cardSection;
    const cardEnd = (index + 1) * cardSection;
    
    const currentProgress = scrollProgress;

    if (index === 0) {
      // First card - always visible from the start
      return {
        transform: `translateY(0%)`,
        opacity: 1,
        zIndex: 1,
        display: 'block'
      };
    }

    if (currentProgress < cardStart) {
      // Card hasn't appeared yet - positioned below viewport
      return {
        transform: `translateY(100%)`,
        opacity: 1,
        zIndex: index + 1,
        display: 'block'
      };
    } else if (currentProgress >= cardStart && currentProgress < cardEnd) {
      // Card is currently active and sliding up
      const cardProgress = (currentProgress - cardStart) / cardSection;
      const translateY = (1 - cardProgress) * 100;
      
      return {
        transform: `translateY(${translateY}%)`,
        opacity: 1,
        zIndex: index + 1,
        display: 'block'
      };
    } else {
      // Card has been passed - stays in position (covered by newer cards)
      return {
        transform: `translateY(0%)`,
        opacity: 1,
        zIndex: index + 1,
        display: 'block'
      };
    }
  };

return (
  <div 
    ref={containerRef}
    className="relative px-[5%] py-12"
    style={!isMobile ? { height: `${services.length * 120}vh` } : {}}
  >
    {/* Section Title */}
    <div className="pb-4 pt-8">
      <h2 className="text-[16px] text-[#4848FF] mb-8">Services</h2>
      <h1 className="text-[30px] lg:text-[63px] font-bold leading-tight w-full md:w-[70%]">
        Explore Our Services
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between gap-6 md:gap-3 mt-2">
        <p className="text-[#B8BBD2] text-[16px]">
          Deventia transforms ideas into digital experiences through expert
          UI/UX design, web development, and motion graphics.
        </p>
<Link href="/Services">
  <button className="underline text-[#B8BBD2] text-[16px]">
    View All
  </button>
</Link>
      </div>
    </div>

    {/* Cards Container */}
    {isMobile ? (
      // ✅ Mobile & Tablet: show all cards stacked
      <div className="flex flex-col gap-8 mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="h-full flex flex-col bg-[#151515] text-white rounded-2xl overflow-hidden shadow-2xl"
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
                <FaArrowRightLong className="text-white text-[18px] -rotate-45" />
              </div>
              <p className="text-[#B8BBD2] text-[15px] leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex border-b border-[#D9D9D9] pb-2 mb-4 text-[14px]">
                <span className="w-1/2 text-white font-bold text-[15px]">Expert Areas</span>
                <span className="w-1/2 text-white font-bold text-[15px]">Top Cases</span>
              </div>

              <ul className="space-y-2 text-[14px] text-[#E5E7EB] list-disc px-4">
                {service.expertAreas.map((area, areaIndex) => (
                  <li key={areaIndex} className="hover:text-white transition-colors duration-200">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    ) : (
      // ✅ Desktop: keep scroll animation
      <div className="sticky top-20 h-[600px] mt-10 mb-0">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="absolute inset-0"
            style={getCardStyle(index)}
          >
            <div className="h-full flex flex-col lg:flex-row bg-[#151515] text-white rounded-2xl overflow-hidden shadow-2xl mx-auto w-full">
              {/* Image */}
              <div className="relative w-full lg:w-[45%] h-[350px] lg:h-full">
                <Image
                  src={service.image}
                  alt={`${service.title} Illustration`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30"></div>
              </div>

              {/* Content */}
              <div className="w-full md:flex-1 p-8 md:p-12 relative">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[24px] md:text-[30px] font-semibold">
                    {service.title}
                  </h2>
                  <FaArrowRightLong className="text-white text-[20px] -rotate-45 cursor-pointer hover:scale-110 transition-transform duration-200" />
                </div>

                <p className="text-[#B8BBD2] text-[16px] leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex border-b border-[#D9D9D9] pb-2 mb-6 text-[14px]">
                  <span className="w-1/3 text-white font-bold text-[16px]">Expert Areas</span>
                  <span className="w-1/3 text-white font-bold text-[16px]">Top Cases</span>
                </div>

                <ul className="space-y-3 text-[15px] text-[#E5E7EB] list-disc px-4">
                  {service.expertAreas.map((area, areaIndex) => (
                    <li key={areaIndex} className="hover:text-white transition-colors duration-200 font-poppins">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

}