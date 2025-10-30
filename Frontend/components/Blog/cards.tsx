'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import axiosInstance from '@/lib/axiosInstance';
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";

interface BlogItem {
  _id: string;
  blogTitle: string;
  seoTitle: string;
  seoDescription: string;
  blogDescription: string;
  fileUrl: string;
  status: string;
  createdAt: string;
}
const stripHtml = (html: string) => {
  if (typeof window !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  return '';
};

type BlogscardProps = { showAll?: boolean };

const Blogscard: React.FC<BlogscardProps> = ({ showAll = false }) => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [animDirection, setAnimDirection] = useState<"left" | "right" | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewportScale, setViewportScale] = useState(1);

   useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const { data } = await axiosInstance.get('/blog');
      console.log("Blogs",data);
      const publishedBlogs = data.filter((blog: BlogItem) => blog.status === 'published');
      console.log("Published blogs with fileUrls:", publishedBlogs.map((blog: BlogItem) => ({ 
        id: blog._id, 
        title: blog.blogTitle, 
        fileUrl: blog.fileUrl,
        isValidUrl: blog.fileUrl && blog.fileUrl.startsWith('http')
      })));
      setBlogs(publishedBlogs);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    }
  }
  fetchBlogs();
 }, []);
  

  

  const handleImageError = (blogId: string) => {
    setImageErrors(prev => new Set(prev).add(blogId));
  };

  const getImageSrc = (item: BlogItem) => {
    if (imageErrors.has(item._id)) {
      return '/chooseImage.png'; // Fallback image
    }
    return item.fileUrl;
  };


     const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("article");
    const cardWidth = card ? card.clientWidth + 24 : 0;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };
  const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  return `${day} ${month}`;
};

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
                  <div className="mt-6 flex items-center gap-4 justify-end">
                    <button
                      aria-label="prev"
                      onClick={() => scroll("left")}
                  className="flex items-center justify-center bg-white text-black p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] transition-transform duration-300 hover:scale-105"
                    >
                      <MdOutlineArrowBack size={20} className="text-black" />
                    </button>
      
                    <button
                      aria-label="next"
                      onClick={() => scroll("right")}
                                 className="flex items-center justify-center bg-[#4848FF] text-white p-4 sm:p-5 text-[14px] sm:text-[16px] md:text-[19px] rounded-full shadow-[0_0_15px_rgba(72,72,255,1)] transition-transform duration-300 hover:scale-105"
      
                    >
                      <MdOutlineArrowForward size={20} color="white" />
                    </button>
                  </div>
                </div>
              </div>
          <div className="relative">
        
         <div
                   ref={scrollRef}
                   className="mt-10 flex gap-6 overflow-auto lg:overflow-hidden scroll-smooth no-scrollbar  select-none"
                   onWheel={(e) => e.preventDefault()}
                   onTouchMove={(e) => e.preventDefault()}
                 >
                   {blogs.map((blog) => (
  <article
    key={blog._id}
    className="min-w-[90%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[32%] relative 
               bg-transparent 
               border border-[#00000026] dark:border-[#F2F3F6] 
               rounded-2xl overflow-hidden hover:shadow-lg 
               transition-transform transform px-8 py-6"
  >
    {/* ✅ Blog Image */}
    <div className="w-full h-44 md:h-52 relative rounded-none lg:rounded-lg overflow-hidden">
      <Image
        src={getImageSrc(blog)}
        alt={blog.blogTitle}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
        onError={() => handleImageError(blog._id)}
      />
    </div>

    {/* ✅ Content */}
    <div className="py-0">
      <h3 className="text-lg font-semibold mb-2 text-black dark:text-white mt-8 mb-3">
        {blog.blogTitle}
      </h3>
      <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {stripHtml(blog.blogDescription).slice(0, 120)}...
      </p>

      <div className="flex items-center justify-between mt-12">
        {/* ✅ Read More Link */}
        <Link
          href={`/Blog/Details/${blog._id}`}
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

        {/* ✅ Date */}
        <span
          className="bg-[#4848FF] text-white 
                     dark:bg-white dark:text-black
                     text-xs px-4 py-1.5 shadow"
        >
          {formatDate(blog.createdAt)}
        </span>
      </div>
    </div>
  </article>
))}

                 </div>
        </div>

        
      </div>
    </section>
  );
};

export default Blogscard;

// Add custom CSS for line-clamp utilities
const styles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-slide-in-right {
    animation: slide-in-right 0.4s ease-out both;
  }
  .animate-slide-in-left {
    animation: slide-in-left 0.4s ease-out both;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
