"use client"

import { motion } from "framer-motion"
import { Send, MessageCircle, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { contactInfo } from "../../constants/data"
import { useContactForm } from "../../hooks/useContactForm"

export default function ContactSection() {
  const { formData, isSubmitted, isLoading, handleSubmit, handleChange } = useContactForm()

  return (
    <section id="contact" className="relative py-20 bg-[#0a192f] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#64ffda]/10 to-[#38bdf8]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-sm font-medium">Let's Connect</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#e0e0e0] via-[#64ffda] to-[#38bdf8] bg-clip-text relative text-transparent !mb-0">
            Let's Work Together
          </h2>
          <p className="text-[#a0aec0] text-lg max-w-2xl mx-auto mb-3">
            Have a design ready? I'd love to hear about your project and discuss how I can help build it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Contact Info Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-3xl blur-xl" />
              <div className="relative bg-[#112240] backdrop-blur-xl border border-[#64ffda]/10 rounded-3xl p-8">
                <div className="flex items-start gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-[#38bdf8]" />
                  <h3 className="text-2xl font-bold text-[#e0e0e0]">Ready to Start Your Project?</h3>
                </div>

                <p className="text-[#a0aec0] mb-8 leading-relaxed">
                  Whether you're building a new product or need frontend help on an existing one, feel free to reach out. I typically respond within 24 hours.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group cursor-pointer"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`relative p-2 sm:p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#a0aec0] text-xs sm:text-sm font-medium">{item.label}</p>
                          <p className="text-[#e0e0e0] font-semibold group-hover:text-[#64ffda] transition-colors text-wrap break-words text-sm sm:text-base">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="relative h-32 rounded-2xl bg-gradient-to-r from-[#64ffda]/10 to-[#38bdf8]/10 border border-[#64ffda]/15 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#64ffda]/5 to-transparent animate-pulse" />
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#38bdf8] mb-1">24/7</div>
                  <div className="text-[#a0aec0] text-sm">Quick Response</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-3xl blur-xl" />
              <div className="relative bg-[#112240] backdrop-blur-xl border border-[#64ffda]/10 rounded-3xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-4 bg-[#112240] border border-[#64ffda]/10 rounded-xl text-white placeholder-[#a0aec0]/50 focus:border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/20 transition-all group-hover:border-[#64ffda]/25"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#64ffda]/0 to-[#38bdf8]/0 group-focus-within:from-[#64ffda]/10 group-focus-within:to-[#38bdf8]/10 transition-all pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-4 bg-[#112240] border border-[#64ffda]/10 rounded-xl text-white placeholder-[#a0aec0]/50 focus:border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/20 transition-all group-hover:border-[#64ffda]/25"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#64ffda]/0 to-[#38bdf8]/0 group-focus-within:from-[#64ffda]/10 group-focus-within:to-[#38bdf8]/10 transition-all pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project (e.g., 'I have a Figma design for a SaaS dashboard that needs to be implemented in React...')"
                      rows={6}
                      className="w-full p-4 bg-[#112240] border border-[#64ffda]/10 rounded-xl text-white placeholder-[#a0aec0]/50 focus:border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]/20 transition-all resize-none group-hover:border-[#64ffda]/25"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#64ffda]/0 to-[#38bdf8]/0 group-focus-within:from-[#64ffda]/10 group-focus-within:to-[#38bdf8]/10 transition-all pointer-events-none" />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full group overflow-hidden bg-[#64ffda]/10 text-[#64ffda] border-2 border-[#64ffda]/40 rounded-xl font-semibold hover:bg-[#64ffda]/20 hover:border-[#64ffda]/60 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={{ scale: isLoading ? 1 : 1.02, boxShadow: isLoading ? undefined : "0 0 25px rgba(100, 255, 218, 0.15)" }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    disabled={isLoading || isSubmitted}
                  >
                    <div className="flex items-center justify-center gap-3 py-4 px-6 font-semibold">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
