"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  SiGraphql,
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
  spinIcon?: boolean
}

// Exactly all 28 skills from portfolio data in an ordered sequential queue
const allSkillsQueue: SkillNode[] = [
  // 1. React.js
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
  // 2. Next.js
  {
    id: "nextjs",
    name: "Next.js",
    label: "Next.js",
    category: "Fullstack",
    level: "Advanced",
    icon: SiNextdotjs,
    iconColor: "#000000",
  },
  // 3. JavaScript (ES6+)
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    label: "JS (ES6+)",
    category: "Language",
    level: "Advanced",
    icon: SiJavascript,
    iconColor: "#eab308",
  },
  // 4. TypeScript
  {
    id: "typescript",
    name: "TypeScript",
    label: "TypeScript",
    category: "Language",
    level: "Advanced",
    icon: SiTypescript,
    iconColor: "#3178c6",
  },
  // 5. HTML5
  {
    id: "html5",
    name: "HTML5",
    label: "HTML5",
    category: "Foundation",
    level: "Expert",
    icon: FaHtml5,
    iconColor: "#ea580c",
  },
  // 6. CSS3
  {
    id: "css3",
    name: "CSS3",
    label: "CSS3",
    category: "Foundation",
    level: "Expert",
    icon: FaCss3Alt,
    iconColor: "#2563eb",
  },
  // 7. Tailwind CSS
  {
    id: "tailwind",
    name: "Tailwind CSS",
    label: "Tailwind",
    category: "Styling",
    level: "Expert",
    icon: SiTailwindcss,
    iconColor: "#06b6d4",
  },
  // 8. Bootstrap
  {
    id: "bootstrap",
    name: "Bootstrap",
    label: "Bootstrap",
    category: "CSS Framework",
    level: "Advanced",
    icon: FaBootstrap,
    iconColor: "#7952b3",
  },
  // 9. SASS / SCSS
  {
    id: "sass",
    name: "SASS / SCSS",
    label: "SASS/SCSS",
    category: "Preprocessor",
    level: "Advanced",
    icon: FaSass,
    iconColor: "#db2777",
  },
  // 10. shadcn/ui
  {
    id: "shadcn",
    name: "shadcn/ui",
    label: "shadcn/ui",
    category: "Component UI",
    level: "Advanced",
    icon: SiShadcnui,
    iconColor: "#000000",
  },
  // 11. Material UI
  {
    id: "mui",
    name: "Material UI",
    label: "Material UI",
    category: "UI Library",
    level: "Intermediate",
    icon: SiMui,
    iconColor: "#007fff",
  },
  // 12. Responsive Design
  {
    id: "responsive",
    name: "Responsive Design",
    label: "Responsive",
    category: "Cross-Device",
    level: "Expert",
    icon: Smartphone,
    iconColor: "#0284c7",
  },
  // 13. Redux
  {
    id: "redux",
    name: "Redux",
    label: "Redux",
    category: "State Architecture",
    level: "Advanced",
    icon: SiRedux,
    iconColor: "#764abc",
  },
  // 14. Zustand
  {
    id: "zustand",
    name: "Zustand",
    label: "Zustand",
    category: "State Management",
    level: "Advanced",
    icon: Layers,
    iconColor: "#d97706",
  },
  // 15. Context API
  {
    id: "context-api",
    name: "Context API",
    label: "Context API",
    category: "React State",
    level: "Advanced",
    icon: SiReact,
    iconColor: "#0284c7",
  },
  // 16. REST API
  {
    id: "rest-api",
    name: "REST API",
    label: "REST API",
    category: "Integration",
    level: "Advanced",
    icon: Server,
    iconColor: "#0d9488",
  },
  // 17. GraphQL API
  {
    id: "graphql",
    name: "GraphQL API",
    label: "GraphQL",
    category: "Data Layer",
    level: "Advanced",
    icon: SiGraphql,
    iconColor: "#e10098",
  },
  // 18. Gemini AI API
  {
    id: "gemini-ai",
    name: "Gemini AI API",
    label: "Gemini AI",
    category: "AI Integration",
    level: "Advanced",
    icon: SiGooglegemini,
    iconColor: "#1a73e8",
  },
  // 18. Git & GitHub
  {
    id: "git-github",
    name: "Git & GitHub",
    label: "Git/GitHub",
    category: "Version Control",
    level: "Advanced",
    icon: FaGitAlt,
    iconColor: "#ea580c",
  },
  // 19. Framer Motion
  {
    id: "framer",
    name: "Framer Motion",
    label: "Framer",
    category: "Animation",
    level: "Advanced",
    icon: SiFramer,
    iconColor: "#0055ff",
  },
  // 20. GSAP
  {
    id: "gsap",
    name: "GSAP",
    label: "GSAP",
    category: "Timelines",
    level: "Intermediate",
    icon: SiGreensock,
    iconColor: "#88ce02",
  },
  // 21. Vue.js
  {
    id: "vue",
    name: "Vue.js",
    label: "Vue.js",
    category: "Frontend",
    level: "Intermediate",
    icon: SiVuedotjs,
    iconColor: "#42b883",
  },
  // 22. jQuery
  {
    id: "jquery",
    name: "jQuery",
    label: "jQuery",
    category: "DOM & Legacy",
    level: "Advanced",
    icon: SiJquery,
    iconColor: "#0769ad",
  },
  // 23. Jest
  {
    id: "jest",
    name: "Jest",
    label: "Jest",
    category: "Unit Testing",
    level: "Intermediate",
    icon: SiJest,
    iconColor: "#c21325",
  },
  // 24. React Testing Library
  {
    id: "testing-lib",
    name: "React Testing Library",
    label: "RTL",
    category: "UI Testing",
    level: "Intermediate",
    icon: SiTestinglibrary,
    iconColor: "#e33332",
  },
  // 25. Manual Testing
  {
    id: "manual-testing",
    name: "Manual Testing",
    label: "Manual QA",
    category: "Cross-Browser",
    level: "Advanced",
    icon: Bug,
    iconColor: "#10b981",
  },
  // 26. WordPress
  {
    id: "wordpress",
    name: "WordPress",
    label: "WordPress",
    category: "CMS Architecture",
    level: "Advanced",
    icon: FaWordpress,
    iconColor: "#21759b",
  },
  // 27. Elementor
  {
    id: "elementor",
    name: "Elementor",
    label: "Elementor",
    category: "Page Builder",
    level: "Advanced",
    icon: SiElementor,
    iconColor: "#92003b",
  },
  // 28. Figma
  {
    id: "figma",
    name: "Figma",
    label: "Figma",
    category: "Design to Code",
    level: "Advanced",
    icon: SiFigma,
    iconColor: "#a259ff",
  },
]

