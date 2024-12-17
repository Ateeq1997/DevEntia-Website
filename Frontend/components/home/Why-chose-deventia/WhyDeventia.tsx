"use client";

import { whyDeventiaData } from "@/data/data";
import WhyDeventiaCard from "./WhydeventiaCard";
import GlowingText from "./GlowingText";
import BlueGlowEffect from "../BlueGlowEffect";
import { motion } from "framer-motion";

const WhyDeventia = () => {
  return (
    <div className="min-h-[80vh] py-4 mb-5  relative">
      {/* Blue lighting */}
      <BlueGlowEffect
        className="top-5 right-14 xs:right-0"
        size={400}
        blur={90}
        opacity={0.4}
        rotate={0}
      />

      <GlowingText
        glowingTitle=" WHY CHOOSE SERVICES FROM DEVENTIA?"
        title=" Why Choose Services From DeVentia?"
      />

      {/* Services grid */}
      <div className="container flex justify-center items-center mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {whyDeventiaData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <WhyDeventiaCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-5 left-32 md:right-40 w-[25px] h-[25px] rounded-[41px] bg-gradient-to-b from-[#AD6AFF] to-[#AD6AFF00]" />
      <div className="absolute top-12 right-[10%] lg:right-[30%]  w-[13px] h-[13px] rounded-[21px] bg-gradient-to-b from-[#7ADB78] to-[#7ADB7800]" />
    </div>
  );
};

export default WhyDeventia;
