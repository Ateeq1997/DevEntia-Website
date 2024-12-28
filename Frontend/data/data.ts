import ourserviceImage1 from "../assets/images/services-software-development.png";
import ourserviceImage2 from "../assets/images/services-ui.png";
import ourserviceImage3 from "../assets/images/servicess-degital-markering.png";
import ourserviceImage4 from "../assets/images/image (1).png";

/* hero section carousel images */
import HeroImage1 from "../assets/images/Hero-technology-innovation1.png";
import HeroImage2 from "../assets/images/Hero-technology-innovation2.png";
import HeroImage3 from "../assets/images/Hero-technology-innovation3.png";


import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";

/* projects images */
import projectdesktop1 from "../assets/images/Desktop-project-1.png"
import projectdesktop2 from "../assets/images/Desktop-project-2.png"
import projectdesktop3 from "../assets/images/Desktop-project-3.png"
export const servicesData = [
  {
    title: 'Planning',
    description:
      'The project plan involves defining and prioritizing digital services, setting up robust technology infrastructure, and creating an effective marketing strategy to promote services.',
    link: '/Services/Plan',
  },
  {
    title: 'Design',
    description:
      'We offer core insights-driven digital transformation capabilities, modernize key systems to accelerate innovation, and provide a design-led, unified,Our service offerings encompass various design domains, including User Experience (UX) design, User Interface (UI) design, Web Design, Mobile Application design, and Design Prototyping.',
    link: '/Services/Design-service',
  },
  {
    title: 'Development',
    description:
      'In development, we offer Full Stack Development, Machine Learning solutions, Development Support, Deployment Services, and Admin Panel Development.',
    link: '/Services/Development',
  },
  {
    title: 'Testing',
    description:
      'In testing, we ensure quality and reliability through rigorous QA procedures, including functional, performance, security, and compatibility testing.',
    link: '/Services/Testing',
  },
];

export const ourServiceData = [
  {
    title: "Software Development",
    image: ourserviceImage1,
    details: [
      "Full Stack Development",
      "Machine Learning",
      "Development Support",
      "Deployment Services",
      "Admin Pannel Development"
    ]
  },
  {
    title: "UI/UX design",
    image: ourserviceImage2,
    details: [
      "User Experience (UX)",
      "User Interface (UI)",
      "Web Design",
      "Mobile Application",
      "Design Prototypes"
    ]
  },
  {
    title: "Digital Marketing",
    image: ourserviceImage3,
    details: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing",
      "Email Markeeting"
    ]
  },
  {
    title: "Emerging Technologies",
    image: ourserviceImage4,
    details: [
      "Blockchain Solutions",
      "AI and ML Solutions",
      "AR and VR Solutions",
    ]
  }
]

export const carouselData = [
  {
    title: "At DevEntia Innovation ",
    titleBr: "Meets Imagination",
    description:
      "We craft intelligent solutions that blend cutting-edge technology with ",
    descriptionBr:
      "creative vision,driving growth and transforming ideas into reality.",
    buttonText: "Portfolio",
    heroImage: HeroImage1,
  },
  {
    title: "Innovative AI Services ",
    titleBr: "Designed for Your Success",
    description:
      "Tailored AI solutions to streamline operations, enhance insights, and drive growth.",
    descriptionBr: "Empower your business with intelligent innovation.",
    buttonText: "Our Story",
    heroImage: HeroImage2,
  },
  {
    title: "End-to-End Development",
    titleBr: "for Every Industry",
    description:
      "Comprehensive solutions tailored to your needs, from concept to deployment.",
    descriptionBr:
      "Driving innovation and efficiency at every stage of your project.",
    buttonText: "Our Story",
    heroImage: HeroImage3,
  },
];

/*  OurExpertise data */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Planning",
    description:
      "The project plan involves defining and prioritizing digital services, setting up robust technology infrastructure, and creating an effective marketing strategy to promote services.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We provide  insights-driven digital transformation, modernize systems for innovation, and offer design-led services, including UX design, UI design, and prototyping.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "In development, we offer Full Stack Development, Machine Learning solutions, Development Support, Deployment Services, and Admin Panel Development.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Deventia offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists.",
  },
];

/* why Deventia cards  data */
export const whyDeventiaData = [
  {
    image: icon1,
    title: "Innovative IT Solutions",
    description:
      "We drive business growth with cutting-edge technology, tailored to your needs.",
    borderGradient: "linear-gradient(to bottom, #4848FF, #00000000)",
    iconBg: "bg-[#4848FF]",
  },
  {
    image: icon2,
    title: "Business Growth",
    description:
      "We combine creativity and tech to unlock new opportunities and accelerate success.",
    borderGradient: "linear-gradient(to bottom,#77DAFE, #00000000)",
    iconBg: "bg-[#77DAFE]",
  },
  {
    image: icon3,
    title: "Tech-Driven Success",
    description:
      "Our IT expertise helps businesses stay ahead with scalable, reliable solutions",
    borderGradient: "linear-gradient(to bottom, #9C78DB, #00000000)",
    iconBg: "bg-[#9C78DB]",
  },
];

