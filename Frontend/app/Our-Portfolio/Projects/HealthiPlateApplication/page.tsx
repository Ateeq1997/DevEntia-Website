"use client";

import Hero from "@/components/Casestudy/hero";
import Ideation from "@/components/Casestudy/idea";
import Overview from "@/components/Casestudy/overview";
import ProblemStatement from "@/components/Casestudy/problemstatment";
import Statistics from "@/components/Casestudy/stats";
import CompetitiveAnalysis from "@/components/Casestudy/CompetitiveAnalysis";
import StyleGuide from "@/components/Casestudy/styleguide";
import Technology from "@/components/Casestudy/techology";
import Userstoryboard from "@/components/Casestudy/userstoryboard";
import ChallengesAndImprovements from "@/components/Casestudy/ChallengesAndImprovements";
import Storyboard from "@/components/Casestudy/storyboard";

const statsData = [
  { image: "/casestudy/01.png", text: "Users want simple nutrition scoring.", imageClass: "w-[107px]" },
  { image: "/casestudy/02.png", text: "They want actionable meal suggestions.", imageClass: "w-[140px]" },
  { image: "/casestudy/03.png", text: "Need clear visual nutrient breakdown.", imageClass: "w-[150px]" },
  { image: "/casestudy/04.png", text: "Many prefer dark mode for night use.", imageClass: "w-[150px]" },
];

const competitors = [
  {
    id: "1",
    title: "strong logging",
    description: "strong logging but complex UI",
    icon: "/casestudy/1.png",
  },
  {
    id: "2",
    title: "commendations",
    description: "commendations but premium-locked",
    icon: "/casestudy/3.png",
  },
  {
    id: "3",
    title: "detailed",
    description: "detailed but overwhelming",
    icon: "/casestudy/2.png",
  },
];

const techList = [
  { image: "/casestudy/flutter.png", title: "Flutter", description: "Built with Flutter for cross-platform apps." },
  { image: "/casestudy/dart.png", title: "Dart", description: "Powered by Dart for fast development." },
  { image: "/casestudy/react.png", title: "React", description: "Made with React for dynamic web apps." },
  { image: "/casestudy/git.png", title: "GitHub", description: "Code hosted on GitHub for easy collaboration." },
  { image: "/casestudy/figma.png", title: "Figma", description: "Designed in Figma for user-friendly UI." },
];

const storyboardCards = [
  { image: "/casestudy/Rectangle 17836628.png", description: "The user sees their daily meal score, health goal, and quick access to add meals or view recommendations." },
  { image: "/casestudy/Rectangle 17836629.png", description: "User logs what they ate by entering details or choosing from suggested meals." },
  { image: "/casestudy/Rectangle 17836630.png", description: "App analyzes the meal and shows an easy-to-understand nutrition score with key nutrients." },
  { image: "/casestudy/Rectangle 17836631.png", description: "User receives personalized meal suggestions aligned with their health goals." },
  { image: "/casestudy/Rectangle 17836632.png", description: "Users can view and quickly select their previously saved favorite meals from their profile." },
  { image: "/casestudy/Rectangle 17836633.png", description: "Users can view and quickly select their previously saved favorite meals from their profile." },
];


const Page = () => {


  return (
    <>
      <Hero
        bgImage="/casestudy/bg.png"         
        title="Healthi Plate Application"
        subtitle="Healthi Plate makes healthy eating easy with meal scores, personalized plans, nutrition tips, and progress tracking."
        buttonLabel="Learn More"
        onButtonClick={() => console.log("Learn More clicked")}
        sideImage="/casestudy/heroimg.png"
      />

<Overview
      title="Overview"
      description="Healthi Plate is a nutrition-focused mobile app that lets users choose health goals,
      discover goal-aligned meals, analyze nutrition, track their diet, and share progress.
      This case study outlines the end-to-end design of its core features."
      image="/casestudy/overview (2).png"   
    />

<Statistics items={statsData} />


    <ProblemStatement
  problemText="Many people want to eat healthier but struggle to know how nutritious their meals really are. They lack the guidance on scoring their meals and choosing better alternatives."
  solutions={[
    "Score meals based on nutritional value for easy understanding.",
    "Provide personalized meal suggestions tailored to user goals.",
    "Simplify healthy eating with clear, daily guidance.",
    "Track eating habits to build healthier long-term routines.",
  ]}
  image="/casestudy/problem-mockup.png"     
  bgImage="/casestudy/psbg.png" 
  img="/casestudy/img.png"     
/>
<Ideation
      title="Ideation"
      description="Exploring and refining concepts to deliver simple, goal-focused nutrition tracking and recommendations."
      items={[
        "Recommendation carousel explored",
        "Tested score visualizations",
        "Brainstormed scoring UI (0–10)",
        "Sketched nutrient dashboard",
        "Considered traffic light colors",
      ]}
    />

<CompetitiveAnalysis competitors={competitors} />
<div
  className="bg-[url('/casestudy/styleguidebg.png')] bg-no-repeat bg-right-top w-full"
  style={{ backgroundSize: "100% 1170px" }} // 👈 background image size only
>
  <StyleGuide
    title="Style Guide"
    fontFamily="Inter"
    colors={[
      { hex: "#127CC0" },
      { hex: "#FFFFFF" },
      { hex: "#000000" },
      { hex: "#E2E8F7" },
    ]}
    previewGradient="bg-gradient-to-tr from-indigo-500 to-blue-600"
  />

  <Technology techList={techList} />
</div>



<Userstoryboard cards={storyboardCards} />

<ChallengesAndImprovements />

<Storyboard
  title="User Story Board"
  subtitle="This storyboard shows the user journey in Healthi Plate—from logging in and adding meals to checking nutrition scores and getting personalized recommendations, making healthy eating simple and guided."
  steps={[
    {
      image: "/casestudy/Home page (1) 2 1.png",
      title: "Home",
      description:
        "The user sees their daily meal score, health goal, and quick access to add meals or view recommendations.",
        lines: [
          { src: "/casestudy/line1.png", className: "w-[200px] lg:w-[95%] top-[1%] left-[85%]", rotate: "-rotate-[5deg]" },
        ]
        },
    {
      image: "/casestudy/Food scan result 1.png",
      title: "Add Meal",
      description:
        "User logs what they ate by entering details or choosing from suggested meals.",
        lines: [
          { src: "/casestudy/line2.png", className: "w-[200px] lg:w-[130%] top-[59%] right-[15%]" },
        ]    },
    {
      image: "/casestudy/Screen 7 1.png",
      title: "View Score",
      description:
        "App analyzes the meal and shows an easy-to-understand nutrition score with key nutrients.",
        lines: [
          { src: "/casestudy/line1.png", className: "w-[200px] lg:w-[99%] top-[2%] left-[92%]", rotate: "-rotate-[3deg]" },
        ]    
      },
    {
      image: "/casestudy/Food scan result (1) 1.png",
      title: "Get Recommendations",
      description:
        "User receives personalized meal suggestions aligned with their health goals.",
        lines: [
          { src: "/casestudy/line2.png", className: "  top-[54%] right-[16%] lg:w-[130%]",              },
        ]    
      },
    {
      image: "/casestudy/Meal History 2.png",
      title: "Saved Meals",
      description:
        "Users can view and quickly select their previously saved favorite meals from their profile.",
      // last step usually has no line
    },
  ]}
/>


        
           </>
  );
};

export default Page;
