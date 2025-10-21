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
    <section className="w-full py-20 flex justify-center bg-white dark:bg-[#161616] transition-colors duration-500">
      <div className="flex flex-wrap justify-center gap-0">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-center justify-center
              w-72 h-72 sm:w-80 sm:h-80
              rounded-full border-[0.96px] 
              border-black dark:border-[#404040]   /* ✅ Correct theme-based border colors */
              text-black dark:text-white
              transition-all duration-500
              overflow-visible
              -ml-[50px] first:ml-0
              bg-transparent
              shadow-[inset_0_0_30px_rgba(0,0,0,0.05),_0_0_20px_rgba(0,0,0,0.05)]
              dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.05),_0_0_20px_rgba(255,255,255,0.05)]
            `}
          >
            {/* 🔵 Blue glow behind content (center only) */}
            <div className="absolute w-40 h-40 sm:w-48 sm:h-48 bg-blue-500/25 blur-2xl rounded-full"></div>

            <h3 className="text-5xl font-bold mb-2 relative z-10">{item.number}</h3>
            <p className="text-sm opacity-90 relative z-10">{item.label1}</p>
            <p className="text-sm opacity-90 relative z-10">{item.label2}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
