"use client"

import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiJquery } from "react-icons/si"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import ProjectCard from "./components/ProjectCard"
import Testimonial from "./components/Testimonial"
import { Mail, MapPin, Phone, Send, MessageCircle, Sparkles, ArrowRight, CheckCircle, Award, Code, Heart, Users, FileText, Search, Zap, Rocket } from "lucide-react"
import emailjs from '@emailjs/browser'

const projects = [
  {
    title: "AI Avatar",
    description: "Developed a responsive, user-friendly frontend for an AI-driven workflow automation platform. Built interactive UI components for subscription management, content generation, and product analysis with Gemini AI integration.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Gemini AI", "API Integration"],
    imageUrl: "/images/ai-avatar.png",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://avatarplayground.luminousdemo.com",
  },
  {
    title: "Meridian Africa",
    description: "Developed a fully responsive landing page for Meridian Africa, implementing pixel-perfect designs, smooth navigation, and interactive elements. Ensured compatibility across devices and browsers while maintaining fast load times.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/agrovue.png",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://meridianafrica.io/",
  },
  {
    title: "Beige",
    description: "Developed a responsive and intuitive frontend for a platform connecting users with top-rated videographers and photographers. Built interactive booking interfaces, project management dashboards, and integrated backend APIs.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    imageUrl: "/images/beige.png",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://beige.app/",
  },
  {
    title: "AlertComm",
    description: "Developed a fully responsive and user-friendly frontend for AlertComm. Built interactive pages and navigation, integrated backend APIs for real-time data handling, and ensured cross-device and cross-browser compatibility.",
    technologies: ["React", "Next.js", "Tailwind CSS", "REST API"],
    imageUrl: "/images/alertcomm.png",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://alertcomm1.com/",
  },
  {
    title: "Carpentier Agency Website",
    description: "Developed a responsive and visually engaging landing page showcasing the agency's photographers and photo collections. Implemented interactive galleries, smooth navigation, and ensured cross-browser and mobile compatibility.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Image Optimization"],
    imageUrl: "/images/carpentier-agency.png",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://www.carpentieragency.com/",
  },
  {
    title: "Text CRM",
    description: "Designed intuitive and user-friendly interfaces for dashboards, chat, and product catalog features, focusing on usability, layout, and responsive design.",
    technologies: ["React", "TypeScript", "CSS", "Material UI"],
    imageUrl: "/images/text-crm.png",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://textcrm.chat/",
  },
  {
    title: "Keos LLC Project",
    description: "Worked as a Frontend Developer across multiple projects, building responsive interfaces, interactive dashboards, and user-friendly components using React. Collaborated with backend teams to integrate APIs and maintain consistent UI/UX.",
    technologies: ["React", "JavaScript", "Bootstrap", "API Integration"],
    imageUrl: "/images/keos-llc.png",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://keos.co/",
  },
]

const testimonials = [
  {
    quote:
      "Working with Srabon Mozumder was an absolute pleasure. Their attention to detail and understanding of modern web development practices is outstanding.",
    name: "John Doe",
    role: "CEO",
    company: "Tech Company",
  },
  {
    quote:
      "The quality of work delivered by Srabon Mozumder is exceptional. They have a great understanding of both frontend development and design principles.",
    name: "Jane Smith",
    role: "Product Manager",
    company: "Design Agency",
  },
]

const stats = [
  {
    number: "50+",
    label: "Designs Implemented",
    icon: Code,
    color: "from-emerald-400 to-cyan-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    number: "98%",
    label: "Pixel Accuracy Rate",
    icon: Award,
    color: "from-blue-400 to-purple-400",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "45+",
    label: "Components Built",
    icon: Heart,
    color: "from-pink-400 to-orange-400",
    bgColor: "bg-pink-500/10",
  },
  {
    number: "100%",
    label: "Responsive Delivery",
    icon: Users,
    color: "from-cyan-400 to-blue-400",
    bgColor: "bg-cyan-500/10",
  },
]

