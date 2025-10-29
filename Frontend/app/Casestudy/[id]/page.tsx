"use client";
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
        siteLink="https://example.com"
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

<TestimonialCard
        name="Bessie Cooper"
        role="Marketing Coordinator"
        company="HCAB"
        quote="I’m so impressed by your dedication to learning. I know it wasn’t easy when that technology solution you presented didn’t work out."
        image={img}
        video={true}
      />
</>
  );
}
