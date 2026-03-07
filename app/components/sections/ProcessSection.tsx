"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { processSteps } from "../../constants/data"

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#0a192f]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold !mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] !mb-0 to-[#38bdf8]">
              How I Work
            </span>
          </h2>
          <p className="text-lg text-[#a0aec0]">From design handoff to production-ready code</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((process, index) => {
              const IconComponent = process.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < 4 && (
                    <div className="hidden md:block absolute top-12 left-[calc(100%-2rem)] w-[calc(100%+1.5rem)] h-0.5 bg-gradient-to-r from-[#64ffda]/50 to-[#38bdf8]/50 z-0"></div>
                  )}

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${process.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-[#0a192f] rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <IconComponent className="w-10 h-10 text-white mx-auto mb-2" />
                          <div className={`text-xs font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent`}>
                            {process.step}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <h3 className="text-lg font-bold text-[#e0e0e0] mb-2 text-center">{process.title}</h3>
                    <p className="text-sm text-[#a0aec0] text-center leading-relaxed">{process.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-[#64ffda]" />
              <span className="text-[#a0aec0]">Average turnaround: <span className="text-[#64ffda] font-semibold">3-7 days</span></span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
