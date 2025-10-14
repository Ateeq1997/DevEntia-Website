'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axiosInstance from '@/lib/axiosInstance';

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
  

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1024;
      setIsMobileOrTablet(isSmall);
      // compute cards per page by breakpoint (approx columns)
      const perPage = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 1024 ? 3 : 2;
      setCardsPerPage(perPage);
      if (!isSmall || showAll) setVisibleCount(blogs.length);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [blogs.length, showAll]);

  // Listen for slide events from hero arrows
  useEffect(() => {
    const handler = (e: Event) => {
      const direction = (e as CustomEvent).detail?.direction as 'left' | 'right' | undefined;
      if (!direction || blogs.length === 0) return;
      setAnimDirection(direction);
      if (isMobileOrTablet && !showAll) {
        const maxStartIndex = Math.max(0, blogs.length - 1);
        const nextStartIndex = direction === 'right' ? pageStartIndex + 1 : pageStartIndex - 1;
        if (nextStartIndex < 0 || nextStartIndex > maxStartIndex) {
          setAnimDirection(null);
          return;
        }
        setPageStartIndex(nextStartIndex);
      } else {
        const totalPages = Math.max(1, Math.ceil(blogs.length / cardsPerPage));
        const currentPage = Math.floor(pageStartIndex / cardsPerPage);
        let nextPage = direction === 'right' ? currentPage + 1 : currentPage - 1;
        if (nextPage < 0 || nextPage >= totalPages) {
          setAnimDirection(null);
          return;
        }
        const nextStart = nextPage * cardsPerPage;
        setPageStartIndex(nextStart);
      }
      window.setTimeout(() => setAnimDirection(null), 400);
    };
    window.addEventListener('BLOG_SLIDE', handler as EventListener);
    return () => window.removeEventListener('BLOG_SLIDE', handler as EventListener);
  }, [blogs.length, cardsPerPage, pageStartIndex, isMobileOrTablet, showAll]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleImageError = (blogId: string) => {
    setImageErrors(prev => new Set(prev).add(blogId));
  };

  const getImageSrc = (item: BlogItem) => {
    if (imageErrors.has(item._id)) {
      return '/chooseImage.png'; // Fallback image
    }
    return item.fileUrl;
  };

  return (
    <div className="max-w-[1750px] px-4 md:px-6 lg:px-12 2xl:px-24 lg:-mt-10 mt-5 lg:mb-1 mb-10  lg:pb-12 mx-auto text-white">
      <div className="relative">
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6`}
        >
          {(showAll
            ? blogs
            : (isMobileOrTablet
                ? blogs.slice(pageStartIndex, pageStartIndex + 1)
                : blogs.slice(pageStartIndex, pageStartIndex + cardsPerPage)
              )
            ).map((item, idx) => (
            <Link href={`/Blog/Details/${item._id}`} key={item._id}>
              <div
                className={`relative bg-[#0A0D12] border border-gray-500 p-4 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)] w-full h-[380px] sm:h-[400px] md:h-[420px] lg:h-[450px] flex flex-col group transition-all duration-300 hover:scale-105 transform-gpu ${!showAll && (animDirection === 'right' ? 'animate-slide-in-right' : animDirection === 'left' ? 'animate-slide-in-left' : '')}`}
              >
                <div className="mb-4 h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden rounded-lg">
                  <Image
                    src={getImageSrc(item)}
                    alt="blog image"
                    width={500}
                    height={300}
                    className="w-full h-full rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(item._id)}
                    unoptimized={true}
                    priority={idx < 4}
                  />
                </div>

                <h1 className="font-semibold text-white text-[16px] sm:text-[18px] md:text-[20px] line-clamp-2">
                  {item.blogTitle}
                </h1>

                <p className="text-white/70 text-[12px] sm:text-[14px] md:text-[16px] mt-2 line-clamp-3 flex-grow">
                  {stripHtml(item.blogDescription).slice(0, 60)}...
                </p>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <p className="bg-white text-black text-[12px] sm:text-[14px] md:text-[16px] p-1 cursor-pointer flex items-center gap-1  transition-colors">
                    Read More <span aria-hidden>↗</span>
                  </p>
                  <span className="text-[10px] sm:text-[12px] md:text-[14px]  text-white px-3 py-1.5 rounded-md">
                    {formatDate(item.createdAt)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </div>
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
