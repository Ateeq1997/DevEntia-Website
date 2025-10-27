import React from "react";
import { Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";


interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  quote: string;
  image: string | StaticImageData; // 👈 updated
  video?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  quote,
  image,
  video = false,
}) => {
  return (
    <div className="bg-gray-50 py-[3%] px-[5%] bg-white dark:bg-[#4848FF26] shadow-sm flex flex-col gap-8  gap-8">
      {/* Left: Text Section */}
      <h1 className="text-2xl md:text-[50px] text-black dark:text-white font-semibold leading-tight ">Happy Words From Happy Customer</h1>
      <div className="bg-[#F0F0F0] dark:bg-[#2B2B99] px-5 py-8 mt-2 md:mt-8 rounded-lg flex flex-col lg:flex-row justify-between gap-12 w-full">
      <div className=" flex flex-col gap-4 w-full px-2 md:px-8 mt-8 lg:w-[45%]">
        <div className="flex items-center gap-4">
          <Image
  src={image}
  alt={name}
  width={500}
  height={300}
  className="w-20 h-20 rounded-full object-cover"
/>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-black dark:text-white md:text-[26px]">{name}</h3>
            <p className="text-sm md:text-[16px] text-[#4D4D4D] dark:text-[#FCFCFC]">
              {role}
              {company ? `, ${company}` : ""}
            </p>
          </div>
        </div>

        <p className="text-[#4D4D4D] dark:text-[#FCFCFC] text-[15px] md:text-[22px] leading-relaxed mt-5 px-0 md:px-2">
          “{quote}”
        </p>
      </div>
       <div className="relative w-full lg:h-[450px] rounded-2xl overflow-hidden flex-shrink-0 flex-1 justify-end flex items-end">
      <Image
  src={image}
  alt={name}
  width={300}
  height={300}
  className="w-full h-full  object-contain"
/>
        {video && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <button className="bg-white/80 hover:bg-white rounded-full p-3 transition">
              <Play className="text-black" />
            </button>
          </div>
        )}
      </div>
</div>
      {/* Right: Image or Video Thumbnail */}
     
    </div>
  );
};

export default TestimonialCard;
