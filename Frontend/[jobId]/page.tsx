'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import JoinOurTeam from '../../../components/Career/JoinourTeam';

const JobDescriptionPage = () => {
  const { jobId } = useParams();

  // You could fetch details from an API or a local array later
  const jobs = [
    { id: 1, title: 'Project Manager', description: 'Manage project timelines, teams, and deliverables effectively.' },
    { id: 2, title: 'Front-end Developer', description: 'Build user interfaces using React, Next.js, and Tailwind CSS.' },
    { id: 3, title: 'Project Manager', description: 'Coordinate resources and ensure timely delivery of projects.' },
    { id: 4, title: 'Back-end Developer', description: 'Develop server-side APIs using Node.js and Express.' },
    { id: 5, title: 'Project Manager', description: 'Drive client communication and ensure satisfaction.' },
    { id: 6, title: 'Front-end Developer', description: 'Collaborate with designers to build responsive interfaces.' },
    { id: 7, title: 'Back-end Developer', description: 'Ensure database performance and security.' },
    { id: 8, title: 'Project Manager', description: 'Supervise multiple concurrent projects efficiently.' },
    { id: 9, title: 'Front-end Developer', description: 'Write clean, maintainable code with focus on performance.' },
  ];

  const job = jobs.find((j) => j.id.toString() === jobId);

  return (
    <section className="bg-white dark:bg-[#0D0D0D] text-black dark:text-white py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* ✅ Reuse the Hero (JoinOurTeam Section) */}
      <JoinOurTeam />

      <div className="max-w-4xl mx-auto mt-20">
        {job ? (
          <>
            <h1 className="text-3xl md:text-5xl font-semibold mb-5">{job.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg">{job.description}</p>
          </>
        ) : (
          <p className="text-red-500 text-center">Job not found</p>
        )}
      </div>
    </section>
  );
};

export default JobDescriptionPage;
