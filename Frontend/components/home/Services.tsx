"use client";
import Image from "next/image";
import { ourServiceData } from "@/data/data";
import { euroStyle } from "@/utils/fonts";
import { motion } from "framer-motion";
import { FaRegSquareCheck } from "react-icons/fa6";
import BlueGlowEffect from "./BlueGlowEffect";

export default function ServiceCards() {
  return (
    <div className="relative    px-[5%] overflow-hidden  py-12">
            <h2 className="text-[16px] text-[#4848FF] mb-8">Services</h2>
            <h1 className="text-[30px] lg:text-[63px] font-bold leading-tight w-full md:w-[70%]">
          Explore Our Services
        </h1>

        <div className="flex flex-row items-center justify-between gap-3 mt-2">
            <p className="text-[#B8BBD2] text-[16px]">Deventia transforms ideas into digital experiences through expert UI/UX design, web development, and motion graphics.</p>
           <button className="underline text-[#B8BBD2] text-[16px]">View All</button>
        </div>


    </div>
  );
}
