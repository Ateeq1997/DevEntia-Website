"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion"; // Import Framer Motion
import { faqs, FAQItem } from "@/data/data";
import BlueGlowEffect from "./BlueGlowEffect";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen font-bai lg:min-h-[600px] overflow-hidden bg-[#0B0B14] text-white py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <BlueGlowEffect
        className="bottom-0 absolute"
        size={250}
        blur={100}
        opacity={0.3}
        rotate={0}
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl  font-medium">FAQs</h2>
          <p className="text-gray-400 text-lg  max-w-md">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-full border border-gray-700 hover:border-[#4848FF] transition-colors">
              More Questions
            </button>
           
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-1">
          {faqs.map((faq: FAQItem, index: number) => (
            <div key={index} className="border-t border-gray-800">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="text-xl font-medium pr-8">{faq.question}</span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="w-6 h-6" />
                  ) : (
                    <FiPlus className="w-6 h-6" />
                  )}
                </span>
              </button>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 py-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
