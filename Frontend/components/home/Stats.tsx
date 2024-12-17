import { statsData } from '@/data/data';
import React from 'react';
import ScrollCounter from './Counter';

const StatsAndPartners = () => {
  return (
    <>
      <div className="bg-[#191919] text-white ">
        
        <div className="w-full relative h-full bg-[#141414] justify-center  flex md:items-center flex-wrap md:justify-around lg:gap-6 gap-4">
           {/* Base dark background */}
     
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, 
            #141414 0%,
            #4848FF 30%,
            #4848FF 61%,
            #141414 100%
          )`,
          opacity: '0.61' // Matching the 61% from Figma
        }}
      />

          {statsData.map((item, index) => (
            <div
              className="flex flex-col items-center z-10 gap-1 p-4 leading-none"
              key={index + 0.05 * 2}
            >
              <ScrollCounter targetValue={item.value} />
              {/* <h1 className="text-[8rem] font-semibold">+{item.value}</h1> */}
              <h3 className="uppercase ml-8  lg:text-[1.5rem]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-full bg-[#191919]">
        <InfiniteMovingCards
          items={partnersData}
          direction="right"
          speed="slow"
        />
      </div> */}
    </>
  );
};

export default StatsAndPartners;
