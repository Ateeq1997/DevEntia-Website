'use client';

import React from 'react';

const processes = [
  {
    title: 'Requirements gathering',
    description:
      'The initial stage focuses on understanding the healthcare provider\'s specific needs and goals.\nIt involves identifying the problems the software should solve, required functionalities, and necessary regulatory compliance.',
  },
  {
    title: 'Planning and analysis',
    description:
      'In this phase, developers and project managers define the project scope, required resources, timelines, and detailed specifications. They also assess potential risks and plan mitigation strategies.',
  },
  {
    title: 'Design',
    description:
      'At this stage, the software architecture is designed, including documentation detailing its functionality. \nUser interface (UI) design is a key focus in healthcare software to ensure ease of use and accessibility.',
  },
  {
    title: 'Development',
    description:
      'During this phase, developers write the software code following the specifications from the design stage. \nThe process often involves multiple iterations, with development, testing, and refinement of software components.',
  },
  {
    title: 'Testing',
    description:
      'Rigorous testing is essential in healthcare software to ensure reliability, safety, and regulatory compliance. It verifies that the software meets all required healthcare standards.',
  },
  {
    title: 'Implementation',
    description:
      'After testing and approval, the software is deployed in the healthcare setting. \nThis phase may include staff training, data migration from legacy systems, and a phased rollout for a smooth transition.',
  },
  {
    title: 'Maintenance and updates',
    description:
      'Post-deployment, ongoing maintenance ensures issues are resolved, software is updated (including security patches), and new features or functionalities can be added as needed.',
  },
];

const OurProcessesSection = () => {
  return (
    <section className="py-20 px-5 md:px-20 bg-white dark:bg-[#06091a] transition-colors duration-500">
      {/* Title */}
      <p className="font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2 text-[#323232] dark:text-[#B2B2B2]">
  Our Processes
</p>


      {/* Heading */}
      <h2 className="text-black dark:text-white font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-12">
        Healthcare software development process
      </h2>

      {/* Timeline */}
      <div className="relative flex flex-col gap-12 ml-6 md:ml-12">
        {processes.map((process, index) => (
          <div key={index} className="relative flex items-start">
            {/* Circle + Line */}
            <div className="flex flex-col items-center mr-6 relative">
              {/* Circle */}
              <div
                className="rounded-full z-10"
                style={{
                  border: '2px solid #4848FF',
                  background: '#F5F7FC',
                  width: '36px',
                  height: '36px',
                  borderRadius: '18px',
                }}
              ></div>

              {/* Vertical Line (connected except last one) */}
              {index !== processes.length - 1 ? (
                <div
                  className="absolute top-[34px]"
                  style={{
                    width: '2px',
                    height: '120px',
                    background:
                      'linear-gradient(180deg, #4848FF 0%, #4848FF 70%, rgba(72, 72, 255, 0) 100%)',
                  }}
                ></div>
              ) : (
                // Last one — line extended downward but not touching next
                <div
                  className="absolute top-[34px]"
                  style={{
                    width: '2px',
                    height: '60px',
                    background:
                      'linear-gradient(180deg, #4848FF 0%, rgba(72, 72, 255, 0) 100%)',
                  }}
                ></div>
              )}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="font-['Bai_Jamjuree'] font-semibold text-[20px] leading-[30px] text-black dark:text-white mb-2">
                {process.title}
              </h3>
              <p className="font-['Bai_Jamjuree'] font-normal text-[18px] leading-[28px] text-[#3A3A3A] dark:text-[#B2B2B2] whitespace-pre-line">

                {process.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcessesSection;
