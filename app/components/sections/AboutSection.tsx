"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-[#64ffda]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/3 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold !mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#38bdf8]">
              About Me
            </span>
          </h2>
          <p className="text-lg text-[#a0aec0]">Frontend Developer. Design to Code. Detail-Oriented.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#112240] p-8 rounded-2xl border border-[#64ffda]/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">Who I Am</h3>
              <p className="text-base sm:text-lg text-[#a0aec0] leading-relaxed mb-4">
                I'm a <span className="text-[#64ffda] font-semibold">Frontend Developer</span> at Luminous Labs with 3 years of experience building responsive web applications. I take Figma and Adobe XD designs and turn them into <span className="text-[#38bdf8] font-semibold">clean, production-ready code</span> using React, Next.js, Tailwind CSS, and Bootstrap.
              </p>
              <p className="text-base sm:text-lg text-[#a0aec0] leading-relaxed">
                I focus on writing maintainable components, integrating APIs, and making sure every layout works smoothly across all screen sizes. If you have a design ready, I can build it.
              </p>
            </div>

            <div className="bg-[#112240] p-6 rounded-xl border border-[#64ffda]/15">
              <h3 className="text-lg font-semibold mb-4 text-[#64ffda] flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                What I Do
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-[#a0aec0]">
                {[
                  "Convert Figma and Adobe XD designs into pixel-perfect React/Next.js code",
                  "Build responsive layouts that work on every screen size",
                  "Create reusable components with React and Next.js",
                  "Integrate REST APIs and display data on the frontend",
                  "Style with Tailwind CSS, Bootstrap, or pure CSS",
                  "Deliver clean, maintainable, production-ready code",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#64ffda] mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#112240] p-6 rounded-xl border border-[#38bdf8]/15">
              <h3 className="text-lg font-semibold mb-4 text-[#38bdf8] flex items-center gap-2">
                <Zap className="w-5 h-5" />
                My Approach
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-[#a0aec0]">
                {[
                  "Review the design file and understand every detail before writing code",
                  "Build mobile-first, then scale up for tablets and desktops",
                  "Write reusable React components that your team can build on",
                  "Test across real devices and browsers before delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#38bdf8] mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#38bdf8] rounded-2xl blur-2xl opacity-20"></div>
              <Image
                src="/images/srabon01.png"
                alt="Srabon Mojumder - Design to Code Specialist"
                width={200}
                height={200}
                className="relative rounded-2xl shadow-2xl w-full h-[700px] object-cover border border-[#64ffda]/20"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#112240] p-6 rounded-xl border border-[#64ffda]/15">
                <h3 className="text-lg font-semibold mb-3 text-[#64ffda]">Experience</h3>
                <ul className="space-y-2 text-sm text-[#a0aec0]">
                  <li>• Frontend Developer at Luminous Labs</li>
                  <li>• 3 Years Professional Experience</li>
                  <li>• 50+ Projects Delivered</li>
                </ul>
              </div>

              <div className="bg-[#112240] p-6 rounded-xl border border-[#38bdf8]/15">
                <h3 className="text-lg font-semibold mb-3 text-[#38bdf8]">Core Focus</h3>
                <ul className="space-y-2 text-sm text-[#a0aec0]">
                  <li>• React & Next.js Development</li>
                  <li>• CSS Grid & Flexbox Masterclass</li>
                  <li>• Figma/XD to Code Conversion</li>
                  <li>• Responsive Web Development</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#112240] p-6 rounded-xl border border-[#38bdf8]/20">
              <h3 className="text-lg font-semibold mb-3 text-[#38bdf8]">Best Fit</h3>
              <p className="text-sm sm:text-base text-[#a0aec0] leading-relaxed">
                Give me a Figma or XD file with clear specs, and I'll deliver <span className="text-[#64ffda] font-semibold">responsive React/Next.js code</span> your team can build on. Accurate, clean, and ready for production.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
