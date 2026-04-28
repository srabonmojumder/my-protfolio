"use client"

import { motion } from "framer-motion"
import { Boxes, CheckCircle2 } from "lucide-react"
import { stateManagement } from "../../constants/data"

export default function StateManagementSection() {
  return (
    <section
      id="state-management"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-[#64ffda]/10 to-[#38bdf8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 sm:mb-14 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-5 py-2 mb-6"
          >
            <Boxes className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-sm font-medium">
              Specialization
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              State Management
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-base sm:text-lg text-[#a0aec0] max-w-2xl"
          >
            Architecting predictable, scalable state across React applications —
            picking the right tool for each layer of the stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {stateManagement.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-gradient-to-br from-[#112240] to-[#0a192f] border border-[#64ffda]/10 rounded-2xl p-6 sm:p-7 hover:border-[#64ffda]/30 hover:shadow-xl hover:shadow-[#64ffda]/5 transition-all duration-300 flex flex-col"
              >
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#64ffda]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <header className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#64ffda] to-[#38bdf8] p-[2px]">
                      <div className="w-full h-full rounded-[10px] bg-[#0a192f] flex items-center justify-center">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#64ffda]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#e0e0e0] leading-tight">
                        {item.name}
                      </h3>
                      <span className="inline-block mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-mono text-[#64ffda]/80">
                        {item.level}
                      </span>
                    </div>
                  </div>
                </header>

                <p className="text-sm text-[#a0aec0] leading-relaxed mb-5">
                  {item.tagline}
                </p>

                <ul className="space-y-2.5 text-sm text-[#a0aec0] flex-1">
                  {item.highlights.map((line, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#64ffda] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[#a0aec0]/60 mt-8 max-w-2xl mx-auto"
        >
          I treat state management as an architectural decision — Redux for
          shared, normalized data; Context for app-shell concerns; Zustand for
          feature-scoped UI state. Each chosen for fit, not familiarity.
        </motion.p>
      </div>
    </section>
  )
}
