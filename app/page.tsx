"use client"

import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import ProjectCard from "./components/ProjectCard"
import Testimonial from "./components/Testimonial"
import { Mail, MapPin, Phone, Send, MessageCircle, Sparkles, ArrowRight, CheckCircle, Award, Code, Heart, Users, FileText, Search, Zap, Rocket } from "lucide-react"
import emailjs from '@emailjs/browser'
import { projects } from "./data/projects"


const testimonials = [
  {
    quote:
      "Srabon transformed our complex Figma designs into a pixel-perfect React application that exceeded our expectations. The attention to detail was remarkable - every spacing, color, and interaction was implemented exactly as designed. The code was clean, well-documented, and our development team could immediately work with it. Delivery was on time, and communication throughout the project was excellent.",
    name: "Michael Chen",
    role: "Lead Designer",
    company: "Creative Studio",
  },
  {
    quote:
      "We needed a frontend developer who could translate our design vision into production-ready code without compromising on quality or performance. Srabon delivered beyond expectations, implementing responsive layouts that work flawlessly across all devices. The use of modern React patterns and TypeScript made the codebase maintainable and scalable. Highly recommend for any design-to-code projects.",
    name: "Sarah Williams",
    role: "Product Manager",
    company: "Tech Startup",
  },
]

const stats = [
  {
    number: "3",
    label: "Years Experience",
    icon: Award,
    color: "from-emerald-400 to-cyan-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    number: "50+",
    label: "Projects Delivered",
    icon: Code,
    color: "from-blue-400 to-purple-400",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "8+",
    label: "Happy Clients",
    icon: Users,
    color: "from-pink-400 to-orange-400",
    bgColor: "bg-pink-500/10",
  },
  {
    number: "100%",
    label: "Responsive Builds",
    icon: Heart,
    color: "from-cyan-400 to-blue-400",
    bgColor: "bg-cyan-500/10",
  },
]

