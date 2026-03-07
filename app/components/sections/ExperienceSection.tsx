"use client"

import { motion } from "framer-motion"
import { workExperiences } from "../../constants/data"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute left-1/4 top-0 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-[#64ffda]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block !mb-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#38bdf8]">
              Work Experience
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg text-[#a0aec0] mt-4">
            Where I've built and grown as a frontend developer
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-[12px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64ffda] via-[#38bdf8] to-[#64ffda] hidden sm:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {workExperiences.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="sm:ml-16 relative"
              >
                <div className={`absolute left-[-49px] sm:left-[-65px] top-0 w-7 h-7 bg-gradient-to-r ${job.color} rounded-full hidden sm:flex items-center justify-center shadow-lg`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-[#112240] p-6 sm:p-8 rounded-2xl border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-all group">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#e0e0e0] mb-2 group-hover:text-[#64ffda] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-[#64ffda] mb-2">
                        <span className="text-lg font-semibold">{job.company}</span>
                        <span className="text-[#a0aec0]">•</span>
                        <span className="text-sm text-[#a0aec0]">{job.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#64ffda]/15 text-[#64ffda] border border-[#64ffda]/20 whitespace-nowrap">
                        {job.period}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/20">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-[#a0aec0] mb-4 leading-relaxed">{job.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#38bdf8] mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#a0aec0]">
                          <span className="text-[#64ffda] mt-1 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
