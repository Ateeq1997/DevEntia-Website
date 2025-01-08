import heroBgImg from '../../assets/images/contact us hero bg.webp';
import Image from 'next/image';
import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';



const Hero: React.FC = () => {
  return (
    <header className="relative bg-[#161616] h-[70vh] max-h-[50rem] flex flex-col justify-center items-center gap-6 !z-0">
      <Image
        src={heroBgImg}
        alt="people"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        priority
      />
      <p>Welcome To <span className='text-[#0077FF] font-bold text-lg'>Deventia</span></p>
      <h1 className="z-10 text-white text-center md:text-start text-[3rem] md:text-[5rem] font-bold leading-tight">
        Let&apos;s Talk!
      </h1>
      <hr className="w-1/3 h-1 bg-[#8787FC] rounded-full border-none" />
      
        <p className="text-white text-center z-10 max-w-2xl px-3 ">
        Lorem ipsum dolor sit amet consectetur. Aliquam quisque cursus proin adipiscing quis diam. 
        eu fringilla elit commodo nec aliquet. Augue pharetra nibh co
      </p>
    </header>
  );
};

export default Hero;