import React from "react";
import Image from 'next/image'
import { StaticImageData } from "next/image";
import vector from "../../../assets/images/Vector.png";
interface CardProps {
  image: string  | StaticImageData; // Type for the icon component
  title: string;
  description: string;
  borderGradient: string;
  iconBg: string;
}

const WhyDeventiaCard: React.FC<CardProps> = ({
  image,
  title,
  description,
  borderGradient,
  iconBg,
}) => {
  return (
    <div
      className={`p-6 rounded-lg border ${borderGradient} bg-gradient-to-b to-transparent  backdrop-blur-sm
        hover:translate-y-[-5px] transition-all duration-300 lg:w-[300px] lg:h-[300px]`}
      style={{
        border: "1px solid transparent",
        background: `linear-gradient(#141414, #141414) padding-box, ${borderGradient} border-box`,
      }}
    >
      <div className={`w-12  h-12 ${iconBg} rounded-lg p-3 mb-4`}>
       <Image src={image}
       alt=""
       >
        
       </Image>
      </div>
      <h3 className="text-xl md:text-sm lg:text-xl font-sora font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="font-manrope text-sm md:text-xs lg:text-[0.9rem] text-gray-300 md:min-h-[70px] mb-4">
        {description}
      </p>
      <button className="text-white font-sora  text-[14px] flex items-center gap-2 hover:gap-3 transition-all duration-300">
        Read More
        <span className="m-auto ">
          <Image
          src={vector}
          alt=""
          >
          </Image>
        </span>
      </button>
    </div>
  );
};

export default WhyDeventiaCard;
