"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Code2, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/srabonmojumder", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/srabon-mozumder-8882a928a/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:srabonmozumder29@gmail.com", label: "Email" },
]

const exploreLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const contactItems = [
  { icon: Mail, value: "srabonmozumder29@gmail.com", href: "mailto:srabonmozumder29@gmail.com" },
  { icon: Phone, value: "+880 1827-621312", href: "tel:+8801827621312" },
  { icon: MapPin, value: "Dhaka, Bangladesh", href: null },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#0A0F1A]">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-[#64ffda]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#38bdf8]/5 blur-[120px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#64ffda]/[0.08] via-white/[0.015] to-[#38bdf8]/[0.08] p-8 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#64ffda]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#38bdf8]/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#64ffda]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#64ffda] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#64ffda]" />
                </span>
                Get in touch
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#e6f1ff] sm:text-4xl lg:text-[2.75rem]">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">
                  great
                </span>{" "}
                together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#8892b0]">
                Have a design ready or a project in mind? I&apos;ll turn it into clean, responsive, production-ready code.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#64ffda] to-[#38bdf8] px-6 py-3.5 text-sm font-bold text-[#0A0F1A] transition-transform duration-300 hover:scale-[1.03]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:srabonmozumder29@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-[#e6f1ff] transition-colors duration-300 hover:border-[#64ffda]/40 hover:text-[#64ffda]"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </div>
          </div>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#64ffda] to-[#38bdf8] p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0A0F1A]">
                  <Code2 className="h-5 w-5 text-[#64ffda]" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#e6f1ff]">
                Srabon <span className="bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">Mojumder</span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#8892b0]">
              Frontend Developer specializing in React, Next.js, and responsive web development.
              I turn designs into clean, production-ready interfaces.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-[#8892b0] transition-all duration-300 hover:-translate-y-1 hover:border-[#64ffda]/40 hover:text-[#64ffda]"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/15 to-[#38bdf8]/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <social.icon className="relative h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#e6f1ff]">Explore</h3>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-[#8892b0] transition-colors hover:text-[#64ffda]"
                  >
                    <span className="h-px w-0 bg-[#64ffda] transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#e6f1ff]">Contact</h3>
            <ul className="space-y-5">
              {contactItems.map((item) => {
                const content = (
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#64ffda]/15 bg-[#64ffda]/[0.06] transition-colors group-hover:border-[#64ffda]/40 group-hover:bg-[#64ffda]/10">
                      <item.icon className="h-4 w-4 text-[#64ffda]" />
                    </span>
                    <span className="pt-1.5 text-[15px] text-[#8892b0] transition-colors group-hover:text-[#e6f1ff]">{item.value}</span>
                  </span>
                )
                return (
                  <li key={item.value}>
                    {item.href ? (
                      <a href={item.href} className="group block">
                        {content}
                      </a>
                    ) : (
                      <div className="group">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

      {/* Giant watermark */}
      <div aria-hidden className="pointer-events-none relative z-0 -mb-[0.12em] flex justify-center overflow-hidden select-none">
        <span className="bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-center font-black leading-[0.8] tracking-tighter text-transparent text-[26vw] lg:text-[22vw]">
          srabon
        </span>
      </div>
        {/* Copyright */}
        <div className=" flex flex-col items-center justify-between gap-3 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-sm text-[#8892b0]">© {year} Srabon Mojumder. All rights reserved.</p>
          <p className="text-sm text-[#5a6b85]">Built with React, Next.js &amp; Tailwind CSS</p>
        </div>
      </div>

    </footer>
  )
}
