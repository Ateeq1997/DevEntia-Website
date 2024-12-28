"use client";
import Image from "next/image";
import { ourServiceData } from "@/data/data";
import { euroStyle } from "@/utils/fonts";
import { motion } from "framer-motion";
import { FaRegSquareCheck } from "react-icons/fa6";
import BlueGlowEffect from "./BlueGlowEffect";
/* import { serviceData } from './serviceData' */

export default function ServiceCards() {
  return (
    <div className="relative min-h-screen lg:min-h-[80vh] bg-[#141414] px-14 overflow-hidden  py-12">
      <BlueGlowEffect
        className="top-5 right-0  "
        size={400}
        blur={100}
        opacity={0.5}
        rotate={0}
      />

      {/* Text div */}
      <div className="mb-12 font-bai">
        <h1 className="font-semibold mb-5 text-3xl md:text-5xl text-[#FFFFFF]">
          Our Services
        </h1>
        <p className="text-xs md:text-sm">
        Empowering businesses with innovative solutions, cutting-edge technology, and exceptional design to drive progress and unlock new opportunities.
        </p>
      </div>
      {/* Cards parent */}
      <div className=" mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-3">
          {ourServiceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative  h-[300px] w-full   overflow-hidden"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute  h-[100px] w-full bg-black/70  bottom-0 opacity-95  duration-700 group-hover:opacity-100 group-hover:backdrop-blur-md group-hover:h-full" />

              {/* Content */}
              <div className="absolute inset-0 p-5  flex flex-col  transition-all duration-300 group-hover:justify-start">
                <div className="space-y-2 transform transition-all duration-700 group-hover:translate-y-0 translate-y-[200px]">
                 

                  <h3 className="text.[20px] xs:text-[24px]  lg:text-[23px] font-bold text-[#4848FF]">
                    {service.title}
                  </h3>

                  {/* Details */}
                  <ul className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <BlueGlowEffect
                      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      size={300}
                      blur={50}
                      opacity={0.3}
                      rotate={0}
                    />
                    {service.details.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-white"
                      >
                        <FaRegSquareCheck className="h-5 w-5 text-[#5865F2]" />
                        <span className="text-[10px] xs:text-[13px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
