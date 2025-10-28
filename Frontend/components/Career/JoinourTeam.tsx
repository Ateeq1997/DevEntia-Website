'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiClock, FiSearch } from 'react-icons/fi';
import { IoChevronDownOutline } from "react-icons/io5";

const JoinOurTeam = () => {
  const [search, setSearch] = useState('');
  const [jobType, setJobType] = useState('Fulltime');
  const [role, setRole] = useState('UI/UX Designer');
  const [viewportScale, setViewportScale] = useState(1);

  // Handle browser zoom responsiveness
  useEffect(() => {
    const handleZoom = () => {
      const scale = window.visualViewport?.scale || 1;
      setViewportScale(scale);
    };

    window.visualViewport?.addEventListener('resize', handleZoom);
    handleZoom();

    return () => {
      window.visualViewport?.removeEventListener('resize', handleZoom);
    };
  }, []);

  const jobs = [
    { id: 1, title: 'Project Manager', type: 'Full-time' },
    { id: 2, title: 'Front-end Developer', type: 'Full-time' },
    { id: 3, title: 'Project Manager', type: 'Full-time' },
    { id: 4, title: 'Back-end Developer', type: 'Full-time' },
    { id: 5, title: 'Project Manager', type: 'Full-time' },
    { id: 6, title: 'Front-end Developer', type: 'Full-time' },
    { id: 7, title: 'Back-end Developer', type: 'Full-time' },
    { id: 8, title: 'Project Manager', type: 'Full-time' },
    { id: 9, title: 'Front-end Developer', type: 'Full-time' },
  ];

  return (
    <section
      className="transition-colors duration-500 bg-white dark:bg-[#0D0D0D] text-black dark:text-white py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{
        transform: `scale(${1 / viewportScale})`,
        transformOrigin: 'top center',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading and Paragraph */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3 leading-tight">
            Join our team
          </h2>
          <p className="text-gray-600 dark:text-[#A7ADBE] text-sm sm:text-base md:text-lg leading-relaxed">
            Our philosophy is simple hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full">
          {/* Search Bar */}
          <div className="relative flex-1 min-w-[220px] sm:max-w-[250px]">
            <FiSearch className="absolute left-3 top-3 text-[#646584]" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#646584] rounded-lg pl-10 pr-4 py-2.5 
              text-black placeholder-[#646584]
              focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            />
          </div>

          {/* Job Type */}
          <div className="relative flex-1 min-w-[220px] sm:max-w-[250px]">
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full bg-white border border-[#646584] rounded-lg px-4 py-2.5
              text-black appearance-none
              focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            >
              <option className="text-[#646584]">Fulltime</option>
              <option className="text-[#646584]">Part-time</option>
              <option className="text-[#646584]">Internship</option>
            </select>
            <IoChevronDownOutline
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#646584] pointer-events-none"
              size={18}
            />
          </div>

          {/* Role Select */}
          <div className="relative flex-1 min-w-[220px] sm:max-w-[250px]">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full appearance-none bg-white border border-[#646584] rounded-lg px-4 py-2.5 
              text-black focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
            >
              <option className="text-[#646584]">UI/UX Designer</option>
              <option className="text-[#646584]">Frontend Developer</option>
              <option className="text-[#646584]">Backend Developer</option>
              <option className="text-[#646584]">Project Manager</option>
            </select>
            <IoChevronDownOutline
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#646584] pointer-events-none"
              size={18}
            />
          </div>
        </div>

        {/* Job Listings */}
      <div className="space-y-4">
  {jobs.map((job, index) => (
    <div
      key={job.id}
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3
      ${
        index % 2 === 0
          ? 'bg-gray-100 dark:bg-[#1A1A1A]'
          : 'bg-transparent'
      } 
      px-5 sm:px-6 py-4 sm:py-5 shadow-md 
      hover:bg-gray-200 dark:hover:bg-[#1E1E1E] 
      transition-all`}
    >
      <h3 className="text-lg font-medium text-black dark:text-white">
        {job.title}
      </h3>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full sm:w-auto gap-3 sm:gap-6">
        <div className="flex items-center text-[#646584] text-sm">
          <FiClock className="mr-2" />
          {job.type}
        </div>
<Link href="/Careers/showjobs">
  <button className="bg-[#4F46E5] hover:bg-[#5F56FF] text-white font-medium px-4 py-2 text-sm sm:text-base transition-all">
    View Job
  </button>
</Link>


      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
