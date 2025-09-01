/* eslint-disable */
import HeroSection from '@/components/home/HeroSection';
import ITProcesses from '@/components/home/ITProcesses';
import OurExpertise from '@/components/home/OurExpertise';
import Ourportfolio from '@/components/home/Ourportfolio';
import PositiveImpactSection from '@/components/home/PositiveImpactSection';
import Projects from '@/components/home/Projects/Projects';
import Services from '@/components/home/Services';
import Statistics from '@/components/home/statistics';
import WhyDeventia from '@/components/home/Why-chose-deventia/WhyDeventia';
import { Metadata } from 'next';
import Reviews from '@/components/home/Reviews';
import Contact from '@/components/home/contact';
import Tech from '@/components/home/tech';
import Hero from '@/components/Blog/hero';
import Blogscard from '@/components/Blog/cards';


export const metadata: Metadata = {
  title: 'Empowering Businesses with Cutting-Edge Website, App & AI Solutions',
  description:
    'DevEntia Tech is your partner for digital transformation. DevEntia Tech specializes in building modern, secure, and innovative websites, custom mobile apps, and powerful AI/ML tools. DevEntia Tech\'s IT and cloud solutions are designed to help businesses of all sizes scale efficiently, improve operations, and achieve sustainable growth in a competitive digital landscape.',
  openGraph: {
    title: 'Empowering Businesses with Cutting-Edge Website, App & AI Solutions ',
    description:
      'DevEntia Tech is your partner for digital transformation. DevEntia Tech specializes in building modern, secure, and innovative websites, custom mobile apps, and powerful AI/ML tools. DevEntia Tech\'s IT and cloud solutions are designed to help businesses of all sizes scale efficiently, improve operations, and achieve sustainable growth in a competitive digital landscape.',
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
      <Statistics/>
      <Ourportfolio/>
     {/*   <OurExpertise /> */}
      <Services />
     {/* <Projects />*/}
      <PositiveImpactSection />
      {/* <StatsAndPartners /> */}
      <ITProcesses />
      <Hero/>
      <Blogscard/>
      <Reviews />
      <Tech/>
      <Contact />

      {/* <Testimonial /> */}
      {/* <Portfolio /> */}
      {/* <Faqs /> */}
    </>
  );
};

export default page;
