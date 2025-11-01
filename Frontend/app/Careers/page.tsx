'use client';

import axiosInstance from '@/lib/axiosInstance';
import CareerCard from '@/components/Career/CareerCard';
import CareerFillters from '@/components/Career/CareerFillters';
import JoinOurTeam from '@/components/Career/JoinourTeam';
import Hero from '@/components/Career/Hero';
import Contact from '@/components/home/contact';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { Metadata } from 'next';

interface Job {
  _id: number;
  job_title: string;
  job_description: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  job_type: string;
}

type FilterType = 'fulltime' | 'parttime' | 'internship';

// -------- SEO Metadata --------
export const metadata: Metadata = {
  title: "Careers at DevEntia - Join Our Growing Tech Team",
  description:
    "Join DevEntia Tech's innovative team! Explore career opportunities for developers, designers, and engineers. Remote-friendly, competitive salary, and growth opportunities.",
  keywords: [
    "software developer jobs",
    "IT careers",
    "remote developer jobs",
    "tech company careers",
  ],
  openGraph: {
    title: "Careers at DevEntia - Join Our Growing Tech Team",
    description:
      "Join DevEntia Tech's innovative team! Explore career opportunities for developers, designers, and engineers. Remote-friendly, competitive salary, and growth opportunities.",
    url: "https://dev.deventiatech.com/Careers",
    siteName: "DevEntia Tech Pvt. Ltd",
    images: [
      {
        url: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417325/careers-banner.jpg",
        width: 1200,
        height: 630,
        alt: "DevEntia Tech Careers Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Page = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosInstance.get('/job/get');
        setJobs(response.data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <ImSpinner8 size={30} className="animate-spin" />
      </div>
    );
  }

  // -------- JSON-LD JobPosting Schema --------
  const jobSchema = jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.job_title,
    description: job.job_description,
    datePosted: job.createdAt,
    validThrough: new Date(new Date(job.createdAt).getTime() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days validity
    employmentType: job.job_type,
    hiringOrganization: {
      "@type": "Organization",
      name: "DevEntia Tech Pvt. Ltd",
      sameAs: "https://dev.deventiatech.com",
      logo: "https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417325/careers-banner.jpg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blue Area",
        addressLocality: "Islamabad",
        postalCode: "44000",
        addressCountry: "PK",
      },
    },
  }));

  return (
    <>
      {/* H1 for SEO */}
      <h1 className="sr-only">
        Shape the Future of Technology - Join DevEntia Tech
      </h1>

      <Hero />
      <JoinOurTeam />
      <Contact />

      {/* JSON-LD Schema for all jobs */}
      {jobSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default Page;
