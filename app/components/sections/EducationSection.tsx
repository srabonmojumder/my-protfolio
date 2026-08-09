"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Building2,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react"
import { educationItems } from "../../constants/data"

export default function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient glowing background blur */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#64ffda]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex w-max mx-auto items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda] text-xs font-mono mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Qualification</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight relative !mb-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              Education
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#a0aec0] mt-3 max-w-xl mx-auto"
          >
            Academic background and technical foundation in computer technology
          </motion.p>
        </div>

        {/* Education Item Cards */}
        <div className="grid grid-cols-1 gap-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Ambient Hover Glow Border */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#64ffda]/30 via-[#38bdf8]/20 to-[#64ffda]/30 opacity-40 blur-sm group-hover:opacity-100 transition duration-500" />

              {/* Glassmorphic Container Card */}
              <div className="relative rounded-3xl border border-[#64ffda]/20 bg-[#112240]/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300">
                {/* Header row: Icon, Title, Status, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#64ffda]/10">
                  <div className="flex items-center gap-4">
                    {/* Glowing Icon Badge */}
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#64ffda]/20 to-[#38bdf8]/20 border border-[#64ffda]/30 shadow-lg shadow-[#64ffda]/10 group-hover:scale-105 transition-transform duration-300">
                      <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-[#64ffda]" />
                    </div>

                    <div>
                      {item.status && (
                        <div className="inline-flex items-center gap-2 mb-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64ffda] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64ffda]"></span>
                          </span>
                          <span className="text-xs font-semibold tracking-wider uppercase text-[#64ffda]">
                            {item.status}
                          </span>
                        </div>
                      )}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#e0e0e0] group-hover:text-[#64ffda] transition-colors !mb-0">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="self-start sm:self-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#64ffda]/15 border border-[#64ffda]/30 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#64ffda] shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Institution, Location, Field of Study */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm sm:text-base text-[#38bdf8]">
                  <div className="flex items-center gap-2 font-medium">
                    <Building2 className="w-4 h-4 text-[#64ffda]" />
                    <span>{item.institution}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-[#a0aec0]">
                      <MapPin className="w-4 h-4 text-[#38bdf8]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                  {item.fieldOfStudy && (
                    <div className="flex items-center gap-1.5 text-[#64ffda]/90 text-xs sm:text-sm font-mono bg-[#64ffda]/5 px-3 py-1 rounded-lg border border-[#64ffda]/10">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{item.fieldOfStudy}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-[#a0aec0] leading-relaxed">
                  {item.description}
                </p>

                {/* Key Focus & Accomplishments */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#64ffda]/10">
                    <h4 className="text-xs font-mono tracking-wider uppercase text-[#64ffda] !mb-3">
                      Key Academic Focus & Accomplishments
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {item.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cbd5e1]">
                          <CheckCircle2 className="w-4 h-4 text-[#64ffda] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Subjects & Competencies Badges */}
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#64ffda]/10">
                    <h4 className="text-xs font-mono tracking-wider uppercase text-[#a0aec0] !mb-3">
                      Core Subjects & Competencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="inline-flex items-center rounded-lg bg-[#0A0F1A]/80 border border-[#64ffda]/15 px-3 py-1.5 text-xs font-mono text-[#64ffda] transition-all hover:border-[#64ffda]/40 hover:bg-[#64ffda]/10"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
