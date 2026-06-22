"use client"

import { motion } from "framer-motion"
import { stats } from "../../constants/data"

function splitNumber(value: string) {
  const match = value.match(/^([\d.,]+)([+%]?)$/)
  if (match) return { num: match[1], suffix: match[2] }
  return { num: value, suffix: "" }
}

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#0A0F1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#64ffda]/[0.03] via-[#38bdf8]/[0.03] to-[#64ffda]/[0.03] blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <span className="text-[#64ffda] text-xs sm:text-sm font-medium tracking-[0.4em] uppercase">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              By The Numbers
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const { num, suffix } = splitNumber(stat.number)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                viewport={{ once: true }}
                className={[
                  "relative px-6 sm:px-8 lg:px-10 py-10 lg:py-12",
                  "flex flex-col justify-between",
                  "min-h-[260px] sm:min-h-[300px] lg:min-h-[360px]",
                  i > 0 ? "border-t sm:border-t-0 border-[#64ffda]/10" : "",
                  i > 0 ? "lg:border-l lg:border-[#64ffda]/10" : "",
                  i % 2 === 1 ? "sm:border-l sm:border-[#64ffda]/10 lg:border-l" : "",
                  i >= 2 ? "sm:border-t sm:border-[#64ffda]/10 lg:border-t-0" : "",
                ].join(" ")}
              >
                <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug max-w-[22ch]">
                  {stat.label}
                </p>

                <div className="flex items-baseline mt-8 lg:mt-10">
                  <span
                    className="font-extrabold leading-[0.9] tracking-tighter select-none text-[6rem] sm:text-[7.5rem] lg:text-[9.5rem] xl:text-[11rem]"
                    style={{
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    {num}
                  </span>
                  <span className="font-extrabold text-[#64ffda] leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ml-1">
                    {suffix}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
