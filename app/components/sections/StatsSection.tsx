"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { stats } from "../../constants/data"

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#64ffda]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#64ffda08_1px,transparent_1px),linear-gradient(to_bottom,#64ffda08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-5 py-2 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-[#64ffda]" />
            <span className="text-[#64ffda] text-sm font-medium">Track Record</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              By The Numbers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#a0aec0] max-w-xl mx-auto"
          >
            Three years of shipping production-grade interfaces — measured in real outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>

                <div className="relative h-full bg-gradient-to-br from-[#112240] to-[#0a192f] backdrop-blur-xl border border-[#64ffda]/10 rounded-2xl p-5 sm:p-6 lg:p-7 overflow-hidden transition-all duration-300 group-hover:border-[#64ffda]/40 group-hover:-translate-y-1">
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity duration-500`}></div>

                  <div className={`inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} p-[1.5px] mb-5`}>
                    <div className="w-full h-full bg-[#0a192f] rounded-[10px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300" strokeWidth={2.2} />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 leading-none`}
                  >
                    {stat.number}
                  </motion.div>

                  <p className="text-[#a0aec0] text-sm sm:text-base font-medium">
                    {stat.label}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#64ffda]/5 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color} origin-left`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: index * 0.1 + 0.4, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
