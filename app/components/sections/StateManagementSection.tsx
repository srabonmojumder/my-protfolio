"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Boxes, Check } from "lucide-react"
import { stateManagement } from "../../constants/data"

const accents = [
  { from: "#a78bfa", to: "#8b5cf6" }, // Redux — violet
  { from: "#38bdf8", to: "#0ea5e9" }, // Context — sky
  { from: "#34d399", to: "#10b981" }, // Zustand — emerald
]

export default function StateManagementSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const item = stateManagement[active]
  const accent = accents[active % accents.length]
  const ActiveIcon = item.icon

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax — layers drift at different speeds as the section scrolls through view
  const gridY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  const glow1Y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const glow2Y = useTransform(scrollYProgress, [0, 1], [90, -90])
  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      ref={sectionRef}
      id="state-management"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: gridY }}
          className="absolute -inset-y-24 inset-x-0 bg-[radial-gradient(circle_at_center,#64ffda_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.03]"
        />
        <motion.div
          style={{ y: glow1Y }}
          className="absolute left-1/4 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8b5cf6]/10 blur-[120px]"
        />
        <motion.div
          style={{ y: glow2Y }}
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#38bdf8]/10 blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div style={{ y: headingY }} className="mb-12 flex flex-col items-center text-center sm:mb-14">
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
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Tab list */}
          <div className="flex flex-col gap-3 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            {stateManagement.map((tab, i) => {
              const TabIcon = tab.icon
              const a = accents[i % accents.length]
              const isActive = i === active
              return (
                <button
                  key={tab.name}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-white/15 bg-white/[0.04]"
                      : "border-white/[0.06] bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.03]"
                  }`}
                  style={isActive ? { ["--tw-shadow-color" as string]: a.from } : undefined}
                >
                  {/* active left bar */}
                  <span
                    className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-r transition-all duration-300"
                    style={{ height: isActive ? "60%" : "0%", background: `linear-gradient(${a.from}, ${a.to})` }}
                  />
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: isActive ? `linear-gradient(135deg, ${a.from}26, ${a.to}12)` : "rgba(255,255,255,0.03)",
                      color: isActive ? a.from : "#64748b",
                      ["--tw-ring-color" as string]: isActive ? `${a.from}40` : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <TabIcon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`truncate text-base font-bold !m-0 transition-colors ${isActive ? "text-[#e6f1ff]" : "text-[#8892b0]"}`}>
                      {tab.name}
                    </h3>
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: isActive ? a.from : "#5a6b85" }}
                    >
                      {tab.level}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active panel */}
          <div className="lg:col-span-8">
            <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0c1322]/80 p-7 backdrop-blur-xl sm:p-9">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-colors duration-500"
                style={{ background: `radial-gradient(circle, ${accent.from}26, transparent 70%)` }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-inset"
                      style={{ background: `linear-gradient(135deg, ${accent.from}26, ${accent.to}12)`, color: accent.from, ["--tw-ring-color" as string]: `${accent.from}40` }}
                    >
                      <ActiveIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#e6f1ff] sm:text-3xl">{item.name}</h3>
                      <span
                        className="mt-1.5 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: accent.from, backgroundColor: `${accent.from}14`, border: `1px solid ${accent.from}33` }}
                      >
                        {item.level}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-[#9fb3c8]">{item.tagline}</p>

                  <div
                    className="my-6 h-px w-full opacity-50"
                    style={{ background: `linear-gradient(to right, ${accent.from}55, transparent)` }}
                  />

                  <ul className="grid grid-cols-1 gap-4">
                    {item.highlights.map((line, j) => (
                      <li key={j} className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 text-sm leading-relaxed text-[#8892b0]">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                          style={{ backgroundColor: `${accent.from}1a`, color: accent.from }}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
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
