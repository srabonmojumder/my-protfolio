"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { skills, skillStats } from "../../constants/data"
import { staggerContainer } from "../../constants/animations"

const layouts = [
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "md:col-span-2 col-span-2 row-span-1",
]

const gradients = [
  "from-[#64ffda]/15 to-[#38bdf8]/15",
  "from-[#38bdf8]/15 to-[#64ffda]/15",
  "from-[#64ffda]/10 to-[#38bdf8]/20",
  "from-[#38bdf8]/10 to-[#64ffda]/20",
  "from-[#64ffda]/20 to-[#38bdf8]/10",
  "from-[#38bdf8]/20 to-[#64ffda]/10",
  "from-[#64ffda]/15 to-[#38bdf8]/15",
  "from-[#38bdf8]/15 to-[#64ffda]/15",
  "from-[#64ffda]/10 to-[#38bdf8]/20",
  "from-[#38bdf8]/10 to-[#64ffda]/20",
  "from-[#64ffda]/15 to-[#38bdf8]/15",
]

const borderGradients = [
  "from-[#64ffda] to-[#38bdf8]",
  "from-[#38bdf8] to-[#64ffda]",
  "from-[#64ffda] to-[#38bdf8]",
  "from-[#38bdf8] to-[#64ffda]",
  "from-[#64ffda] to-[#38bdf8]",
  "from-[#38bdf8] to-[#64ffda]",
  "from-[#64ffda] to-[#38bdf8]",
  "from-[#38bdf8] to-[#64ffda]",
  "from-[#64ffda] to-[#38bdf8]",
  "from-[#38bdf8] to-[#64ffda]",
  "from-[#64ffda] to-[#38bdf8]",
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 flex flex-col justify-center">
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

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className={`${layouts[index]} group relative`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${borderGradients[index]} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500`}></div>

              <div className="relative h-full w-full bg-gradient-to-br from-[#112240] to-[#0a192f] backdrop-blur-xl border border-[#64ffda]/10 rounded-2xl overflow-hidden group-hover:border-[#64ffda]/30 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute h-[1px] w-full bg-gradient-to-r ${borderGradients[index]} top-1/2`}
                      style={{ transform: `rotate(${i * 45}deg)` }}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                    />
                  ))}
                </div>

                <div className="relative h-full flex flex-col items-center justify-center p-6 z-10">
                  <div className="relative mb-4">
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${borderGradients[index]} blur-md opacity-0 group-hover:opacity-60`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    ></motion.div>

                    <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${borderGradients[index]} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#0a192f] rounded-full flex items-center justify-center">
                        <skill.icon className="text-3xl md:text-4xl text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-[#e0e0e0] mb-2 text-center group-hover:scale-110 transition-transform duration-300">
                    {skill.name}
                  </h3>

                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${borderGradients[index]} text-white text-xs font-medium group-hover:scale-110 transition-transform duration-300`}>
                    <Zap className="w-3 h-3" />
                    {skill.level}
                  </div>

                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${borderGradients[index]} rounded-full opacity-0 group-hover:opacity-100`}
                        style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
                        animate={{ y: [-10, -30, -10], opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                        transition={{ duration: 2 + i * 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                      />
                    ))}
                  </div>

                  <div className={`absolute top-2 right-2 w-8 h-8 bg-gradient-to-br ${borderGradients[index]} opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity`}></div>
                  <div className={`absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br ${borderGradients[index]} opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
