"use client";
import React from "react";

interface StoryboardCard {
  image: string;
  description: string;
}

interface UserStoryboardProps {
  cards: StoryboardCard[];
}

const UserStoryboard: React.FC<UserStoryboardProps> = ({ cards }) => {
  return (
    <div className="px-[5%] py-6  flex flex-col items-center justify-center">
      <h1 className="text-[24px] md:text-[56px] font-inter font-bold text-white">
        User Storyboard
      </h1>
      <div className="w-[200px] sm:w-[380px] h-[2px] bg-white mx-auto mt-0" />
      <div className="w-[160px] sm:w-[340px] h-[2px] bg-white mx-auto mt-2" />

      {/* Outer rounded container with bg clipping */}
      <div
        className="mt-12 rounded-2xl overflow-hidden w-full py-16 
             bg-[url('/casestudy/storybg.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-xl   "
            >
              <div className="border border-[#3B3BD3] rounded-lg overflow-hidden w-full h-full lg:w-[349px] lg:h-[320px] mb-6">
                <img
                  src={card.image}
                  alt={card.description}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 text-sm md:text-[20px] mt-2 font-inter">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStoryboard;