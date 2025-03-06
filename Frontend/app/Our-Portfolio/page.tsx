import Hero from '@/components/OurPortfolio/Hero';
import OurProjects from '@/components/OurPortfolio/OurProjects';
import alpinedgeImg from '../../assets/images/alpineedge.webp';
import privateCPA from '../../assets/images/privateCPA.webp';
import ISA from '../../assets/images/ISA.webp';
import patientDoctor from '../../assets/images/patientDoctor.webp';
import origin from '../../assets/images/origin.webp';
import DadiRentBoat from '../../assets/images/DadiRentBoat.webp';
import Simpple from '../../assets/images/simppleList.png';
import { Metadata } from 'next';

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
        url: 'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722417303/ourportfolio_iyrkpk.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
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
      <h1 className="font-bold text-center px-[5%] text-3xl md:text-4xl mt-12">
        Our Portfolio
      </h1>
      <OurProjects
        flexReverse={false}
        description={
          'RS Global Ties is a dynamic platform where boundaries fade and opportunities thrive, connecting people and businesses worldwide.'
        }
        projectURL={'/Our-Portfolio/Projects/RS-Global-Ties'}
        img={alpinedgeImg}
        projectName={'RS Global Ties'}
      />
      <OurProjects
        flexReverse={true}
        description={
          'Igniting success with streamlined collaboration and customizable workflows for enhanced team alignment and productivity.'
        }
        projectURL={'/Our-Portfolio/Projects/Private-CPA'}
        img={privateCPA}
        projectName={'Private CPA'}
      />
      <OurProjects
        flexReverse={false}
        description={
          'Empowering Careers, Connecting Talent reflects ISAs dedication to fostering professional growth by bridging the gap between job seekers and employers, creating connections that lead to fulfilling careers and successful business outcomes.'
        }
        projectURL={'/Our-Portfolio/Projects/ISA'}
        img={ISA}
        projectName={'ISA Consulting'}
      />
      {/* <OurProjects
        flexReverse={true}
        description={
          'Streamline patient management with integrated tools for appointments and medical records effortlessly manage your schedule and patient consultations in real-time.'
        }
        projectURL={'/Our-Portfolio/Projects/Makewell.life'}
        img={patientDoctor}
        projectName={'Patient / Doctor'}
      /> */}
      <OurProjects
        flexReverse={true}
        description={
          'your go-to platform for hiring expert website designers for any job. Whether it is creating a new site or enhancing an existing one, our talented designers deliver top-quality work tailored to your needs.'
        }
        projectURL={'/Our-Portfolio/Projects/origin.com'}
        img={origin}
        projectName={'origin.com'}
      />
      <OurProjects
        flexReverse={false}
        description={
          'Discover unforgettable adventures with our boat and dinghy rentals. Whether you crave serene cruises, thrilling water sports, or tranquil fishing trips, our fleet offers the perfect vessel for you to explore local waters at your own pace.'
        }
        projectURL={'/Our-Portfolio/Projects/Dadi-Rent-Boat'}
        img={DadiRentBoat}
        projectName={'Dadi Rent Boat'}
      />
      <OurProjects
        flexReverse={true}
        description={
          'simpple is taking the stress out of tax filing. We simplify the tax process and make it, well... simple. And you get max refund. We are developing a human based, AI powered, personalized, tax filing experience that helps more Americans take control of their taxes in an easy, user-friendly way.'
        }
        projectURL={'/Our-Portfolio/Projects/GetSimpple.com'}
        img={Simpple}
        projectName={'Get Simpple.com'}
      />
      <br />
      <br />
    </>
  );
};
export default page;
