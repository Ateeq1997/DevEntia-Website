'use client';

import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OurProjects = ({
  flexReverse,
  img,
  description,
  projectURL,
  projectName,
}: {
  flexReverse: boolean;
  img: any;
  description: string;
  projectURL: string;
  projectName: string;
}) => {
  return (
    <div
      className={`flex flex-col ${
        flexReverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-12 mt-20 items-center px-[5%]`}
    >
      <motion.img
        whileInView={{
          // scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6,  0.7, 0.8, 0.9, 1],
          scale: [0, 0.3, 0.6, 0.9, 1],
          // rotate: [360, 330, 300, 270, 240, 210, 180, 150, 120, 90, 60, 30, 0],
          // borderRadius: [
          //   '100%',
          //   '90%',
          //   '80%',
          //   '70%',
          //   '60%',
          //   '50%',
          //   '40%',
          //   '30%',
          //   '20%',
          //   '10%',
          //   '0%',
          // ],
        }}
        // viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut', repeat: 0 }}
        src={img.src}
        alt="alpine edge"
        className="w-full md:w-[48%] h-3/4"
      />
      <div>
        <h3 className="bg-[#4848FF] uppercase px-4 py-3 font-bold rounded-md w-fit">
          Case study
        </h3>
        <h1 className="font-bold text-xl md:text-3xl my-4">{projectName}</h1>
        <p className="text-base">{description}</p>
        <Link
          href={projectURL}
          className="border-2 border-[#4848FF] text-[#4848FF] hover:text-white hover:bg-[#4848FF] px-4 py-3 uppercase flex items-center gap-2 mt-12 font-bold w-fit transition-all ease-in-out duration-700"
        >
          View work
          <IoIosArrowForward size={22} />
        </Link>
      </div>
    </div>
  );
};
export default OurProjects;
