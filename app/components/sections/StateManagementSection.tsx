"use client"

import { motion } from "framer-motion"
import { Boxes } from "lucide-react"
import { stateManagement } from "../../constants/data"

const accents = [
  { from: "#a78bfa", to: "#8b5cf6" }, // Redux — violet
  { from: "#38bdf8", to: "#0ea5e9" }, // Context — sky
  { from: "#34d399", to: "#10b981" }, // Zustand — emerald
]

export default function StateManagementSection() {
  return (
    <section
      id="state-management"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#64ffda_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.03]" />
        <div className="absolute left-1/4 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8b5cf6]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#38bdf8]/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#64ffda]"
          >
            <Boxes className="h-3.5 w-3.5" />
            Specialization
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="!mb-0 inline-block text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda] bg-clip-text text-transparent">
              State Management
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 max-w-2xl text-base text-[#a0aec0] sm:text-lg"
          >
            Architecting predictable, scalable state across React applications —
            picking the right tool for each layer of the stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {stateManagement.map((item, i) => {
            const Icon = item.icon
            const accent = accents[i % accents.length]
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-colors duration-500 sm:p-7"
                style={{ ["--accent" as string]: accent.from }}
              >
                {/* hover glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle, ${accent.from}40, transparent 70%)` }}
                />
                {/* top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-60"
                  style={{ background: `linear-gradient(to right, transparent, ${accent.from}, transparent)` }}
                />
                {/* number watermark */}
                <span className="pointer-events-none absolute right-5 top-2 select-none text-[4.5rem] font-black leading-none text-white/[0.04]">
                  0{i + 1}
                </span>

                <header className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl p-[2px]" style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#0A0F1A] sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: accent.from }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-[#e6f1ff] sm:text-xl">{item.name}</h3>
                    <span
                      className="mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: accent.from, backgroundColor: `${accent.from}1a`, border: `1px solid ${accent.from}33` }}
                    >
                      {item.level}
                    </span>
                  </div>
                </header>

                <p className="mb-5 text-sm leading-relaxed text-[#9fb3c8]">{item.tagline}</p>

                <ul className="flex-1 space-y-3 text-sm text-[#8892b0]">
                  {item.highlights.map((line, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: accent.from }}
                      />
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
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-[#8892b0]/70"
        >
          I treat state management as an architectural decision — Redux for
          shared, normalized data; Context for app-shell concerns; Zustand for
          feature-scoped UI state. Each chosen for fit, not familiarity.
        </motion.p>
      </div>
    </section>
  )
}
