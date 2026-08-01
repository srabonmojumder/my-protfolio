"use client"

import { useRef, useState, type ReactNode } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Boxes } from "lucide-react"
import { stateManagement } from "../../constants/data"

const accents = [
  { from: "#a78bfa", to: "#8b5cf6" }, // Redux — violet
  { from: "#38bdf8", to: "#0ea5e9" }, // Context — sky
  { from: "#34d399", to: "#10b981" }, // Zustand — emerald
]

// Minimal tokenizer for the snippet window: comments, strings, keywords,
// PascalCase identifiers, then call expressions — matched in that order.
const TOKEN_RE =
  /(\/\/[^\n]*)|('[^']*'|"[^"]*"|`[^`]*`)|\b(const|let|export|import|from|return|function|new|async|await|type|interface|default)\b|\b([A-Z][\w$]*)\b|\b([a-z_$][\w$]*)(?=\s*\()/g

function highlight(source: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  let key = 0
  let match: RegExpExecArray | null

  TOKEN_RE.lastIndex = 0
  while ((match = TOKEN_RE.exec(source)) !== null) {
    if (match.index > last) nodes.push(source.slice(last, match.index))

    const cls = match[1]
      ? "text-[#4d5f7a] italic"
      : match[2]
        ? "text-[#fbbf24]"
        : match[3]
          ? "text-[#c084fc]"
          : match[4]
            ? "text-[#64ffda]"
            : "text-[#38bdf8]"

    nodes.push(
      <span key={key++} className={cls}>
        {match[0]}
      </span>
    )
    last = match.index + match[0].length
  }

  nodes.push(source.slice(last))
  return nodes
}

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
          style={{ y: glow1Y, backgroundColor: `${accent.from}1a` }}
          className="absolute left-1/4 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full blur-[120px] transition-colors duration-700"
        />
        <motion.div
          style={{ y: glow2Y }}
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#38bdf8]/10 blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div style={{ y: headingY }} className="mb-10 flex flex-col items-center text-center sm:mb-12">
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

        {/* Segmented switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 flex max-w-2xl gap-1.5 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl sm:mb-10"
        >
          {stateManagement.map((tab, i) => {
            const TabIcon = tab.icon
            const a = accents[i % accents.length]
            const isActive = i === active
            return (
              <button
                key={tab.name}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="relative flex-1 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300"
                style={{ color: isActive ? a.from : "#8892b0" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="state-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${a.from}2e, ${a.to}14)`,
                      border: `1px solid ${a.from}40`,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <TabIcon className="h-4 w-4" />
                  {tab.name}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Active panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6"
          >
            {/* Left — identity + numbered highlights */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8">
                <div
                  className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                  style={{ background: `radial-gradient(circle, ${accent.from}2e, transparent 70%)` }}
                />

                <div className="relative flex flex-wrap items-center gap-4">
                  <div
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl ring-1 ring-inset"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}2e, ${accent.to}14)`,
                      color: accent.from,
                      ["--tw-ring-color" as string]: `${accent.from}40`,
                    }}
                  >
                    <ActiveIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="!mb-0 text-2xl font-bold text-[#e6f1ff] sm:text-3xl">{item.name}</h3>
                    <span
                      className="mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{
                        color: accent.from,
                        backgroundColor: `${accent.from}14`,
                        border: `1px solid ${accent.from}33`,
                      }}
                    >
                      {item.level}
                    </span>
                  </div>
                </div>

                <p className="relative mt-5 text-base leading-relaxed text-[#9fb3c8]">{item.tagline}</p>

                <ol className="relative mt-6 space-y-3">
                  {item.highlights.map((line, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.08 + j * 0.07 }}
                      className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.045]"
                    >
                      <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-[11px] font-bold"
                        style={{
                          backgroundColor: `${accent.from}1f`,
                          color: accent.from,
                          border: `1px solid ${accent.from}33`,
                        }}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-[#9fb3c8]">{line}</p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right — code window */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#070d18]">
                  <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-auto truncate font-mono text-[11px] text-[#5a6b85]">
                      {item.code.file}
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-[1.75] text-[#9fb3c8] sm:text-[12.5px]">
                    <code>{highlight(item.code.source)}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

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
