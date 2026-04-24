"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { ArrowUpRight, Code, Github, Linkedin, Mail, MapPin } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/srabonmojumder", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/srabon-mozumder-8882a928a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:srabonmozumder29@gmail.com", label: "Email" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a192f]/95 backdrop-blur-md border-b border-[#64ffda]/10" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Srabon Mojumder
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 header-menu">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-[#a0aec0] hover:text-[#64ffda] transition-colors font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(true)}
                whileTap={{ scale: 0.92 }}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-drawer"
                className="relative w-11 h-11 rounded-xl border border-[#64ffda]/15 bg-[#112240]/60 backdrop-blur-sm flex items-center justify-center text-[#a0aec0] hover:text-[#64ffda] hover:border-[#64ffda]/40 transition-colors"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 hover:from-cyan-500/10 hover:to-purple-500/10 transition-all" />
                <Bars3Icon className="h-5 w-5 relative z-10" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-[60]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#020c1b]/70 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "-105%" }}
              animate={{ x: 0 }}
              exit={{ x: "-105%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="relative h-full w-[86%] max-w-sm overflow-hidden flex flex-col bg-gradient-to-b from-[#0b1b35] via-[#0a192f] to-[#0a192f]"
            >
              {/* Ambient gradient blobs */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -top-32 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"
              />
              <motion.div
                aria-hidden="true"
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -bottom-32 -right-20 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/15 to-emerald-500/15 blur-3xl"
              />

              {/* Grid overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(100,255,218,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.6) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Right edge glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#64ffda]/40 to-transparent"
              />

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between px-5 pt-6 pb-5">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20"
                  >
                    <Code className="w-5 h-5 text-[#0a192f]" />
                  </motion.div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                      Srabon Mojumder
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#a0aec0]/70">
                      Frontend Developer
                    </span>
                  </div>
                </motion.div>

                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-xl border border-[#64ffda]/20 bg-[#112240]/60 flex items-center justify-center text-[#a0aec0] hover:text-[#64ffda] hover:border-[#64ffda]/40 transition-colors"
                >
                  <XMarkIcon className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="relative z-10 mx-5 mb-6 inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 text-xs text-emerald-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for work
              </motion.div>

              {/* Nav items */}
              <nav className="relative z-10 flex-1 overflow-y-auto px-3 pb-4 header-menu">
                {navItems.map((item, index) => {
                  const number = String(index + 1).padStart(2, "0")
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.22 + index * 0.05, type: "spring", stiffness: 260, damping: 24 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl border border-transparent hover:border-[#64ffda]/20 hover:bg-[#112240]/60 transition-all overflow-hidden"
                    >
                      {/* Left accent bar */}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500 group-hover:h-8 transition-all duration-300 rounded-r"
                      />
                      <div className="flex items-center gap-4 relative z-10">
                        <span className="font-mono text-xs text-[#64ffda]/70 group-hover:text-[#64ffda] transition-colors">
                          {number}
                        </span>
                        <span className="text-lg font-medium text-[#a0aec0] group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <motion.span
                        aria-hidden="true"
                        className="relative z-10 text-[#64ffda]/0 group-hover:text-[#64ffda] -translate-x-2 group-hover:translate-x-0 transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.span>
                    </motion.a>
                  )
                })}
              </nav>

              {/* Divider */}
              <div className="relative z-10 px-5">
                <div className="h-px bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent" />
              </div>

              {/* Footer: socials + location */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="relative z-10 px-5 py-5 space-y-4"
              >
                <div className="flex items-center gap-2 text-xs text-[#a0aec0]/70">
                  <MapPin className="w-3.5 h-3.5 text-[#64ffda]/70" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.07 }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.92 }}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-xl border border-[#64ffda]/15 bg-[#112240]/60 backdrop-blur-sm flex items-center justify-center text-[#a0aec0] hover:text-[#64ffda] hover:border-[#64ffda]/40 transition-colors"
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#0a192f] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
                  >
                    Hire Me
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
