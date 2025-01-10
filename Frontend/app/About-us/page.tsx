import AboutUs from '@/components/AboutUs/AboutUs';
import GetInTouch from '@/components/AboutUs/GetInTouch';
import Hero from '@/components/AboutUs/Hero';
import MeetOurCoFounder from '@/components/AboutUs/MeetOurCoFounder';
// import MeetOurTeam from '@/components/AboutUs/MeetOurTeam';
import OurCoreValues from '@/components/AboutUs/OurCoreValues';
import OurMissionAndVission from '@/components/AboutUs/OurMissionAndVission';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about DevEntia Tech Pvt. Ltd. Explore our mission, core values, meet our co-founder, and get in touch with us. Discover what drives us and how we strive to make an impact.',
  openGraph: {
    title: 'About Us',
    description:
      'Learn more about DevEntia Tech Pvt. Ltd. Explore our mission, core values, meet our co-founder, and get in touch with us. Discover what drives us and how we strive to make an impact.',
    siteName: 'DevEntia Tech Pvt. Ltd',
    images: [
      {
        url: 'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417323/about-us_u9lpyi.jpg',
        width: 800,
        height: 600,
        alt: 'About Us Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurCoreValues />
      <MeetOurCoFounder />
      {/* <MeetOurTeam /> */}
      <OurMissionAndVission />
      {/* <GetInTouch /> */}
    </>
  );
};
export default page;
