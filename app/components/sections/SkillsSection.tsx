"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  Server,
  Smartphone,
  Bug,
} from "lucide-react"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaWordpress,
  FaSass,
  FaBootstrap,
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReact,
  SiFramer,
  SiGreensock,
  SiGooglegemini,
  SiFigma,
  SiVuedotjs,
  SiJquery,
  SiShadcnui,
  SiMui,
  SiElementor,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si"
import { skills as allSkillsData, skillStats } from "../../constants/data"

// Define skill node type
interface SkillNode {
  id: string
  name: string
  label: string
  category: string
  level: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  iconColor: string
  secondaryIcon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  secondaryColor?: string
  spinIcon?: boolean
}

// Fixed positions for 3 nodes on Left and 3 nodes on Right
// Layout matches reference images: Top (outer), Mid (closer to center), Bottom (outer)
const leftPositions = [
  { x: 21, y: 21.4, entryX: -220, entryY: -45 }, // Top Left
  { x: 33, y: 50.0, entryX: -240, entryY: 0 },   // Mid Left (closer to center hub)
  { x: 21, y: 78.6, entryX: -220, entryY: 45 },  // Bottom Left
]

const rightPositions = [
  { x: 79, y: 21.4, entryX: 220, entryY: -45 },  // Top Right
  { x: 67, y: 50.0, entryX: 240, entryY: 0 },    // Mid Right (closer to center hub)
  { x: 79, y: 78.6, entryX: 220, entryY: 45 },   // Bottom Right
]

