"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

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
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 backdrop-blur-sm hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/80 transition-colors"
            aria-label="View on GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/80 transition-colors"
            aria-label="View Live Demo"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex space-x-4">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <FaGithub className="w-4 h-4" />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
