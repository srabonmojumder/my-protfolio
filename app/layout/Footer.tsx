"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Code, Heart, Zap } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/srabonmojumder", label: "GitHub", color: "hover:text-purple-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Mail, href: "mailto:srabon.mojumder@gmail.com", label: "Email", color: "hover:text-emerald-400" },
  ]

  const quickLinks = ["About", "Skills", "Projects", "Services", "Contact"]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            animate={{
              y: [-20, -100, -20],
              x: [0, 30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + (i % 2) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Side - Brand & Description */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center"
                  >
                    <Code className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Srabon Mojumder
                  </h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Frontend Developer specializing in <span className="text-cyan-400 font-semibold">React</span>,{" "}
                  <span className="text-purple-400 font-semibold">Next.js</span>, and{" "}
                  <span className="text-pink-400 font-semibold">modern UI/UX</span> design.
                </p>

                <div className="flex items-center space-x-2 text-gray-400">
                  <span>Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Heart className="w-4 h-4 text-red-400 fill-current" />
                  </motion.div>
                  <span>and</span>
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>lots of coffee</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <span>Connect With Me</span>
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                    <span className="text-cyan-400">→</span>
                  </motion.div>
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative w-14 h-14 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 ${social.color} transition-all border border-gray-700/50 hover:border-cyan-500/30 overflow-hidden`}
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                      <social.icon className="w-6 h-6 relative z-10" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-white">Quick Navigation</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="group relative px-4 py-3 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl text-gray-300 hover:text-white transition-all border border-gray-700/30 hover:border-cyan-500/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                    <span className="relative z-10 font-medium">{link}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Srabon Mojumder. All rights reserved.
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Built with modern frontend technologies</span>
                <div className="flex space-x-2">
                  {["React", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-cyan-400 border border-gray-700/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
