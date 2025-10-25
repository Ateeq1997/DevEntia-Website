'use client';

import React, { useState } from 'react';

const ProcessSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const steps = [
    {
      id: '01',
      title: 'Kick-off',
      desc: 'We assess your needs and objectives, create design concepts, and determine the best AI solution to build.',
    },
    {
      id: '02',
      title: 'Data preparation',
      desc: 'We collect, clean, and prepare your data to ensure top quality before feeding it into the AI model.',
    },
    {
      id: '03',
      title: 'Model selection and training',
      desc: 'Based on your requirements and collected data, we select, implement, and train the most suitable AI model.',
    },
    {
      id: '04',
      title: 'Model evaluation',
      desc: 'We test the AI model to validate its performance, accuracy, and robustness across different data types.',
    },
    {
      id: '05',
      title: 'Model deployment',
      desc: 'After building, validating, and testing the model, we seamlessly integrate it into your existing infrastructure.',
    },
    {
      id: '06',
      title: 'Solution maintenance',
      desc: 'We monitor performance, apply updates, fix issues, and repeat the process to ensure optimal results.',
    },
  ];

  const renderBars = (type: 'shrink' | 'grow', rowType: string) => {
    const bars = Array.from({ length: 75 });
    return (
      <div
        className="flex justify-between w-full"
        onMouseEnter={() => setHoveredRow(rowType)}
        onMouseLeave={() => {
          setHoveredRow(null);
          setHoveredBarIndex(null);
        }}
      >
        {bars.map((_, i) => {
          const progress = i / bars.length;
          const height = type === 'shrink' ? 27 - progress * 25 : 3 + progress * 25;

          const isHighlighted =
            hoveredRow === rowType && hoveredBarIndex !== null && i <= hoveredBarIndex;

          return (
            <span
              key={i}
              onMouseEnter={() => setHoveredBarIndex(i)}
              className="w-[3px] sm:w-[4px] rounded-sm transition-all duration-200"
              style={{
                height: `${height}px`,
                backgroundColor: isHighlighted ? '#1753FF' : '#343D54',
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section className="w-full bg-white dark:bg-[#06091a] text-black dark:text-white py-16 sm:py-20 px-4 sm:px-8 md:px-16 transition-colors duration-500 select-none">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto">
        <p className="text-[12px] sm:text-[13px] tracking-widest font-semibold text-gray-800 dark:text-[#B2B2B2] mb-2 text-center sm:text-left">
          OUR PROCESS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-black dark:text-white text-center sm:text-left font-['Bai_Jamjuree']">
          AI software development process
        </h2>

        {/* Kick-off and Solution Maintenance Bars */}
        <div className="w-full mb-16 sm:mb-20">
          {/* Kick-off label */}
          <div className="flex justify-center sm:justify-start mb-2">
            <p className="text-xs md:text-sm font-semibold text-[#1753FF] font-['Bai_Jamjuree']">
              KICK-OFF
            </p>
          </div>

          {/* Kick-off bars */}
          <div className="w-full flex justify-center mb-8 group">
            {renderBars('shrink', 'kickoff')}
          </div>

          {/* Solution maintenance bars */}
          <div className="w-full flex justify-center group">
            {renderBars('grow', 'solution')}
          </div>

          {/* Solution maintenance label */}
          <div className="flex justify-center sm:justify-end mt-2">
            <p className="text-xs md:text-sm font-semibold text-[#1753FF] font-['Bai_Jamjuree']">
              SOLUTION MAINTENANCE
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 gap-y-10 sm:gap-y-14">
          {steps.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative transition-all duration-300"
            >
              {/* Step ID */}
              <span
                className={`font-['Bai_Jamjuree'] text-[15px] sm:text-[16px] leading-[24px] transition-colors duration-300 ${
                  hoverIndex === i
                    ? 'text-[#1753FF]'
                    : 'text-[#666E85] dark:text-[#B2B2B2]'
                }`}
              >
                {s.id}
              </span>

              {/* Underline */}
              <div
                className={`w-full h-[2px] sm:h-[3px] mt-1 mb-3 transition-colors duration-300 ${
                  hoverIndex === i
                    ? 'bg-[#1753FF]'
                    : 'bg-[#666E85] dark:bg-[#B2B2B2]'
                }`}
              />

              {/* Title */}
              <h3
                className="font-['Bai_Jamjuree'] font-medium text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] mb-2"
              >
                {s.title}
              </h3>

              {/* Description */}
              <p className="font-['Bai_Jamjuree'] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#3A3A3A] dark:text-[#C2C2C2]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
