import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { GoArrowUpRight } from "react-icons/go";

interface Project {
    title: string
    subtitle: string
    image: string | StaticImageData; // Allow both string (for URLs) and StaticImageData (for imports)
    link: string
  }
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="space-y-4 ">
    <div className="flex  justify-between">
      <div 
      className='w-[200px] group'>
        <h3 className="text-white md:text-[16px] group-hover:text-[#4848FF] duration-700 lg:text-xl font-semibold">{project.title}</h3>
        <p className="group-hover:text-white duration-700 text-gray-400 mt-1">{project.subtitle}</p>
      </div>
      <Link href={project.link} target='blank' passHref>
      <button className="bg-[#4848FF] p-3 h-12  rounded-full">
        <GoArrowUpRight className="w-6 h-6 text-white" />
      </button>
      </Link>
    </div>
    <Image
      src={project.image}
      alt={project.title}
      width={800}
      height={600}
      className="w-full h-auto"
    />
  </motion.div>
  )
}

export default ProjectCard
