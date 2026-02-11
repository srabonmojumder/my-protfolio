"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  User,
  Layers,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Tag,
  Zap,
  Lightbulb,
} from "lucide-react"
import { useState, useCallback, useEffect, useRef } from "react"
import { projects, type Project } from "../../data/projects"

export default function ProjectDetail({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const hasMultipleImages = project.images.length > 1

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % project.images.length)
  }, [project.images.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }, [project.images.length])

  useEffect(() => {
    if (hasMultipleImages) {
      autoPlayRef.current = setInterval(nextSlide, 4000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [hasMultipleImages, nextSlide])

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e0e0e0]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-xl border-b border-[#64ffda]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-[#a0aec0] hover:text-[#64ffda] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#112240] hover:bg-[#112240]/80 border border-[#64ffda]/10 flex items-center justify-center text-[#a0aec0] hover:text-[#64ffda] transition-all"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 text-sm font-medium rounded-lg hover:bg-[#64ffda]/20 hover:border-[#64ffda]/50 transition-all"
            >
              <span>Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Slider */}
      <section className="pt-16">
        <div className="relative w-full aspect-[21/9] sm:aspect-[2.5/1] bg-[#112240] overflow-hidden group">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[currentIndex]}
                alt={`${project.title} - ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-[#0a192f]/30 z-10 pointer-events-none" />

          {/* Navigation Arrows */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-[#64ffda]/15 flex items-center justify-center text-[#a0aec0] hover:text-[#64ffda] hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-[#64ffda]/15 flex items-center justify-center text-[#a0aec0] hover:text-[#64ffda] hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Slide Dots */}
          {hasMultipleImages && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2 bg-[#64ffda]"
                      : "w-2 h-2 bg-[#a0aec0]/30 hover:bg-[#64ffda]/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Thumbnail Strip */}
      {hasMultipleImages && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`relative flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-[#64ffda]/40 ring-1 ring-[#64ffda]/20"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-medium text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 rounded-full">
                  {project.category}
                </span>
                <span className="px-3 py-1 text-xs font-medium text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20 rounded-full">
                  {project.completedDate}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e0e0] tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-[#a0aec0]/70 leading-relaxed max-w-2xl">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              <h2 className="text-lg font-semibold text-[#a0aec0] uppercase tracking-wider">
                Key Highlights
              </h2>
              <div className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-[#64ffda]" />
                    </div>
                    <span className="text-[#a0aec0]/80 group-hover:text-[#a0aec0] transition-colors">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#38bdf8]" />
                <h2 className="text-lg font-semibold text-[#a0aec0] uppercase tracking-wider">
                  Features Built
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                    className="flex items-start gap-3 bg-[#112240] p-4 rounded-xl border border-[#64ffda]/10 hover:border-[#64ffda]/20 transition-colors"
                  >
                    <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                    <span className="text-sm text-[#a0aec0]/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#64ffda]" />
                <h2 className="text-lg font-semibold text-[#a0aec0] uppercase tracking-wider">
                  Challenges & Solutions
                </h2>
              </div>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 + index * 0.1 }}
                    className="bg-[#112240] rounded-2xl border border-[#64ffda]/10 overflow-hidden"
                  >
                    <div className="p-5 border-b border-[#64ffda]/10">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-400 text-xs font-bold">!</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-red-400/70 uppercase tracking-wider mb-1">Challenge</p>
                          <p className="text-[#a0aec0]/90 text-sm leading-relaxed">{challenge.problem}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 bg-[#64ffda]/[0.02]">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#64ffda]" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#64ffda]/70 uppercase tracking-wider mb-1">Solution</p>
                          <p className="text-[#a0aec0]/90 text-sm leading-relaxed">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="bg-[#112240] rounded-2xl border border-[#64ffda]/10 p-6 space-y-6">
              {/* Role */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#a0aec0]/60 text-xs font-medium uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" />
                  <span>Role</span>
                </div>
                <p className="text-[#e0e0e0] font-medium">{project.role}</p>
              </div>

              <div className="h-px bg-[#64ffda]/10" />

              {/* Category */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#a0aec0]/60 text-xs font-medium uppercase tracking-wider">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Category</span>
                </div>
                <p className="text-[#e0e0e0] font-medium">{project.category}</p>
              </div>

              <div className="h-px bg-[#64ffda]/10" />

              {/* Duration */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#a0aec0]/60 text-xs font-medium uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Duration</span>
                </div>
                <p className="text-[#e0e0e0] font-medium">{project.duration}</p>
              </div>

              <div className="h-px bg-[#64ffda]/10" />

              {/* Team Size */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#a0aec0]/60 text-xs font-medium uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>Team Size</span>
                </div>
                <p className="text-[#e0e0e0] font-medium">{project.teamSize}</p>
              </div>

              <div className="h-px bg-[#64ffda]/10" />

              {/* Completed */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#a0aec0]/60 text-xs font-medium uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Completed</span>
                </div>
                <p className="text-[#e0e0e0] font-medium">{project.completedDate}</p>
              </div>

              <div className="h-px bg-[#64ffda]/10" />

              {/* Tech Stack */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#a0aec0]/60 text-xs font-medium uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium text-[#a0aec0] bg-[#0a192f] rounded-lg border border-[#64ffda]/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#64ffda]/10" />

              {/* Links */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#a0aec0]/60 text-xs font-medium uppercase tracking-wider">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Links</span>
                </div>
                <div className="space-y-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/30 rounded-xl font-medium text-sm hover:bg-[#64ffda]/20 hover:border-[#64ffda]/50 transition-all group"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-[#112240] hover:bg-[#112240]/80 text-[#a0aec0] hover:text-[#64ffda] rounded-xl font-medium text-sm transition-all group border border-[#64ffda]/15"
                  >
                    <div className="flex items-center gap-2">
                      <FaGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation to other projects */}
            <div className="bg-[#112240] rounded-2xl border border-[#64ffda]/10 p-6 space-y-4">
              <h3 className="text-sm font-medium text-[#a0aec0]/60 uppercase tracking-wider">
                Other Projects
              </h3>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.slug !== project.slug)
                  .slice(0, 4)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 -mx-1 rounded-xl hover:bg-[#112240]/60 transition-colors group"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#112240]">
                        <Image
                          src={p.images[0]}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#a0aec0] group-hover:text-[#64ffda]/90 transition-colors truncate">
                          {p.title}
                        </p>
                        <p className="text-xs text-[#a0aec0]/50 truncate">
                          {p.technologies.slice(0, 3).join(" · ")}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-[#64ffda]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-[#a0aec0]/70 hover:text-[#64ffda] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">All Projects</span>
          </Link>
          <p className="text-sm text-[#a0aec0]/40">
            &copy; {new Date().getFullYear()} Srabon Mojumder
          </p>
        </div>
      </div>
    </div>
  )
}
