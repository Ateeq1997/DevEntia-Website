import React from "react";

interface StatItem {
  image: string; // image path instead of number
  text: string;
  imageClass?: string;
}

interface StatisticsProps {
  items: StatItem[];
}

const Statistics: React.FC<StatisticsProps> = ({ items }) => {
  return (
    <div className="px-[5%]">
      <div
        className="
          rounded-xl p-10 flex flex-col py-24 lg:flex-row 
          justify-between items-center w-full text-white 
          gap-16 lg:gap-10 overflow-hidden mb-12 
          bg-no-repeat bg-center 
          bg-cover lg:bg-contain
        "
        style={{
          backgroundImage: "url('/casestudy/statsbg1.png')",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 lg:gap-8 px-2 text-center w-full lg:w-1/4"
          >
            <img
              src={item.image}
              alt={`stat-${index + 1}`}
              className={item.imageClass ?? "w-[200px] h-auto object-contain"}
            />
            <p className="mt-3 text-[18px] md:text-[24px] font-inter font-medium leading-tight break-words max-w-[280px] md:max-w-[340px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
