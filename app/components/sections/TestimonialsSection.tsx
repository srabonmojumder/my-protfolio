"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "../../constants/data"

const slots = [
  // Left column (4)
  { x: 14, y: 12 },
  { x: 6, y: 38 },
  { x: 6, y: 64 },
  { x: 18, y: 90 },
  // Right column (4)
  { x: 86, y: 12 },
  { x: 94, y: 38 },
  { x: 94, y: 64 },
  { x: 82, y: 90 },
]

const avatarUrl = (seed: string) => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0
  }
  const id = (Math.abs(hash) % 70) + 1
  return `https://i.pravatar.cc/150?img=${id}`
}

function buildCurve(
  ax: number,
  ay: number,
  cx: number,
  cy: number,
  cardHW: number,
  cardHH: number,
  gap = 32,
) {
  const dx = cx - ax
  const dy = cy - ay
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len
  const uy = dy / len

  const tx = Math.abs(ux) > 1e-6 ? cardHW / Math.abs(ux) : Infinity
  const ty = Math.abs(uy) > 1e-6 ? cardHH / Math.abs(uy) : Infinity
  const edgeDist = Math.min(tx, ty)
  const t = edgeDist + gap
  const ex = cx - ux * t
  const ey = cy - uy * t

  const px = -uy
  const py = ux
  const amp = len * 0.1
  const c1x = ax + (ex - ax) * 0.33 + px * amp
  const c1y = ay + (ey - ay) * 0.33 + py * amp
  const c2x = ax + (ex - ax) * 0.66 - px * amp
  const c2y = ay + (ey - ay) * 0.66 - py * amp

  const trailOffset = Math.min(14, gap - 8)
  return {
    path: `M ${ax} ${ay} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`,
    endX: ex,
    endY: ey,
    trailX: ex + ux * trailOffset,
    trailY: ey + uy * trailOffset,
  }
}

const AUTOPLAY_MS = 5000

export default function TestimonialsSection() {
  const total = Math.min(testimonials.length, slots.length)
  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [hovered, setHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    const update = () =>
      setSize({ w: el.clientWidth, h: el.clientHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % total)
      else if (e.key === "ArrowLeft")
        setActive((i) => (i - 1 + total) % total)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [total])

  useEffect(() => {
    if (!autoplay || hovered) return
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % total),
      AUTOPLAY_MS,
    )
    return () => window.clearTimeout(id)
  }, [active, autoplay, hovered, total])

  const t = testimonials[active]
  const activeSlot = slots[active]

  const curve = useMemo(() => {
    if (!size.w || !size.h)
      return { path: "", endX: 0, endY: 0, trailX: 0, trailY: 0 }
    const ax = (activeSlot.x / 100) * size.w
    const ay = (activeSlot.y / 100) * size.h
    const hw = Math.min(size.w * 0.46, 224)
    const hh = 210
    return buildCurve(ax, ay, size.w / 2, size.h / 2, hw, hh)
  }, [activeSlot.x, activeSlot.y, size.w, size.h])

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#38bdf8]">
              What Clients Say
            </span>
          </motion.h2>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setHovered(true)}
          onBlurCapture={() => setHovered(false)}
          className="relative mx-auto h-[560px] sm:h-[600px]"
        >
          {size.w > 0 && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox={`0 0 ${size.w} ${size.h}`}
              width={size.w}
              height={size.h}
            >
              <motion.path
                key={`curve-${active}`}
                d={curve.path}
                fill="none"
                stroke="#64ffda"
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              <motion.circle
                key={`dot-${active}`}
                cx={curve.endX}
                cy={curve.endY}
                r={6}
                fill="#64ffda"
                stroke="#0a192f"
                strokeWidth={1.5}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              />
              <motion.circle
                key={`trail-${active}`}
                cx={curve.trailX}
                cy={curve.trailY}
                r={4}
                fill="#64ffda"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.3, delay: 0.85 }}
              />
            </svg>
          )}

          {slots.slice(0, total).map((slot, i) => {
            if (i === active) return null
            return (
              <button
                key={`slot-${i}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${testimonials[i].name}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
                style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
              >
                <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-[#64ffda]/40 ring-offset-2 ring-offset-[#0a192f] opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:ring-[#64ffda] transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={avatarUrl(testimonials[i].name)}
                    alt={testimonials[i].name}
                    className="w-full h-full"
                  />
                </div>
              </button>
            )
          })}

          <motion.div
            key={`active-${active}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
            style={{ left: `${activeSlot.x}%`, top: `${activeSlot.y}%` }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#64ffda]/30 blur-md" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-br from-[#64ffda] to-[#38bdf8]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a192f]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={avatarUrl(t.name)}
                    alt={t.name}
                    className="w-full h-full"
                  />
                </div>
              </div>
              {t.badge && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#64ffda] text-[#0a192f] whitespace-nowrap shadow-md">
                  {t.badge}
                </div>
              )}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[92%] max-w-md bg-[#112240] rounded-2xl p-6 sm:p-8 border border-[#64ffda]/10 shadow-xl shadow-[#64ffda]/5 backdrop-blur-sm"
            >
              <header className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-[#64ffda] to-[#38bdf8] p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a192f]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={avatarUrl(t.name)}
                      alt={t.name}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#e0e0e0] text-base sm:text-lg leading-tight">
                    {t.name}
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#64ffda]/80 font-mono">
                    {t.role}, {t.company}
                  </div>
                </div>
              </header>

              <blockquote className="text-[#a0aec0] text-sm sm:text-base leading-relaxed mb-6">
                {t.quote}
              </blockquote>

              <footer className="flex justify-between items-center pt-4 border-t border-[#64ffda]/10">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#a0aec0]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda]" />
                  <span className="uppercase tracking-[0.15em]">
                    Verified User
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs text-[#a0aec0]/50 uppercase tracking-[0.15em] font-mono">
                  ID: {String(active + 1).padStart(2, "0")}
                </div>
              </footer>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 flex-wrap justify-center max-w-md">
            {testimonials.slice(0, total).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active}
                className={`relative h-2 rounded-full overflow-hidden transition-all ${
                  i === active ? "w-10 bg-white/15" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              >
                {i === active && (
                  <motion.span
                    key={`fill-${active}-${autoplay}-${hovered}`}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#64ffda] to-[#38bdf8]"
                    initial={{ width: "0%" }}
                    animate={{ width: autoplay && !hovered ? "100%" : "100%" }}
                    transition={{
                      duration:
                        autoplay && !hovered ? AUTOPLAY_MS / 1000 : 0.3,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#a0aec0]/50">
            <button
              type="button"
              onClick={() => setAutoplay((v) => !v)}
              aria-label={autoplay ? "Pause auto-slide" : "Play auto-slide"}
              className="flex items-center gap-2 hover:text-[#64ffda] transition-colors"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-current">
                {autoplay ? (
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
                    <rect x="0" y="0" width="2.5" height="10" rx="0.5" />
                    <rect x="5.5" y="0" width="2.5" height="10" rx="0.5" />
                  </svg>
                ) : (
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
                    <path d="M0 0 L8 5 L0 10 Z" />
                  </svg>
                )}
              </span>
              <span>{autoplay ? "Auto" : "Paused"}</span>
            </button>
            <span className="hidden sm:inline opacity-60">·</span>
            <span className="hidden sm:inline">
              Arrow keys or click any avatar
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
