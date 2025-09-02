"use client";
import React from "react";
import Image from "next/image";
const PositiveImpactSection = () => {
  const cards = [
    {
      icon: "/home/icon1.png",
      title: "Client-Centric Approach",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, felis nec",
    },
    {
      icon: "/home/icon1.png",
      title: "Client-Centric Approach",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, felis nec",
    },
    {
      icon: "/home/icon2.png",
      title: "Proven Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, felis nec",
    },
    {
      icon: "/home/icon3.png",
      title: "Timely Delivery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, felis nec",
    },
    {
      icon: "/home/icon4.png",
      title: "Responsive Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, felis nec",
    },
    {
      icon: "/home/icon5.png",
      title: "Transparent Communication",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, felis nec",
    },
  ];

  return (
    <section className="px-[5%] py-12  ">
      <h1 className="text-center text-[30px] lg:text-[63px] font-bold">
        Why Arise Stands Out
      </h1>
      <p className="text-[#6D7792] font-medium mb-16 px-4 text-center lg:px-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, felis nec dignissim tincidunt, nisl massa iaculis ligula, nec tincidunt ligula sapien nec urna.</p>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative border border-[#4848FF80] rounded-2xl p-8  transition-all duration-300"
          >
            <div className="absolute -top-5 left-5 bg-[#151515] p-2 rounded-full w-10 h-10 justify-center flex">
      <Image
        src={card.icon}
        alt={card.title}
        width={26}
        height={20}
        className=""
      />            </div>
            <h3 className="text-white text-[20px] font-semibold mt-2">{card.title}</h3>
            <p className="text-[#A7ADBE] text-[18px] font-medium mt-2">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PositiveImpactSection;
