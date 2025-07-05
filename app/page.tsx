"use client"

import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiJquery } from "react-icons/si"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import ProjectCard from "./components/ProjectCard"
import Testimonial from "./components/Testimonial"

const projects = [
  {
    title: "E-commerce Website",
    description: "A modern e-commerce platform built with Next.js and Stripe integration",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "#",
  },
  {
    title: "Social Media App",
    description: "A real-time social media application with chat and notifications",
    technologies: ["React", "Firebase", "Material UI"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "#",
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

  useEffect(() => {
    controls.start({ opacity: 1 })
  }, [controls])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-3/4 left-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-5xl mx-auto z-10 relative"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Srabon Mojumder
          </motion.h1>

          <motion.div
            className="relative mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl mb-2 relative z-10">
              Frontend Developer at <span className="text-cyan-400 font-semibold">Luminous Labs</span>
            </p>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Passionate about creating beautiful, responsive, and user-friendly web experiences with modern
              technologies
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(56, 189, 248, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition-all relative overflow-hidden group min-w-[160px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Get in Touch</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 relative group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 px-6 py-3 rounded-lg text-lg font-semibold transition-colors hover:bg-cyan-500/10 min-w-[160px]"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm currently pursuing a Diploma in Computer Science and Engineering at Desh Polytechnic College. As a
                Frontend Developer at Luminous Labs, I specialize in creating responsive and user-friendly web
                experiences with modern technologies.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm passionate about crafting beautiful and functional interfaces that solve real-world problems and
                enhance user experience. My goal is to bridge the gap between design and functionality.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/30">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Experience</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Frontend Developer at Luminous Labs</li>
                    <li>• Freelance Web Developer</li>
                    <li>• 2+ Years in Web Development</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/30">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Certifications</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• React.js Certification</li>
                    <li>• CSS Grid & Flexbox Masterclass</li>
                    <li>• Frontend Web Development</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
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
        <div className="container mx-auto max-w-5xl">
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
                  period: "2020 - Present",
                  description:
                    "Focusing on practical applications of web technologies, database management, and software engineering principles.",
                },
                {
                  title: "Higher Secondary Certificate (HSC)",
                  institution: "Mohammadpur Govt. College | Commerce Group",
                  period: "2019",
                  description:
                    "Focused on business studies, accounting, economics, and commercial mathematics. Achieved GPA 4.33/5.00.",
                },
                {
                  title: "Secondary School Certificate (SSC)",
                  institution: "Mohammadpur Model School & College | Commerce Group",
                  period: "2017",
                  description:
                    "Studied commerce subjects including business entrepreneurship, accounting, and finance. Achieved GPA 4.56/5.00.",
                },
                {
                  title: "Frontend Web Development Certification",
                  institution: "Online Bootcamp",
                  period: "2022",
                  description:
                    "Intensive training in modern frontend frameworks including React, Next.js, and state management libraries.",
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

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Featured Projects
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">Showcasing my latest work and creative solutions</p>
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

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                My Services
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-gray-400 mt-4">
              Specialized solutions I offer to help bring your digital ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description:
                  "Custom, responsive website development using modern frameworks like React, Next.js and cutting-edge frontend technologies.",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description:
                  "User-centered design solutions focusing on intuitive interfaces, seamless interactions, and visually appealing experiences.",
              },
              {
                icon: "📱",
                title: "Mobile-First Development",
                description:
                  "Creating websites and applications with mobile responsiveness as a priority, ensuring optimal experience across all device sizes.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "2+", label: "Years Experience" },
              { number: "8+", label: "Satisfied Clients" },
              { number: "3+", label: "Tech Certifications" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 sm:p-6 rounded-xl border border-gray-700/30 hover:border-cyan-500/30 text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-800/50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: "✉️", text: "srabonmozumder29@gmail.com" },
                  { icon: "📍", text: "Dhaka, Bangladesh" },
                  { icon: "📞", text: "+880 1827-621312" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative inline-flex items-center justify-center">
                    Send Message
                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
