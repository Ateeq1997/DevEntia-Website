"use client";
import React from "react";
import Image from "next/image";

const PositiveImpactSection = () => {
  const cards = [
    {
      icon: "/home/icon1.png",
      title: "Client-Centric Approach",
      desc: "We put clients first, tailoring every solution to meet their goals with care and precision.",
    },
    {
      icon: "/home/icon1.png",
      title: "Client-Centric Approach",
      desc: "Our team brings years of expertise across industries, delivering results you can trust.",
    },
    {
      icon: "/home/icon2.png",
      title: "Proven Experience",
      desc: "We respect deadlines and ensure every project is completed on time without compromise.",
    },
    {
      icon: "/home/icon3.png",
      title: "Timely Delivery",
      desc: "We respect deadlines and ensure every project is completed on time without compromise.",
    },
    {
      icon: "/home/icon4.png",
      title: "Responsive Solutions",
      desc: "Our services adapt to your needs, offering flexible and scalable digital solutions.",
    },
    {
      icon: "/home/icon5.png",
      title: "Transparent Communication",
      desc: "We keep you informed at every step with clear, open, and honest communication.",
    },
  ];

  return (
    <section className="px-[5%] py-12 transition-colors duration-500 bg-white dark:bg-[#151515]">
      <h1 className="text-center text-[30px] lg:text-[63px] font-bold text-black dark:text-white">
        Why Arise Stands Out
      </h1>
      <p className="text-[#333333] dark:text-[#A7ADBE] font-medium mb-16 px-4 text-center lg:px-64">
       We combine expertise, innovation, and dedication to deliver solutions that make a real impact for our clients.
      </p>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative border border-[#4848FF80] rounded-2xl p-8 transition-all duration-300 bg-white dark:bg-[#1A1A1A]"
          >
            <div className="absolute -top-5 left-5 bg-[#151515] dark:bg-[#333] p-2 rounded-full w-10 h-10 flex justify-center items-center">
              <Image src={card.icon} alt={card.title} width={26} height={20} />
            </div>
            <h3 className="text-black dark:text-white text-[20px] font-semibold mt-2">
              {card.title}
            </h3>
            <p className="text-[#333333] dark:text-[#A7ADBE] text-[18px] font-medium mt-2">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PositiveImpactSection;
