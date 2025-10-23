"use client";
import React from "react";
import Image from "next/image";
import { FaPlayCircle, FaStar } from "react-icons/fa";

// Import images
import cus1 from "../../assets/images/cus1.png";
import cus2 from "../../assets/images/cus2.png";
import cus3 from "../../assets/images/cus3.png";
import cust1 from "../../assets/images/cust.png";
import cust2 from "../../assets/images/cust1.png";
import cust3 from "../../assets/images/cust2.png";

interface Testimonial {
  id: number;
  image: any;
  description: string;
  logo: any;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: cus1,
    description:
      "Deventia’s team delivered exactly what we needed. Fast, reliable, and highly professional.",
    logo: cust1,
    name: "Bimosaurus",
  },
  {
    id: 2,
    image: cus2,
    description:
      "Deventia’s team delivered exactly what we needed. Fast, reliable, and highly professional.",
    logo: cust2,
    name: "Bimosaurus",
  },
  {
    id: 3,
    image: cus3,
    description:
      "Deventia’s team delivered exactly what we needed. Fast, reliable, and highly professional.",
    logo: cust3,
    name: "Bimosaurus",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#0f0f0f] overflow-hidden transition-transform duration-500">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
          Happy Words From
          <br />
          Happy Customer
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-7xl mx-auto px-6 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-8 
          justify-center items-stretch
          transition-all duration-500
        "
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl shadow-md bg-white dark:bg-[#1b1b1b] overflow-hidden flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="relative w-full h-64">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
              <FaPlayCircle className="absolute inset-0 m-auto text-white text-5xl opacity-90 cursor-pointer hover:opacity-100 transition-all duration-300" />
            </div>

            {/* Description */}
            <div className="px-6 py-6 text-left w-full">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-200 dark:border-gray-700 w-4/5"></div>

            {/* Profile and Stars */}
            <div className="w-full flex justify-between items-center px-6 py-4">
              <div className="flex items-center gap-3">
                <Image
                  src={t.logo}
                  alt="Avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div>
                  <h5 className="text-gray-900 dark:text-white text-sm font-semibold">
                    {t.name}
                  </h5>
                  <p className="text-gray-500 text-xs">Graphics designer</p>
                </div>
              </div>

              <div className="flex gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
