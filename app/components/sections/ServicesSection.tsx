"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Code,
  Layers,
  Server,
  Rocket,
  Sparkles,
  Quote,
  CheckCircle2,
} from "lucide-react"
import { services } from "../../constants/data"

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Outer container scroll progress (320vh scroll track)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Individual Parallax scroll transforms for each of the 5 cards sliding up from bottom one by one
  const card0Y = useTransform(scrollYProgress, [0.00, 0.16], ["100vh", "0vh"])
  const card0Opacity = useTransform(scrollYProgress, [0.00, 0.12], [0, 1])

  const card1Y = useTransform(scrollYProgress, [0.16, 0.32], ["100vh", "0vh"])
  const card1Opacity = useTransform(scrollYProgress, [0.16, 0.28], [0, 1])

  const card2Y = useTransform(scrollYProgress, [0.32, 0.48], ["100vh", "0vh"])
  const card2Opacity = useTransform(scrollYProgress, [0.32, 0.44], [0, 1])

  const card3Y = useTransform(scrollYProgress, [0.48, 0.64], ["100vh", "0vh"])
  const card3Opacity = useTransform(scrollYProgress, [0.48, 0.60], [0, 1])

  const card4Y = useTransform(scrollYProgress, [0.64, 0.80], ["100vh", "0vh"])
  const card4Opacity = useTransform(scrollYProgress, [0.64, 0.76], [0, 1])

  // Desktop horizontal offsets and tilt angles matching playing-card fan deck (Image 3)
  const cardConfigs = [
    {
      y: card0Y,
      opacity: card0Opacity,
      left: "2%",
      rotate: -8,
    },
    {
      y: card1Y,
      opacity: card1Opacity,
      left: "21%",
      rotate: -4,
    },
    {
      y: card2Y,
      opacity: card2Opacity,
      left: "40%",
      rotate: 0,
    },
    {
      y: card3Y,
      opacity: card3Opacity,
      left: "59%",
      rotate: 4,
    },
    {
      y: card4Y,
      opacity: card4Opacity,
      left: "78%",
      rotate: 8,
    },
  ]

  return (
    <div id="services" ref={containerRef} className="relative h-[320vh] bg-[#0A0F1A]">
      {/* Sticky Pinned Viewport - Pins section in place while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-8 z-10">
        {/* Ambient Glowing Orbs */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#64ffda]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-[130px] pointer-events-none" />

        {/* Giant Watermark Typography - Pinned Background Text (Positioned lower behind card deck) */}
        <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <div className="text-center font-black tracking-tighter leading-none opacity-[0.05] sm:opacity-[0.07]">
            <div
              className="text-[14vw] sm:text-[16vw] uppercase font-mono block"
              style={{ WebkitTextStroke: "2.5px #64ffda", color: "transparent" }}
            >
              WHAT I
            </div>
            <div
              className="text-[16vw] sm:text-[18vw] uppercase font-mono block -mt-[4vw]"
              style={{ WebkitTextStroke: "2.5px #38bdf8", color: "transparent" }}
            >
              OFFER
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="relative z-20 text-center pt-2 sm:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda] text-xs font-mono mb-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frontend Solutions & Technical Expertise</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              What I Offer
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a0aec0] mt-1 max-w-md mx-auto">
            Scroll down to watch services slide up one by one
          </p>
        </div>

        {/* Desktop Sticky Parallax Fanning Deck (Cards slide up one by one from below as you scroll) */}
        <div className="hidden lg:block relative w-full h-[460px] my-auto z-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const config = cardConfigs[index] || {
              y: 0,
              opacity: 1,
              left: `${index * 20}%`,
              rotate: 0,
            }

            return (
              <motion.div
                key={index}
                style={{
                  y: config.y,
                  opacity: config.opacity,
                  left: config.left,
                  zIndex: index + 10,
                }}
                className="absolute w-[290px] xl:w-[320px] cursor-pointer group hover:!z-[100]"
              >
                {/* Inner Card Container - Brings hovered card 100% to front with crystal clear text */}
                <div
                  style={{ transform: `rotate(${config.rotate}deg)` }}
                  className="relative rounded-3xl border border-[#64ffda]/30 bg-[#0A1628] backdrop-blur-2xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between h-[435px] transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-8 group-hover:scale-[1.08] group-hover:bg-[#0f223d] group-hover:border-[#64ffda] group-hover:shadow-[0_25px_60px_rgba(100,255,218,0.35)]"
                >
                  {/* Subtle Ambient Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#64ffda]/10 to-[#38bdf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Top Row: Quote Icon & Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/30 flex items-center justify-center text-[#64ffda] group-hover:bg-[#64ffda]/20">
                        <Quote className="w-5 h-5 text-[#64ffda]" />
                      </div>
                      <span className="text-2xl font-extrabold font-mono text-[#64ffda]/40 group-hover:text-[#64ffda] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Subtitle & Title */}
                    {service.subtitle && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#38bdf8] block mb-1">
                        {service.subtitle}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-[#e0e0e0] group-hover:text-[#64ffda] transition-colors mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#a0aec0] group-hover:text-[#cbd5e1] text-xs leading-relaxed mb-3 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto">
                    {/* Quote Promise Callout */}
                    {service.quote && (
                      <div className="mb-3 p-2.5 rounded-xl bg-[#07111e] border border-[#64ffda]/20 text-[11px] text-[#e2e8f0] font-medium">
                        "{service.quote}"
                      </div>
                    )}

                    {/* Tech Badges */}
                    {service.tags && (
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-[#64ffda]/15">
                        {service.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20 group-hover:border-[#64ffda]/40"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Responsive Parallax Cards for Mobile & Tablet screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 my-auto z-20 overflow-y-auto max-h-[65vh] py-2">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#64ffda]/20 to-[#38bdf8]/20 opacity-50 blur-sm group-hover:opacity-100 transition duration-300" />
                <div className="relative rounded-3xl border border-[#64ffda]/20 bg-[#112240]/90 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-bold text-[#64ffda]/40">
                        0{index + 1}
                      </span>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}>
                        <div className="w-full h-full bg-[#0A0F1A] rounded-xl flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[#64ffda]" />
                        </div>
                      </div>
                    </div>
                    {service.subtitle && (
                      <span className="text-xs font-mono uppercase text-[#38bdf8] block mb-1">
                        {service.subtitle}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-[#e0e0e0] mb-2">{service.title}</h3>
                    <p className="text-[#a0aec0] text-xs leading-relaxed mb-3">{service.description}</p>
                  </div>

                  <div>
                    {service.quote && (
                      <div className="mb-3 p-2.5 rounded-xl bg-[#0A0F1A] border border-[#64ffda]/10 text-xs text-[#cbd5e1]">
                        "{service.quote}"
                      </div>
                    )}
                    {service.tags && (
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-[#64ffda]/10">
                        {service.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


