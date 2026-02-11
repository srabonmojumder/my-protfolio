"use client"

import { motion } from "framer-motion"

interface TestimonialProps {
  quote: string
  name: string
  role: string
  company: string
}

export default function Testimonial({ quote, name, role, company }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#112240] p-6 sm:p-8 rounded-2xl border border-[#64ffda]/10 backdrop-blur-sm hover:border-[#64ffda]/30 hover:shadow-lg hover:shadow-[#64ffda]/5 transition-all"
    >
      {/* Quote Icon */}
      <div className="text-4xl text-[#64ffda] mb-4 opacity-50">"</div>

      {/* Quote Text */}
      <blockquote className="text-[#a0aec0] text-base sm:text-lg leading-relaxed mb-6 italic">{quote}</blockquote>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-[#64ffda] to-[#38bdf8] rounded-full flex items-center justify-center text-[#0a192f] font-bold text-lg mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-[#e0e0e0] text-base">{name}</div>
          <div className="text-sm text-[#a0aec0]/70">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
