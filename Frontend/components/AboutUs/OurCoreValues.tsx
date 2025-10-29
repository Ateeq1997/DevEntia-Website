"use client";
import React from "react";
import Image from "next/image";

const values = [
  {
    image:"/about/1.svg",
    limage:"/about/l1.svg",
    title: "Customer Gratification",
    description:
      "We are committed to helping our customers lead their markets, with our strategic solutions.",
  },
  {
        image:"/about/2.svg",
            limage:"/about/l2.svg",

    title: "Relentless Innovation",
    description:
      "We believe that persistent innovation keeps us ahead of the changing economy and technology.",
  },
  {
            image:"/about/3.svg",
                limage:"/about/l3.svg",

    title: "Seamless Service",
    description:
      "Our collaborative team-sense promises a seamless service to our customers, through all odds.",
  },
  {
            image:"/about/4.svg",
                limage:"/about/l4.svg",

    title: "Team Building",
    description:
      "We serve our customers better by building a more co-operative workspace for our employees.",
  },
  {
            image:"/about/5.svg",
                limage:"/about/l5.svg",

    title: "Immediate Assistance",
    description:
      "Customer loyalty is subjected to immediate assistance in case of emergency failures. We abide by it.",
  },
  {
            image:"/about/6.svg",
                limage:"/about/l6.svg",

    title: "Simplified Strategies",
    description:
      "Our approach to tackling your business hurdles are rather simplified and relevant.",
  },
];


const expertise = [
  {
    title: "Long-term partnership",
    description:
      "Our clients value our high-quality solutions—52% have been with us for more than four years.",
    icon: "/about/c1.svg",
        licon: "/about/cl1.svg",

  },
  {
    title: "Full-stack development",
    description:
      "From front end to back end, we handle every aspect of development, building complete, end-to-end solutions.",
    icon: "/about/c2.svg",
        licon: "/about/cl2.svg",

  },
  {
    title: "Proven expertise",
    description:
      "Our engineers have extensive expertise in cloud product engineering, as evidenced by their certifications.",
    icon: "/about/c3.svg",
        licon: "/about/cl3.svg",

  },
  {
    title: "Flexibility",
    description:
      "No matter the challenge, we stay agile, seamlessly adapting to your needs, goals, and processes.",
    icon: "/about/c4.svg",
        licon: "/about/cl4.svg",

  },
  {
    title: "Transparency",
    description:
      "We prioritize open communication, ensuring you're always aware of your project's status.",
    icon: "/about/c5.svg",
        licon: "/about/cl5.svg",

  },
  {
    title: "Regulatory compliance",
    description:
      "Our solutions consistently meet industry-specific and global standards, including HIPAA, GDPR, and ISO 27001.",
    icon: "/about/c6.svg",
        licon: "/about/cl6.svg",

  },
];

const OurCoreValues = () => {
  return (
    <section className="relative p-[5%] text-black dark:text-white bg-white dark:bg-transparent transition-colors duration-300">
      {/* Background Image — visible only in dark mode */}
      <div className="absolute inset-0 z-0 hidden dark:block">
        <Image
          src="/about/coreValues_BG.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="mx-auto z-20">
        <h2 className="text-3xl md:text-4xl lg:text-[53px] font-bold mb-6 ">
          Our Core Values
        </h2>
        <div className="w-[200px] h-[2px] bg-gray-500 mb-16"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#4848FF1A] dark:bg-[#1A1A1A]/30 dark:backdrop-blur-md py-10 px-10 rounded-2xl border border-gray-300 dark:border-gray-800 flex flex-col gap-4 items-center justify-center transition-all shadow-md hover:shadow-lg"
            >
          {/* Light Mode Icon */}
<div className="bg-white block dark:hidden p-3 h-[70px] w-[70px] flex items-center justify-center rounded-full">
  <Image
    src={value.limage}
    alt="img"
    width={40}
    height={40}
    className="object-contain mx-auto"
  />
</div>

{/* Dark Mode Icon */}
<div className="hidden dark:flex bg-[#302553] p-3 h-[70px] w-[70px] items-center justify-center rounded-full">
  <Image
    src={value.image}
    alt="img"
    width={40}
    height={40}
    className="object-contain mx-auto"
  />
</div>

              <h3 className="text-xl md:text-[26px] font-semibold mb-2 text-center">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-[20px] leading-sung text-center mb-6">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
     
     <div className="mx-auto mt-24 z-10">
      <h2 className="text-3xl md:text-4xl lg:text-[53px] font-bold mb-6 ">
         Our Company Ethics
        </h2>
        <div className="w-[200px] h-[2px] bg-gray-500 mb-16"/>
     
       
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertise.map((item, index) => (
    <div key={index} className="relative group">
      {/* Outer "+" icons */}
      <span className="absolute -top-3 -left-2  text-xl text-black dark:text-white transition-opacity duration-300">
        +
      </span>
      <span className="absolute -top-3 -right-2 text-xl text-black dark:text-white transition-opacity duration-300">
        +
      </span>
      <span className="absolute -bottom-3 -left-2 text-xl text-black dark:text-white transition-opacity duration-300">
        +
      </span>
      <span className="absolute -bottom-3 -right-2 text-xl text-black dark:text-white transition-opacity duration-300">
        +
      </span>

            <div
              className=" h-full w-full bg-transparent  border border-gray-800 dark:border-gray-700 rounded-2xl px-10 py-10 transition-all shadow-md hover:shadow-xl flex flex-col gap-4 justify-start items-start"
            >
              {/* Icon */}
              {item.icon && (
                <>
                <div className="w-32 h-32 hidden dark:block ">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={110}
                    height={24}
                    className="invert dark:invert-0"
                  />
                </div>
                <div className="w-32 h-32 block dark:hidden  ">
                  <Image
                    src={item.licon}
                    alt={item.title}
                    width={110}
                    height={24}
                    className=""
                  />
                </div>
                </>
              )}

              {/* Title */}
              <h3 className="text-lg md:text-[24px] font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-[18px] text-[#5C5E61] dark:text-[#B7B8B9] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          ))}
        </div>
     </div>

    </section>
  );
};

export default OurCoreValues;
