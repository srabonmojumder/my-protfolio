"use client"

import { motion } from "framer-motion"
import TestimonialCard from "../ui/Testimonial"
import { testimonials } from "../../constants/data"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