// All 28 skills ordered sequentially to stream in one after another
const allSkillsQueue: SkillNode[] = [
  // Core Languages & Frameworks
  {
    id: "react",
    name: "React.js",
    label: "React.js",
    category: "Core UI",
    level: "Advanced",
    icon: FaReact,
    iconColor: "#00d8ff",
    spinIcon: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    label: "Next.js",
    category: "Fullstack",
    level: "Advanced",
    icon: SiNextdotjs,
    iconColor: "#000000",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    label: "JS (ES6+)",
    category: "Language",
    level: "Advanced",
    icon: SiJavascript,
    iconColor: "#eab308",
  },
  {
    id: "typescript",
    name: "TypeScript",
    label: "TypeScript",
    category: "Language",
    level: "Advanced",
    icon: SiTypescript,
    iconColor: "#3178c6",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    label: "Tailwind CSS",
    category: "Styling",
    level: "Expert",
    icon: SiTailwindcss,
    iconColor: "#06b6d4",
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    label: "HTML5 / CSS3",
    category: "Foundation",
    level: "Expert",
    icon: FaHtml5,
    iconColor: "#ea580c",
    secondaryIcon: FaCss3Alt,
    secondaryColor: "#2563eb",
  },

  // State Management & APIs
  {
    id: "redux",
    name: "Redux Toolkit",
    label: "Redux",
    category: "State Architecture",
    level: "Advanced",
    icon: SiRedux,
    iconColor: "#764abc",
  },
  {
    id: "rest-api",
    name: "REST API",
    label: "REST API",
    category: "Integration",
    level: "Advanced",
    icon: Server,
    iconColor: "#0d9488",
  },
  {
    id: "zustand",
    name: "Zustand",
    label: "Zustand",
    category: "State Management",
    level: "Advanced",
    icon: Layers,
    iconColor: "#d97706",
  },
  {
    id: "gemini-ai",
    name: "Gemini AI API",
    label: "Gemini AI",
    category: "AI Integration",
    level: "Advanced",
    icon: SiGooglegemini,
    iconColor: "#1a73e8",
  },
  {
    id: "context-api",
    name: "Context API",
    label: "Context API",
    category: "React State",
    level: "Advanced",
    icon: SiReact,
    iconColor: "#0284c7",
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    label: "Git / GitHub",
    category: "Version Control",
    level: "Advanced",
    icon: FaGitAlt,
    iconColor: "#ea580c",
  },

  // Styling & UI Systems
  {
    id: "bootstrap",
    name: "Bootstrap",
    label: "Bootstrap",
    category: "CSS Framework",
    level: "Advanced",
    icon: FaBootstrap,
    iconColor: "#7952b3",
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    label: "shadcn/ui",
    category: "Component UI",
    level: "Advanced",
    icon: SiShadcnui,
    iconColor: "#000000",
  },
  {
    id: "sass",
    name: "SASS / SCSS",
    label: "SASS / SCSS",
    category: "Preprocessor",
    level: "Advanced",
    icon: FaSass,
    iconColor: "#db2777",
  },
  {
    id: "mui",
    name: "Material UI",
    label: "Material UI",
    category: "UI Library",
    level: "Intermediate",
    icon: SiMui,
    iconColor: "#007fff",
  },
  {
    id: "responsive",
    name: "Responsive Design",
    label: "Responsive UI",
    category: "Cross-Device",
    level: "Expert",
    icon: Smartphone,
    iconColor: "#0284c7",
  },
  {
    id: "figma",
    name: "Figma",
    label: "Figma",
    category: "Design to Code",
    level: "Advanced",
    icon: SiFigma,
    iconColor: "#a259ff",
  },

  // Motion & Testing
  {
    id: "framer",
    name: "Framer Motion",
    label: "Framer Motion",
    category: "Animation",
    level: "Advanced",
    icon: SiFramer,
    iconColor: "#0055ff",
  },
  {
    id: "jest",
    name: "Jest",
    label: "Jest",
    category: "Unit Testing",
    level: "Intermediate",
    icon: SiJest,
    iconColor: "#c21325",
  },
  {
    id: "gsap",
    name: "GSAP",
    label: "GSAP Motion",
    category: "Timelines",
    level: "Intermediate",
    icon: SiGreensock,
    iconColor: "#88ce02",
  },
  {
    id: "testing-lib",
    name: "Testing Library",
    label: "Testing Library",
    category: "UI Testing",
    level: "Intermediate",
    icon: SiTestinglibrary,
    iconColor: "#e33332",
  },
  {
    id: "vue",
    name: "Vue.js",
    label: "Vue.js",
    category: "Frontend",
    level: "Intermediate",
    icon: SiVuedotjs,
    iconColor: "#42b883",
  },
  {
    id: "manual-testing",
    name: "Manual QA",
    label: "Manual QA",
    category: "Cross-Browser",
    level: "Advanced",
    icon: Bug,
    iconColor: "#10b981",
  },

  // Platforms & Ecosystem
  {
    id: "wordpress",
    name: "WordPress",
    label: "WordPress",
    category: "CMS Architecture",
    level: "Advanced",
    icon: FaWordpress,
    iconColor: "#21759b",
  },
  {
    id: "elementor",
    name: "Elementor",
    label: "Elementor",
    category: "Page Builder",
    level: "Advanced",
    icon: SiElementor,
    iconColor: "#92003b",
  },
  {
    id: "jquery",
    name: "jQuery",
    label: "jQuery",
    category: "DOM & Legacy",
    level: "Advanced",
    icon: SiJquery,
    iconColor: "#0769ad",
  },
]

