"use client";
import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import blog1 from "../../assets/images/blog4.png";
import blog2 from "../../assets/images/blog5.png";
import blog3 from "../../assets/images/blog6.png";
import Link from "next/link";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: StaticImageData;
  href?: string;
};

const posts: Post[] = [
  {
    id: "1",
    title: "Wins 2023 good design London Award",
    excerpt:
      "Recognized for creativity and innovation, the project proudly received the Good Design Award for exceptional UX and visual design.",
    date: "14 March",
    imageSrc: blog1,
    href: "/blog/1",
  },
  {
    id: "2",
    title: "Wins 2023 good design London Award",
    excerpt:
      "Recognized for creativity and innovation, the project proudly received the Good Design Award for exceptional UX and visual design.",
    date: "14 March",
    imageSrc: blog2,
    href: "/blog/2",
  },
  {
    id: "3",
    title: "Wins 2023 good design London Award",
    excerpt:
      "Recognized for creativity and innovation, the project proudly received the Good Design Award for exceptional UX and visual design.",
    date: "14 March",
    imageSrc: blog3,
    href: "/blog/3",
  },
];

export default function BlogNews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewportScale, setViewportScale] = useState(1);

  // Maintain card scrolling
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("article");
    const cardWidth = card ? card.clientWidth + 24 : 0;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Handle zoom responsiveness
  useEffect(() => {
    const handleZoom = () => {
      const scale = window.visualViewport?.scale || 1;
      setViewportScale(scale);
    };

    window.visualViewport?.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.visualViewport?.removeEventListener("resize", handleZoom);
    };
  }, []);

  return (
    <section
      className="w-full bg-gradient-to-br from-white via-[#f0f0f5] to-[#e5e5ee] 
                 dark:from-black dark:via-[#060615] dark:to-[#0e0820] 
                 text-black dark:text-white py-16 px-6 lg:px-10
                 transition-colors duration-500 overflow-hidden"
      style={{
        transform: `scale(${1 / viewportScale})`,
        transformOrigin: "top center",
      }}
    >
      <div className="max-w-[95%] mx-auto">
        {/* Label */}
        <div className="mb-6">
          <span className="text-sm text-[#4848FF] dark:text-[#8b82ff]">
            Blog &amp; News
          </span>
        </div>

        {/* Heading Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="lg:w-[60%]">
            <h2 className="text-[40px] sm:text-[48px] md:text-[56px] leading-tight font-extrabold tracking-tight max-w-4xl text-black dark:text-white">
              Read Our Latest News & Blog Get Every Updates
            </h2>
            <div className="h-0.5 w-20 bg-gray-600 dark:bg-gray-400 mt-6 rounded" />
          </div>

          <div className="lg:w-1/3 text-gray-800 dark:text-gray-300">
            <p>
              We are web designers, developers, project managers, and digital
              solutions using the latest trends and technologies.
            </p>

            {/* Arrows */}
            <div className="mt-6 flex items-center gap-4">
              <button
                aria-label="prev"
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full bg-[#ffffff] hover:bg-[#e5e5e5] 
                           dark:bg-white dark:hover:bg-[#f9f9f9] backdrop-blur 
                           flex items-center justify-center hover:scale-105 transition"
              >
                <MdOutlineArrowBack size={20} className="text-black" />
              </button>

              <button
                aria-label="next"
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full bg-[#4d48ff] shadow-lg flex items-center 
                           justify-center hover:scale-105 transition"
              >
                <MdOutlineArrowForward size={20} color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="mt-10 flex md:grid md:grid-cols-3 gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {posts.map((p) => (
            <article
              key={p.id}
              className="min-w-[95%] sm:min-w-[80%] md:min-w-0 relative 
                         bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] 
                         border border-[#2b2b2b] dark:border-[#555] 
                         rounded-2xl overflow-hidden hover:shadow-xl 
                         transition-transform transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="w-full h-44 md:h-48 relative">
                <Image
                  src={p.imageSrc}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  {p.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {p.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  {/* Read More Link */}
                  <Link
                    href={p.href ?? "#"}
                    className="inline-flex items-center gap-2 text-sm 
                               text-[#4848FF] hover:text-[#2c2cff]
                               dark:text-gray-200 dark:hover:text-white
                               transition-colors"
                  >
                    Read More
                    <MdOutlineArrowForward
                      className="text-[#4848FF] dark:text-gray-200 transition-transform duration-300"
                      style={{ transform: "rotate(-50deg)" }}
                    />
                  </Link>

                  {/* Date Badge */}
                  <span
                    className="bg-[#4848FF] text-white 
                               dark:bg-white dark:text-black
                               text-xs px-4 py-1.5 shadow"
                  >
                    {p.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
