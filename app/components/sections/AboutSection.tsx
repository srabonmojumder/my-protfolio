"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  User, Code2, Zap, Target, Sparkles, ArrowUpRight, Smartphone,
  Layers, Server, Bug, LayoutTemplate, MapPin, Briefcase, Languages,
} from "lucide-react"

type IconType = typeof User

const whatIDo: { icon: IconType; text: string }[] = [
  { icon: Code2, text: "Convert Figma designs into pixel-perfect React/Next.js code — 100+ screens shipped" },
  { icon: Smartphone, text: "Build responsive, cross-device layouts with Tailwind CSS and SCSS architecture" },
  { icon: Layers, text: "Manage application state with Redux, Zustand, and Context API" },
  { icon: Server, text: "Integrate REST APIs and Gemini AI services for real-time data rendering" },
  { icon: Bug, text: "Run manual and cross-browser testing with Jest and React Testing Library" },
  { icon: LayoutTemplate, text: "Build WordPress sites and custom Elementor widgets for client work" },
]

const howIBuild = [
  "Review the design file and understand every detail before writing code",
  "Build mobile-first, then scale up for tablets and desktops",
  "Write reusable TypeScript components that your team can build on",
  "Test across real devices and browsers before delivery",
]

const quickFacts: { icon: IconType; label: string; value: string; live?: boolean }[] = [
  { icon: MapPin, label: "Based in", value: "Mirpur 12, Dhaka, Bangladesh" },
  { icon: Briefcase, label: "Most recently", value: "Frontend Developer · Luminous Labs" },
  { icon: Zap, label: "Availability", value: "Open to new projects", live: true },
  { icon: Languages, label: "Languages", value: "English (Professional) · Bangla (Native)" },
]

const focusAreas = [
  "React, Next.js & TypeScript",
  "Component Architecture & Design Systems",
  "Figma → Pixel-Perfect Code",
  "Performance Optimisation (20–40% faster loads)",
]

const techPills = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "Redux", "Zustand", "Framer Motion"]

