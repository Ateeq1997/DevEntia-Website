"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../home/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import img from '../../assets/images/casestudy/Union.png'
import { FaApple, FaGooglePlay } from "react-icons/fa";
import googleplay from '../../assets/images/casestudy/Icon.png';


interface CaseStudyLayoutProps {
  title: string;
  desc: string;
  siteLink?: string;
  bgImage: string;
  previewImg: string;
  logo: string;
  logoTitle: string;
  app?: boolean; // ✅ true = app, false = website
  appStoreLink?: string;
  playStoreLink?: string;
}

const CaseStudyLayout = ({
  title,
  desc,
  siteLink,
  bgImage,
  previewImg,
  logo,
  logoTitle,
  app = false,
  appStoreLink,
  playStoreLink,
}: CaseStudyLayoutProps) => {
  return (
    <section className="relative sm:h-[80vh] md:h-[100vh] lg:h-[45rem] w-full flex flex-col justify-center  py-12 mx-auto  overflow-hidden text-white">
      {/* ✅ Background image (must be absolute + parent relative) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={`${title} background`}
          fill
          priority
          className="object-cover object-center "
        />
        {/* Optional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative  flex flex-col lg:flex-row w-full gap-12 items-start relative z-10">
        <div className="space-y-12 mt-6 w-full lg:w-[46%]">
           <div className="flex flex-row items-center  w-[70%] py-3 items-center justify-center gap-3 rounded-r-full bg-[#141414]">
          <Image
              src={logo}
              alt={`${title} logo`}
              width={120}
              height={60}
              className=""
            />
          <h2 className="text-white font-semibold text-[16px] md:text-[38px] font-inter">{logoTitle}</h2>

           </div>
            <div className="space-y-8 px-[8%]">
          <h1 className="text-4xl md:text-[58px] font-bold leading-tight">
             {title} 
          </h1>
          
          <div className="flex flex-row items-center gap-4">
              {app ? (
                <>
                  {/* App Store Button */}
                 <Link
                    href={appStoreLink || "#"}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-2  bg-white text-black rounded transition-all duration-300 font-medium"
                  >
                    <FaApple size={36} />
                    <div className="flex flex-col items-center ">
                      <span className="text-[10px]">Download on the</span>
                      <span className="text-[16px] font-inter font-semibold">App Store</span>
                    </div>
                    
                  </Link>

                  {/* Google Play Button */}
                  <Link
                    href={appStoreLink || "#"}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-2  bg-white text-black rounded transition-all duration-300 font-medium"
                  >
                    <Image
                        src={googleplay}
                        alt="Google Play"
                        width={30}
                        height={30}
                        className="object-contain"
                      />                    
                      <div className="flex flex-col ">
                      <span className="text-[10px]">GET IT ON</span>
                      <span className="text-[16px] font-inter font-semibold">Google Play</span>
                    </div>
                    
                  </Link>
                </>
              ) : (
                siteLink && (
                  <Button
                    text="Visit Site"
                    href={siteLink}
                    bgColor="#4848FF"
                    textColor="#CFCEFB"
                    hoverColor="#2E2EB5"
                    icon={<MdOutlineArrowOutward size={18} />}
                    iconPosition="right"
                    newTab={true}
                  />
                )
              )}
            </div>
          
          </div>
        </div>

        <div className="relative w-full lg:flex-1 flex justify-end  h-[95%]">
    <Image
      src={previewImg}
      alt={`${title} preview`}
    width={600}
    height={600}
      className=" z-10"
    />
  </div>


      </div>
                        <Image src={img} alt="img" className="absolute right-14 bottom-8 hidden lg:flex" width={370} height={100}/>

    </section>
  );
};

export default CaseStudyLayout;
