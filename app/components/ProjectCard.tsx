"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { Palette, Code2, Zap, ArrowRight, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback, useEffect, useRef } from "react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  images: string[]
  githubUrl: string
  liveUrl: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  images,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const hasMultipleImages = images.length > 1

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Auto-play when hovered and has multiple images
  useEffect(() => {
    if (isHovered && hasMultipleImages) {
      autoPlayRef.current = setInterval(nextSlide, 3000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isHovered, hasMultipleImages, nextSlide])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Main Card Container */}
      <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20">

        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-700" />

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/50 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={isHovered ? {
                y: [-10, -30, -10],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1],
              } : {}}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Image Container with Slider */}
        <div className="relative overflow-hidden aspect-video sm:aspect-[16/10]">
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

          {/* Image Slider */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: hasMultipleImages ? 1 : 1.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${title} - ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation Arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-600/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-emerald-500/80 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-600/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-emerald-500/80 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Slider Dots */}
          {hasMultipleImages && (
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); goToSlide(index) }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 h-2 bg-emerald-400 shadow-lg shadow-emerald-400/50"
                      : "w-2 h-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Image Counter Badge */}
          {hasMultipleImages && (
            <div className="absolute top-4 right-20 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="backdrop-blur-xl bg-slate-900/70 border border-slate-600/50 rounded-xl px-3 py-1.5 text-xs font-semibold text-white">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          )}

          {/* Top Corner Badge - Design → Code */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="absolute top-4 left-4 z-20 backdrop-blur-xl bg-gradient-to-r from-pink-500/90 to-emerald-500/90 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <Palette className="w-4 h-4 text-white" />
            <ArrowRight className="w-3 h-3 text-white animate-pulse" />
            <Code2 className="w-4 h-4 text-white" />
          </motion.div>

          {/* Floating Action Buttons - Right Side */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0">
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-emerald-500/50 transition-all group/btn"
            >
              <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-slate-500/50 transition-all group/btn"
            >
              <FaGithub className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            </motion.a>
          </div>

          {/* Bottom Implementation Badges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-4 left-4 right-4 z-20"
          >
            <div className="backdrop-blur-2xl bg-slate-900/80 border border-emerald-500/30 rounded-2xl px-4 py-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">PIXEL-PERFECT</span>
              </div>
              <div className="w-px h-6 bg-slate-600" />
              <div className="flex items-center gap-2 flex-1 justify-end">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs sm:text-sm font-bold tracking-wide">OPTIMIZED</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="relative p-5 sm:p-6 lg:p-7 space-y-4 sm:space-y-5">
          {/* Title with Animated Underline */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:via-cyan-400 group-hover:to-blue-400 transition-all duration-500">
              {title}
            </h3>
            <motion.div
              className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
            {description}
          </p>

          {/* Technologies - Scrollable on Mobile */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative group/tech"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-0 group-hover/tech:opacity-50 transition-opacity" />
                <div className="relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 text-emerald-400 rounded-xl border border-emerald-500/30 hover:border-emerald-400/60 backdrop-blur-sm transition-all">
                  {tech}
                </div>
              </motion.span>
            ))}
          </div>

          {/* Action Links with Icons */}
          <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between gap-3 sm:gap-4">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-all group/link text-sm sm:text-base"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-800/50 border border-slate-700 group-hover/link:border-emerald-500/50 flex items-center justify-center group-hover/link:bg-emerald-500/10 transition-all">
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:rotate-12 transition-transform" />
              </div>
              <span className="font-medium hidden sm:inline">View Code</span>
            </motion.a>

            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all text-sm sm:text-base group/link"
            >
              <span>Live Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Decorative Corner Glow */}
        <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tl from-emerald-500/20 via-cyan-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
        <div className="absolute -top-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
      </div>

      {/* External Shadow Ring */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10" />
    </motion.div>
  )
}
