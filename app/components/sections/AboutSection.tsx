"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sparkles,
  Code2,
  Layers,
  Zap,
  MapPin,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Download,
  Globe2,
} from "lucide-react"

// Core impact metrics
const impactStats = [
  {
    num: "3.5+",
    label: "Years Experience",
    sub: "Frontend Engineering",
    gradient: "from-[#64ffda] via-[#38bdf8] to-[#64ffda]",
  },
  {
    num: "25+",
    label: "Apps Shipped",
    sub: "Production Deployed",
    gradient: "from-[#38bdf8] via-[#818cf8] to-[#38bdf8]",
  },
  {
    num: "100+",
    label: "Figma Screens",
    sub: "1:1 Pixel-Perfect Code",
    gradient: "from-[#c084fc] via-[#64ffda] to-[#38bdf8]",
  },
  {
    num: "8+",
    label: "Global Countries",
    sub: "US, UK, CA, AU, DE, FR, BD +",
    gradient: "from-[#34d399] via-[#38bdf8] to-[#64ffda]",
  },
]

// Core engineering disciplines
const disciplines = [
  {
    icon: Code2,
    badge: "Design to Code",
    title: "Pixel-Perfect Figma Conversion",
    description:
      "Transforming complex Figma components, auto-layouts, and design tokens into clean, fluid React/Next.js code with 100% design fidelity across all devices.",
    tags: ["Figma Specs", "Fluid Breakpoints", "Micro-Interactions"],
    accent: "#64ffda",
  },
  {
    icon: Layers,
    badge: "State & Data",
    title: "Modern State & API Integration",
    description:
      "Structuring predictable application architecture using Redux Toolkit, Zustand atomic stores, and Context API, synced with real-time REST and Gemini AI endpoints.",
    tags: ["Redux / Zustand", "REST & AI APIs", "Cache Sync"],
    accent: "#38bdf8",
  },
  {
    icon: Zap,
    badge: "Engineering Quality",
    title: "Performance & Responsive Polish",
    description:
      "Optimizing Core Web Vitals, accessible semantic HTML, and 60fps animations with Framer Motion and GSAP — backed by manual QA and automated testing.",
    tags: ["Web Vitals", "Framer Motion", "Cross-Browser QA"],
    accent: "#a855f7",
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 bg-[#0A0F1A]"
    >
      {/* High-Tech Cyber Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#112240]/50 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#64ffda]/10 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[130px] animate-pulse animation-delay-2000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#64ffda_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-14 sm:mb-18 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#64ffda]/30 bg-gradient-to-r from-[#64ffda]/15 via-[#38bdf8]/10 to-[#64ffda]/15 px-5 py-2 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(100,255,218,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-[#64ffda]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#64ffda]">
              Engineering Mindset & Profile
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight !mb-4"
          >
            <span className="text-white">I Build </span>
            <span className="bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda] bg-clip-text text-transparent">
              High-Converting Code
            </span>
            <br className="hidden sm:inline" />
            <span className="text-white"> For Modern Web Products.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-[#a0aec0] max-w-2xl px-2"
          >
            Frontend Developer specializing in bridging Figma design systems and production-grade React/Next.js architecture with clean code and uncompromising visual fidelity.
          </motion.p>
        </div>

        {/* ================= BENTO GRID ROW 1: Hero Identity + Interactive IDE Box ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          {/* Card 1: Futuristic Portrait & Identity (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#112240]/40 backdrop-blur-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group hover:border-[#64ffda]/40 transition-all duration-500"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#64ffda]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#64ffda]/25 transition-all duration-500" />

            {/* Portrait Frame with Cyber HUD Elements (Flex-1 dynamically fills card height) */}
            <div className="relative flex-1 min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0A0F1A] shadow-inner">
              <Image
                src="/images/new.png"
                alt="Srabon Mozumder"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/20 to-transparent" />

              {/* Status Beacon Pill */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-[#0A0F1A]/85 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-emerald-300 tracking-wide">
                  Available for Work
                </span>
              </div>

              {/* Verified Frontend Developer Chip */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-[#0A0F1A]/85 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#e6f1ff] leading-none mb-1">
                    Srabon Mozumder
                  </h3>
                  <p className="text-xs font-medium text-[#64ffda]">Design → Code Specialist</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#a0aec0] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#64ffda]" />
                  <span>3.5+ Yrs</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Meta Grid */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#64ffda]/10 text-[#64ffda] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-mono text-[#a0aec0] tracking-wider">Base</p>
                  <p className="text-xs font-semibold text-[#e6f1ff] truncate">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-mono text-[#a0aec0] tracking-wider">Recent</p>
                  <p className="text-xs font-semibold text-[#e6f1ff] truncate">Ex-Luminous Labs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Who I Am & What I Do (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#112240]/40 backdrop-blur-xl p-6 sm:p-8 lg:p-9 shadow-2xl relative overflow-hidden group hover:border-[#38bdf8]/40 transition-all duration-500"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#38bdf8]/25 transition-all duration-500" />

            <div className="space-y-6">
              {/* Header with Title and Availability Status */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#64ffda]/20 to-[#38bdf8]/20 border border-[#64ffda]/30 flex items-center justify-center text-[#64ffda] shadow-md shadow-[#64ffda]/10">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#e6f1ff] tracking-tight !mb-0">
                      Who I Am &amp; What I Do
                    </h3>
                    <p className="text-xs sm:text-sm text-[#a0aec0] mt-0.5">
                      Frontend Specialist · Design to Code
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#0A0F1A]/80 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs text-emerald-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for Opportunities</span>
                </div>
              </div>

              {/* Narrative Story (User-Friendly, Readable, Spacious) */}
              <div className="space-y-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                <p>
                  I&apos;m a dedicated <strong className="text-[#64ffda] font-semibold">Frontend Developer</strong> with <strong className="text-white font-semibold">3.5+ years of experience</strong> crafting modern, responsive web applications for startups, founders, and companies across <strong className="text-[#38bdf8] font-semibold">8+ countries</strong> — including the US, UK, Canada, Australia, Germany, France, and Bangladesh.
                </p>
                <p>
                  My core focus is taking complex <strong className="text-[#38bdf8] font-semibold">Figma design systems</strong> and engineering them into fluid, pixel-perfect, and accessible code using <strong className="text-[#64ffda] font-semibold">React, Next.js, TypeScript, and Tailwind CSS</strong>. From scalable component architecture to state management (Redux, Zustand) and real-time REST / Gemini AI API integrations, I build interfaces that convert and scale.
                </p>
              </div>

              {/* 3 User-Friendly Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#64ffda]/30 hover:bg-white/[0.04]">
                  <div className="w-8 h-8 rounded-lg bg-[#64ffda]/10 text-[#64ffda] flex items-center justify-center mb-3">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#e6f1ff] mb-1">Pixel-Perfect</h4>
                  <p className="text-xs text-[#a0aec0] leading-relaxed">
                    1:1 Figma translation with fluid responsive breakpoints on all devices.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#38bdf8]/30 hover:bg-white/[0.04]">
                  <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#e6f1ff] mb-1">State &amp; APIs</h4>
                  <p className="text-xs text-[#a0aec0] leading-relaxed">
                    Clean Redux/Zustand state management and seamless REST/AI data pipelines.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#a855f7]/30 hover:bg-white/[0.04]">
                  <div className="w-8 h-8 rounded-lg bg-[#a855f7]/10 text-[#c084fc] flex items-center justify-center mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#e6f1ff] mb-1">Fast &amp; Reliable</h4>
                  <p className="text-xs text-[#a0aec0] leading-relaxed">
                    60fps smooth animations, optimized Web Vitals, and thorough cross-browser QA.
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Clean TypeScript Architecture",
                  "Mobile-First Responsive",
                  "SEO & Performance Optimized",
                  "Cross-Browser Tested",
                ].map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="inline-flex items-center gap-1.5 text-xs text-[#a0aec0] bg-[#0A0F1A]/60 border border-white/[0.08] px-3 py-1.5 rounded-lg"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#64ffda]" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#a0aec0]">
                <Globe2 className="w-4 h-4 text-[#38bdf8]" />
                <span>Available for Global Remote Roles &amp; Contracts</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/cv/Srabon_Mozumder.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-[#64ffda]/30 bg-[#64ffda]/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0A0F1A] transition-all duration-300 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume (PDF)</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#64ffda] to-[#38bdf8] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0A0F1A]! hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#64ffda]/15"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BENTO GRID ROW 2: 4 Modern Glow Stats ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {impactStats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#112240]/40 backdrop-blur-xl p-5 sm:p-6 relative overflow-hidden group hover:border-[#64ffda]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.03] rounded-bl-full pointer-events-none group-hover:bg-[#64ffda]/10 transition-colors" />
              <p
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
              >
                {item.num}
              </p>
              <h4 className="text-sm sm:text-base font-bold text-[#e6f1ff] mt-2">{item.label}</h4>
              <p className="text-xs text-[#a0aec0] mt-0.5">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= BENTO GRID ROW 3: 3 Core Engineering Disciplines ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {disciplines.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-[#112240]/40 backdrop-blur-xl p-6 sm:p-7 relative overflow-hidden group hover:border-[#64ffda]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
              >
                {/* Accent top gradient line */}
                <span
                  className="pointer-events-none absolute inset-x-8 top-0 h-px opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${card.accent}15`,
                        borderColor: `${card.accent}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: card.accent }} />
                    </div>
                    <span
                      className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{
                        color: card.accent,
                        backgroundColor: `${card.accent}10`,
                        borderColor: `${card.accent}30`,
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#e6f1ff] mb-2.5 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a0aec0] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.07]">
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-[#cbd5e1] bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
