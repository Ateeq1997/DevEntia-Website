import bgImage from "../../../assets/images/casestudy/bg.png"; 
import portfolioData from "@/components/home/portfolioData";
import CaseStudyLayout from "@/components/case-study/hersection";
import OverviewSection from "@/components/case-study/overview";

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
    <CaseStudyLayout
      logoTitle={project.title}
      title={project.Title}
      desc={project.desc}
      bgImage={bgImage.src} 
      previewImg={project.heroimg.src}
      logo={project.logo.src}
      siteLink="https://example.com" 
    />
    <OverviewSection
        content={project.overviewcontent}
        image={project.overviewimg.src}
           features={project.features} 

      />
      </>
  );
}
