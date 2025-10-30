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
import aneuro from '../../assets/images/casestudy/2 5553.png'
import getsimple from '../../assets/images/casestudy/2 5554.png'
import hplate from '../../assets/images/casestudy/Healthi Plate.png'
import falke from '../../assets/images/casestudy/Falke1.png'
import github from '../../assets/images/casestudy/mdi_github.png';
import dart from '../../assets/images/casestudy/dart.png';
import flutter from '../../assets/images/casestudy/flutter.png';
import react from '../../assets/images/casestudy/react.png';
import figma from '../../assets/images/casestudy/figma.png';
import firebase from '../../assets/images/casestudy/devicon_firebase.png';
import aws from '../../assets/images/casestudy/logos_aws.png';
import hostinger from '../../assets/images/casestudy/simple-icons_hostinger.png';
import js from '../../assets/images/casestudy/material-icon-theme_nodejs.png';
import flask from '../../assets/images/casestudy/Vector (2).png';


const portfolioData = [
  {
    id: 1,
    img: project1,
    title: "Simple Tax",
    desc: "Simple.Tax is a next-generation tax platform that blends AI and expert CPAs to make filing simple, fast, and stress-free.",
   logo: simmple,
       app: false, // ✅ Not an app
    siteLink: "https://example-website.com", // ✅ Normal site link
   Title: "Case Study for Simple Tax Website",
    heroimg: heroimg4,
    overviewcontent: `
  <div class="text-black/70 dark:text-white/70 leading-relaxed">
    <p>
Welcome to <Strong class="text-black dark:text-white">Simple.Tax</Strong>, a next-generation tax platform that blends AI and expert CPAs to make filing simple, fast, and stress-free. Their mission is to transform tax preparation by offering maximum refunds with minimal effort—just upload your documents, and their system does the rest. With full audit protection, real-time support, and year-round service, Simpple.Tax empowers individuals and businesses to focus on growth rather than paperwork.
`,   
     overviewimg: getsimple,
     features: [
    { id: 1, text: "Users want simple nutrition scoring." },
    { id: 2, text: "They want actionable meal suggestions." },
    { id: 3, text: "Need clear visual nutrient breakdown." },
    { id: 4, text: "Many prefer dark mode for night use." },
  ],

   problemtitle: "Problem Statement",
  problemdescription:
    "Tax preparation can be overwhelming, time-consuming, and prone to costly errors. Many individuals and businesses struggle with complex forms, confusing regulations, and the risk of audits, leading to stress and lost opportunities for financial growth.",
  painpoints: [
    {
      title: "Complex Processes",
      description:
        "Tax forms and legal terms are overwhelming for most users.",
    },
    {
      title: "Time Consuming",
      description:
        "Manual filing and document organization take up valuable time.",
    },
    {
      title: "Error Risk",
      description:
        "Small mistakes can lead to penalties, missed refunds, or audits.",
    },
    {
      title: "Limited Support",
      description:
        "Traditional services lack real-time assistance or year-round guidance.",
    },
  ],

  solutions: [
      {
        id: 1,
        title: "Solution 1",
        description:
          "AI Powered Automation: Smart technology handles forms and calculations with precision.",
      },
      {
        id: 2,
        title: "Solution 2",
        description:
          "Fast Document Uploads: Users just upload their documents, and the system does the rest.",
      },
      {
        id: 3,
        title: "Solution 3",
        description:
          "Maximum Refund Guarantee: Built-in checks ensure users get every eligible refund.",
      },
      {
        id: 4,
        title: "Solution 4",
        description:
          "Expert + Real-Time Support: Access to CPAs and audit protection anytime during the year.",
      },
      {
        id: 5,
        title: "Solution 5",
        description:
          "Year-Round Service: Stay tax-ready with ongoing support beyond filing season.",
      },
],
typography: {
    colors: [
      { name: "Cobalt Blue", code: "#1E3A8A", number: "01" },
      { name: "Royal Blue", code: "#2563EB", number: "02" },
      { name: "Light Blue", code: "#38BDF8", number: "03" },
      { name: "Rich Black", code: "#0A0A0A", number: "04" },
      { name: "Grey", code: "#F5F5F5", number: "05" },
    ],
    font: "Bai Jamjuree",
    typographyWeights: [
      "Extra Bold",
      "Bold",
      "Semi Bold",
      "Medium ",
      "Regular",
      "Light",
    ],
  },
  technologies: [
    {
      id: 1,
      name: "Flutter",
      description: "Built with Flutter for cross-platform apps.",
      icon: flutter,
      color: "#44C8F5",
    },
    {
      id: 2,
      name: "Dart",
      description: "Powered by Dart for fast development.",
      icon: dart,
      color: "#1E9CF0",
    },
    {
      id: 3,
      name: "React",
      description: "Made with React for dynamic web apps.",
      icon: react,
      color: "#61DAFB",
    },
    {
      id: 4,
      name: "Figma",
      description: "Designed in Figma for user-friendly UI.",
      icon: figma,
      color: "#F24E1E",
    },
    {
      id: 5,
      name: "GitHub",
      description: "Code hosted on GitHub for collaboration.",
      icon: github,
      color: "#FFFFFF",
    },
  ],
  },
  {
    id: 2,
    img: project2,
    title: "Falke",
    desc: "Falke is an all-in-one platform designed to simplify employee, project, and client management — from handling invoices to reporting.",
    logo: Falke,
    app: true, // ✅ Is an app
    appStoreLink: "https://apps.apple.com/app/example",
    playStoreLink: "https://play.google.com/store/apps/details?id=example",
       Title: "Case Study for Falke App",
    heroimg: heroimg3,
overviewcontent: `
  <div class="text-black/70 dark:text-white/70 leading-relaxed">
    <p>
      <Strong class="text-black dark:text-white">Falke</Strong> is an all-in-one platform designed to simplify employee, project, and client management. From handling invoices and contracts to monitoring performance and providing support, Falke creates a unified space for collaboration, ensuring clarity and control at every stage of the workflow.
  </div>
`,
    overviewimg:falke,
     features: [
    { id: 1, text: "Quiz-based audience insights" },
    { id: 2, text: "Analytics & campaign control" },
    { id: 3, text: "Starter, Growth, Enterprise tiers" },
    { id: 4, text: "GDPR-compliant platform" },
  ],
   problemtitle: "Problem Statement",
  problemdescription:
    "Managing employees, clients, and projects across multiple tools often leads to inefficiency, miscommunication, and lack of visibility. Businesses struggle to keep workflows organized, resulting in delays, poor performance tracking, and reduced client satisfaction.",
  painpoints: [
    {
      title: "Tool Overload",
      description:
        "Companies juggle multiple apps for tasks, creating confusion..",
    },
    {
      title: "Poor Visibility",
      description:
        "Managers lack clear insights into project progress and team output.",
    },
    {
      title: "Inefficient Communication",
      description:
        "Scattered updates slow down collaboration and decision-making.",
    },
    {
      title: "Complex Administration",
      description:
        "Manual invoicing, contracts, and reporting consume valuable time.",
    },
  ],
   solutions: [
      {
        id: 1,
        title: "Solution 1",
        description:
          "Unified Platform: Brings employee, client, and project management under one roof.",
      },
      {
        id: 2,
        title: "Solution 2",
        description:
          "Automated Admin Tasks: Streamlines invoicing, contracts, and reporting for efficiency.",
      },
      {
        id: 3,
        title: "Solution 3",
        description:
          "Performance Tracking: Provides real-time insights into productivity and progress.",
      },
      {
        id: 4,
        title: "Solution 4",
        description:
          "Collaborative Tools: Enables smooth communication across teams and clients.",
      },
      {
        id: 5,
        title: "Solution 5",
        description:
          "End-to-End Workflow Clarity: Ensures businesses stay organized from start to finish.",
      },
],
typography: {
    colors: [
      { name: "Cobalt Blue", code: "#1E3A8A", number: "01" },
      { name: "Royal Blue", code: "#2563EB", number: "02" },
      { name: "Light Blue", code: "#38BDF8", number: "03" },
      { name: "Rich Black", code: "#0A0A0A", number: "04" },
      { name: "Grey", code: "#F5F5F5", number: "05" },
    ],
    font: "Bai Jamjuree",
     typographyWeights: [
      "Extra Bold",
      "Bold",
      "Semi Bold",
      "Medium ",
      "Regular",
      "Light",
    ],
  },
 technologies: [
    {
      id: 1,
      name: "Flutter",
      description: "Built with Flutter for cross-platform apps.",
      icon: flutter,
      color: "#44C8F5",
    },
    {
      id: 2,
      name: "Dart",
      description: "Powered by Dart for fast development.",
      icon: dart,
      color: "#1E9CF0",
    },
    {
      id: 3,
      name: "Hostinger",
      description: "Hosted the website on hostinger.",
      icon: hostinger,
      color: "#1E9CF0",
    },
     {
      id: 4,
      name: "Node.js",
      description: "Made with node.js for backend.",
      icon: js,
      color: "#1E9CF0",
    },
    {
      id: 5,
      name: "GitHub",
      description: "Code hosted on GitHub for collaboration.",
      icon: github,
      color: "#FFFFFF",
    },
    {
      id: 6,
      name: "React",
      description: "Made with React for dynamic web apps.",
      icon: react,
      color: "#61DAFB",
    },
   
    
  ],
  },
  {
    id: 3,
    img: project3,
    title: "HealthiPlate",
    desc: "HealthiPlate is a nutrition-focused mobile app that empowers users to set personal health goals and track meal progress easily.",
    logo: Healtiplate,
    app: true, // ✅ Is an app
    appStoreLink: "https://apps.apple.com/app/example",
    playStoreLink: "https://play.google.com/store/apps/details?id=example",
    Title: "Case Study for HealthiPlate App",
    heroimg: heroimg2,
overviewcontent: `
  <div class="text-black/70 dark:text-white/70 leading-relaxed">
    <p>
      <Strong class="text-black dark:text-white">HealthiPlate</Strong> is a nutrition-focused mobile app that empowers users to set personal health goals, choose goal-aligned meals, track dietary habits, and monitor progress. With smart nutritional analysis and easy sharing features, it makes healthy eating simple, personalized, and sustainable.
    </p>
  </div>
`,
        overviewimg:hplate,
         features: [
    { id: 1, text: "Quiz-based audience insights" },
    { id: 2, text: "Analytics & campaign control" },
    { id: 3, text: "Starter, Growth, Enterprise tiers" },
    { id: 4, text: "GDPR-compliant platform" },
  ],
  problemtitle: "Problem Statement",
  problemdescription:
    "Maintaining a healthy diet can be overwhelming due to lack of knowledge, poor tracking habits, and limited personalized guidance. Many people struggle to align their meals with health goals, leading to inconsistent progress and frustration.",
  painpoints: [
    {
      title: "Unclear Meal Choices",
      description:
        "Users struggle to identify foods that match their health goals.",
    },
    {
      title: "Difficult Tracking",
      description:
        "Logging meals and nutrition manually feels time-consuming.",
    },
    {
      title: "Confusing Nutritional Data",
      description:
        "Nutritional details are often confusing without expert knowledge.",
    },
    {
      title: "Low Accountability",
      description:
        "Without progress tracking or sharing, users lose motivation quickly.",
    },
  ],
  solutions: [
      {
        id: 1,
        title: "Solution 1",
        description:
          "Goal-Based Meal Selection: Personalized meal suggestions aligned with user health targets.",
      },
      {
        id: 2,
        title: "Solution 2",
        description:
          "Smart Nutritional Analysis: Automatic breakdown of calories, macros, and vitamins.",
      },
      {
        id: 3,
        title: "Solution 3",
        description:
          "Easy Habit Tracking: Simple daily logs for meals and dietary routines.",
      },
      {
        id: 4,
        title: "Solution 4",
        description:
          "Progress Visualization: Charts and insights that highlight achievements over time.",
      },
      {
        id: 5,
        title: "Solution 5",
        description:
          "Social Sharing & Motivation: Users can share progress and stay accountable with friends.",
      },
],
typography: {
    colors: [
      { name: "Cobalt Blue", code: "#1E3A8A", number: "01" },
      { name: "Royal Blue", code: "#2563EB", number: "02" },
      { name: "Light Blue", code: "#38BDF8", number: "03" },
      { name: "Rich Black", code: "#0A0A0A", number: "04" },
      { name: "Grey", code: "#F5F5F5", number: "05" },
    ],
    font: "Poppins",
    typographyWeights: [
      "Extra Bold",
      "Bold",
      "Semi Bold",
      "Medium ",
      "Regular",
      "Light",
    ],
  },
technologies: [
    {
      id: 1,
      name: "Flutter",
      description: "Built with Flutter for cross-platform apps.",
      icon: flutter,
      color: "#44C8F5",
    },
    {
      id: 2,
      name: "Dart",
      description: "Powered by Dart for fast development.",
      icon: dart,
      color: "#1E9CF0",
    },
    {
      id: 3,
      name: "Firebase",
      description: "Made with Firebase for Backend.",
      icon: firebase,
      color: "#61DAFB",
    },
    {
      id: 4,
      name: "Figma",
      description: "Designed in Figma for user-friendly UI.",
      icon: figma,
      color: "#F24E1E",
    },
    {
      id: 5,
      name: "GitHub",
      description: "Code hosted on GitHub for collaboration.",
      icon: github,
      color: "#FFFFFF",
    },
     {
      id: 6,
      name: "Aws",
      description: "Made with AWS for Backend.",
      icon: aws,
      color: "#FFFFFF",
    },
   
  ],
  },
  {
    id: 4,
    img: project4,
    title: "Aneuro",
    desc: "Aneuro is an AI-driven app for personalized brain health insights and cognitive training programs tailored to each user.",
    logo: aneurologo,
     app: false, 
    siteLink: "https://example-website.com", 
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
overviewimg: aneuro,

 features: [
    { id: 1, text: "Quiz-based audience insights" },
    { id: 2, text: "Analytics & campaign control" },
    { id: 3, text: "Starter, Growth, Enterprise tiers" },
    { id: 4, text: "GDPR-compliant platform" },
  ],
   problemtitle: "Problem Statement",
  problemdescription:
    "Businesses often struggle to understand their audience’s decision-making behavior, which leads to generic and ineffective marketing campaigns. This lack of personalization results in lower engagement, poor conversion rates, and wasted advertising spend. A data-driven solution is needed to deliver personalized marketing based on audience psychology.",
  painpoints: [
    {
      title: "No Audience Insights",
      description:
        "Businesses struggle to analyze customer behavior, making it hard to create data-driven strategies.",
    },
    {
      title: "Generic Campaigns",
      description:
        "Businesses struggle to access wider markets and opportunities.",
    },
    {
      title: "Wasted Ad Spend",
      description:
        "Companies lose money on campaigns that fail to target the right audience effectively.",
    },
    {
      title: "Limited Tools",
      description:
        "Lack of advanced analytics and integrations prevents teams from optimizing their marketing efforts.",
    },

  ],
    solutions: [
      {
        id: 1,
        title: "Solution 1",
        description:
          "Actionable Audience Insights: Cognitive quiz categorizes users into brain types for better targeting.",
      },
      {
        id: 2,
        title: "Solution 2",
        description:
          "Optimized Ad Spend: Focus marketing efforts on the right audience to maximize ROI.",
      },
      {
        id: 3,
        title: "Solution 3",
        description:
          "Seamless Integrations: Connect with CRM systems like HubSpot to streamline lead management.",
      },
      {
        id: 4,
        title: "Solution 4",
        description:
          "Personalized Campaigns: Deliver tailored, neuroscience-backed content to boost engagement.",
      },
      {
        id: 5,
        title: "Solution 5",
        description:
          "Advanced Tools & Analytics: Access dashboards, funnel tools, and detailed reports for smarter decisions.",
      },
],
typography: {
    colors: [
      { name: "Cobalt Blue", code: "#1E3A8A", number: "01" },
      { name: "Royal Blue", code: "#2563EB", number: "02" },
      { name: "Light Blue", code: "#38BDF8", number: "03" },
      { name: "Rich Black", code: "#0A0A0A", number: "04" },
      { name: "Grey", code: "#F5F5F5", number: "05" },
    ],
    font: "Bai Jamjuree",
    typographyWeights: [
      "Extra Bold",
      "Bold",
      "Semi Bold",
      "Medium ",
      "Regular",
      "Light",
    ],
  },
  technologies: [
    {
      id: 1,
      name: "Flutter",
      description: "Built with Flutter for cross-platform apps.",
      icon: flutter,
      color: "#44C8F5",
    },
    {
      id: 2,
      name: "Dart",
      description: "Powered by Dart for fast development.",
      icon: dart,
      color: "#1E9CF0",
    },
    {
      id: 3,
      name: "React",
      description: "Made with React for dynamic web apps.",
      icon: react,
      color: "#61DAFB",
    },
    {
      id: 4,
      name: "Figma",
      description: "Designed in Figma for user-friendly UI.",
      icon: figma,
      color: "#F24E1E",
    },
    {
      id: 5,
      name: "GitHub",
      description: "Code hosted on GitHub for collaboration.",
      icon: github,
      color: "#FFFFFF",
    },
  ],
  }
  
];

export default portfolioData;