function GlassCard({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:border-[#64ffda]/30 hover:bg-white/[0.04] ${className}`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#38bdf8]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">{children}</div>
    </div>
  )
}

function CardHead({ icon: Icon, title, accent = "#64ffda" }: { icon: IconType; title: string; accent?: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl border"
        style={{ backgroundColor: `${accent}1f`, borderColor: `${accent}33` }}
      >
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>
      <h3 className="!mb-0 text-lg font-bold text-[#e6f1ff]">{title}</h3>
    </div>
  )
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax — layers move at different speeds as the section scrolls through view
  const gridY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  const glow1Y = useTransform(scrollYProgress, [0, 1], [-90, 90])
  const glow2Y = useTransform(scrollYProgress, [0, 1], [70, -70])
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background (parallax) */}
      <motion.div
        style={{ y: gridY }}
        className="absolute -inset-y-24 inset-x-0 bg-[radial-gradient(circle_at_center,#64ffda_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.035]"
      />
      <motion.div
        style={{ y: glow1Y }}
        className="absolute left-1/4 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#64ffda]/10 blur-[120px]"
      />
      <motion.div
        style={{ y: glow2Y }}
        className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-[#38bdf8]/10 blur-[120px]"
      />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#64ffda]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#64ffda]" />
            About Me
          </span>
          <h2 className="!mb-0 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mt-3 text-base text-[#a0aec0] sm:text-lg">
            Frontend Developer. Design to Code. Detail-Oriented.
          </p>
        </motion.div>

        {/* Row 1 — identity: photo + narrative + quick facts */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Photo */}
          <div className="md:col-span-5 md:row-span-2">
            <div className="relative h-full">
              <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-[#64ffda]/25 to-[#38bdf8]/25 opacity-60 blur-2xl" />
              <div className="relative h-full min-h-[440px] overflow-hidden rounded-[1.5rem] border border-white/10">
                <motion.div style={{ y: photoY }} className="absolute inset-x-0 -inset-y-[14%]">
                  <Image
                    src="/images/new.png"
                    alt="Srabon Mojumder - Design to Code Specialist"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/10 via-transparent to-[#38bdf8]/10 mix-blend-overlay" />

                {/* Role chip */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#0A0F1A]/60 px-4 py-2 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#64ffda] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#64ffda]" />
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-[#e6f1ff]">Frontend Developer</span>
                </div>

                {/* Name overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xl font-bold text-[#e6f1ff]">Srabon Mojumder</p>
                  <p className="text-sm text-[#64ffda]">Design → Code Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Who I Am */}
          <GlassCard className="md:col-span-7">
            <CardHead icon={User} title="Who I Am" />
            <p className="mb-4 text-base leading-relaxed text-[#a0aec0] sm:text-lg">
              I&apos;m an outcome-focused <span className="font-semibold text-[#64ffda]">Frontend Developer</span> with <span className="font-semibold text-[#64ffda]">3.5 years</span> of experience delivering <span className="font-semibold text-[#64ffda]">25+ production web applications</span> across 5 countries — US, UK, France, Colombia and Bangladesh — using <span className="font-semibold text-[#38bdf8]">React.js, TypeScript, and Next.js</span>.
            </p>
            <p className="text-base leading-relaxed text-[#a0aec0] sm:text-lg">
              I translate Figma designs into pixel-perfect, scalable interfaces with <span className="font-semibold text-[#38bdf8]">Tailwind CSS and SCSS</span>, manage state with <span className="font-semibold text-[#64ffda]">Redux, Zustand, and Context API</span>, and integrate REST and Gemini AI APIs for real-time data. I handle manual and cross-browser testing (Jest, React Testing Library) and motion design with Framer Motion and GSAP — collaborating closely with design, backend, and QA on every release.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#64ffda]/15 bg-[#64ffda]/[0.06] px-3 py-1.5 text-xs font-medium text-[#9fb3c8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Quick facts */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:col-span-7">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-colors hover:border-[#64ffda]/30"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#64ffda]/50 to-transparent" />
                <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#64ffda]/70">
                  <fact.icon className="h-3.5 w-3.5" />
                  {fact.label}
                </span>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold leading-snug text-[#e6f1ff]">
                  {fact.live && (
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
                    </span>
                  )}
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Row 2 — what I do + how I build */}
        <motion.div
          className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 md:grid-cols-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="md:col-span-7">
            <CardHead icon={Code2} title="What I Do" />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whatIDo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#64ffda]/25 hover:bg-white/[0.045]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#64ffda]/20 to-[#38bdf8]/20">
                    <item.icon className="h-4 w-4 text-[#64ffda]" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#a0aec0]">{item.text}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="md:col-span-5">
            <CardHead icon={Zap} title="How I Build" accent="#38bdf8" />
            <ol className="space-y-4">
              {howIBuild.map((step, i) => (
                <li key={i} className="relative flex gap-4">
                  {i < howIBuild.length - 1 && (
                    <span className="pointer-events-none absolute -bottom-4 left-4 top-9 w-px -translate-x-1/2 bg-gradient-to-b from-[#38bdf8]/40 to-transparent" />
                  )}
                  <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-[#38bdf8]/30 bg-[#38bdf8]/10 font-mono text-xs font-bold text-[#38bdf8]">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-[#a0aec0]">{step}</p>
                </li>
              ))}
            </ol>
          </GlassCard>
        </motion.div>

        {/* Row 3 — best fit banner + focus areas */}
        <motion.div
          className="group relative mt-4 overflow-hidden rounded-[1.5rem] border border-[#64ffda]/25 bg-gradient-to-br from-[#64ffda]/[0.12] via-white/[0.02] to-[#38bdf8]/[0.12] p-6 sm:mt-5 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#64ffda]/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#64ffda]/30 bg-[#0A0F1A]/40">
                  <Sparkles className="h-5 w-5 text-[#64ffda]" />
                </div>
                <h3 className="!mb-0 text-lg font-bold text-[#e6f1ff]">Best Fit</h3>
              </div>
              <p className="text-base leading-relaxed text-[#cbd5e1]">
                Give me a Figma file with clear specs, and I&apos;ll deliver <span className="font-semibold text-[#64ffda]">responsive React/Next.js code</span> your team can build on. Accurate, clean, and ready for production.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#64ffda] to-[#38bdf8] px-6 py-3 text-sm font-bold text-[#0A0F1A]! transition-transform duration-300 hover:scale-[1.03]"
              >
                Let&apos;s build together
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#64ffda]/70">
                <Target className="h-3.5 w-3.5" />
                Focus areas
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-xl border border-white/[0.1] bg-[#0A0F1A]/40 px-3.5 py-2 text-xs font-medium text-[#cbd5e1] backdrop-blur-sm transition-colors hover:border-[#64ffda]/35"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
