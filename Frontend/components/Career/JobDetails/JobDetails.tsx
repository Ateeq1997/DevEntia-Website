'use client';
import React from "react";
import { FaBriefcase } from "react-icons/fa";

const JobDetails = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-500 py-10">
      {/* Heading + Paragraph */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
        <h2 className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500">
          Job Details
        </h2>
        <p className="text-gray-600 dark:text-[#A1A1A1] font-[Bai Jamjuree] text-base sm:text-lg md:text-[18px] leading-relaxed tracking-[-0.02em] transition-colors duration-500">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
        </p>
      </div>

      {/* Main Container */}
      <div className="bg-gray-100 dark:bg-[#2C2C2C] p-4 sm:p-6 md:p-8 rounded-lg space-y-8 transition-colors duration-500 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
        {/* Job Role Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
          <div className="flex items-start gap-4 flex-1">
            <FaBriefcase className="text-black dark:text-white text-2xl sm:text-3xl mt-1 transition-colors duration-500" />
            <div>
              <h3 className="text-black dark:text-white text-lg sm:text-xl md:text-2xl font-semibold mb-1 transition-colors duration-500">
                Mobile App Developer
              </h3>
              <p className="text-gray-600 dark:text-[#A1A1A1] text-sm sm:text-base md:text-[18px] transition-colors duration-500">
                Squarespace in New York · 2 days ago
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-end">
            <button className="bg-white text-black font-semibold py-2 px-4 sm:px-6 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-300">
              Back to All Jobs
            </button>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Apply Now
            </button>
          </div>
        </div>

        {/* 4 Values Sub-Container */}
        <div className="bg-gray-200 dark:bg-[#3A3A3A] p-4 sm:p-6 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center sm:text-left">
          {[
            { label: "Experience", value: "Minimum 1 Year" },
            { label: "Work Level", value: "Senior Level" },
            { label: "Employee Type", value: "Full Time Jobs" },
            { label: "Offer Salary", value: "$2150,0/Month" },
          ].map((item, index) => (
            <div key={index}>
              <p className="text-gray-600 dark:text-[#A1A1A1] text-base md:text-[18px] transition-colors duration-500">
                {item.label}
              </p>
              <h4 className="text-black dark:text-white text-lg sm:text-xl font-bold transition-colors duration-500">
                {item.value}
              </h4>
            </div>
          ))}
        </div>

        {/* Job Description */}
        <div>
          <h3 className="text-black dark:text-white text-xl sm:text-2xl font-bold mb-4 transition-colors duration-500">
            Job Description
          </h3>
          <p className="text-gray-600 dark:text-[#A1A1A1] text-base sm:text-[18px] leading-relaxed transition-colors duration-500">
           As our new mobile designer, you will work closely with the mobile product team. Your primary goals will be to design the next generation of mobile websites, apps and other mobile interfaces across multiple platforms such as iOS, Android, Windows, and mobile web.
We expect you to have an evolved understanding of how people use their devices, the flexibility to adapt to new technologies, and a robust toolkit
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <h3 className="text-black dark:text-white text-xl sm:text-2xl font-bold mb-4 transition-colors duration-500">
            Responsibilities
          </h3>
          <ul className="space-y-3">
            {[
              "Develop intuitive, usable, and engaging interactions.",
              "Provide strategic thinking and leadership.",
              "Collaborate with cross-functional teams.",
              "Manage code documentation and version control.",
              "Troubleshoot and debug software.",
              "Research mobile design patterns."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-3 h-3 mt-1 rounded-full border-2 border-[#94C889] dark:border-blue-600 flex-shrink-0"></span>
                <p className="text-gray-600 dark:text-[#A1A1A1] text-base sm:text-[18px] leading-[1.5] transition-colors duration-500">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-black dark:text-white text-xl sm:text-2xl font-bold mb-4 transition-colors duration-500">
            Requirements
          </h3>
          <ul className="space-y-3">
            {[
              "Strong graphic design skills.",
              "Ability to deliver high quality designs.",
              "Team player, adaptable to change.",
              "Expert in Photoshop, UXPin, InvisionApp.",
              "Bachelor’s degree in relevant field.",
              "Research mobile design patterns."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-3 h-3 mt-1 rounded-full border-2 border-[#94C889] dark:border-blue-600 flex-shrink-0"></span>
                <p className="text-gray-600 dark:text-[#A1A1A1] text-base sm:text-[18px] leading-[1.5] transition-colors duration-500">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider Line */}
        <div className="w-full flex justify-center my-8">
          <div className="w-full max-w-[1400px] border-t-[3px] border-[#E8E8E8] dark:border-[#4B4B4B]"></div>
        </div>

        {/* Footer Paragraph */}
        <p className="text-gray-600 dark:text-[#A1A1A1] text-base sm:text-[18px] leading-relaxed transition-colors duration-500">
          Here at Lorum, A good job pays enough to cover the bills and basic needs. A good job makes it possible to achieve a balance between work life and home life. A good job motivates an employee to want to do it well. A positive company culture is indicative of a good job environment, which is a strong indicator of a good job. A good job makes it possible to achieve a balance between work life and home life. A good job motivates an employee to want to do it well. A good job motivates an employee to want to do it well. A positive company culture is indicative of a good job environment, which is a strong indicator of a good job.
        </p>
      </div>
    </section>
  );
};

export default JobDetails;
