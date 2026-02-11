"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback, useEffect, useRef } from "react"

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  technologies: string[]
  images: string[]
  githubUrl: string
  liveUrl: string
}

export default function ProjectCard({
  slug,
  title,
  description,
  technologies,
  images,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const hasMultipleImages = images.length > 1

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isHovered && hasMultipleImages) {
      autoPlayRef.current = setInterval(nextSlide, 3500)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isHovered, hasMultipleImages, nextSlide])

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className="relative h-full bg-[#0a0a0f] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${title} - ${currentIndex + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

          {/* Slider Arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Dots */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-5 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Hover overlay with quick actions */}
          <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-3 pointer-events-none">
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-white/50 bg-white/[0.04] rounded-md border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2.5 py-1 text-[11px] font-medium text-white/30">
                +{technologies.length - 4}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* View Details Link */}
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors group/link pt-1"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
