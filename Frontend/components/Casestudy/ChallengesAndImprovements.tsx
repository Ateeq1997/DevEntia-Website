"use client";
import React from "react";
import InfoSection, { InfoCard } from "./challenges";

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
    <div className="bg-[url('/casestudy/challengesbg.png')] bg-cover bg-center bg-no-repeat py-20 px-[5%]">
     <InfoSection title="Challenges" items={challenges} underlineWidth="w-52" underlineWidth2="w-44" />
<InfoSection title="Future Improvements" items={improvements} underlineWidth="w-92" underlineWidth2="w-72" />

    </div>
  );
};

export default ChallengesAndImprovements;
