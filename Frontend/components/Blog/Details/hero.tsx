'use client';

import { useParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const Hero = () => {
  const params = useParams();
  const idParam = params?.id;
  const blogId = Array.isArray(idParam) ? idParam[0] : idParam;

  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) return;

      try {
        const res = await fetch(`/api/blog/${blogId}`);
        if (!res.ok) throw new Error('Failed to fetch blog');

        const data = await res.json();
        const cleanText = stripHtml(data?.blogDescription ?? '');
        const sentences = cleanText.match(/[^.!?]+[.!?]+/g) || [];
        const firstTwoSentences = sentences.slice(0, 2).join(' ').trim();

        setHeading(data?.blogTitle ?? '');
        setDescription(firstTwoSentences);
        setSeoTitle(data?.seoTitle ?? data?.blogTitle ?? '');
        setSeoDescription(data?.seoDescription ?? firstTwoSentences);
      } catch (err) {
        console.error('Error fetching blog:', err);
      }
    };

    fetchBlog();
  }, [blogId]);

  const stripHtml = (html: string) => {
    if (typeof window !== 'undefined') {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.textContent || div.innerText || '';
    }
    return '';
  };

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
      <div className="relative max-w-[1750px] px-4 md:px-6 lg:px-12 2xl:px-24  mx-auto min-h-[500px] sm:min-h-[600px] text-white overflow-visible bg-white">
        {/* Background Video */}
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
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 px-4 md:px-6 lg:px-12 2xl:px-24 max-w-[1550px] mx-auto">
          <div className="lg:w-[86%] flex flex-col gap-3 items-start text-left text-[#0A0D12]">
            <div className="flex flex-row items-center gap-3 text-[#181D27] font-semibold mb-16 hidden md:flex">
              <Link href="/Resources">
                <p className="cursor-pointer hover:text-[#358E92] hover:underline">
                  Resources
                </p>
              </Link>
              <ChevronRight size={16} />
              <Link href="/Insights">
                <p className="cursor-pointer hover:text-[#358E92] hover:underline">
                  Insights
                </p>
              </Link>
            </div>

            <p className="text-[#358E92] font-inter font-semibold text-[12px] md:text-[20px] leading-[160%] tracking-[-3%]">
              Property Insurance Management
            </p>

            {/* Desktop Heading */}
            <h1 className="hidden md:block text-[24px] md:text-[48px] font-semibold leading-tight">
              {heading}
            </h1>

            {/* Mobile Heading */}
            <h1
              className="block md:hidden text-[24px] font-semibold leading-tight"
              dangerouslySetInnerHTML={{ __html: createMobileHeading(heading) }}
            />

            {/* Truncated Description */}
            <p className="text-[9px] md:text-[16px] font-normal">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
