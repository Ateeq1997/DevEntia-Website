import React from "react";
import Image, { StaticImageData } from "next/image";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
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
  return (
    <section className="w-full bg-gradient-to-br from-white via-[#f0f0f5] to-[#e5e5ee] dark:from-black dark:via-[#060615] dark:to-[#0e0820] text-black dark:text-white py-16 px-6 lg:px-16 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto">
        {/* Label */}
        <div className="mb-6">
          <span className="text-sm text-[#4848FF] dark:text-[#8b82ff]">Blog &amp; News</span>
        </div>

        {/* Heading row: heading left, paragraph right */}
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

            {/* arrows */}
            <div className="mt-6 flex items-center gap-4">
              <button
                aria-label="prev"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 backdrop-blur flex items-center justify-center"
              >
                <MdOutlineArrowBack size={20} color="black" />
              </button>
              <button
                aria-label="next"
                className="w-12 h-12 rounded-full bg-[#4d48ff] shadow-lg flex items-center justify-center"
              >
                <MdOutlineArrowForward size={20} color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="relative bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[#2b2b2b] dark:border-[#555] rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1"
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
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{p.title}</h3>
                <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {p.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={p.href ?? "#"}
                    className="inline-flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
                    aria-label={`Read more about ${p.title}`}
                  >
                    Read More
                    <MdOutlineArrowForward
                      style={{
                        transform: "rotate(-50deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Link>

                  <span className="bg-white text-black dark:bg-gray-700 dark:text-white text-xs px-3 py-1 rounded-lg shadow">
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
