'use client';

import React from 'react';

interface ProcessItem {
  title: string;
  description: string;
}

interface OurProcessesSectionProps {
  heading: string;
  subHeading: string;
  subText: string;
  processes: ProcessItem[];
}

const OurProcessesSection: React.FC<OurProcessesSectionProps> = ({
  heading,
  subHeading,
  subText,
  processes,
}) => {
  return (
    <section className="py-20 px-5 md:px-20 bg-white dark:bg-[#06091a] transition-colors duration-500">
      {/* Title */}
      <p className="font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2 text-[#323232] dark:text-[#B2B2B2]">
        {heading}
      </p>

      {/* Heading */}
      <h2 className="text-black dark:text-white font-bold text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-12">
  {subHeading}
</h2>
   {/* Paragraph */}
<p className="font-['Bai_Jamjuree'] font-normal text-[18px] leading-[28px] text-[#3A3A3A] dark:text-[#C2C2C2] mb-12 whitespace-pre-line">
  {subText}
</p>


      {/* Timeline */}
      <div className="relative flex flex-col gap-12 ml-6 md:ml-12">
        {processes.map((process, index) => (
          <div key={index} className="relative flex items-start">
            {/* Circle + Line */}
            <div className="flex flex-col items-center mr-6 relative">
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

              {index !== processes.length - 1 ? (
                <div
                  className="absolute top-[34px]"
                  style={{
                    width: '2px',
                    height: '160px',
                    background:
                      'linear-gradient(180deg, #4848FF 0%, #4848FF 70%, rgba(72, 72, 255, 0) 100%)',
                  }}
                ></div>
              ) : (
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
