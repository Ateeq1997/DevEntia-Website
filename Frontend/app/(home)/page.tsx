/* eslint-disable */
import '../globals.css';
import HeroSection from '@/components/home/HeroSection';
import ITProcesses from '@/components/home/ITProcesses';
import OurExpertise from '@/components/home/OurExpertise';
import Ourportfolio from '@/components/home/Ourportfolio';
import PositiveImpactSection from '@/components/home/PositiveImpactSection';
import AugmentedTeam from '@/components/home/AugmentedTeam';
import BlogNews from '@/components/home/BlogNews';
import TechSection from '@/components/home/TechSection';
import CloudSection from '@/components/home/CloudSection';
import AiMlSection from '@/components/home/AI&MLSection';
import BlockchainSection from '@/components/home/BlockchainSection';
import Projects from '@/components/home/Projects/Projects';
import Services from '@/components/home/Services';
import Statistics from '@/components/home/statistics';
import WhyDeventia from '@/components/home/Why-chose-deventia/WhyDeventia';
import { Metadata } from 'next';
import Contact from '@/components/home/contact';
import ServicesSection from '@/components/home/ServicesSection';
// import EnhanceEfficiency from '@/components/home/EnhanceEfficiency';
import Tech from '@/components/home/tech';
import Hero from '@/components/Blog/hero';
import Blogscard from '@/components/Blog/cards';
import Testimonials from '@/components/home/Testimonials';


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
      <ServicesSection />
      {/* <Hero /> */}
      {/* <EnhanceEfficiency /> */}
      {/* <WhyDeventia /> */}
  <Statistics />
      <Ourportfolio/>
     {/*   <OurExpertise /> */}
      <Services />
     {/* <Projects />*/}
      <PositiveImpactSection />
      <AugmentedTeam />
      {/*<BlogNews />*/}
  <Blogscard/>
       {/* <Reviews /> 
      <TechSection/>
<CloudSection />
<AiMlSection />
<BlockchainSection />*/}
      {/* <StatsAndPartners /> */}
     {/*  <ITProcesses /> */}
    {/*  <Hero/> */}
     {/* 
      <Reviews />
      <Tech/>  */}
          <Testimonials />
      <Contact />

      {/* <Testimonial /> */}
      {/* <Portfolio /> */}
      {/* <Faqs /> */}
    </>
  );
};

export default page;
