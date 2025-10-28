'use client';

import axiosInstance from '@/lib/axiosInstance';
import Hero from '@/components/Career/Hero';
import JobDetails from '@/components/Career/JobDetails/JobDetails';
import ApplyNow from '@/components/Career/JobDetails/ApplyNow';
import { useEffect, useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';


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
      <JobDetails />
      <ApplyNow />
  
    </>
  );
};

export default Page;
