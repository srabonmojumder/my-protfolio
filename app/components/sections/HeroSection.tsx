"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Send, Code } from "lucide-react"
import { fadeIn } from "../../constants/animations"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background with code theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#64ffda]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#38bdf8]/15 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-[#38bdf8]/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center max-w-6xl mx-auto z-10 relative"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-5 py-2 mb-8"
        >
          <Code className="w-4 h-4 text-[#64ffda]" />
          <span className="text-[#64ffda] text-sm font-medium">Frontend Developer</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e0e0e0] via-[#64ffda]/80 to-[#64ffda]">
            I Build What
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] via-[#64ffda] to-[#64ffda]">
            You Design.
          </span>
        </motion.h1>

        <motion.div
          className="relative mb-10 max-w-3xl mx-auto space-y-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl mb-4 text-[#e0e0e0] leading-relaxed">
            Frontend Developer at <span className="text-[#64ffda] font-semibold">Luminous Labs</span> | 3 Years of Experience
          </p>
          <p className="text-base sm:text-lg text-[#a0aec0] leading-relaxed">
            I turn <span className="text-[#64ffda] font-semibold">Figma and XD designs</span> into responsive, production-ready web applications using <span className="text-[#38bdf8] font-semibold">React, Next.js, and Tailwind CSS</span>. Clean code, pixel-perfect results, and smooth performance across every device.
          </p>
        </motion.div>

        {/* Visual Code Snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#112240] backdrop-blur-xl border border-[#64ffda]/20 rounded-2xl p-6 mb-10 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-[#64ffda]"></div>
            <span className="ml-auto text-xs text-[#a0aec0] font-mono">implementation.tsx</span>
          </div>
          <code className="text-left block text-sm sm:text-base font-mono">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-[#38bdf8]">transform</span> ={" "}
            <span className="text-yellow-400">(</span>
            <span className="text-[#64ffda]">figmaDesign</span>
            <span className="text-yellow-400">)</span>{" "}
            <span className="text-purple-400">=&gt;</span> {"{"}
            <br />
            <span className="ml-4 text-[#a0aec0]">// Pixel-perfect implementation</span>
            <br />
            <span className="ml-4"><span className="text-purple-400">return</span>{" "}
            <span className="text-[#64ffda]">productionReady</span>
            <span className="text-yellow-400">(</span>
            <span className="text-orange-400">'React'</span>
            <span className="text-yellow-400">)</span>;</span>
            <br />
            {"};"}
          </code>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(100, 255, 218, 0.35)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-[#64ffda]/10 text-[#64ffda] border-2 border-[#64ffda]/40 px-8 py-3 rounded-xl text-lg font-semibold transition-all group min-w-[200px] hover:bg-[#64ffda]/20 hover:border-[#64ffda]/60"
          >
            <span>View Projects</span>
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(100, 255, 218, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center border-2 border-[#64ffda]/50 text-[#64ffda] bg-[#64ffda]/5 px-8 py-3 rounded-xl text-lg font-semibold transition-all group min-w-[200px] hover:bg-[#64ffda]/10 hover:border-[#64ffda]"
          >
            <span className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Let's Work Together
            </span>
          </motion.a>

          <motion.a
            href="/cv/Srabon Mozumder_last.pdf"
            download="Srabon_Mozumder_CV.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(100, 255, 218, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center border-2 border-[#64ffda]/50 text-[#64ffda] bg-[#64ffda]/5 px-8 py-3 rounded-xl text-lg font-semibold transition-all group min-w-[200px] hover:bg-[#64ffda]/10 hover:border-[#64ffda]"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
