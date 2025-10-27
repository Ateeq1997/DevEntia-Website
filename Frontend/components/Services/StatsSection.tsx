'use client';
import React from 'react';

const stats = [
  { number: '125+', label1: 'Projects', label2: 'Completed' },
  { number: '08', label1: 'Years of', label2: 'Experience' },
  { number: '2k+', label1: 'Happy', label2: 'Customers' },
  { number: '38', label1: 'Awards', label2: 'Achievement' },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16 sm:py-20 flex justify-center bg-white dark:bg-[#161616] transition-colors duration-500">
      <div
        className="
          flex flex-col sm:flex-row 
          items-center justify-center
          gap-0 sm:gap-0
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center justify-center
              w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
              rounded-full border border-black dark:border-[#404040]
              text-black dark:text-white/75
              transition-all duration-500
              bg-transparent
              shadow-[inset_0_0_30px_rgba(0,0,0,0.05),_0_0_20px_rgba(0,0,0,0.05)]
              dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.05),_0_0_20px_rgba(255,255,255,0.05)]
              ${index !== 0 ? '-mt-[60px] sm:mt-0 sm:-ml-[50px]' : ''}
            `}
          >
            {/* Blue glow */}
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-blue-500/25 blur-2xl rounded-full"></div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 relative z-10">
              {item.number}
            </h3>
            <p className="text-xs sm:text-sm opacity-90 relative z-10">{item.label1}</p>
            <p className="text-xs sm:text-sm opacity-90 relative z-10">{item.label2}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
