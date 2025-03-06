import Hero from '@/components/Services/Hero';
import ServicesCard from '@/components/Services/ServicesCard';
import { FaRegSquareCheck } from 'react-icons/fa6';
import services1 from '../../assets/images/services1.webp';
import services2 from '../../assets/images/services2.webp';
import services3 from '../../assets/images/services3.webp';
import services4 from '../../assets/images/services4.webp';
import GetInTouch from '@/components/AboutUs/GetInTouch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the comprehensive IT solutions offered by DevEntia Tech Pvt. Ltd. We specialize in planning, design, development, and testing services to elevate your business with cutting-edge technology.',
  openGraph: {
    title: 'Our Services',
    description:
      'Explore the comprehensive IT solutions offered by DevEntia Tech Pvt. Ltd. We specialize in planning, design, development, and testing services to elevate your business with cutting-edge technology.',
    siteName: 'DevEntia Tech Pvt. Ltd',
    images: [
      {
        url: 'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417304/services_ulnrx5.jpg',
        width: 1200,
        height: 630,
        alt: 'DevEntia Tech Pvt. Ltd Services Overview',
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
      <div className="p-[5%] ">
        <h1 className="font-bold text-2xl md:text-4xl">Our Services</h1>
        <p className="text-[#ACACAC] text-lg mt-4">
          we offer tailored IT solutions designed to propel your business
          forward. From software development to cybersecurity, trust us to
          deliver innovation and excellence.
        </p>
      </div>
      <ServicesCard
        title="Plan"
        flexReverse={false}
        Checkboxes={
          <>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Brain Storming
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Mind Mapping
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Industry Analysis
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Charting a Course
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Agile Strategy
            </p>
          </>
        }
        exploreLink={'/Services/Plan'}
        img={services1}
      />
      <ServicesCard
        title="Design"
        flexReverse={true}
        Checkboxes={
          <>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              User Experience(UX)
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              User Interface(UI)
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Web Design
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Mobile Application
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Design Prototypes
            </p>
          </>
        }
        exploreLink={'/Services/Design-service'}
        img={services2}
      />
      <ServicesCard
        title="Development"
        flexReverse={false}
        Checkboxes={
          <>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Full Stack Development
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Machine Learning
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Development Support
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Deployment Services
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Admin Panel Development
            </p>
          </>
        }
        exploreLink={'/Services/Development'}
        img={services3}
      />
      <ServicesCard
        title="Testing"
        flexReverse={true}
        Checkboxes={
          <>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Quality assurance
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Functional Testing
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Performance Testing
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Compatibility Testing
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Security Testing
            </p>
            <p className="text-[#E6E6E6] flex gap-2 items-center text-lg mt-2">
              <FaRegSquareCheck className="text-[#8A88EC]" size={22} />
              Usability Testing
            </p>
          </>
        }
        exploreLink={'/Services/Testing'}
        img={services4}
      />
      {/* <GetInTouch /> */}
    </>
  );
};
export default page;
