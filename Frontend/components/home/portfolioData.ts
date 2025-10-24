import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import heroimg1 from '../../assets/images/casestudy/Group 1982250188.png'
import heroimg2 from '../../assets/images/casestudy/healtiplate.png'
import heroimg3 from '../../assets/images/casestudy/falke.png'
import heroimg4 from '../../assets/images/casestudy/simmple.png'
import aneurologo from '../../assets/images/casestudy/aneuro.png'
import Falke from '../../assets/images/casestudy/falkelogo.png'
import Healtiplate from '../../assets/images/casestudy/healthiplatelogo.png'
import simmple from '../../assets/images/casestudy/simplelogo.png'

const portfolioData = [
  {
    id: 1,
    img: project1,
    title: "Simmple Tax",
    desc: "Simpple.Tax is a next-generation tax platform that blends AI and expert CPAs to make filing simple, fast, and stress-free.",
   logo: simmple,
   Title: "Case Study for Simple Tax Website",
    heroimg: heroimg4,
    overviewcontent: `
  <div class="text-black/70 dark:text-white/70 leading-relaxed">
    <p>
Welcome to <Strong class="text-black dark:text-white">Simpple.Tax</Strong>, a next-generation tax platform that blends AI and expert CPAs to make filing simple, fast, and stress-free. Their mission is to transform tax preparation by offering maximum refunds with minimal effort—just upload your documents, and their system does the rest. With full audit protection, real-time support, and year-round service, Simpple.Tax empowers individuals and businesses to focus on growth rather than paperwork.
`,   
     overviewimg:simmple,
     features: [
    { id: 1, text: "Users want simple nutrition scoring." },
    { id: 2, text: "They want actionable meal suggestions." },
    { id: 3, text: "Need clear visual nutrient breakdown." },
    { id: 4, text: "Many prefer dark mode for night use." },
  ],

  },
  {
    id: 2,
    img: project2,
    title: "Falke",
    desc: "Falke is an all-in-one platform designed to simplify employee, project, and client management — from handling invoices to reporting.",
    logo: Falke,
       Title: "Case Study for Falke App",
    heroimg: heroimg3,
overviewcontent: `
  <div class="text-black/70 dark:text-white/70 leading-relaxed">
    <p>
      <Strong class="text-black dark:text-white">Falke</Strong> is an all-in-one platform designed to simplify employee, project, and client management. From handling invoices and contracts to monitoring performance and providing support, Falke creates a unified space for collaboration, ensuring clarity and control at every stage of the workflow.
  </div>
`,
    overviewimg:simmple,
     features: [
    { id: 1, text: "Quiz-based audience insights" },
    { id: 2, text: "Analytics & campaign control" },
    { id: 3, text: "Starter, Growth, Enterprise tiers" },
    { id: 4, text: "GDPR-compliant platform" },
  ],
  },
  {
    id: 3,
    img: project3,
    title: "Healthi Plate",
    desc: "Healthi Plate is a nutrition-focused mobile app that empowers users to set personal health goals and track meal progress easily.",
    logo: Healtiplate,
           Title: "Case Study for Healthi Plate App",
    heroimg: heroimg2,
overviewcontent: `
  <div class="text-black/70 dark:text-white/70 leading-relaxed">
    <p>
      <Strong class="text-black dark:text-white">Healthi Plate</Strong> is a nutrition-focused mobile app that empowers users to set personal health goals, choose goal-aligned meals, track dietary habits, and monitor progress. With smart nutritional analysis and easy sharing features, it makes healthy eating simple, personalized, and sustainable.
    </p>
  </div>
`,
        overviewimg:simmple,
         features: [
    { id: 1, text: "Quiz-based audience insights" },
    { id: 2, text: "Analytics & campaign control" },
    { id: 3, text: "Starter, Growth, Enterprise tiers" },
    { id: 4, text: "GDPR-compliant platform" },
  ],
  },
  {
    id: 4,
    img: project4,
    title: "Aneuro",
    desc: "Aneuro is an AI-driven app for personalized brain health insights and cognitive training programs tailored to each user.",
    logo: aneurologo,
    Title: "Case Study for Aneuro Website",
    heroimg: heroimg1,
overviewcontent: `
  <div class="text-black/70 dark:text-white/70 leading-relaxed">
    <p>
      <strong class="text-black dark:text-white">Aneuro</strong> is a neuromarketing SaaS platform that helps businesses personalize marketing using cognitive brain types.
      It uses a quiz to categorize audiences and deliver tailored content that drives engagement and conversions.
      Businesses can access analytics, marketing tools, and CRM integration through a tiered subscription model.
      The admin dashboard enables tracking of audience distribution, managing subscriptions, and optimizing campaigns.
      <strong class="text-black dark:text-white">Aneuro</strong> is secure, GDPR-compliant, and designed to scale for solopreneurs, agencies, and SaaS companies.
    </p>
  </div>
`,
overviewimg: simmple,

 features: [
    { id: 1, text: "Quiz-based audience insights" },
    { id: 2, text: "Analytics & campaign control" },
    { id: 3, text: "Starter, Growth, Enterprise tiers" },
    { id: 4, text: "GDPR-compliant platform" },
  ],
  }
  
];

export default portfolioData;
