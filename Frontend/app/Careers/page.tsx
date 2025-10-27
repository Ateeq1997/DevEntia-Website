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
// import { Metadata } from 'next';

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

// export const metadata: Metadata = {
//   title: "Careers at DevEntia Tech Pvt. Ltd",
//   description: "Explore career opportunities at DevEntia Tech Pvt. Ltd. Find the latest job openings, including full-time, part-time, and internship positions. Apply today and join our team!",
//   openGraph: {
//     title: "Careers at DevEntia Tech Pvt. Ltd",
//     description: "Explore career opportunities at DevEntia Tech Pvt. Ltd. Find the latest job openings, including full-time, part-time, and internship positions. Apply today and join our team!",
//     siteName: "DevEntia Tech Pvt. Ltd",
//     images: [
//       {
//         url: "https://example.com/path-to-careers-image.jpg",
//         width: 800,
//         height: 600,
//         alt: "Careers at DevEntia Tech Pvt. Ltd",
//       },
//       {
//         url: "https://example.com/path-to-careers-banner.jpg",
//         width: 1800,
//         height: 1600,
//         alt: "Careers Banner Image",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

const Page = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<{ [key in FilterType]: boolean }>({
    fulltime: false,
    parttime: false,
    internship: false,
  });

  const [sortBy, setSortBy] = useState('Newest');

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
  }, [jobs, filters, sortBy]);

  const handleFilterChange = (filter: FilterType) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  const filteredJobs = jobs.filter((job) => {
    if (filters.fulltime && job.job_type === 'Full-time') return true;
    if (filters.parttime && job.job_type === 'Part-time') return true;
    if (filters.internship && job.job_type === 'Internship') return true;
    if (!filters.fulltime && !filters.parttime && !filters.internship)
      return true;
    return false;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'Newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <ImSpinner8 size={30} className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <JoinOurTeam />
      <Contact />
      {/* <div className="careers-bg">
        <CareerFillters
          jobLength={sortedJobs.length}
          filters={filters}
          onFilterChange={handleFilterChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />
        <section className="px-[5%] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {sortedJobs.length !== 0 ? (
            sortedJobs.map((job) => (
              <CareerCard
                key={job._id}
                title={job.job_title}
                description={job.job_description}
                jobType={job.job_type}
                location={job.location}
                jobId={job._id}
              />
            ))
          ) : (
            <div className="text-white flex justify-center items-center w-full">
              No jobs found. We are regularly posting new jobs. Stay connected
              for new opportunities.
            </div>
          )}
        </section>
      </div> */}
    </>
  );
};

export default Page;
