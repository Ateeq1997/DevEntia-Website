// 'use client';

// import React from 'react';

// const servicesData = [
//   {
//     id: "01",
//     title: "Consulting",
//     description: `DevEntia helps medical organizations build optimal digital infrastructure by guiding technology selection, choosing solutions aligned with your needs, and developing an effective implementation plan.`,
//   },
//   {
//     id: "02",
//     title: "Custom software development",
//     description: `Many healthcare institutions need tailored solutions to address specific requirements. DevEntia\'s custom software development services design and build software that meets the unique challenges of each healthcare provider.`,
//   },
//   {
//     id: "03",
//     title: "Integration services",
//     description: `Integration connects IT systems, databases, and applications, enabling unified operations that enhance data exchange and workflow efficiency.`,
//   },
//   {
//     id: "04",
//     title: "Support and maintenance",
//     description: `Ongoing support and maintenance are crucial for healthcare applications, where downtime can have serious repercussions. EffectiveSoft might offer reliable support and timely updates to keep software running smoothly and securely, which is vital in a fast-paced medical environment.`,
//   },
//   {
//     id: "05",
//     title: "Legacy software reengineering",
//     description: `DevEntia helps medical institutions modernize outdated software by enhancing, expanding, or redesigning it. Our developers update existing systems to improve security, reliability, and compliance with current industry standards.`,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="py-20 px-5 md:px-20 bg-white dark:bg-[#161616] transition-colors duration-500">
//       {/* First Services Word */}
//       <p className="text-black dark:text-blue-500 font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-2">
//         Services
//       </p>

//       {/* Main Heading */}
//       <h2 className="text-black dark:text-white font-medium text-[24px] leading-[32px] font-['Bai_Jamjuree'] mb-12">
//         Healthcare software development services
//       </h2>

//       {/* Rows as responsive grid */}
//       <div className="flex flex-col gap-12">
//         {servicesData.map((service) => (
//           <div
//             key={service.id}
//             className="grid grid-cols-1 md:grid-cols-[40px_300px_1fr] gap-10 md:gap-8 items-start"
//           >
//             {/* Number */}
//            <div className="text-blue-500 font-normal text-[16px] leading-[24px] font-['Bai_Jamjuree'] mt-[2px]">
//   {service.id}
// </div>


//             {/* Heading */}
//             <div
//               className="font-medium text-[18px] md:text-[24px] leading-[32px] text-black dark:text-white"
//               style={{
//                 whiteSpace: service.id === "02" || service.id === "05" ? 'normal' : 'nowrap',
//               }}
//             >
//               {service.title}
//             </div>

//             {/* Paragraph */}
//             <div className="text-black/90 dark:text-white/90 text-[16px] md:text-[18px] leading-[28px] md:ml-8">
//               {service.description}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
