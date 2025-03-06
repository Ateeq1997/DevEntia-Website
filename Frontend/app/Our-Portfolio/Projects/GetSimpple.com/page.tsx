import AboutProject from '@/components/OurPortfolio/CaseStudy/AboutProject';
import DesktopVersion from '@/components/OurPortfolio/CaseStudy/DesktopVersion';
import Hero from '@/components/OurPortfolio/CaseStudy/Hero';
import ProjectDetials from '@/components/OurPortfolio/CaseStudy/ProjectDetials';
import StyleGuide from '@/components/OurPortfolio/CaseStudy/StyleGuide';
import TechnologiesUsed from '@/components/OurPortfolio/CaseStudy/TechnologiesUsed';
import WhatMyClientSay from '@/components/OurPortfolio/CaseStudy/WhatMyClientSay';
import isaLogo from '../../../../assets/images/simpleLogo.png';
import isaDesk from '../../../../assets/images/simpleDesk.png';
import isaDesk1 from '../../../../assets/images/simpleDesk1.png';
import light from '../../../../assets/images/simpleLight.png';


const page = () => {
  return (
    <>
      <Hero
        projectLogo={isaLogo}
        projectName="Get Simpple.com"
        projectImg={isaDesk}
      />
      <AboutProject
        aboutProject="simpple is taking the stress out of tax filing. We simplify the tax process and make it, well... simple. And you get max refund. We are developing a human based, AI powered, personalized, tax filing experience that helps more Americans take control of their taxes in an easy, user-friendly way."
        projectImg={isaDesk1}
      />
      <StyleGuide
        projectName="Get Simpple.com"
        fontName="Poppins"
        fontBg="#80DAFF"
        projectLogo={isaLogo}
        color1="#80DAFF"
        color2="#000000"
        color3="#E7EDFF"
        color4="#FFFFFF"
      />
      <TechnologiesUsed />
      <ProjectDetials
        description="The #1 stress-free CPA + A.I. tax filing service is here! Simply drop your tax documents, and our advanced A.I. will extract your data, while our expert CPA team prepares your federal and state tax returns for your review and e-signature. Stay in control as Simpple keeps your W-2s, 1099s, and all your tax documents organized. Access them effortlessly anytime, year after year, from your phone or computer."
        projectLogo={isaLogo}
        projectLink="https://app.simpple.tax/"
        projectName="Get Simpple.com"
        deliverables="Website"
      />
      <DesktopVersion
        projectImg={light}
        projectLogo={isaLogo}
        title="Desktop Version"
      />
      {/* <DesktopVersion
        projectImg={dark}
        projectLogo={isaLogo}
        title="Dark Mode"
      /> */}
      {/* <WhatMyClientSay /> */}
    </>
  );
};
export default page;