/* projects data */
export const projects = [
  {
    title: 'Makewell landing page design',
    subtitle: 'Web Landing page',
    image: projectdesktop1,
    link: 'https://gogetwell.ai/',
  },
  {
    title: 'Telegram landing page design',
    subtitle: 'Web Landing page',
    image: projectdesktop2,
    link: 'https://app.entergram.com',
  },
  {
    title: 'ISA landing page design',
    subtitle: 'Web Landing page',
    image: projectdesktop3,
    link: 'https://isaconsulting.com/',
  },
]

/* Faqs data */
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Can Deventia help with both web and mobile applications?",
    answer: "How can I start working with Deventia? Does Deventia provide services internationally? How does Deventia ensure client confidentiality? What industries does Deventia specialize in? What are Deventia's core values? What support does Deventia offer post-launch? Can Deventia handle both small and large scale projects? What makes Deventia's approach to design unique?"
  },
  {
    question: "What services does DevEntia offer?",
    answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, cloud solutions, and digital transformation consulting."
  },
  {
    question: "How does the project planning process work at Deventia?",
    answer: "Our project planning process involves detailed requirement gathering, timeline estimation, resource allocation, and regular client consultations to ensure project success."
  },
  {
    question: "What is the average duration for a project with Deventia?",
    answer: "Project duration varies based on complexity and requirements, typically ranging from 3-6 months for medium-sized projects."
  }
];


export const users = [
  {
    name: 'ISA Consulting',
    designation:
      'ISA is Your Bridge to Success in Staffing and Employment. Empower Your Career and Business with Strategic Staffing Solutions',
    image:
      'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722516206/isa-desktop_fxbc4v.webp',
    href: 'https://isaconsulting.com/',
  },
  {
    name: 'MakeWell.life',
    designation:
      'Simplify medical tourism, attract more patients, and maximize revenue with our AI-powered platform',
    image:
      'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722578596/makewell-mobile_nd9mjh.webp',
    href: 'https://makewell.life/',
  },
  {
    name: 'Dadi Rent Boat',
    designation:
      'Get on board, an unforgettable day at sea awaits you thanks to DaDi rent boat and dinghy rental',
    image:
      'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722516208/dadi-desktop_joz8xi.webp',
    href: 'https://www.dadirent.it/',
  },
  {
    name: 'Rs Global Tie',
    designation: 'Welcome to the fastest growing B2B Network',
    image:
      'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722516206/RS-desktop_bgrivg.webp',
    href: 'https://rsglobalties.com/',
  },
  {
    name: 'Private CPA',
    designation: 'Welcome to Charm Ads, where every click ignites success.',
    image:
      'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722601318/cpa-desktop_mds9m8.webp',
    href: '#',
  },
  {
    name: 'Origin.com',
    designation:
      'Welcome to Orgin.com, where you can hire expert website designers for any job.',
    image:
      'https://res.cloudinary.com/dhsgpxu04/image/upload/v1722516206/origin-desktop_xxpxls.webp',
    href: '#',
  },
];

export const accordionData = [
  {
    title: 'Building Bonds',
    description:
      'Fostering connections and relationships to strengthen communities and partnerships.',
  },
  {
    title: 'Holistic Solutions',
    description:
      'Providing comprehensive and integrated approaches to address complex challenges.',
  },
  {
    title: 'Future-Ready Tech Mastery',
    description:
      "Embracing cutting-edge technology and expertise to thrive in tomorrow's world.",
  },
  {
    title: 'Tailored Excellence',
    description:
      'Delivering customized and superior quality services tailored to specific needs and preferences.',
  },
  {
    title: 'Every Voice Matters',
    description:
      'Ensuring inclusivity and valuing the perspectives and contributions of all individuals.',
  },
];

export const statsData = [
  {
    value: 35,
    title: 'Projects',
  },
  {
    value: 17,
    title: 'Employees',
  },
  {
    value: 12,
    title: 'Clients',
  },
  {
    value: 1.5,
    title: 'Years',
  },
];

export const partnersData = [
  {
    imageUrl: 'https://i.ibb.co/jJHM2tr/Company-Logo.png',
  },
  {
    imageUrl: 'https://i.ibb.co/n7xrgw7/Company-Logo-1.png',
  },
  {
    imageUrl: 'https://i.ibb.co/YTHw95t/Company-Logo-2.png',
  },
  {
    imageUrl: 'https://i.ibb.co/jJHM2tr/Company-Logo.png',
  },
  {
    imageUrl: 'https://i.ibb.co/n7xrgw7/Company-Logo-1.png',
  },
  {
    imageUrl: 'https://i.ibb.co/YTHw95t/Company-Logo-2.png',
  },
];

export const testiomonialsData = [
  {
    imageUrl:
      'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg',
    title: 'Graphic Designer',
    text: 'Deventia provides businesses with an edge over the competition with various benefits. Opting for outsourced IT services improves business efficiency',
  },
  {
    imageUrl:
      'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg',
    title: 'Graphic Designer',
    text: 'Deventia provides businesses with an edge over the competition with various benefits. Opting for outsourced IT services improves business efficiency',
  },
  {
    imageUrl:
      'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg',
    title: 'Graphic Designer',
    text: 'Deventia provides businesses with an edge over the competition with various benefits. Opting for outsourced IT services improves business efficiency',
  },
  {
    imageUrl:
      'https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg',
    title: 'Graphic Designer',
    text: 'Deventia provides businesses with an edge over the competition with various benefits. Opting for outsourced IT services improves business efficiency',
  },
];
