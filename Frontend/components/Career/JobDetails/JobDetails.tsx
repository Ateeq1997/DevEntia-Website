'use client';
import React, { useState, useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";

const JobDetails = () => {
  const [viewportScale, setViewportScale] = useState(1);

  // Handle browser zoom responsiveness
  useEffect(() => {
    const handleZoom = () => {
      const scale = window.visualViewport?.scale || 1;
      setViewportScale(scale);
    };
    window.visualViewport?.addEventListener('resize', handleZoom);
    handleZoom();
    return () => window.visualViewport?.removeEventListener('resize', handleZoom);
  }, []);

  return (
    <section
      className="w-full px-8 py-12 bg-white dark:bg-[#1A1A1A] transition-colors duration-500"
      style={{
        transform: `scale(${1 / viewportScale})`,
        transformOrigin: 'top center',
      }}
    >
      {/* Left Heading + Paragraph */}
      <div className="mb-8 w-full">
        <h2 className="text-black dark:text-white text-3xl font-bold mb-4 transition-colors duration-500">
          Job Details
        </h2>
        <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] font-normal text-[18.65px] leading-relaxed tracking-[-0.03em] transition-colors duration-500">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
        </p>
      </div>

      {/* Main Large Container */}
      <div className="bg-gray-100 dark:bg-[#2C2C2C] p-6 rounded-lg space-y-8 transition-colors duration-500">
        {/* Job Role Section with Icon */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-start gap-4">
            <FaBriefcase className="text-black dark:text-white text-3xl mt-1 transition-colors duration-500" />
            <div>
              <h3 className="text-black dark:text-white text-xl font-semibold mb-1 transition-colors duration-500">
                Mobile App Developer
              </h3>
              <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] font-normal text-[18.65px] leading-[100%] tracking-[-0.03em] transition-colors duration-500">
                Squarespace in New York · 2 days ago
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-black font-semibold py-2 px-6 transition-colors duration-500">
              Back to All Jobs
            </button>
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 transition-colors duration-500">
              Apply Now
            </button>
          </div>
        </div>

        {/* 4 Values Sub-Container */}
       <div className="bg-gray-200 dark:bg-[#3A3A3A] p-4 rounded-lg flex flex-col sm:flex-row justify-between text-left gap-6 md:gap-8 transition-colors duration-500">
          <div>
            <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-[18.65px] transition-colors duration-500">
              Experience
            </p>
            <h4 className="text-black dark:text-white text-xl font-bold transition-colors duration-500">
              Minimum 1 Year
            </h4>
          </div>
          <div>
            <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-[18.65px] transition-colors duration-500">
              Work Level
            </p>
            <h4 className="text-black dark:text-white text-xl font-bold transition-colors duration-500">
              Senior Level
            </h4>
          </div>
          <div>
            <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-[18.65px] transition-colors duration-500">
              Employee Type
            </p>
            <h4 className="text-black dark:text-white text-xl font-bold transition-colors duration-500">
              Full Time Jobs
            </h4>
          </div>
          <div>
            <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-[18.65px] transition-colors duration-500">
              Offer Salary
            </p>
            <h4 className="text-black dark:text-white text-xl font-bold transition-colors duration-500">
              $2150,0/Month
            </h4>
          </div>
        </div>

        {/* Job Description */}
        <div className="w-full">
          <h3 className="text-black dark:text-white text-2xl font-bold mb-4 transition-colors duration-500">
            Job Description
          </h3>
          <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] font-normal text-[18.65px] leading-relaxed tracking-[-0.03em] transition-colors duration-500">
            As our new mobile designer, you will work closely with the mobile product team. Your primary goals will be to design the next generation of mobile websites, apps, and other mobile interfaces across multiple platforms such as iOS, Android, Windows, and mobile web. We expect you to have an evolved understanding of how people use their devices, the flexibility to adapt to new technologies, and a robust toolkit.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="w-full">
          <h3 className="text-black dark:text-white text-2xl font-bold mb-4 transition-colors duration-500">
            Responsibilities
          </h3>
          <ul className="space-y-3">
            {[
              "Develop intuitive, usable, and engaging interactions and visual designs for mobile.",
              "Provide strategic thinking and leadership.",
              "Collaborate with cross-functional teams throughout the design process.",
              "Manage code documentation and version control.",
              "Troubleshoot and debug software.",
              "Research and track advancements in mobile application design patterns."
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full border-2 border-[#94C889] dark:border-blue-600 flex-shrink-0 transition-colors duration-500"></span>
                <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-[18.65px] leading-[100%] tracking-[-0.03em] transition-colors duration-500">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="w-full">
          <h3 className="text-black dark:text-white text-2xl font-bold mb-4 transition-colors duration-500">
            Requirements
          </h3>
          <ul className="space-y-3">
            {[
              "Strong graphic design skills, with a good understanding of typography, intuitive layouts and palette development.",
              "Proven ability to deliver high quality designs to customers.",
              "A team player who can easily adapt in a rapidly changing environment.",
              "Expert level skills in Photoshop, InvisionApp, UXPin and other relevant design tools.",
              "A bachelor or higher degree in interaction design, human-computer interaction.",
              "Research and track advancements in mobile application design patterns."
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full border-2 border-[#94C889] dark:border-blue-600 flex-shrink-0 transition-colors duration-500"></span>
                <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-[18.65px] leading-[100%] tracking-[-0.03em] transition-colors duration-500">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Horizontal Line */}
        <div className="w-full flex justify-center my-8">
          <div className="w-full h-1 max-w-[1500px] border-t-[3.33px] border-[#E8E8E8] dark:border-[#4B4B4B] transition-colors duration-500"></div>
        </div>

        {/* Bottom Paragraph */}
        <div className="w-full">
          <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-[18.65px] leading-relaxed tracking-[-0.03em] transition-colors duration-500">
           Here at Lorum, A good job pays enough to cover the bills and basic needs. A good job makes it possible to achieve a balance between work life and home life. A good job motivates an employee to want to do it well. A positive company culture is indicative of a good job environment, which is a strong indicator of a good job. A good job makes it possible to achieve a balance between work life and home life. A good job motivates an employee to want to do it well. A good job motivates an employee to want to do it well. A positive company culture is indicative of a good job environment, which is a strong indicator of a good job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
