"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import GlowingText from "./Why-chose-deventia/GlowingText";
import { processSteps } from "@/data/data";

const OurExpertise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="min-h-screen bg-[#141414] py-5">
      <GlowingText
        glowingTitle="ENHANCE EFFICIENCY, OPEN DOORS WITH OUR EXPERTISE"
        title="Enhance efficiency, open doors with our Expertise ?"
      />

      <div ref={containerRef} className="container font-montserrat mx-auto w-[90%] py-3 px-3">
        <div className="mb-5">
          <p className="text-[10px] lg:text-[14px] text-gray-300">
            We&apos;re a team of strategic software developers working globally with
            the largest brands. We believe that progress only happens when you
            refuse to play it safe. We combine ideas, behaviors, and insights
            with design, technology, and data to produce brand experiences that
            customers love.
          </p>
        </div>

        <div className="relative">
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={index} 
              step={step} 
              index={index} 
              totalSteps={processSteps.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProcessStep: React.FC<{ 
  step: any; 
  index: number; 
  totalSteps: number;
  scrollYProgress: any;
}> = ({ step, index, totalSteps, scrollYProgress }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;

  const borderHeight = useTransform(
    scrollYProgress,
    [start, end],
    ["0%", "100%"]
  );

  useEffect(() => {
    const unsubscribe = borderHeight.onChange(v => {
      if (parseFloat(v) <= 5) {
        controls.start({ opacity: 0.5, transition: { duration: 0.5 } });
      } else {
        controls.start({ opacity: 1, transition: { duration: 0.5 } });
      }
    });

    return () => unsubscribe();
  }, [borderHeight, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={`relative mb-16 md:w-[65vw] lg:w-[90%] w-full group ${
        index % 2 === 1 ? "md:ml-32" : ""
      }`}
    >
      <div className="flex flex-col relative md:flex-row w-full 
                     md:w-[65vw] lg:w-[100%] border border-t-[#000052] 
                     border-l-0 border-r-0 beforeLeft beforeRight 
                     border-[#4848FF] group transition-all 
                     duration-200 ease-in-out overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-[#4848FF] via-[#48C8FF] to-[#8848FF]"
          style={{ height: borderHeight }}
        />

        <div className="relative w-full md:w-48 border-b 
                       md:border-b-0 beforeRight md:border-r-0  
                       border-[#000052] p-4 md:p-8 flex 
                       items-center justify-center">
          <span className="text-4xl md:text-5xl lg:text-7xl 
                          font-bold text-white transition-all 
                          duration-200 ease-in group-hover:bg-clip-text 
                          group-hover:bg-gradient-to-b group-hover:from-[#000052] 
                          group-hover:via-[#4848FF] group-hover:to-[#1a1a2e] 
                          group-hover:text-transparent">
            {step.number}
          </span>
        </div>

        <motion.div 
          className="flex-1 p-4 md:p-8"
          animate={controls}
        >
          <h3 className="text-xl md:text-2xl font-bold 
                       text-white mb-2 md:mb-4 group-hover:text-[#4848FF] 
                       transition-colors duration-200 ease-in-out">
            {step.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            {step.description}
          </p>
        </motion.div>
      </div>

      {index < totalSteps - 1 && (
        <div className={`absolute bottom-0 ${
          index % 2 === 0 ? "left-8" : "right-8"
        } transform translate-y-full`}>
          <div className="relative">
            <div className="absolute left-0 top-0 w-px h-16 md:h-24 bg-[#4848FF]"></div>
            <div className={`hidden md:flex absolute top-24 ${
              index % 2 === 0 ? "left-0 w-24" : "right-0 w-24"
            } h-px bg-[#4848FF]`}></div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default OurExpertise;