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
    <div className="px-[5%] py-12 flex flex-col items-center justify-center">
      <h1 className="text-[24px] md:text-[56px] font-inter font-bold text-white">
        User Storyboard
      </h1>
      <div className="w-12 sm:w-[380px] h-[2px] bg-white mx-auto mt-0" />
      <div className="w-12 sm:w-[340px] h-[2px] bg-white mx-auto mt-2" />

      {/* Rounded container so bg clips properly */}
      <div className="mt-12 rounded-2xl overflow-hidden w-full">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                     bg-cover bg-center bg-no-repeat gap-6 px-6 py-16"
          style={{ backgroundImage: "url('/casestudy/storybg.png')" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-xl p-6 shadow "
            >
                <div className="border border-[#3B3BD3] rounded-lg overflow-hidden mb-6">
              <img
                src={card.image}
                alt={card.description}
                className="w-full h-auto object-cover  "
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
