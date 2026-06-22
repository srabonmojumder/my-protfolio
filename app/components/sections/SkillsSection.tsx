"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import type { Skill } from "../../types"
import { skills, skillStats } from "../../constants/data"

// Split the stack into two marquee rows that scroll in opposite directions
const half = Math.ceil(skills.length / 2)
const rowOne = skills.slice(0, half)
const rowTwo = skills.slice(half)

const edgeFade = {
  maskImage:
    "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
}

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  const ring = index % 2 === 0 ? "from-[#64ffda] to-[#38bdf8]" : "from-[#38bdf8] to-[#64ffda]"
  return (
    <div className="group/chip flex shrink-0 items-center gap-3 rounded-2xl border border-[#64ffda]/10 bg-gradient-to-br from-[#112240] to-[#0A0F1A] px-5 py-3 transition-colors duration-300 hover:border-[#64ffda]/40">
      <div className={`h-11 w-11 shrink-0 rounded-full bg-gradient-to-r ${ring} p-0.5`}>
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0A0F1A]">
          <skill.icon className="text-xl text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="whitespace-nowrap text-sm font-semibold text-[#e0e0e0]">{skill.name}</span>
        <span className="text-xs text-[#38bdf8]">{skill.level}</span>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex w-max mx-auto items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-5 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-sm font-medium">Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block !mb-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              My Tech Stack
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#a0aec0]"
          >
            The tools I use to build modern web interfaces
          </motion.p>
        </div>

        {/* Auto-scrolling marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          {/* Row 1 — scrolls left */}
          <div className="group relative overflow-hidden" style={edgeFade}>
            <div
              className="flex w-max gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "42s" }}
            >
              {[...rowOne, ...rowOne].map((skill, index) => (
                <SkillChip key={`r1-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="group relative overflow-hidden" style={edgeFade}>
            <div
              className="flex w-max gap-4 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "36s" }}
            >
              {[...rowTwo, ...rowTwo].map((skill, index) => (
                <SkillChip key={`r2-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {skillStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="flex items-center gap-3 bg-[#112240] backdrop-blur-sm border border-[#64ffda]/15 rounded-full px-6 py-3">
                <IconComponent className="w-5 h-5 text-[#38bdf8]" />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">{stat.value}</span>
                  <span className="text-sm text-[#a0aec0]">{stat.label}</span>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
