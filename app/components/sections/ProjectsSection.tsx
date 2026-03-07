"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import ProjectCard from "../ui/ProjectCard"
import { projects } from "../../data/projects"
import { staggerContainer } from "../../constants/animations"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 top-0 w-72 h-72 bg-[#64ffda]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block !mb-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#38bdf8]">
              Featured Projects
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg text-[#a0aec0] mt-4">
            Real projects I've built — from <span className="text-[#64ffda]">design files</span> to <span className="text-[#64ffda]">live applications</span>.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://github.com/srabonmojumder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#64ffda]/10 text-[#64ffda] border-2 border-[#64ffda]/40 px-8 py-3 rounded-xl text-lg font-semibold transition-all group min-w-[200px] hover:bg-[#64ffda]/20 hover:border-[#64ffda]/60"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(100, 255, 218, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              View More Projects
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
