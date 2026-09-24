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
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#0A0F1A]"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-4 py-1.5 mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#64ffda]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#64ffda]" />
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold !mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              How I Work
            </span>
          </h2>
          <p className="text-lg text-[#a0aec0] mt-3">From design handoff to production-ready code</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Track line background */}
          <div className="pointer-events-none absolute top-2 bottom-2 w-0.5 left-[27px] md:left-1/2 md:-translate-x-1/2 bg-white/[0.08]" />

          {/* Animated line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="pointer-events-none absolute top-2 bottom-2 w-0.5 left-[27px] md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-[#64ffda] via-[#38bdf8] to-[#64ffda] shadow-[0_0_12px_rgba(100,255,218,0.4)] z-10"
          />

          {processSteps.map((process, index) => {
            const IconComponent = process.icon
            const isLeft = index % 2 === 0
            const accent = accents[index % accents.length]

            const nodePos = isLeft
              ? "md:left-auto md:right-0 md:translate-x-1/2"
              : "md:left-0 md:-translate-x-1/2"

            return (
              <div
                key={index}
                className={`relative md:w-1/2 ${index > 0 ? "mt-8 md:mt-6" : ""} ${isLeft ? "" : "md:ml-auto"}`}
              >
                {/* Horizontal connector from line to card */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
                  style={{
                    background: `${accent.from}aa`,
                    originX: isLeft ? 1 : 0,
                  }}
                  className={`absolute z-[15] h-0.5 rounded-full top-[59px] md:top-1/2 md:-translate-y-1/2 ${
                    isLeft
                      ? "left-[27px] w-9 md:left-auto md:right-[9px] md:w-10"
                      : "left-[27px] w-9 md:left-[9px] md:w-10"
                  }`}
                />

                {/* Node on the line */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`absolute z-20 left-[27px] top-8 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 ${nodePos}`}
                >
                  <div className="relative">
                    {/* Glowing outer halo */}
                    <div
                      className="absolute inset-0 -m-1.5 rounded-full border border-dashed animate-pulse"
                      style={{ borderColor: `${accent.from}`, boxShadow: `0 0 15px ${accent.from}55` }}
                    />

                    <div
                      className="relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        background: "#0A0F1A",
                        border: `2px solid ${accent.from}`,
                        boxShadow: `0 0 0 5px ${accent.from}1a, 0 0 26px ${accent.from}55`,
                      }}
                    >
                      <IconComponent className="h-6 w-6" style={{ color: accent.from }} />
                    </div>

                    <span
                      className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-[#0A0F1A] shadow-md"
                      style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                    >
                      {process.step}
                    </span>
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -25 : 25, y: 15 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                  className={`pl-16 ${isLeft ? "md:pl-0 md:pr-12" : "md:pl-12"}`}
                >
                  <div
                    className="group relative overflow-hidden rounded-3xl border p-6 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 shadow-xl"
                    style={{
                      borderColor: `${accent.from}44`,
                      background: "linear-gradient(155deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
                      boxShadow: `0 10px 35px -10px ${accent.from}25`,
                    }}
                  >
                    {/* Top hairline accent */}
                    <span
                      className="pointer-events-none absolute inset-x-8 top-0 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${accent.from}, transparent)`,
                      }}
                    />

                    {/* Ghost number */}
                    <span
                      className="pointer-events-none absolute -bottom-6 right-3 text-[6rem] font-black leading-none select-none"
                      style={{ color: `${accent.from}18` }}
                    >
                      {process.step}
                    </span>

                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                      style={{
                        color: accent.from,
                        backgroundColor: `${accent.from}22`,
                        border: `1px solid ${accent.from}44`,
                      }}
                    >
                      Step {index + 1}
                    </span>

                    <h3 className="relative mt-4 text-xl font-bold text-[#e6f1ff] group-hover:text-white transition-colors">
                      {process.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-[#a0aec0]">
                      {process.description}
                    </p>

                    {process.tag && (
                      <span
                        className="relative mt-5 inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold"
                        style={{
                          color: accent.from,
                          backgroundColor: `${accent.from}18`,
                          border: `1px solid ${accent.from}3a`,
                        }}
                      >
                        {process.tag}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-[#64ffda]" />
            <span className="text-[#a0aec0]">
              Average turnaround: <span className="text-[#64ffda] font-semibold">3-7 days</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
