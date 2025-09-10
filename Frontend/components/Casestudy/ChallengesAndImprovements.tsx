"use client";
import React from "react";
import { InfoSection, InfoCard, AppPreviewSection } from "./challenges"; // ✅ use named imports

const ChallengesAndImprovements = () => {
  const challenges: InfoCard[] = [
    {
      image: "/casestudy/card1.png",
      text: "Balancing simplicity with nutritional detail.",
    },
    {
      image: "/casestudy/card2.png",
      text: "Showing nutrition details clearly without overload.",
    },
    {
      image: "/casestudy/card3.png",
      text: "Designing a clear, easy-to-understand meal scoring.",
    },
  ];

  const improvements: InfoCard[] = [
    {
      image: "/casestudy/card1.png",
      text: "Barcode scanning for faster input.",
    },
    {
      image: "/casestudy/card2.png",
      text: "More personalized meal plans.",
    },
    {
      image: "/casestudy/card3.png",
      text: "Enhanced nutrient insight with visual charts.",
    },
  ];

  return (
    <div>

    
    <div className="bg-[url('/casestudy/challengesbg.png')] bg-contain bg-center bg-no-repeat py-20 px-[5%] flex flex-col items-center ">
     <InfoSection title="Challenges" items={challenges} underlineWidth="w-52" underlineWidth2="w-44" />
<InfoSection title="Future Improvements" items={improvements} underlineWidth="w-92" underlineWidth2="w-72" />
      <h1 className="font-bold font-inter text-[26px] md:text-[59px] mt-16">High Fidelity Design</h1>
      <div className='h-[2px] bg-white mx-auto mb-1 w-[270px] md:w-[500px]' />
      <div className='h-[2px] bg-white mx-auto mb-1 w-[200px] md:w-[400px]' />


    </div>

    <AppPreviewSection
  description="This high-fidelity design presents clear score breakdowns, detailed nutritional insights, and easy options to make changes or add notes — ensuring users can track and improve their meals with precision and ease."
  cards={[
    { image: "/casestudy/Group 1982250004.png" },
  ]}
/>

    </div>
  );
};

export default ChallengesAndImprovements;
