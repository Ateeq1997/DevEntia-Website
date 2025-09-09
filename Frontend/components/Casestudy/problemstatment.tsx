"use client";
import React from "react";

interface ProblemStatementProps {
  title?: string;
  problemText: string;
  solutions: string[];
  image?: string;        // foreground mockup image
  bgImage?: string; 
  img?:string;     // background image (full section)
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({
  title = "Problem Statement",
  problemText,
  solutions,
  image,
  img,
  bgImage,
}) => {
  return (
    <section
      className="relative text-white py-12 px-[5%]"
      style={{
        backgroundColor: "#020617",
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* optional overlay to darken */}
      

      <div className="relative mx-auto text-center z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-[56px] font-inter font-bold mb-12">
          {title}
          <span className="block w-72 h-[2px] bg-white/80 mx-auto mt-3" />
        </h2>

        {/* Problem */}
        <p className="text-gray-300 text-base md:text-[30px] font-inter leading-relaxed mb-12">
          {problemText}
        </p>

        {/* Foreground mockup */}
        {image && (
          <div className="flex justify-center mb-12">
            <img
              src={image}
              alt="Problem Statement visual"
              className=" w-full object-contain drop-shadow-2xl"
            />
          </div>
        )}

        {/* Solutions */}
        <h3 className="text-2xl md:text-[56px] font-semibold font-inter mb-4 mt-16">Solution</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full justify-between">
  {/* Bullet list */}
  <ul className="text-left text-[16px] md:text-[30px] list-disc list-inside space-y-4 text-gray-300 font-inter w-full md:w-[65%]">
    {solutions.map((point, index) => (
      <li className="font-inter " key={index}>{point}</li>
    ))}
  </ul>

  {/* Image on the right */}
  {image && (
  <div className="flex-1 flex justify-center md:justify-end relative">
    {/* Image */}
    <img
      src={img} // <- use the prop
      alt="Solution visual"
      className="max-w-sm w-full object-contain relative z-10"
    />

    {/* Full rounded blue glow behind image */}
    <div className="absolute inset-0 w-full h-full bg-blue-200/10 rounded-5xl blur-2xl z-0" />
  </div>
)}


</div>

       
      </div>
    </section>
  );
};

export default ProblemStatement;