const skills = [
  { name: "HTML5", icon: FaHtml5, level: "Expert" },
  { name: "CSS3", icon: FaCss3Alt, level: "Expert" },
  { name: "Bootstrap", icon: FaBootstrap, level: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
  { name: "React.js", icon: FaReact, level: "Advanced" },
  { name: "jQuery", icon: SiJquery, level: "Advanced" },
  { name: "JavaScript", icon: FaJsSquare, level: "Expert" },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  const controls = useAnimation()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')
  
  useEffect(() => {
    // Initialize EmailJS with your public key
    // You'll need to sign up on https://www.emailjs.com/ and get your public key
    emailjs.init("YOUR_PUBLIC_KEY") // Replace with your actual EmailJS public key
  }, [])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFormError('')
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      )
      
      console.log('Email sent successfully:', result.text)
      
      // Show success message
      setIsSubmitted(true)
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      
      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setFormError('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srabonmozumder29@gmail.com",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1827-621312",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  useEffect(() => {
    controls.start({ opacity: 1 })
  }, [controls])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Design to Code Specialist */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Animated background with code theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-3/4 left-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>

          {/* Code-like grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-6xl mx-auto z-10 relative"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-5 py-2 mb-8"
          >
            <Code className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Figma to Code Specialist</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              I Don't Design.
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              I Build Them.
            </span>
          </motion.h1>

          <motion.div
            className="relative mb-10 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed">
              Frontend Developer at <span className="text-emerald-400 font-semibold">Luminous Labs</span>
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I transform <span className="text-pink-400 font-semibold">Figma & Adobe XD designs</span> into
              <span className="text-cyan-400 font-semibold"> pixel-perfect, production-ready</span> React & Next.js applications.
              No design guesswork—just <span className="text-emerald-400 font-semibold">precise implementation</span>.
            </p>
          </motion.div>

          {/* Visual Code Snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 mb-10 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="ml-auto text-xs text-gray-400 font-mono">implementation.tsx</span>
            </div>
            <code className="text-left block text-sm sm:text-base font-mono">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">transform</span> ={" "}
              <span className="text-yellow-400">(</span>
              <span className="text-pink-400">figmaDesign</span>
              <span className="text-yellow-400">)</span>{" "}
              <span className="text-purple-400">=&gt;</span> {"{"}
              <br />
              <span className="ml-4 text-gray-400">// Pixel-perfect implementation</span>
              <br />
              <span className="ml-4"><span className="text-purple-400">return</span>{" "}
              <span className="text-emerald-400">productionReady</span>
              <span className="text-yellow-400">(</span>
              <span className="text-orange-400">'React'</span>
              <span className="text-yellow-400">)</span>;</span>
              <br />
              {"};"}
            </code>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all relative overflow-hidden group min-w-[200px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">See Transformations</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 relative group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-emerald-500 px-8 py-4 rounded-xl text-lg font-semibold transition-colors hover:bg-emerald-500/10 min-w-[200px]"
            >
              <Send className="mr-2 h-5 w-5" />
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Honest Implementation Focus */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute left-0 top-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Let Me Be Clear About What I Do
              </span>
            </h2>
            <p className="text-lg text-gray-400">Honest. Direct. Implementation-Focused.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Main Message */}
              <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 p-8 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">I'm Not a Designer</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  I don't create Figma mockups from scratch. I'm a <span className="text-emerald-400 font-semibold">design implementation specialist</span> - I transform existing designs into production-ready code.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Currently a Frontend Developer at <span className="text-emerald-400 font-semibold">Luminous Labs</span> and pursuing a Diploma in Computer Science. Over the past 2+ years, I've specialized in one thing: taking beautiful designs and building them <span className="text-cyan-400 font-semibold">pixel-by-pixel</span> in code.
                </p>
              </div>

              {/* What I DO */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-emerald-500/20">
                <h3 className="text-lg font-semibold mb-4 text-emerald-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What I DO
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Transform Figma/Adobe XD designs into pixel-perfect code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Build responsive, mobile-first React/Next.js applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Implement complex animations and interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Optimize for performance and accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Write clean, maintainable, documented code</span>
                  </li>
                </ul>
              </div>

              {/* What I DON'T DO */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-pink-500/20">
                <h3 className="text-lg font-semibold mb-4 text-pink-400 flex items-center gap-2">
                  <span className="text-2xl">✗</span>
                  What I DON'T DO
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">✗</span>
                    <span>Create UI/UX designs or mockups from scratch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">✗</span>
                    <span>Conduct UX research or user testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">✗</span>
                    <span>Graphic design, branding, or logo creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">✗</span>
                    <span>Backend development or database design</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Profile Image */}
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
                <Image
                  src="/images/srabon.png"
                  alt="Srabon Mojumder - Design to Code Specialist"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl w-full h-auto border border-emerald-500/30"
                />
              </div>

              {/* Experience & Certifications */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-emerald-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">Experience</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Frontend Developer at Luminous Labs</li>
                    <li>• 2+ Years Implementation Specialist</li>
                    <li>• 50+ Designs Transformed</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-blue-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Certifications</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• React.js Certification</li>
                    <li>• CSS Grid & Flexbox Masterclass</li>
                    <li>• Frontend Web Development</li>
                  </ul>
                </div>
              </div>

              {/* My Sweet Spot */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">My Sweet Spot</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Hand me a detailed Figma file with a solid design system, and I'll deliver clean, maintainable React/Next.js code that your team can actually work with. No shortcuts, no "close enough" - just <span className="text-emerald-400 font-semibold">precise implementation</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - How I Work */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                From Design File to Deployment
              </span>
            </h2>
            <p className="text-lg text-gray-400">A systematic approach to pixel-perfect implementation</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Process Steps */}
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Receive Design",
                  description: "You provide Figma/XD files with design specs",
                  icon: FileText,
                  color: "from-pink-500 to-rose-500"
                },
                {
                  step: "02",
                  title: "Analysis",
                  description: "I analyze components, breakpoints, interactions",
                  icon: Search,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Build with React/Next.js + Tailwind/Bootstrap",
                  icon: Code,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "04",
                  title: "Quality Check",
                  description: "Pixel-perfect review, responsive testing",
                  icon: CheckCircle,
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  step: "05",
                  title: "Delivery",
                  description: "Production-ready code + documentation",
                  icon: Rocket,
                  color: "from-cyan-500 to-blue-500"
                }
              ].map((process, index) => {
                const IconComponent = process.icon
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < 4 && (
                    <div className="hidden md:block absolute top-12 left-[calc(100%-2rem)] w-[calc(100%+1.5rem)] h-0.5 bg-gradient-to-r from-emerald-500/50 to-blue-500/50 z-0"></div>
                  )}

                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${process.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <IconComponent className="w-10 h-10 text-white mx-auto mb-2" />
                          <div className={`text-xs font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent`}>
                            {process.step}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2 text-center">{process.title}</h3>
                    <p className="text-sm text-gray-400 text-center leading-relaxed">{process.description}</p>
                  </div>
                </motion.div>
              )
            })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Average turnaround: <span className="text-emerald-400 font-semibold">3-7 days</span></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto  relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Technical Skills
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">Technologies and tools I work with</p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 sm:p-5 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-center"
              >
                <div className="mb-3 transform transition-transform">
                  <skill.icon className="text-3xl sm:text-4xl mx-auto text-cyan-400" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700/30 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: skill.level === "Expert" ? "90%" : skill.level === "Advanced" ? "75%" : "60%",
                    }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-xs text-cyan-400 mt-1">{skill.level}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Education
              </span>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-[12px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 hidden sm:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {/* Education items */}
              {[
                {
                  title: "Diploma in Computer Science and Engineering",
                  institution: "Desh Polytechnic College",
                  period: "2022 - Present",
                  description:
                    "Focusing on practical applications of web technologies, database management, and software engineering principles.",
                },
                {
                  title: "Frontend Web Development ",
                  institution: "Luminous Labs",
                  period: "2022",
                  description:
                    "Intensive training in modern frontend frameworks including React, Next.js, and state management libraries.",
                },
                {
                  title: "Higher Secondary Certificate (HSC)",
                  institution: "Mohammadpur Govt. College | Commerce Group",
                  period: "2021",
                  description:
                    "Focused on business studies, accounting, economics, and commercial mathematics. Achieved GPA 4.33/5.00.",
                },
                {
                  title: "Secondary School Certificate (SSC)",
                  institution: "Boxganj High School & College | Commerce Group",
                  period: "2019",
                  description:
                    "Studied commerce subjects including business entrepreneurship, accounting, and finance. Achieved GPA 4.56/5.00.",
                },
                
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="sm:ml-16 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-49px] sm:left-[-65px] top-0 w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hidden sm:flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/30 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-cyan-400 mb-3">{item.institution}</p>
                    <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 top-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto  relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Design Transformations
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">
              Real projects. <span className="text-pink-400">Designs</span> transformed into <span className="text-emerald-400">production code</span>.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <motion.a
              href="https://github.com/srabonmojumder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-lg font-semibold border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View More Projects
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Services Section - Implementation Focus */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Implementation Services
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">
              Transforming designs into production-ready code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Figma/XD to React/Next.js",
                description:
                  "Your design, perfectly implemented. I transform your Figma or Adobe XD files into clean, maintainable React or Next.js code. Every pixel, every spacing, every font - exactly as designed.",
                color: "from-emerald-500 to-cyan-500",
                borderColor: "border-emerald-500/30",
                hoverShadow: "hover:shadow-emerald-500/20",
              },
              {
                icon: Sparkles,
                title: "Responsive Implementation",
                description:
                  "One design, all devices. Mobile-first development ensuring perfect rendering from the smallest phone to the largest desktop. Tested on real devices, not just browser resize.",
                color: "from-blue-500 to-purple-500",
                borderColor: "border-blue-500/30",
                hoverShadow: "hover:shadow-blue-500/20",
              },
              {
                icon: Heart,
                title: "Animation & Interaction",
                description:
                  "Designs that move. If your mockup includes animations, transitions, or micro-interactions, I implement them smoothly using Framer Motion, GSAP, or CSS animations - optimized for 60fps performance.",
                color: "from-pink-500 to-orange-500",
                borderColor: "border-pink-500/30",
                hoverShadow: "hover:shadow-pink-500/20",
              },
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-2xl border ${service.borderColor} backdrop-blur-sm hover:shadow-xl ${service.hoverShadow} transition-all group relative overflow-hidden`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}></div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${service.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Service Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 p-8 rounded-2xl border border-emerald-500/30 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-400">What You Get With Every Project</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle, text: "Pixel-perfect implementation" },
                { icon: Code, text: "Clean, documented code" },
                { icon: Sparkles, text: "Performance optimized" },
                { icon: Users, text: "Cross-browser compatible" },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                What Clients Say
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>


      {/* Achievement Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Implementation By The Numbers
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className={`${stat.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-300 group-hover:border-white/20`}
                >
                  {/* Floating icon background */}
                  <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <IconComponent className="w-24 h-24" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Number with counter animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <p className="text-gray-300 text-lg font-medium leading-tight">{stat.label}</p>

                  {/* Hover effect line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  ></div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100`}
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${10 + i * 30}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>

      {/* Contact Section */}
   <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Let's Connect</span>
          </motion.div>

          <h2 className=" text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text relative text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Contact Info Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="flex items-start gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your
                  vision. Don't hesitate to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group cursor-pointer"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`relative p-2 sm:p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex-1 min-w-0"> {/* Added flex-1 and min-w-0 to prevent overflow */}
                          <p className="text-gray-400 text-xs sm:text-sm font-medium">{item.label}</p>
                          <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors text-wrap break-words text-sm sm:text-base">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="relative h-32 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Quick Response</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all group-hover:border-white/20"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-focus-within:from-cyan-500/10 group-focus-within:to-blue-500/10 transition-all pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all group-hover:border-white/20"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-focus-within:from-cyan-500/10 group-focus-within:to-blue-500/10 transition-all pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none group-hover:border-white/20"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-focus-within:from-cyan-500/10 group-focus-within:to-blue-500/10 transition-all pointer-events-none" />
                  </div>

                  {formError && (
                    <div className="text-red-400 text-sm mb-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                      {formError}
                    </div>
                  )}
                  
                  <motion.button
                    type="submit"
                    className="relative w-full group overflow-hidden"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    disabled={isLoading || isSubmitted}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center gap-3 py-4 px-6 text-white font-semibold">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>

                {/* Success Animation */}
                {isSubmitted && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-green-500/20 backdrop-blur-sm rounded-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <p className="text-white font-semibold">Thank you for reaching out!</p>
                      <p className="text-gray-300 text-sm">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


      <Footer />
    </div>
  )
}