const skills = [
  { name: "React.js", icon: FaReact, level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
  { name: "JavaScript", icon: FaJsSquare, level: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
  { name: "HTML5", icon: FaHtml5, level: "Expert" },
  { name: "CSS3", icon: FaCss3Alt, level: "Expert" },
  { name: "Bootstrap", icon: FaBootstrap, level: "Advanced" },
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
            <span className="text-emerald-400 text-sm font-medium">Frontend Developer</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-emerald-400">
              I Build What
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              You Design.
            </span>
          </motion.h1>

          <motion.div
            className="relative mb-10 max-w-3xl mx-auto space-y-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed">
              Frontend Developer at <span className="text-emerald-400 font-semibold">Luminous Labs</span> | 3 Years of Experience
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I turn <span className="text-emerald-400 font-semibold">Figma and XD designs</span> into responsive, production-ready web applications using <span className="text-cyan-400 font-semibold">React, Next.js, and Tailwind CSS</span>. Clean code, pixel-perfect results, and smooth performance across every device.
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
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
              <span className="relative">View Projects</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 relative group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all relative overflow-hidden group min-w-[200px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                <Send className="h-5 w-5" />
                Let's Work Together
              </span>
            </motion.a>

            {/* Download CV Button */}
            <motion.a
              href="/cv/Srabon Mozumder_last.pdf"
              download="Srabon_Mozumder_CV.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all relative overflow-hidden group min-w-[200px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
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
                About Me
              </span>
            </h2>
            <p className="text-lg text-gray-400">Frontend Developer. Design to Code. Detail-Oriented.</p>
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
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Who I Am</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  I'm a <span className="text-emerald-400 font-semibold">Frontend Developer</span> at Luminous Labs with 3 years of experience building responsive web applications. I take Figma and Adobe XD designs and turn them into <span className="text-cyan-400 font-semibold">clean, production-ready code</span> using React, Next.js, Tailwind CSS, and Bootstrap.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I focus on writing maintainable components, integrating APIs, and making sure every layout works smoothly across all screen sizes. If you have a design ready, I can build it.
                </p>
              </div>

              {/* What I DO */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-emerald-500/20">
                <h3 className="text-lg font-semibold mb-4 text-emerald-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What I Do
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Convert Figma and Adobe XD designs into pixel-perfect React/Next.js code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Build responsive layouts that work on every screen size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Create reusable components with React and Next.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Integrate REST APIs and display data on the frontend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Style with Tailwind CSS, Bootstrap, or pure CSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Deliver clean, maintainable, production-ready code</span>
                  </li>
                </ul>
              </div>

              {/* My Approach */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  My Approach
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Review the design file and understand every detail before writing code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Build mobile-first, then scale up for tablets and desktops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Write reusable React components that your team can build on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Test across real devices and browsers before delivery</span>
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
                    <li>• 3 Years Professional Experience</li>
                    <li>• 50+ Projects Delivered</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-blue-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Core Focus</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• React & Next.js Development</li>
                    <li>• CSS Grid & Flexbox Masterclass</li>
                    <li>• Figma/XD to Code Conversion</li>
                    <li>• Responsive Web Development</li>
                  </ul>
                </div>
              </div>

              {/* My Sweet Spot */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Best Fit</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Give me a Figma or XD file with clear specs, and I'll deliver <span className="text-emerald-400 font-semibold">responsive React/Next.js code</span> your team can build on. Accurate, clean, and ready for production.
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
                How I Work
              </span>
            </h2>
            <p className="text-lg text-gray-400">From design handoff to production-ready code</p>
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

      {/* Skills Section - Unique Design */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex w-max mx-auto items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-5 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Tech Stack</span>
            </motion.div>
 
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                My Tech Stack
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-gray-400"
            >
              The tools I use to build modern web interfaces
            </motion.p>
          </div>

          {/* Bento Box Grid Layout */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => {
              // Create varying layouts for visual interest
              const layouts = [
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "col-span-1 row-span-1",
                "md:col-span-2 col-span-2 row-span-1",
              ]

              const gradients = [
                "from-blue-500/20 to-cyan-500/20",
                "from-purple-500/20 to-pink-500/20",
                "from-yellow-500/20 to-orange-500/20",
                "from-cyan-500/20 to-blue-500/20",
                "from-orange-500/20 to-red-500/20",
                "from-emerald-500/20 to-teal-500/20",
                "from-violet-500/20 to-purple-500/20",
              ]

              const borderGradients = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-pink-500",
                "from-yellow-500 to-orange-500",
                "from-cyan-500 to-blue-500",
                "from-orange-500 to-red-500",
                "from-emerald-500 to-teal-500",
                "from-violet-500 to-purple-500",
              ]

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      transition: { duration: 0.5, delay: index * 0.1 }
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`${layouts[index]} group relative`}
                >
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${borderGradients[index]} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500`}></div>

                  {/* Card */}
                  <div className="relative h-full w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/30 transition-all duration-300">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Animated rays effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute h-[1px] w-full bg-gradient-to-r ${borderGradients[index]} top-1/2`}
                          style={{ transform: `rotate(${i * 45}deg)` }}
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 z-10">
                      {/* Icon with animated ring */}
                      <div className="relative mb-4">
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${borderGradients[index]} blur-md opacity-0 group-hover:opacity-60`}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        ></motion.div>

                        <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${borderGradients[index]} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                            <skill.icon className="text-3xl md:text-4xl text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Skill name */}
                      <h3 className="text-base md:text-lg font-bold text-white mb-2 text-center group-hover:scale-110 transition-transform duration-300">
                        {skill.name}
                      </h3>

                      {/* Level badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${borderGradients[index]} text-white text-xs font-medium group-hover:scale-110 transition-transform duration-300`}>
                        <Zap className="w-3 h-3" />
                        {skill.level}
                      </div>

                      {/* Floating particles */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${borderGradients[index]} rounded-full opacity-0 group-hover:opacity-100`}
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + (i % 3) * 20}%`,
                            }}
                            animate={{
                              y: [-10, -30, -10],
                              opacity: [0, 1, 0],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 2 + i * 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>

                      {/* Corner accent */}
                      <div className={`absolute top-2 right-2 w-8 h-8 bg-gradient-to-br ${borderGradients[index]} opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity`}></div>
                      <div className={`absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br ${borderGradients[index]} opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity`}></div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "Years Experience", value: "3", icon: Award },
              { label: "Core Technologies", value: "7", icon: Code },
              { label: "Projects Delivered", value: "50+", icon: Rocket }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{stat.value}</span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Work Experience
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">
              Where I've built and grown as a frontend developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-[12px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-500 to-blue-600 hidden sm:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {/* Work Experience items */}
              {[
                {
                  title: "Frontend Developer",
                  company: "Luminous Labs",
                  period: "Sep 2023 – Present",
                  location: "Dhaka, Bangladesh",
                  type: "Full-time",
                  description: "Building frontend interfaces for client projects across different industries.",
                  responsibilities: [
                    "Build responsive interfaces using React, Next.js, and Tailwind CSS",
                    "Convert Figma and XD designs into production-ready components",
                    "Develop and maintain reusable React component libraries",
                    "Integrate REST APIs and manage frontend data flow",
                    "Collaborate with designers and backend teams in agile sprints",
                  ],
                  color: "from-emerald-500 to-cyan-500",
                },
                {
                  title: "Frontend Developer Intern",
                  company: "Luminous Labs",
                  period: "Mar 2022 – Sep 2023",
                  location: "Dhaka, Bangladesh",
                  type: "Internship",
                  description: "Learned modern frontend development through hands-on work on real client projects.",
                  responsibilities: [
                    "Built responsive layouts from design mockups using HTML, CSS, and React",
                    "Learned and applied Next.js and Tailwind CSS in production projects",
                    "Participated in code reviews and team collaboration",
                    "Contributed to client projects under senior developer guidance",
                  ],
                  color: "from-blue-500 to-purple-500",
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="sm:ml-16 relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[-49px] sm:left-[-65px] top-0 w-7 h-7 bg-gradient-to-r ${job.color} rounded-full hidden sm:flex items-center justify-center shadow-lg`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-700/30 hover:border-emerald-500/30 transition-all group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-emerald-400 mb-2">
                          <span className="text-lg font-semibold">{job.company}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-400">{job.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                          {job.period}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                            <span className="text-emerald-400 mt-1 flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                  title: "Diploma in Computer Technology",
                  institution: "Dash Polytechnic Institute",
                  period: "2023 - Present",
                  description:
                    "Focusing on practical applications of web technologies, software development, database management, and modern programming principles.",
                },
                {
                  title: "Frontend Web Development Training",
                  institution: "Luminous Labs",
                  period: "2022",
                  description:
                    "Intensive hands-on training in modern frontend frameworks including React, Next.js, Tailwind CSS, responsive design, and API integration.",
                },
                {
                  title: "Higher Secondary Certificate (HSC)",
                  institution: "Commerce Group",
                  period: "2021",
                  description:
                    "Completed higher secondary education with focus on business studies, accounting, and economics.",
                },
                {
                  title: "Secondary School Certificate (SSC)",
                  institution: "Commerce Group",
                  period: "2019",
                  description:
                    "Completed secondary education with specialization in commerce subjects.",
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
                Featured Projects
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">
              Real projects I've built — from <span className="text-pink-400">design files</span> to <span className="text-emerald-400">live applications</span>.
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
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all relative overflow-hidden group min-w-[200px]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                View More Projects
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
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
                What I Offer
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">
              Frontend services focused on quality and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Design to Code",
                description:
                  "I take your Figma or Adobe XD designs and build them in React or Next.js. Every spacing, color, and interaction — implemented exactly as designed with reusable, maintainable components.",
                color: "from-emerald-500 to-cyan-500",
                borderColor: "border-emerald-500/30",
                hoverShadow: "hover:shadow-emerald-500/20",
              },
              {
                icon: Sparkles,
                title: "Responsive Development",
                description:
                  "Mobile-first layouts that look great on every screen. I build with proper breakpoints, optimized images, and test across real devices to make sure nothing breaks.",
                color: "from-blue-500 to-purple-500",
                borderColor: "border-blue-500/30",
                hoverShadow: "hover:shadow-blue-500/20",
              },
              {
                icon: Heart,
                title: "API Integration & Interactivity",
                description:
                  "I connect your frontend to REST APIs and bring interfaces to life with smooth animations, transitions, and interactive elements using Framer Motion and CSS.",
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
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-400">Included With Every Project</h3>
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
            By The Numbers
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
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-3">
            Have a design ready? I'd love to hear about your project and discuss how I can help build it.
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
                  <h3 className="text-2xl font-bold text-white">Ready to Start Your Project?</h3>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you're building a new product or need frontend help on an existing one, feel free to reach out. I typically respond within 24 hours.
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
                      placeholder="Tell me about your project (e.g., 'I have a Figma design for a SaaS dashboard that needs to be implemented in React...')"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
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
