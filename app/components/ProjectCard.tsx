"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Palette, Code2, CheckCircle, Zap, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all group relative"
    >
      {/* "Design → Code" Label */}
      <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-pink-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
        <Palette className="w-3 h-3" />
        <span>Design</span>
        <ArrowRight className="w-3 h-3" />
        <Code2 className="w-3 h-3" />
        <span>Code</span>
      </div>

      {/* Project Image with Transform Effect */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 bg-slate-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-emerald-500 transition-all shadow-lg"
            aria-label="View on GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 bg-slate-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-lg"
            aria-label="View Live Demo"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Implementation Badge */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              Pixel-Perfect
            </span>
            <span className="text-blue-400 text-xs font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              Optimized
            </span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-emerald-400 rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium group/link"
          >
            <FaGithub className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
            <span>View Code</span>
          </motion.a>
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium group/link"
          >
            <FaExternalLinkAlt className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>

      {/* Decorative Corner Gradient */}
      <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
    </motion.div>
  )
}
