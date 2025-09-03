import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
// Import images from public folder
const projectImage = '/Projects/rs.png';
const projectImage1 = '/Projects/ISA.png';
const projectImage2 = '/Projects/Rent.png';
const projectImage3 = '/Projects/make.png';
const projectImage4 = '/Projects/cpa.png';

import Hero from '@/components/OurPortfolio/Hero';
import Contact from '@/components/home/contact';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description:
    "Explore our diverse portfolio showcasing innovative projects. From cutting-edge web solutions to streamlined business tools, discover how we've helped businesses thrive with tailored solutions. See examples like RS Global Ties, Private CPA, ISA Consulting, and more.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Our Portfolio',
    description:
      "Explore our diverse portfolio showcasing innovative projects. From cutting-edge web solutions to streamlined business tools, discover how we've helped businesses thrive with tailored solutions. See examples like RS Global Ties, Private CPA, ISA Consulting, and more.",
    url: 'https://nextjs.org',
    siteName: 'DevEntia Tech Pvt. Ltd',
    images: [
      {
        url: 'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417303/ourportfolio_iyrkpk.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = ({ searchParams }: { searchParams?: { all?: string } }) => {
  const projects = [
    { name: 'RS Global Ties', img: projectImage, url: '/Our-Portfolio/Projects/RS-Global-Ties', description: 'RS Global Ties is a dynamic platform where boundaries fade and opportunities thrive, connecting people and businesses worldwide.' },
    { name: 'ISA Consulting', img: projectImage1, url: '/Our-Portfolio/Projects/ISA', description: "Empowering Careers, Connecting Talent' reflects ISA's dedication to fostering professional growth by bridging the gap between job seekers and employers." },
    { name: 'Dadi Rent Boat', img: projectImage2, url: '/Our-Portfolio/Projects/Dadi-Rent-Boat', description: 'Discover unforgettable adventures with our boat and dinghy rentals. Whether you crave serene cruises or thrilling water sports.' },
    { name: 'Makewell.Life', img: projectImage3, url: '/Our-Portfolio/Projects/Makewell.life', description: 'Streamline patient management with integrated tools for appointments and medical records, manage your schedule and consultations.' },
    { name: 'Private CPA', img: projectImage4, url: '/Our-Portfolio/Projects/Private-CPA', description: 'Igniting success with streamlined collaboration and customizable workflows for enhanced team alignment and productivity.' },
    { name: 'Get Simpple.com', img: projectImage, url: '/Our-Portfolio/Projects/GetSimpple.com', description: 'We simplify the tax process with a human-based, AI-powered, personalized tax filing experience.' },
  ];

  const showAll = searchParams?.all === '1';
  const visible = showAll ? projects : projects.slice(0, 5);

  return (
    <>
    <Hero/>
      <h1 className="bg-[#0A0D12] font-bold text-start px-[5%] text-3xl md:text-4xl mt-20">Our Portfolio</h1>
      <div className="bg-[#0A0D12] px-[5%]">
        <div className="w-36 h-[2px] bg-white/40 mt-4"></div>
      </div>
      <div className="max-w-[1750px] px-4 md:px-6 lg:px-12 2xl:px-14 mx-auto text-white mt-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visible.map((p) => (
            <Link href={p.url} key={p.name} className="group">
              <div className="   rounded-lg p-5 h-full transition-transform duration-300 group-hover:scale-[1.03]">
                <div className="h-[180px] md:h-[350px] overflow-hidden rounded-xl mb-5">
                  <Image
                    src={p.img}
                    alt={`${p.name} cover`}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{p.name}</h3>
                  <span className="text-3xl text-white group-hover:text-white  transition-colors">›</span>
                </div>
                <p className="text-white text-sm md:text-base">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
          {!showAll && (
            <div className="flex items-center justify-center">
              <div className="relative">
                <span className="pointer-events-none absolute -inset-2 rounded-full bg-[#4A55FF]/35 blur-lg" />
                <Link
                  href="/Our-Portfolio?all=1"
                  className="relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-bold hover:text-white transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10">View More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                </Link>
              </div>
            </div>
          )}
        </div>
        
      </div>
      <Contact/>
    </>
  );
};
export default page;
