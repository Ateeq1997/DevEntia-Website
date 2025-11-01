
import React from "react";
import bgImage from "../../../assets/images/casestudy/bg.png"; 
import portfolioData from "@/components/home/portfolioData";
import CaseStudyLayout from "@/components/case-study/hersection";
import OverviewSection from "@/components/case-study/overview";
import ProblemStatement from "@/components/case-study/problemstatment";
import Designprocess from "@/components/case-study/designprocess";
import OurSolution from "@/components/case-study/oursolution";
import ColorPaletteTypography from "@/components/case-study/ColorPaletteTypography";
import bg from '@/assets/images/casestudy/bgtypography.png';
import TechnologyUsed from '../../../components/case-study/TechnologyUsed';
import TestimonialCard from "@/components/case-study/TestimonialCard";
import img from '../../../assets/images/casestudy/Rectangle-17836665.png'
import { Metadata } from "next";

// Simple SEO data for all 4 case studies
const seoData: Record<string, { title: string; description: string; h1: string }> = {
  "1": {
    title: "Case Study: E-commerce Platform Growth - 300% Revenue Increase",
    description: "Read how DevEntia helped an e-commerce client achieve 300% revenue growth through custom platform development, performance optimization, and UX improvements.",
    h1: "How We Tripled E-commerce Revenue Through Strategic Development"
  },
  "2": {
    title: "Case Study: Healthcare App - 50K Users in 6 Months",
    description: "Discover how DevEntia built a healthcare mobile app that reached 50,000 users in 6 months. HIPAA-compliant telemedicine platform with real-time consultations.",
    h1: "Scaling a Healthcare App to 50K Users - Complete Case Study"
  },
  "3": {
    title: "Case Study: Fintech MVP Launch - $2M Funding Secured",
    description: "See how DevEntia helped a fintech startup build an MVP that secured $2M in funding. Rapid development, investor-ready platform, and scalable architecture.",
    h1: "From Idea to $2M Funding - Fintech MVP Success Story"
  },
  "4": {
    title: "Case Study: AI Automation - 70% Cost Reduction Achieved",
    description: "Learn how DevEntia's AI automation solution reduced operational costs by 70% for an enterprise client. Custom ML models, process optimization, and ROI analysis.",
    h1: "70% Cost Reduction Through AI Automation - Enterprise Case Study"
  }
};

// Simple dynamic metadata
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const seo = seoData[params.id];
  if (!seo) {
    return { title: "Case Study Not Found", description: "The requested case study could not be found." };
  }
  return {
    title: seo.title,
    description: seo.description,
  };
}
export default function Page({ params }: { params: { id: string } }) {
  const project = portfolioData.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className="text-center py-20 text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <>
      {/* 🧩 Hero Section */}
      <CaseStudyLayout
        logoTitle={project.title}
        title={project.Title}
        desc={project.desc}
        bgImage={bgImage.src}
        previewImg={project.heroimg.src}
        logo={project.logo.src}
        siteLink={project.siteLink}
        app={project.app} // ✅ Pass the app flag
        appStoreLink={project.appStoreLink} // ✅ Optional for app projects
        playStoreLink={project.playStoreLink} // ✅ Optional for app projects
      />

      {/* 🧾 Overview Section */}
      <OverviewSection
        content={project.overviewcontent}
        image={project.overviewimg.src}
        features={project.features}
      />

      {/* ❗ Problem Section */}
      <ProblemStatement
        title={project.problemtitle}
        description={project.problemdescription}
        painpoints={project.painpoints}
      />

      {/* 🌀 Design Process */}
      <Designprocess />

      {/* 💡 Our Solution */}
      <OurSolution solutions={project.solutions} />

      {/* 🎨 Color Palette & Typography (conditionally render if exists) */}
      {project.typography && (
        <ColorPaletteTypography
          colors={project.typography.colors}
          font={project.typography.font}
          typographyWeights={project.typography.typographyWeights}
          bgImage={bg.src} 
        />
      )}

{project.technologies && (
  <TechnologyUsed
    title="Technology Used"
    technologies={project.technologies}
  />
)}    

</>
  );
}
