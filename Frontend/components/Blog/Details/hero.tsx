'use client';

import { useParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axiosInstance from '@/lib/axiosInstance';

const Hero = () => {
  const params = useParams();
  const idParam = params?.id;
  const blogId = Array.isArray(idParam) ? idParam[0] : idParam;

  const [blog, setBlog] = useState<{
    blogTitle?: string;
    blogDescription?: string;
    seoTitle?: string;
    seoDescription?: string;
    createdAt?: string;
  }>({});

  const stripHtml = (html: string) => {
    if (typeof window !== 'undefined') {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.textContent || div.innerText || '';
    }
    return '';
  };

  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) return;

      try {
        const res = await axiosInstance.get(`/blog/${blogId}`);
        const data = res.data;

        setBlog({
          blogTitle: data?.blogTitle || '',
          blogDescription: stripHtml(data?.blogDescription || ''),
          seoTitle: data?.seoTitle || data?.blogTitle || '',
          seoDescription: data?.seoDescription || '',
          createdAt: data?.createdAt || '',
        });
      } catch (err) {
        console.error('Error fetching blog:', err);
      }
    };

    fetchBlog();
  }, [blogId]);

  const createMobileHeading = (text: string) => {
    if (!text) return '';
    const words = text.split(' ');
    let result = '';
    let wordCount = 0;

    words.forEach((word, index) => {
      result += word;
      wordCount++;

      if (wordCount >= 3 && index < words.length - 1) {
        result += ' <br /> ';
        wordCount = 0;
      } else if (index < words.length - 1) {
        result += ' ';
      }
    });

    return result;
  };

  // ✅ Destructure to fix "ReferenceError"
  const {
    blogTitle,
    blogDescription,
    seoTitle,
    seoDescription,
  } = blog;

  return (
    <>
      {/* SEO HEAD INJECTION */}
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content="Insurance, Property, Blog, Insights" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://mynime.com/Insights/${blogId}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </Head>

      {/* Hero Section */}
      <div className="relative max-w-[1750px] px-4 md:px-6 lg:px-12 2xl:px-24 mx-auto min-h-[500px]  text-black dark:text-white overflow-visible bg-white dark:bg-black">
        {/* Background Video 
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              borderRadius: '25px',
              boxShadow: '0px 37.32px 139.96px 0px #358E9226',
            }}
          >
            <source
              src="https://d2qu63hw0h07dh.cloudfront.net/myNime_Videos/BG.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>*/}

        {/* Foreground Content */}
        <div className="relative z-10 px-4 md:px-6 lg:px-12 2xl:px-24 max-w-[1550px] mx-auto">
          <div className="lg:w-[86%] flex flex-col gap-3 items-start justify-center text-left text-[#0A0D12] dark:text-white">
            <h1 className="hidden md:block text-[24px] md:text-[48px] font-semibold leading-tight mt-24">
              {blogTitle}
            </h1>

            {/* Mobile Heading */}
            <h1
              className="block md:hidden text-[24px] font-semibold leading-tight"
              dangerouslySetInnerHTML={{ __html: createMobileHeading(blogTitle || '') }}
            />

            {/* Truncated Description */}
            <p className="text-[9px] md:text-[16px] font-normal">{seoDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
