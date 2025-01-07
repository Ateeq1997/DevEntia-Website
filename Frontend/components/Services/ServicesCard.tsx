import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import React from 'react';

const ServicesCard = ({
  title,
  flexReverse,
  Checkboxes,
  exploreLink,
  img,
}: {
  title: string;
  flexReverse: boolean;
  Checkboxes: React.ReactNode;
  exploreLink: string;
  img: any;
}) => {
  return (
    <section
      className={`flex gap-8 lg:gap-28 flex-col my-8 mx-[5%] ${
        flexReverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } services-bg p-[5%]`}
    >
      <div className="w-full">
        <h1 className="font-bold text-xl md:text-3xl mb-4">{title}</h1>
        {Checkboxes}
        <Link
          href={exploreLink}
          className="flex items-center gap-2 flex-wrap hover:bg-[#7471E6] hover:scale-110 transition-all duration-700 ease-in-out w-fit mt-8"
        >
          <p className="p-4 bg-[#7571e68c] text-white flex items-center gap-2">
            Learn more
          </p>
          <div className="p-4 bg-[#7571e68c] flex items-center justify-center">
            <MdOutlineArrowOutward size={25} color="#fff" />
          </div>
        </Link>
      </div>
      <div className="w-full lg:h-fit max-h-[30rem]">
        <Image src={img} alt="services" className="w-auto h-auto" />
      </div>
    </section>
  );
};
export default ServicesCard;
