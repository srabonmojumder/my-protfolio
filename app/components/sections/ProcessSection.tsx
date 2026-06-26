"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { processSteps } from "../../constants/data"

const accents = [
  { from: "#818cf8", to: "#6366f1" }, // indigo
  { from: "#2dd4bf", to: "#06b6d4" }, // teal / cyan
  { from: "#c084fc", to: "#a855f7" }, // violet
  { from: "#34d399", to: "#10b981" }, // emerald
  { from: "#38bdf8", to: "#0ea5e9" }, // sky
]

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#0A0F1A]">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-4 py-1.5 mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#64ffda]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#64ffda]" />
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold !mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#38bdf8]">
              How I Work
            </span>
          </h2>
          <p className="text-lg text-[#a0aec0] mt-3">From design handoff to production-ready code</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line — left on mobile, centered on desktop */}
          <div className="pointer-events-none absolute top-2 bottom-2 w-px left-[27px] md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-[#64ffda]/40 via-[#38bdf8]/30 to-[#64ffda]/10" />

          {processSteps.map((process, index) => {
            const IconComponent = process.icon
            const isLeft = index % 2 === 0
            const accent = accents[index % accents.length]

            const nodePos = isLeft
              ? "md:left-auto md:right-0 md:translate-x-1/2"
              : "md:left-0 md:-translate-x-1/2"

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 ${index > 0 ? "mt-8 md:mt-4" : ""} ${isLeft ? "" : "md:ml-auto"}`}
              >
                {/* Horizontal connector from line to card */}
                <div
                  className={`absolute z-[5] h-0.5 rounded-full top-[59px] md:top-1/2 md:-translate-y-1/2 ${
                    isLeft
                      ? "left-[27px] w-9 md:left-auto md:right-[9px] md:w-10"
                      : "left-[27px] w-9 md:left-[9px] md:w-10"
                  }`}
                  style={{ background: `${accent.from}66` }}
                />

                {/* Node on the line */}
                <div
                  className={`absolute z-20 left-[27px] top-8 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 ${nodePos}`}
                >
                  <div className="relative">
                    {/* dashed halo */}
                    <div
                      className="absolute inset-0 -m-1.5 rounded-full border border-dashed"
                      style={{ borderColor: `${accent.from}55` }}
                    />
                    <div
                      className="relative flex h-14 w-14 items-center justify-center rounded-full"
                      style={{
                        background: "#0A0F1A",
                        border: `2px solid ${accent.from}`,
                        boxShadow: `0 0 0 5px ${accent.from}12, 0 0 22px ${accent.from}3d`,
                      }}
                    >
                      <IconComponent className="h-6 w-6" style={{ color: accent.from }} />
                    </div>
                    <span
                      className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-[#0A0F1A]"
                      style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                    >
                      {process.step}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className={`pl-16 ${isLeft ? "md:pl-0 md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-3xl border p-6 sm:p-7 backdrop-blur-sm"
                    style={{
                      borderColor: `${accent.from}33`,
                      background: "linear-gradient(155deg, rgba(255,255,255,0.045), rgba(255,255,255,0.01))",
                    }}
                  >
                    {/* Ghost number */}
                    <span
                      className="pointer-events-none absolute -bottom-6 right-3 text-[6rem] font-black leading-none select-none"
                      style={{ color: `${accent.from}12` }}
                    >
                      {process.step}
                    </span>

                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                      style={{
                        color: accent.from,
                        backgroundColor: `${accent.from}1a`,
                        border: `1px solid ${accent.from}33`,
                      }}
                    >
                      Step {index + 1}
                    </span>

                    <h3 className="relative mt-4 text-xl font-bold text-[#e6f1ff]">{process.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-[#8892b0]">{process.description}</p>

                    {process.tag && (
                      <span
                        className="relative mt-5 inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold"
                        style={{
                          color: accent.from,
                          backgroundColor: `${accent.from}12`,
                          border: `1px solid ${accent.from}2e`,
                        }}
                      >
                        {process.tag}
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-[#64ffda]" />
            <span className="text-[#a0aec0]">Average turnaround: <span className="text-[#64ffda] font-semibold">3-7 days</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
