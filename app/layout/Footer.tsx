"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/srabonmojumder", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:srabon.mojumder@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
            >
              Srabon Mojumder
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all border border-gray-700 hover:border-cyan-500/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Srabon Mojumder. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
