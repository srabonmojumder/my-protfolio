"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import ProjectCard from "../ui/ProjectCard"
import { projects } from "../../data/projects"

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof projects
  direction: "left" | "right"
}) {
  return (
    <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max gap-6 sm:gap-8 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover/marquee:[animation-play-state:paused]`}
        style={{ animationDuration: "70s" }}
      >
        {[...items, ...items].map((project, index) => (
          <div
            key={index}
            aria-hidden={index >= items.length}
            className="w-[300px] shrink-0 sm:w-[360px]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const mid = Math.ceil(projects.length / 2)
  const rowOne = projects.slice(0, mid)
  const rowTwo = projects.slice(mid)

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
      </div>

      {/* Auto-scrolling rows — full-bleed so cards run edge to edge */}
      <div className="relative z-10 space-y-6 sm:space-y-8">
        <MarqueeRow items={rowOne} direction="left" />
        <MarqueeRow items={rowTwo} direction="right" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mt-12 flex items-center justify-center">
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
