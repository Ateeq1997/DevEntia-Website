import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/dadi Logo.webp';
import isaDesk from '../../../../assets/images/dadi-desktop.webp';
import isaDesk1 from '../../../../assets/images/dadi-desktop1.webp';
import isaDesk2 from '../../../../assets/images/dadi-desktop2.webp';

const page = () => {
  return (
    <>
      <Hero
        projectLogo={isaLogo}
        projectName="Dadi Rent Boat"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="Boat and dinghy rentals offer a diverse fleet for recreational activities such as fishing, sightseeing, and water sports. Operating from marinas and coastal areas, these services provide flexible rental periods and essential safety equipment. Despite challenges in maintenance and compliance, they cater to a growing market of tourists and outdoor enthusiasts seeking memorable aquatic experiences without owning a vessel themselves."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="Dadi Rent Boat"
        fontName="Inter"
        fontBg="#CBA557"
        projectLogo={isaLogo}
        color1="#CBA557"
        color2="#000000"
        color3="#0D325E"
        color4="#FFFFFF"
      />
      <TechnologiesUsed />
      <ProjectDetials
        description="Dadi Rent Boat offers a variety of boats for recreational use, including motorboats and yachts, perfect for fishing, sightseeing, and leisure cruises. Located conveniently near marinas and coastal areas, we provide flexible rental options and ensure safety with comprehensive equipment. Enjoy hassle-free boating adventures with Dadi Rent Boat!"
        projectLogo={isaLogo}
        projectLink="https://isaconsulting.com/"
        projectName="Dadi Rent Boat"
        deliverables="Website"
      />
      <DesktopVersion
        projectImg={isaDesk2}
        projectLogo={isaLogo}
        title="Dashboard Version"
      />
      <DesktopVersion
        projectImg={isaDesk}
        projectLogo={isaLogo}
        title="Desktop Version"
      />
      {/* <WhatMyClientSay /> */}
    </>
  );
};
export default page;
