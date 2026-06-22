"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { User, Code2, Zap, Briefcase, Target, Sparkles, ArrowUpRight } from "lucide-react"

const whatIDo = [
  "Convert Figma and Adobe XD designs into pixel-perfect React/Next.js code",
  "Build responsive layouts that work on every screen size",
  "Manage application state with Redux, Zustand, and Context API",
  "Integrate REST and GraphQL APIs and AI services (including Gemini) for real-time data",
  "Build WordPress sites and custom Elementor widgets for client work",
  "Deliver clean, maintainable, production-ready code",
]

const myApproach = [
  "Review the design file and understand every detail before writing code",
  "Build mobile-first, then scale up for tablets and desktops",
  "Write reusable React components that your team can build on",
  "Test across real devices and browsers before delivery",
]

const experience = [
  "Frontend Developer at Luminous Labs",
  "3 Years Professional Experience",
  "20+ Projects Delivered",
]

const coreFocus = [
  "React & Next.js Development",
  "CSS Grid & Flexbox Masterclass",
  "Figma/XD to Code Conversion",
  "Responsive Web Development",
]

const highlights = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Pixel-Perfect" },
]

const techPills = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"]

type IconType = typeof User

function GlassCard({
  className = "",
  num,
  children,
}: {
  className?: string
  num?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:border-[#64ffda]/30 hover:bg-white/[0.04] ${className}`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#38bdf8]/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {num && (
        <span className="pointer-events-none absolute right-5 top-2 text-[5rem] font-black leading-none text-white/[0.035] select-none">
          {num}
        </span>
      )}
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
      <h3 className="text-lg font-bold text-[#e6f1ff] !mb-0">{title}</h3>
    </div>
  )
}

function ListItem({ children, accent = "#64ffda" }: { children: React.ReactNode; accent?: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
      <span>{children}</span>
    </li>
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

        {/* Hero bento */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="md:col-span-5 md:row-span-2">
            <div className="relative h-full">
              <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-[#64ffda]/25 to-[#38bdf8]/25 opacity-60 blur-2xl" />
              <div className="relative h-full min-h-[460px] overflow-hidden rounded-[1.5rem] border border-white/10">
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
              I&apos;m a <span className="font-semibold text-[#64ffda]">Frontend Developer</span> at Luminous Labs with <span className="font-semibold text-[#64ffda]">3+ years</span> of experience building responsive, high-performance web applications using <span className="font-semibold text-[#38bdf8]">React.js, Next.js, and modern JavaScript</span>.
            </p>
            <p className="text-base leading-relaxed text-[#a0aec0] sm:text-lg">
              I translate UI/UX designs into clean, scalable code, manage state with <span className="font-semibold text-[#64ffda]">Redux, Zustand, and Context API</span>, and integrate REST, GraphQL, and AI APIs (including Gemini) to deliver dynamic, data-driven interfaces. Strong collaborator across design, backend, and QA, with a focus on pixel-perfect UI and cross-device performance.
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-5 md:col-span-7">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] px-3 py-5 text-center backdrop-blur-xl transition-colors hover:border-[#64ffda]/30"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#64ffda]/60 to-transparent" />
                <div className="bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-2xl font-extrabold text-transparent sm:text-4xl">
                  {h.value}
                </div>
                <div className="mt-1.5 text-[11px] leading-tight text-[#8892b0] sm:text-xs">{h.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info bento */}
        <motion.div
          className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:gap-5 md:grid-cols-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="md:col-span-7" num="01">
            <CardHead icon={Code2} title="What I Do" />
            <ul className="space-y-3 text-sm text-[#a0aec0] sm:text-base">
              {whatIDo.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="md:col-span-5" num="02">
            <CardHead icon={Zap} title="My Approach" accent="#38bdf8" />
            <ul className="space-y-3 text-sm text-[#a0aec0] sm:text-base">
              {myApproach.map((item, i) => (
                <ListItem key={i} accent="#38bdf8">
                  {item}
                </ListItem>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="md:col-span-4" num="03">
            <CardHead icon={Briefcase} title="Experience" />
            <ul className="space-y-3 text-sm text-[#a0aec0] sm:text-base">
              {experience.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="md:col-span-4" num="04">
            <CardHead icon={Target} title="Core Focus" accent="#38bdf8" />
            <ul className="space-y-3 text-sm text-[#a0aec0] sm:text-base">
              {coreFocus.map((item, i) => (
                <ListItem key={i} accent="#38bdf8">
                  {item}
                </ListItem>
              ))}
            </ul>
          </GlassCard>

          {/* Best Fit — featured */}
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#64ffda]/25 bg-gradient-to-br from-[#64ffda]/15 to-[#38bdf8]/15 p-6 sm:p-7 md:col-span-4">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#64ffda]/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#64ffda]/30 bg-[#0A0F1A]/40">
                <Sparkles className="h-5 w-5 text-[#64ffda]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#e6f1ff]">Best Fit</h3>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">
                Give me a Figma or XD file with clear specs, and I&apos;ll deliver <span className="font-semibold text-[#64ffda]">responsive React/Next.js code</span> your team can build on. Accurate, clean, and ready for production.
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[#64ffda]">
                Let&apos;s build together <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
