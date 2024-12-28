
import HeroSection from '@/components/home/HeroSection';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import StatsAndPartners from '@/components/home/Stats';
import { TracingBeam } from '@/components/ui/tracingbeam';
import { users } from '@/data/data';
import React from 'react';
import { Metadata } from 'next';
import WhyDeventia from '@/components/home/Why-chose-deventia/WhyDeventia';
import OurExpertise from '@/components/home/OurExpertise';
import Projects from '@/components/home/Projects/Projects';
import ITProcesses from '@/components/home/ITProcesses';
import Faqs from '@/components/home/Faqs';
import PositiveImpactSection from '@/components/home/PositiveImpactSection';

export const metadata: Metadata = {
  title: 'DevEntia Tech Pvt. Ltd',
  description:
    'Welcome to DevEntia Tech Pvt. Ltd, your leading partner in web development, app development, and AI solutions. Discover how our innovative technology can transform your business.',
  openGraph: {
    title: 'DevEntia Tech Pvt. ',
    description:
      'Welcome to DevEntia Tech Pvt. Ltd, your leading partner in web development, app development, and AI solutions. Discover how our innovative technology can transform your business.',
    siteName: 'DevEntia Tech Pvt. Ltd',
    images: [
      {
        url: 'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722603971/home-hero_zyqkwj.png',
        width: 1200,
        height: 630,
        alt: 'Innovative Technology Solutions by DevEntia Tech',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return (
    <>
        <HeroSection />
        {/* <Hero /> */}
        <WhyDeventia />
        <OurExpertise/>
        <Services />
        <Projects />
        <PositiveImpactSection />
        {/* <StatsAndPartners /> */}
        
        <ITProcesses />
        {/* <Testimonial /> */}
        {/* <Portfolio /> */}
       <Faqs />
      
    </>
  );
};

export default page;