export default function SkillsSection() {
  // Initial 6 slots (3 on left, 3 on right)
  const [leftSlots, setLeftSlots] = useState<SkillNode[]>([
    allSkillsQueue[0], // React.js
    allSkillsQueue[2], // JavaScript
    allSkillsQueue[4], // HTML5
  ])
  const [rightSlots, setRightSlots] = useState<SkillNode[]>([
    allSkillsQueue[1], // Next.js
    allSkillsQueue[3], // TypeScript
    allSkillsQueue[6], // Tailwind CSS
  ])

  // Track which slot was most recently updated
  const [activeSlotKey, setActiveSlotKey] = useState<string>("left-0")
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null)
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  // Refs for tracking next sequential skill and target slot
  const nextSkillIndexRef = useRef(7)
  const currentStepRef = useRef(0)

  // Sequential slot rotation: updates ONE slot at a time alternating Left & Right
  // Pattern: Top-Left -> Top-Right -> Mid-Left -> Mid-Right -> Bottom-Left -> Bottom-Right
  const advanceOneSkill = useCallback(() => {
    const nextSkill = allSkillsQueue[nextSkillIndexRef.current % allSkillsQueue.length]
    nextSkillIndexRef.current += 1

    const step = currentStepRef.current % 6
    currentStepRef.current += 1

    if (step === 0) {
      setLeftSlots((prev) => [nextSkill, prev[1], prev[2]])
      setActiveSlotKey("left-0")
    } else if (step === 1) {
      setRightSlots((prev) => [nextSkill, prev[1], prev[2]])
      setActiveSlotKey("right-0")
    } else if (step === 2) {
      setLeftSlots((prev) => [prev[0], nextSkill, prev[2]])
      setActiveSlotKey("left-1")
    } else if (step === 3) {
      setRightSlots((prev) => [prev[0], nextSkill, prev[2]])
      setActiveSlotKey("right-1")
    } else if (step === 4) {
      setLeftSlots((prev) => [prev[0], prev[1], nextSkill])
      setActiveSlotKey("left-2")
    } else if (step === 5) {
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
        ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Vue.js", "jQuery"].includes(s.name)
      )
    } else if (categoryName === "State & APIs") {
      filtered = allSkillsQueue.filter((s) =>
        ["Redux", "REST API", "GraphQL API", "Zustand", "Gemini AI API", "Context API", "Git & GitHub"].includes(s.name)
      )
    } else if (categoryName === "UI & Styling") {
      filtered = allSkillsQueue.filter((s) =>
        ["Tailwind CSS", "Bootstrap", "shadcn/ui", "SASS / SCSS", "Material UI", "Responsive Design"].includes(s.name)
      )
    } else if (categoryName === "Animation & QA") {
      filtered = allSkillsQueue.filter((s) =>
        ["Framer Motion", "Jest", "GSAP", "React Testing Library", "Manual Testing", "Figma"].includes(s.name)
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
      return ["Git & GitHub", "Figma", "WordPress", "Elementor", "REST API", "GraphQL", "Gemini AI API"].includes(skill.name)
    if (activeCategory === "Testing")
      return ["Jest", "React Testing Library", "Manual Testing"].includes(skill.name)
    return true
  })

  // Responsive position classes for Left and Right nodes
  const leftPositionClasses = [
    "left-[13%] sm:left-[17%] md:left-[21%] top-[19%] sm:top-[21.4%]", // Top-Left
    "left-[21%] sm:left-[27%] md:left-[33%] top-[50%]",                // Mid-Left (closer to hub)
    "left-[13%] sm:left-[17%] md:left-[21%] top-[81%] sm:top-[78.6%]", // Bottom-Left
  ]

  const rightPositionClasses = [
    "left-[87%] sm:left-[83%] md:left-[79%] top-[19%] sm:top-[21.4%]", // Top-Right
    "left-[79%] sm:left-[73%] md:left-[67%] top-[50%]",                // Mid-Right (closer to hub)
    "left-[87%] sm:left-[83%] md:left-[79%] top-[81%] sm:top-[78.6%]", // Bottom-Right
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#38bdf8]/10 to-[#64ffda]/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#112240]/40 rounded-full blur-3xl" />
      </div>

      {/* Top Header & Category Pills (Centered in Container) */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex w-max mx-auto items-center gap-2 bg-gradient-to-r from-[#64ffda]/15 to-[#38bdf8]/15 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-3 sm:mb-4"
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-xs sm:text-sm font-medium">Tech Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold !mb-2 sm:!mb-3"
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
            className="text-xs sm:text-base md:text-lg text-[#a0aec0] max-w-2xl mx-auto px-2"
          >
            A high-performance interconnected network of modern technologies powering fast, scalable, and pixel-perfect web applications
          </motion.p>
        </div>

        {/* Quick Filter Navigation Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6 px-1">
          {["All", "Frontend", "State & APIs", "UI & Styling", "Animation & QA", "Platforms"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer bg-[#112240]/80 text-[#a0aec0] border border-[#64ffda]/20 hover:border-[#64ffda]/60 hover:text-white hover:scale-105 active:scale-95"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* THE CONNECTED HUB STAGE (FULL-WIDTH ON ALL DEVICES)      */}
      {/* ======================================================== */}
      <div className="w-full relative overflow-hidden select-none">
        {/* Full-Width Canvas Wrapper - Compact & responsive height */}
        <div className="relative w-full h-[440px] sm:h-[520px] md:h-[620px] lg:h-[720px] xl:h-[760px] flex items-center justify-center overflow-hidden">
          
          {/* Full-Width SVG Optical Conduit Rays (Edge-to-Edge) */}
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

            {/* LEFT FAN RAYS: Span from exact left edge x=0 to center (650, 280) */}
            <g stroke="url(#leftFiberGrad)" strokeWidth="1.2" strokeLinecap="round">
              <path d="M 0,20 C 220,40 450,130 650,280" />
              <path d="M 0,60 C 150,85 220,105 302,120 C 420,150 530,280 650,280" strokeWidth="1.6" />
              <path d="M 0,110 C 230,140 460,200 650,280" />
              <path d="M 0,180 C 240,200 480,240 650,280" />
              <path d="M 0,280 L 650,280" strokeWidth="1.8" strokeOpacity="0.9" />
              <path d="M 0,380 C 240,360 480,320 650,280" />
              <path d="M 0,450 C 230,420 460,360 650,280" />
              <path d="M 0,500 C 150,475 220,455 302,440 C 420,410 530,280 650,280" strokeWidth="1.6" />
              <path d="M 0,540 C 220,520 450,430 650,280" />
            </g>

            {/* RIGHT FAN RAYS: Span from center (790, 280) to exact right edge x=1440 */}
            <g stroke="url(#rightFiberGrad)" strokeWidth="1.2" strokeLinecap="round">
              <path d="M 1440,20 C 1220,40 990,130 790,280" />
              <path d="M 1440,60 C 1290,85 1220,105 1138,120 C 1020,150 910,280 790,280" strokeWidth="1.6" />
              <path d="M 1440,110 C 1210,140 980,200 790,280" />
              <path d="M 1440,180 C 1200,200 960,240 790,280" />
              <path d="M 1440,280 L 790,280" strokeWidth="1.8" strokeOpacity="0.9" />
              <path d="M 1440,380 C 1200,360 960,320 790,280" />
              <path d="M 1440,450 C 1210,420 980,360 790,280" />
              <path d="M 1440,500 C 1290,475 1220,455 1138,440 C 1020,410 910,280 790,280" strokeWidth="1.6" />
              <path d="M 1440,540 C 1220,520 990,430 790,280" />
            </g>

            {/* FULL-WIDTH LASER PULSES */}
            <g strokeLinecap="round">
              <path
                d="M 0,60 C 150,85 220,105 302,120 C 420,150 530,280 650,280"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#38bdf8"
                strokeWidth="3.2"
                filter="url(#neon-sky)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.6s" repeatCount="indefinite" />
              </path>
              <path
                d="M 0,280 L 650,280"
                pathLength="100"
                strokeDasharray="9 91"
                stroke="#64ffda"
                strokeWidth="3.4"
                filter="url(#neon-cyan)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.1s" begin="0.3s" repeatCount="indefinite" />
              </path>
              <path
                d="M 0,500 C 150,475 220,455 302,440 C 420,410 530,280 650,280"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#38bdf8"
                strokeWidth="3.2"
                filter="url(#neon-sky)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
              </path>

              <path
                d="M 790,280 C 910,280 1020,150 1138,120 C 1220,105 1290,85 1440,60"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#64ffda"
                strokeWidth="3.2"
                filter="url(#neon-cyan)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.6s" begin="0.2s" repeatCount="indefinite" />
              </path>
              <path
                d="M 790,280 L 1440,280"
                pathLength="100"
                strokeDasharray="9 91"
                stroke="#38bdf8"
                strokeWidth="3.4"
                filter="url(#neon-sky)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
              </path>
              <path
                d="M 790,280 C 910,280 1020,410 1138,440 C 1220,455 1290,475 1440,500"
                pathLength="100"
                strokeDasharray="8 92"
                stroke="#64ffda"
                strokeWidth="3.2"
                filter="url(#neon-cyan)"
              >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.9s" begin="0.9s" repeatCount="indefinite" />
              </path>
            </g>

            {/* Orbit Tracks & Orbiting Satellite Dot */}
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
            {/* Ambient Cyan / Sky Glowing Halos */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-[#64ffda]/25 via-[#38bdf8]/30 to-[#64ffda]/25 blur-2xl animate-pulse pointer-events-none" />
            <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-[#64ffda]/30 animate-ping opacity-20 pointer-events-none" />

            {/* Responsive Main Cyber Core Disk */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-42 lg:h-42 rounded-full bg-gradient-to-br from-[#112240] via-[#0c1a2f] to-[#0A0F1A] shadow-[0_0_40px_rgba(100,255,218,0.3),inset_0_0_25px_rgba(100,255,218,0.15)] border-2 border-[#64ffda]/60 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#64ffda] group-hover:shadow-[0_0_65px_rgba(100,255,218,0.5)] backdrop-blur-xl">
              
              {/* Rotating Technical Dashed Bezel */}
              <div className="absolute inset-1.5 sm:inset-2.5 rounded-full border border-dashed border-[#38bdf8]/40 animate-[spin_30s_linear_infinite]" />
              
              {/* Inner Counter-Rotating Dotted Ring */}
              <div className="absolute inset-3 sm:inset-4.5 rounded-full border border-dotted border-[#64ffda]/30 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Inner Monogram Cavity */}
              <div className="w-13 h-13 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border border-[#64ffda]/40 flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0F1A]/95 shadow-[inset_0_0_20px_rgba(100,255,218,0.25)]">
                
                {/* Radar Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#64ffda]/15 to-transparent animate-[spin_7s_linear_infinite] pointer-events-none" />

                {/* Cyber Core Monogram: < S /> */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    <span className="text-[#38bdf8] font-mono text-xs sm:text-sm md:text-base font-bold opacity-80">&lt;</span>
                    <span className="font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#64ffda] via-white to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(100,255,218,0.85)] tracking-tight">
                      S
                    </span>
                    <span className="text-[#38bdf8] font-mono text-xs sm:text-sm md:text-base font-bold opacity-80">/&gt;</span>
                  </div>
                  
                  {/* High-Tech Technical Tag */}
                  <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono tracking-widest text-[#64ffda] uppercase font-bold -mt-0.5 sm:mt-0 opacity-90 hidden sm:inline-block">
                    DEV CORE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* 3 LEFT NODES (RESPONSIVE NON-OVERLAPPING POSITIONS)      */}
          {/* ======================================================== */}
          {leftSlots.map((node: SkillNode, i: number) => {
            const posClass = leftPositionClasses[i]
            const Icon = node.icon
            const slotKey = `left-${i}`
            const isRecentlyUpdated = activeSlotKey === slotKey

            return (
              <div
                key={`left-pos-${i}`}
                className={`absolute z-20 pointer-events-auto -translate-x-1/2 -translate-y-1/2 ${posClass}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={node.id}
                    initial={{
                      opacity: 0,
                      x: -160,
                      scale: 0.35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: -120,
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
                      animate={{ y: [0, i % 2 === 0 ? -3 : 3, 0] }}
                      transition={{
                        duration: 3.6 + (i % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      className={`relative w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(100,255,218,0.2)] border-2 flex flex-col items-center justify-center p-1 sm:p-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(100,255,218,0.65)] hover:border-[#64ffda] group ${
                        isRecentlyUpdated
                          ? "border-[#64ffda] shadow-[0_0_30px_rgba(100,255,218,0.55)]"
                          : "border-white/90"
                      }`}
                    >
                      {/* Top-lit highlight */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-100 to-white pointer-events-none" />

                      {/* Skill Icon */}
                      <div className="flex items-center justify-center z-10">
                        <Icon
                          className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl ${
                            node.spinIcon ? "animate-[spin_12s_linear_infinite]" : ""
                          }`}
                          style={{ color: node.iconColor }}
                        />
                      </div>

                      {/* Skill Label */}
                      <span className="mt-0.5 sm:mt-1 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold text-slate-800 group-hover:text-[#0284c7] tracking-tight whitespace-nowrap text-center leading-none transition-colors z-10 max-w-[95%] truncate">
                        {node.label}
                      </span>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {activeNodeId === node.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.95 }}
                            className="absolute -top-11 sm:-top-13 z-40 bg-[#0A0F1A]/95 backdrop-blur-xl text-[#e0e0e0] text-[10px] sm:text-[11px] font-medium px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl whitespace-nowrap shadow-2xl border border-[#64ffda]/50 pointer-events-none"
                          >
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shadow-[0_0_6px_currentColor]"
                                style={{ backgroundColor: node.iconColor }}
                              />
                              <span className="font-semibold text-white">{node.name}</span>
                              <span className="text-[#64ffda] text-[9px] sm:text-[10px] font-mono">({node.level})</span>
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
          {/* 3 RIGHT NODES (RESPONSIVE NON-OVERLAPPING POSITIONS)     */}
          {/* ======================================================== */}
          {rightSlots.map((node: SkillNode, i: number) => {
            const posClass = rightPositionClasses[i]
            const Icon = node.icon
            const slotKey = `right-${i}`
            const isRecentlyUpdated = activeSlotKey === slotKey

            return (
              <div
                key={`right-pos-${i}`}
                className={`absolute z-20 pointer-events-auto -translate-x-1/2 -translate-y-1/2 ${posClass}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={node.id}
                    initial={{
                      opacity: 0,
                      x: 160,
                      scale: 0.35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: 120,
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
                      animate={{ y: [0, i % 2 === 0 ? 3 : -3, 0] }}
                      transition={{
                        duration: 3.8 + (i % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      className={`relative w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(100,255,218,0.2)] border-2 flex flex-col items-center justify-center p-1 sm:p-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(100,255,218,0.65)] hover:border-[#64ffda] group ${
                        isRecentlyUpdated
                          ? "border-[#64ffda] shadow-[0_0_30px_rgba(100,255,218,0.55)]"
                          : "border-white/90"
                      }`}
                    >
                      {/* Top-lit highlight */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-100 to-white pointer-events-none" />

                      {/* Skill Icon */}
                      <div className="flex items-center justify-center z-10">
                        <Icon
                          className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl ${
                            node.spinIcon ? "animate-[spin_12s_linear_infinite]" : ""
                          }`}
                          style={{ color: node.iconColor }}
                        />
                      </div>

                      {/* Skill Label */}
                      <span className="mt-0.5 sm:mt-1 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold text-slate-800 group-hover:text-[#0284c7] tracking-tight whitespace-nowrap text-center leading-none transition-colors z-10 max-w-[95%] truncate">
                        {node.label}
                      </span>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {activeNodeId === node.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.95 }}
                            className="absolute -top-11 sm:-top-13 z-40 bg-[#0A0F1A]/95 backdrop-blur-xl text-[#e0e0e0] text-[10px] sm:text-[11px] font-medium px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl whitespace-nowrap shadow-2xl border border-[#64ffda]/50 pointer-events-none"
                          >
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shadow-[0_0_6px_currentColor]"
                                style={{ backgroundColor: node.iconColor }}
                              />
                              <span className="font-semibold text-white">{node.name}</span>
                              <span className="text-[#64ffda] text-[9px] sm:text-[10px] font-mono">({node.level})</span>
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
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-4"
        >
          {skillStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3 bg-[#112240]/80 backdrop-blur-sm border border-[#64ffda]/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 transition-colors hover:border-[#64ffda]/50"
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#38bdf8]" />
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">
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
        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#64ffda]/30 bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20 hover:border-[#64ffda] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#64ffda]" />
            <span>{showAllSkills ? "Hide Detailed Skill Directory" : "Browse All 28 Skills by Category"}</span>
            {showAllSkills ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />}
          </button>

          <AnimatePresence>
            {showAllSkills && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-5 sm:mt-6 text-left"
              >
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {gridCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
                  {filteredGridSkills.map((skill, index) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-[#112240] border border-[#64ffda]/15 hover:border-[#64ffda]/40 transition-colors"
                      >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-[#0A0F1A] border border-[#64ffda]/20 flex items-center justify-center">
                          <SkillIcon className="text-base sm:text-lg text-[#38bdf8]" />
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
