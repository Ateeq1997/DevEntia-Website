import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Hero = ({
  projectLogo,
  projectName,
  projectImg,
}: {
  projectLogo: any;
  projectName: string;
  projectImg: any;
}) => {
  return (
    <header className="relative bg-gradient-to-b from-[#6460ce56] to-[#2424260f] flex flex-col md:flex-row pt-28 md:pt-0 h-fit lg:h-screen max-h-fit w-full gap-8 md:gap-0">
      <div className="flex flex-col items-start justify-center gap-4 px-[5%] lg:pr-[3%]">
        <h2 className="text-white text-start text-2xl lg:text-5xl font-bold leading-tight flex items-end gap-4">
          <span className="w-20 lg:w-[120px] h-12 lg:h-[80px] flex items-end justify-start">
            <Image src={projectLogo} alt="logo" className="w-auto h-auto" />
          </span>
          {projectName}
        </h2>
        <h1 className="text-white text-start text-2xl lg:text-5xl font-bold leading-tight">
          Case Study for {projectName} Website
        </h1>
        <Link
          href={'/Contact-us'}
          className="flex items-center gap-2 flex-wrap hover:bg-[#4848FF] hover:scale-110 transition-all duration-700 ease-in-out"
        >
          <p className="p-4 bg-[#4848FF] text-white flex items-center gap-2">
            Let&apos;s Connect
          </p>
          <div className="p-4 bg-[#4848FF] flex items-center justify-center">
            <MdOutlineArrowOutward size={25} color="#fff" />
          </div>
        </Link>
      </div>

      <div className="w-full lg:w-[55%] flex items-center justify-start px-[5%] md:px-0 pb-8 md:pb-0">
        <Image src={projectImg} alt="website" className="w-auto h-auto" />
      </div>
    </header>
  );
};

export default Hero;
