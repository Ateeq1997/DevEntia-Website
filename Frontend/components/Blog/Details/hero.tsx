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
<div className="relative max-w-[1750px] px-4 md:px-6 lg:px-12 2xl:px-24 mx-auto min-h-[39rem] text-black dark:text-white overflow-hidden bg-white dark:bg-black">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/blogs/saas-concept-collage.jpg"
      alt="Background"
      className="w-full h-full object-cover"
      style={{
        boxShadow: '0px 37.32px 139.96px 0px #358E9226',
      }}
    />
  </div>

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-blue-800/90 dark:bg-blue-800/40 z-[1] mix-blend-multiply"></div>

  {/* Foreground Content */}
  <div className="absolute inset-0 z-10 flex items-center">
    <div className="px-6 md:px-12 lg:px-24 2xl:px-32 w-full md:w-[70%] flex flex-col gap-4 items-start text-left text-white">
      <h1 className="hidden md:block text-[24px] md:text-[48px] font-semibold leading-tight">
        {blogTitle}
      </h1>

      {/* Mobile Heading */}
      <h1
        className="block md:hidden text-[24px] font-semibold leading-tight"
        dangerouslySetInnerHTML={{ __html: createMobileHeading(blogTitle || '') }}
      />

      {/* Description */}
      <p className="text-[9px] md:text-[16px] font-normal">
        {seoDescription}
      </p>
    </div>
  </div>
</div>

    </>
  );
};

export default Hero;
