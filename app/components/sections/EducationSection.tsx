"use client"

import { motion } from "framer-motion"
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
          <div className="absolute left-4 sm:left-[12px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64ffda] via-[#38bdf8] to-[#64ffda] hidden sm:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="sm:ml-16 relative"
              >
                <div className="absolute left-[-49px] sm:left-[-65px] top-0 w-7 h-7 bg-gradient-to-r from-[#64ffda] to-[#38bdf8] rounded-full hidden sm:flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-[#112240] p-6 rounded-xl border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-all">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#e0e0e0]">{item.title}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#64ffda]/15 text-[#64ffda] whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-[#38bdf8] mb-3">{item.institution}</p>
                  <p className="text-sm sm:text-base text-[#a0aec0]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