export default function SkillsSection() {
  // Initial 6 slots (3 on left, 3 on right)
  const [leftSlots, setLeftSlots] = useState<SkillNode[]>([
    allSkillsQueue[0], // React.js (Top Left)
    allSkillsQueue[2], // JavaScript (Mid Left)
    allSkillsQueue[4], // Tailwind CSS (Bottom Left)
  ])
  const [rightSlots, setRightSlots] = useState<SkillNode[]>([
    allSkillsQueue[1], // Next.js (Top Right)
    allSkillsQueue[3], // TypeScript (Mid Right)
    allSkillsQueue[5], // HTML5 & CSS3 (Bottom Right)
  ])

  // Track which slot was most recently updated (for subtle highlight)
  const [activeSlotKey, setActiveSlotKey] = useState<string>("left-0")
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null)
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  // Refs for tracking next sequential skill and target slot
  const nextSkillIndexRef = useRef(6)
  const currentStepRef = useRef(0)

  const stageRef = useRef<HTMLDivElement>(null)
  const isStageInView = useInView(stageRef, { once: true, amount: 0.12 })

  // Sequential slot rotation: updates ONE slot at a time alternating Left & Right
  // Pattern: Top-Left -> Top-Right -> Mid-Left -> Mid-Right -> Bottom-Left -> Bottom-Right
  const advanceOneSkill = useCallback(() => {
    const nextSkill = allSkillsQueue[nextSkillIndexRef.current % allSkillsQueue.length]
    nextSkillIndexRef.current += 1

    const step = currentStepRef.current % 6
    currentStepRef.current += 1

    if (step === 0) {
      // Top Left
      setLeftSlots((prev) => [nextSkill, prev[1], prev[2]])
      setActiveSlotKey("left-0")
    } else if (step === 1) {
      // Top Right
      setRightSlots((prev) => [nextSkill, prev[1], prev[2]])
      setActiveSlotKey("right-0")
    } else if (step === 2) {
      // Mid Left
      setLeftSlots((prev) => [prev[0], nextSkill, prev[2]])
      setActiveSlotKey("left-1")
    } else if (step === 3) {
      // Mid Right
      setRightSlots((prev) => [prev[0], nextSkill, prev[2]])
      setActiveSlotKey("right-1")
    } else if (step === 4) {
      // Bottom Left
      setLeftSlots((prev) => [prev[0], prev[1], nextSkill])
      setActiveSlotKey("left-2")
    } else if (step === 5) {
      // Bottom Right
      setRightSlots((prev) => [prev[0], prev[1], nextSkill])
      setActiveSlotKey("right-2")
    }
  }, [])

  // Auto-cycle: updates one skill at a time every 2.2 seconds continuously WITHOUT pausing on hover
  useEffect(() => {
    const timer = setInterval(() => {
      advanceOneSkill()
    }, 2200)
    return () => clearInterval(timer)
  }, [advanceOneSkill])

  // Category selection fills the 6 slots immediately with relevant skills
  const handleCategorySelect = (categoryName: string) => {
    let filtered = allSkillsQueue
    if (categoryName === "Frontend") {
      filtered = allSkillsQueue.filter((s) =>
        ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"].includes(s.name)
      )
    } else if (categoryName === "State & APIs") {
      filtered = allSkillsQueue.filter((s) =>
        ["Redux Toolkit", "REST API", "Zustand", "Gemini AI API", "Context API", "Git & GitHub"].includes(s.name)
      )
    } else if (categoryName === "UI & Styling") {
      filtered = allSkillsQueue.filter((s) =>
        ["Bootstrap", "shadcn/ui", "SASS / SCSS", "Material UI", "Responsive Design", "Figma"].includes(s.name)
      )
    } else if (categoryName === "Animation & QA") {
      filtered = allSkillsQueue.filter((s) =>
        ["Framer Motion", "Jest", "GSAP", "Testing Library", "Vue.js", "Manual QA"].includes(s.name)
      )
    } else if (categoryName === "Platforms") {
      filtered = allSkillsQueue.filter((s) =>
        ["WordPress", "Elementor", "jQuery", "Next.js", "React.js", "Tailwind CSS"].includes(s.name)
      )
    }

    if (filtered.length >= 6) {
      setLeftSlots([filtered[0], filtered[2], filtered[4]])
      setRightSlots([filtered[1], filtered[3], filtered[5]])
    }
  }

  // Filter for the expandable full grid
  const gridCategories = ["All", "Frontend", "State", "Styling", "Tools", "Testing"]
  const filteredGridSkills = allSkillsData.filter((skill) => {
    if (activeCategory === "All") return true
    if (activeCategory === "Frontend")
      return ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Vue.js", "jQuery"].includes(skill.name)
    if (activeCategory === "State")
      return ["Redux", "Zustand", "Context API"].includes(skill.name)
    if (activeCategory === "Styling")
      return ["Tailwind CSS", "Bootstrap", "SASS / SCSS", "shadcn/ui", "Material UI", "Responsive Design"].includes(skill.name)
    if (activeCategory === "Tools")
      return ["Git & GitHub", "Figma", "WordPress", "Elementor", "REST API", "Gemini AI API"].includes(skill.name)
    if (activeCategory === "Testing")
      return ["Jest", "React Testing Library", "Manual Testing"].includes(skill.name)
    return true
  })

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#112240]/40 rounded-full blur-3xl" />
      </div>

      {/* Top Header & Category Pills (Contained in Max Width) */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex w-max mx-auto items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-5 py-2 mb-4"
          >
            <Zap className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-sm font-medium">Tech Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold !mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              My Tech Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-[#a0aec0] max-w-2xl mx-auto"
          >
            A high-performance interconnected network of modern technologies powering fast, scalable, and pixel-perfect web applications
          </motion.p>
        </div>

        {/* Quick Filter Navigation Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 mb-6">
          {["All", "Frontend", "State & APIs", "UI & Styling", "Animation & QA", "Platforms"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer bg-[#112240]/80 text-[#a0aec0] border border-[#64ffda]/20 hover:border-[#64ffda]/60 hover:text-white hover:scale-105 active:scale-95"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* THE CONNECTED HUB STAGE (FULL-WIDTH, BORDERLESS & NO ARROWS) */}
      {/* ======================================================== */}
      <div
        ref={stageRef}
        className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden select-none"
      >
        {/* Ambient Glow & Grid Texture across full screen */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#64ffda]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#38bdf8]/15 rounded-full blur-2xl" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#64ffda]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#38bdf8]/15 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#64ffda_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06]" />
        </div>

        {/* Full-Width Canvas Wrapper */}
        <div className="relative w-full h-[520px] sm:h-[600px] md:h-[680px] lg:h-[740px] xl:h-[780px] flex items-center justify-center overflow-hidden">
          
          {/* Full-Width SVG Optical Conduit Rays (0 to 1440 Edge-to-Edge) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1440 560"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Neon filters */}
              <filter id="neon-cyan" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="neon-sky" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Optical Fiber Gradients */}
              <linearGradient id="leftFiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#64ffda" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="rightFiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64ffda" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
              </linearGradient>
              <radialGradient id="centerCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#64ffda" stopOpacity="0.35" />
                <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0A0F1A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient Center Glow */}
            <circle cx="720" cy="280" r="160" fill="url(#centerCoreGlow)" />

            {/* ======================================================== */}
            {/* FULL WIDTH BASE OPTICAL FIBER CONDUITS (0 to 1440)       */}
            {/* ======================================================== */}
            {/* LEFT FAN RAYS: Span from exact left edge x=0 to center (645, 280) */}
            <g stroke="url(#leftFiberGrad)" strokeWidth="1.2" strokeLinecap="round">
              <path d="M 0,20 C 220,40 450,130 645,280" />
              <path d="M 0,60 C 150,85 220,105 302,120 C 420,150 530,280 645,280" strokeWidth="1.6" />
              <path d="M 0,110 C 230,140 460,200 645,280" />
              <path d="M 0,180 C 240,200 480,240 645,280" />
              <path d="M 0,280 L 645,280" strokeWidth="1.8" strokeOpacity="0.9" />
              <path d="M 0,380 C 240,360 480,320 645,280" />
              <path d="M 0,450 C 230,420 460,360 645,280" />
              <path d="M 0,500 C 150,475 220,455 302,440 C 420,410 530,280 645,280" strokeWidth="1.6" />
              <path d="M 0,540 C 220,520 450,430 645,280" />
            </g>

            {/* RIGHT FAN RAYS: Span from center (795, 280) to exact right edge x=1440 */}
            <g stroke="url(#rightFiberGrad)" strokeWidth="1.2" strokeLinecap="round">
              <path d="M 1440,20 C 1220,40 990,130 795,280" />
              <path d="M 1440,60 C 1290,85 1220,105 1138,120 C 1020,150 910,280 795,280" strokeWidth="1.6" />
              <path d="M 1440,110 C 1210,140 980,200 795,280" />
              <path d="M 1440,180 C 1200,200 960,240 795,280" />
              <path d="M 1440,280 L 795,280" strokeWidth="1.8" strokeOpacity="0.9" />
              <path d="M 1440,380 C 1200,360 960,320 795,280" />
              <path d="M 1440,450 C 1210,420 980,360 795,280" />
              <path d="M 1440,500 C 1290,475 1220,455 1138,440 C 1020,410 910,280 795,280" strokeWidth="1.6" />
              <path d="M 1440,540 C 1220,520 990,430 795,280" />
            </g>

            {/* ======================================================== */}
            {/* FULL-WIDTH CONTINUOUS LASER PULSES                       */}
            {/* ======================================================== */}
            <g strokeLinecap="round">
              {/* Left flowing into center */}
              <path
                d="M 0,60 C 150,85 220,105 302,120 C 420,150 530,280 645,280"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#38bdf8"
                strokeWidth="3.2"
                filter="url(#neon-sky)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.6s" repeatCount="indefinite" />
              </path>
              <path
                d="M 0,280 L 645,280"
                pathLength="100"
                strokeDasharray="9 91"
                stroke="#64ffda"
                strokeWidth="3.4"
                filter="url(#neon-cyan)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.1s" begin="0.3s" repeatCount="indefinite" />
              </path>
              <path
                d="M 0,500 C 150,475 220,455 302,440 C 420,410 530,280 645,280"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#38bdf8"
                strokeWidth="3.2"
                filter="url(#neon-sky)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
              </path>

              {/* Right flowing out from center */}
              <path
                d="M 795,280 C 910,280 1020,150 1138,120 C 1220,105 1290,85 1440,60"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#64ffda"
                strokeWidth="3.2"
                filter="url(#neon-cyan)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.6s" begin="0.2s" repeatCount="indefinite" />
              </path>
              <path
                d="M 795,280 L 1440,280"
                pathLength="100"
                strokeDasharray="9 91"
                stroke="#38bdf8"
                strokeWidth="3.4"
                filter="url(#neon-sky)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
              </path>
              <path
                d="M 795,280 C 910,280 1020,410 1138,440 C 1220,455 1290,475 1440,500"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#64ffda"
                strokeWidth="3.2"
                filter="url(#neon-cyan)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.9s" begin="0.9s" repeatCount="indefinite" />
              </path>
            </g>

            {/* ======================================================== */}
            {/* ORBITAL RINGS & SATELLITE AROUND CENTER                  */}
            {/* ======================================================== */}
            <circle
              cx="720"
              cy="280"
              r="105"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeOpacity="0.45"
              fill="none"
            />
            <circle
              cx="720"
              cy="280"
              r="86"
              stroke="#64ffda"
              strokeWidth="1.5"
              strokeOpacity="0.75"
              filter="url(#neon-cyan)"
              fill="none"
            />

            {/* Orbiting Satellite Dot */}
            <g transform="translate(720, 280)">
              <g>
                <circle cx="105" cy="0" r="5" fill="#38bdf8" filter="url(#neon-sky)" />
                <circle cx="105" cy="0" r="2.5" fill="#ffffff" />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </g>
            </g>

            {/* Counter-rotating inner satellite */}
            <g transform="translate(720, 280)">
              <g>
                <circle cx="-86" cy="0" r="3.5" fill="#64ffda" filter="url(#neon-cyan)" />
                <circle cx="-86" cy="0" r="1.5" fill="#ffffff" />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360"
                  to="0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </g>
            </g>
          </svg>

          {/* ======================================================== */}
          {/* CENTER BRAND MEDALLION (PORTFOLIO CYBERNETIC CORE)       */}
          {/* ======================================================== */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={advanceOneSkill}
            className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            title="Click to advance next skill"
          >
            {/* Ambient Cyan / Sky Glowing Halos matching portfolio system */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#64ffda]/25 via-[#38bdf8]/30 to-[#64ffda]/25 blur-2xl animate-pulse pointer-events-none" />
            <div className="absolute -inset-2 rounded-full border border-[#64ffda]/30 animate-ping opacity-20 pointer-events-none" />

            {/* Main Cyber Core Disk matching the portfolio design system */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#112240] via-[#0c1a2f] to-[#0A0F1A] shadow-[0_0_50px_rgba(100,255,218,0.3),inset_0_0_30px_rgba(100,255,218,0.15)] border-2 border-[#64ffda]/60 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#64ffda] group-hover:shadow-[0_0_65px_rgba(100,255,218,0.5)] backdrop-blur-xl">
              
              {/* Rotating Technical Dashed Bezel */}
              <div className="absolute inset-2 sm:inset-2.5 rounded-full border border-dashed border-[#38bdf8]/40 animate-[spin_30s_linear_infinite]" />
              
              {/* Inner Counter-Rotating Dotted Ring */}
              <div className="absolute inset-4 sm:inset-5 rounded-full border border-dotted border-[#64ffda]/30 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Inner High-Tech Monogram Cavity */}
              <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#64ffda]/40 flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0F1A]/95 shadow-[inset_0_0_20px_rgba(100,255,218,0.25)]">
                
                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#64ffda]/15 to-transparent animate-[spin_7s_linear_infinite] pointer-events-none" />

                {/* Cyber Core Monogram: < S /> matching personal logo */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <span className="text-[#38bdf8] font-mono text-sm sm:text-base md:text-lg font-bold opacity-80">&lt;</span>
                    <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#64ffda] via-white to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(100,255,218,0.85)] tracking-tight">
                      S
                    </span>
                    <span className="text-[#38bdf8] font-mono text-sm sm:text-base md:text-lg font-bold opacity-80">/&gt;</span>
                  </div>
                  
                  {/* High-Tech Technical Tag */}
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-widest text-[#64ffda] uppercase font-bold -mt-0.5 sm:mt-0 opacity-90">
                    DEV CORE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* 3 LEFT NODES: ANIMATED INDIVIDUALLY FROM LEFT (x: -220)  */}
          {/* ======================================================== */}
          {leftSlots.map((node: SkillNode, i: number) => {
            const pos = leftPositions[i]
            const Icon = node.icon
            const SecondaryIcon = node.secondaryIcon
            const slotKey = `left-${i}`
            const isRecentlyUpdated = activeSlotKey === slotKey

            return (
              <div
                key={`left-pos-${i}`}
                className="absolute z-20 pointer-events-auto"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={node.id}
                    initial={{
                      opacity: 0,
                      x: pos.entryX,
                      y: pos.entryY,
                      scale: 0.35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: pos.entryX * 0.7,
                      y: pos.entryY * 0.7,
                      scale: 0.4,
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onMouseLeave={() => setActiveNodeId(null)}
                  >
                    {/* Inner micro-bobbing motion */}
                    <motion.div
                      animate={{ y: [0, i % 2 === 0 ? -4 : 4, 0] }}
                      transition={{
                        duration: 3.6 + (i % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.15, y: -6 }}
                      className={`relative w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(100,255,218,0.25)] border-2 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(100,255,218,0.65)] hover:border-[#64ffda] group ${
                        isRecentlyUpdated
                          ? "border-[#64ffda] shadow-[0_0_30px_rgba(100,255,218,0.55)]"
                          : "border-white/90"
                      }`}
                    >
                      {/* Top-lit highlight */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-100 to-white pointer-events-none" />

                      {/* Skill Icon */}
                      <div className="flex items-center justify-center gap-1 z-10">
                        <Icon
                          className={`text-2xl sm:text-3xl md:text-4xl ${
                            node.spinIcon ? "animate-[spin_12s_linear_infinite]" : ""
                          }`}
                          style={{ color: node.iconColor }}
                        />
                        {SecondaryIcon && (
                          <SecondaryIcon
                            className="text-xl sm:text-2xl md:text-3xl"
                            style={{ color: node.secondaryColor }}
                          />
                        )}
                      </div>

                      {/* Skill Label */}
                      <span className="mt-1 text-[9px] sm:text-[10px] md:text-[11px] font-bold text-slate-800 group-hover:text-[#0284c7] tracking-tight whitespace-nowrap text-center leading-none transition-colors z-10 max-w-[90%] truncate">
                        {node.label}
                      </span>

                      {/* High-Tech Glowing Tooltip */}
                      <AnimatePresence>
                        {activeNodeId === node.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.95 }}
                            className="absolute -top-13 z-40 bg-[#0A0F1A]/95 backdrop-blur-xl text-[#e0e0e0] text-[11px] font-medium px-3.5 py-1.5 rounded-xl whitespace-nowrap shadow-2xl border border-[#64ffda]/50 pointer-events-none"
                          >
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-2 h-2 rounded-full shadow-[0_0_6px_currentColor]"
                                style={{ backgroundColor: node.iconColor }}
                              />
                              <span className="font-semibold text-white">{node.name}</span>
                              <span className="text-[#64ffda] text-[10px] font-mono">({node.level})</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )
          })}

          {/* ======================================================== */}
          {/* 3 RIGHT NODES: ANIMATED INDIVIDUALLY FROM RIGHT (x: 220) */}
          {/* ======================================================== */}
          {rightSlots.map((node: SkillNode, i: number) => {
            const pos = rightPositions[i]
            const Icon = node.icon
            const SecondaryIcon = node.secondaryIcon
            const slotKey = `right-${i}`
            const isRecentlyUpdated = activeSlotKey === slotKey

            return (
              <div
                key={`right-pos-${i}`}
                className="absolute z-20 pointer-events-auto"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={node.id}
                    initial={{
                      opacity: 0,
                      x: pos.entryX,
                      y: pos.entryY,
                      scale: 0.35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: pos.entryX * 0.7,
                      y: pos.entryY * 0.7,
                      scale: 0.4,
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onMouseLeave={() => setActiveNodeId(null)}
                  >
                    {/* Inner micro-bobbing motion */}
                    <motion.div
                      animate={{ y: [0, i % 2 === 0 ? 4 : -4, 0] }}
                      transition={{
                        duration: 3.8 + (i % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.15, y: -6 }}
                      className={`relative w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(100,255,218,0.25)] border-2 flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(100,255,218,0.65)] hover:border-[#64ffda] group ${
                        isRecentlyUpdated
                          ? "border-[#64ffda] shadow-[0_0_30px_rgba(100,255,218,0.55)]"
                          : "border-white/90"
                      }`}
                    >
                      {/* Top-lit highlight */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-100 to-white pointer-events-none" />

                      {/* Skill Icon */}
                      <div className="flex items-center justify-center gap-1 z-10">
                        <Icon
                          className={`text-2xl sm:text-3xl md:text-4xl ${
                            node.spinIcon ? "animate-[spin_12s_linear_infinite]" : ""
                          }`}
                          style={{ color: node.iconColor }}
                        />
                        {SecondaryIcon && (
                          <SecondaryIcon
                            className="text-xl sm:text-2xl md:text-3xl"
                            style={{ color: node.secondaryColor }}
                          />
                        )}
                      </div>

                      {/* Skill Label */}
                      <span className="mt-1 text-[9px] sm:text-[10px] md:text-[11px] font-bold text-slate-800 group-hover:text-[#0284c7] tracking-tight whitespace-nowrap text-center leading-none transition-colors z-10 max-w-[90%] truncate">
                        {node.label}
                      </span>

                      {/* High-Tech Glowing Tooltip */}
                      <AnimatePresence>
                        {activeNodeId === node.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.95 }}
                            className="absolute -top-13 z-40 bg-[#0A0F1A]/95 backdrop-blur-xl text-[#e0e0e0] text-[11px] font-medium px-3.5 py-1.5 rounded-xl whitespace-nowrap shadow-2xl border border-[#64ffda]/50 pointer-events-none"
                          >
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-2 h-2 rounded-full shadow-[0_0_6px_currentColor]"
                                style={{ backgroundColor: node.iconColor }}
                              />
                              <span className="font-semibold text-white">{node.name}</span>
                              <span className="text-[#64ffda] text-[10px] font-mono">({node.level})</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Content: Stats Chips Bar & Expandable Complete Directory */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* STATS CHIPS BAR                                          */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {skillStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#112240]/80 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-5 py-2.5 transition-colors hover:border-[#64ffda]/50"
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#38bdf8]" />
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#a0aec0]">{stat.label}</span>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* ======================================================== */}
        {/* EXPANDABLE ALL-SKILLS COMPLETE DIRECTORY                  */}
        {/* ======================================================== */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#64ffda]/30 bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20 hover:border-[#64ffda] text-sm font-semibold transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#64ffda]" />
            <span>{showAllSkills ? "Hide Detailed Skill Directory" : "Browse All 28+ Skills by Category"}</span>
            {showAllSkills ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
          </button>

          <AnimatePresence>
            {showAllSkills && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-6 text-left"
              >
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {gridCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        activeCategory === cat
                          ? "bg-[#64ffda] text-[#0A0F1A]"
                          : "bg-[#112240] text-[#a0aec0] border border-slate-700/50 hover:text-white hover:border-[#64ffda]/40"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {filteredGridSkills.map((skill, index) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#112240] border border-[#64ffda]/15 hover:border-[#64ffda]/40 transition-colors"
                      >
                        <div className="w-9 h-9 shrink-0 rounded-lg bg-[#0A0F1A] border border-[#64ffda]/20 flex items-center justify-center">
                          <SkillIcon className="text-lg text-[#38bdf8]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-semibold text-[#e0e0e0] truncate">{skill.name}</span>
                          <span className="text-[10px] text-[#64ffda]">{skill.level}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
