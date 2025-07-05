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
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all"
    >
      {/* Quote Icon */}
      <div className="text-4xl text-cyan-400 mb-4 opacity-50">"</div>

      {/* Quote Text */}
      <blockquote className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 italic">{quote}</blockquote>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-white text-base">{name}</div>
          <div className="text-sm text-gray-400">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
