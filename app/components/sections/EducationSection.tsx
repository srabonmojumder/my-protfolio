"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { educationItems } from "../../constants/data"

export default function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#38bdf8]">
              Education
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-5 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#64ffda] via-[#38bdf8] to-[#64ffda] lg:left-1/2" />

          <div className="space-y-10 lg:space-y-2">
            {educationItems.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={index}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-14"
                >
                  {/* Node on the line */}
                  <span className="absolute z-10 left-5 top-7 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#64ffda] to-[#38bdf8] ring-4 ring-[#0A0F1A] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                    <GraduationCap className="h-3.5 w-3.5 text-[#0A0F1A]" />
                  </span>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`ml-12 lg:ml-0 ${
                      isLeft ? "lg:col-start-1 lg:pr-8 lg:text-right" : "lg:col-start-2 lg:pl-8"
                    }`}
                  >
                    <div className="group relative rounded-2xl border border-[#64ffda]/10 bg-[#112240] p-6 transition-all hover:border-[#64ffda]/30 hover:shadow-lg hover:shadow-[#64ffda]/5">
                      <span
                        className={`mb-3 inline-flex items-center rounded-full bg-[#64ffda]/15 px-3 py-1 text-xs font-medium text-[#64ffda] ${
                          isLeft ? "lg:ml-auto" : ""
                        }`}
                      >
                        {item.period}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#e0e0e0]">{item.title}</h3>
                      <p className="mt-1 text-base sm:text-lg text-[#38bdf8]">{item.institution}</p>
                      <p className="mt-3 text-sm sm:text-base text-[#a0aec0]">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
