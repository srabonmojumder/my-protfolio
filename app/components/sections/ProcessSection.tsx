"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle } from "lucide-react"
import { processSteps } from "../../constants/data"

const accents = [
  { from: "#818cf8", to: "#6366f1" }, // indigo
  { from: "#2dd4bf", to: "#06b6d4" }, // teal / cyan
  { from: "#c084fc", to: "#a855f7" }, // violet
  { from: "#34d399", to: "#10b981" }, // emerald
  { from: "#38bdf8", to: "#0ea5e9" }, // sky
]

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useIsoLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia(container)

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              end: "bottom 85%",
              scrub: 0.5,
            },
          }
        )
      }

      const steps = container.querySelectorAll("[data-process-step]")
      steps.forEach((step) => {
        const node = step.querySelector("[data-step-node]")
        const card = step.querySelector("[data-step-card]")

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })

        if (node) {
          tl.fromTo(
            node,
            { scale: 0.6, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.8)" }
          )
        }

        if (card) {
          tl.fromTo(
            card,
            { opacity: 0, y: 30, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" },
            "-=0.25"
          )
        }
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#0A0F1A]"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
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

          {/* GSAP Scroll-driven line */}
          <div
            ref={lineRef}
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
                data-process-step
                className={`relative md:w-1/2 ${index > 0 ? "mt-8 md:mt-6" : ""} ${isLeft ? "" : "md:ml-auto"}`}
              >
                {/* Horizontal connector from line to card */}
                <div
                  className={`absolute z-[15] h-0.5 rounded-full top-[59px] md:top-1/2 md:-translate-y-1/2 ${
                    isLeft
                      ? "left-[27px] w-9 md:left-auto md:right-[9px] md:w-10"
                      : "left-[27px] w-9 md:left-[9px] md:w-10"
                  }`}
                  style={{ background: `${accent.from}aa` }}
                />

                {/* Node on the line (GSAP animated) */}
                <div
                  data-step-node
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
                </div>

                {/* Card (GSAP animated) */}
                <div className={`pl-16 ${isLeft ? "md:pl-0 md:pr-12" : "md:pl-12"}`}>
                  <div
                    data-step-card
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

                    <h3 className="relative mt-4 text-xl font-bold text-[#e6f1ff] group-hover:text-white transition-colors">{process.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-[#a0aec0]">{process.description}</p>

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
                </div>
              </div>
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
