"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Boxes, Zap } from "lucide-react"
import type { Skill } from "../../types"
import { skills, skillStats, stateManagement } from "../../constants/data"

// Split the stack into two marquee rows that scroll in opposite directions
const half = Math.ceil(skills.length / 2)
const rowOne = skills.slice(0, half)
const rowTwo = skills.slice(half)

// One accent per state library, index-aligned with `stateManagement`.
const stateAccents = ["#a78bfa", "#38bdf8", "#5eead4"]

// `useLayoutEffect` would warn during SSR; this is a client component so the
// layout pass only matters once we're in the browser.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

const edgeFade = {
  maskImage:
    "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
}

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  const ring = index % 2 === 0 ? "from-[#64ffda] to-[#38bdf8]" : "from-[#38bdf8] to-[#64ffda]"
  return (
    <div className="group/chip flex shrink-0 items-center gap-3 rounded-2xl border border-[#64ffda]/10 bg-gradient-to-br from-[#112240] to-[#0A0F1A] px-5 py-3 transition-colors duration-300 hover:border-[#64ffda]/40">
      <div className={`h-11 w-11 shrink-0 rounded-full bg-gradient-to-r ${ring} p-0.5`}>
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0A0F1A]">
          <skill.icon className="text-xl text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="whitespace-nowrap text-sm font-semibold text-[#e0e0e0]">{skill.name}</span>
        <span className="text-xs text-[#38bdf8]">{skill.level}</span>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const stateRef = useRef<HTMLDivElement>(null)

  // The state-architecture block animates with GSAP + ScrollTrigger; the rest of
  // this section stays on framer-motion.
  useIsoLayoutEffect(() => {
    const el = stateRef.current
    if (!el) return

    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia(el)

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set("[data-state-reveal]", { opacity: 0, y: 18 })
      gsap.set("[data-state-card]", { opacity: 0, y: 28 })
      gsap.set("[data-state-edge]", { scaleX: 0 })
      gsap.set("[data-state-line]", { opacity: 0, x: -10 })

      gsap
        .timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        })
        .to("[data-state-reveal]", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 })
        .to("[data-state-card]", { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, "-=0.3")
        .to("[data-state-edge]", { scaleX: 1, duration: 0.7, stagger: 0.12 }, "-=0.5")
        .to("[data-state-line]", { opacity: 1, x: 0, duration: 0.45, stagger: 0.06 }, "-=0.45")
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex w-max mx-auto items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-5 py-2 mb-6"
          >
            <Zap className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-sm font-medium">Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block !mb-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              My Tech Stack
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#a0aec0]"
          >
            The tools I use to build modern web interfaces
          </motion.p>
        </div>

        {/* Auto-scrolling marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          {/* Row 1 — scrolls left */}
          <div className="group relative overflow-hidden" style={edgeFade}>
            <div
              className="flex w-max gap-4 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "42s" }}
            >
              {[...rowOne, ...rowOne].map((skill, index) => (
                <SkillChip key={`r1-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="group relative overflow-hidden" style={edgeFade}>
            <div
              className="flex w-max gap-4 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "36s" }}
            >
              {[...rowTwo, ...rowTwo].map((skill, index) => (
                <SkillChip key={`r2-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* State architecture — the depth behind the Redux / Context / Zustand
            chips in the marquee above. */}
        <div ref={stateRef} id="state-management" className="mt-14 scroll-mt-24 sm:mt-16">
          <div className="mb-8 flex flex-col items-center text-center">
            <span
              data-state-reveal
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#64ffda]/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
            >
              <Boxes className="h-3 w-3" />
              State Architecture
            </span>
            <p
              data-state-reveal
              className="mt-4 max-w-xl text-[13.5px] leading-[1.75] text-[#8296ae]"
            >
              Which of the three I reach for is an architectural decision, not a
              habit — here&apos;s how each one earns its place.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {stateManagement.map((tool, i) => {
              const accent = stateAccents[i % stateAccents.length]
              const ToolIcon = tool.icon

              return (
                <div
                  key={tool.name}
                  data-state-card
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 shadow-[0_24px_60px_-50px_rgba(0,0,0,1),inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12]"
                >
                  <span
                    data-state-edge
                    className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                  />

                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03]"
                      style={{ color: accent }}
                    >
                      <ToolIcon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <h3 className="!mb-0 text-[17px] font-bold leading-tight tracking-[-0.01em] text-[#eef5ff]">
                        {tool.name}
                      </h3>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                        style={{ color: accent }}
                      >
                        {tool.level}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-[13px] leading-[1.7] text-[#7f93ab]">{tool.tagline}</p>

                  <ul className="mt-4 space-y-2.5 border-t border-white/[0.05] pt-4">
                    {tool.highlights.slice(0, 2).map((line, j) => (
                      <li key={j} data-state-line className="flex gap-2.5">
                        <span
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: accent }}
                        />
                        <p className="text-[12.5px] leading-[1.65] text-[#93a7be]">{line}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {skillStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="flex items-center gap-3 bg-[#112240] backdrop-blur-sm border border-[#64ffda]/15 rounded-full px-6 py-3">
                <IconComponent className="w-5 h-5 text-[#38bdf8]" />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">{stat.value}</span>
                  <span className="text-sm text-[#a0aec0]">{stat.label}</span>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
