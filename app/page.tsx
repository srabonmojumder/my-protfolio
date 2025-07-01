"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJquery } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ProjectCard from "./components/ProjectCard";
import Testimonial from "./components/Testimonial";

const projects = [
  {
    title: "E-commerce Website",
    description: "A modern e-commerce platform built with Next.js and Stripe integration",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "#",
  },
  {
    title: "Social Media App",
    description: "A real-time social media application with chat and notifications",
    technologies: ["React", "Firebase", "Material UI"],
    imageUrl: "/project2.jpg",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/project3.jpg",
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "#",
  },
];

const testimonials = [
  {
    quote: "Working with Srabon Mozumder was an absolute pleasure. Their attention to detail and understanding of modern web development practices is outstanding.",
    name: "John Doe",
    role: "CEO",
    company: "Tech Company",
  },
  {
    quote: "The quality of work delivered by Srabon Mozumder is exceptional. They have a great understanding of both frontend development and design principles.",
    name: "Jane Smith",
    role: "Product Manager",
    company: "Design Agency",
  },
];

const skills = [
  { name: "HTML5", icon: FaHtml5, level: "Expert" },
  { name: "CSS3", icon: FaCss3Alt, level: "Expert" },
  { name: "Bootstrap", icon: FaBootstrap, level: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
  { name: "React.js", icon: FaReact, level: "Advanced" },
  { name: "jQuery", icon: SiJquery, level: "Advanced" },
  { name: "JavaScript", icon: FaJsSquare, level: "Expert" },
];

// Define fadeIn animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Hi, I'm Srabon Mozumder
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Frontend Developer & UI/UX Designer
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get in Touch
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg mb-6">
                I'm currently pursuing a Diploma in Computer Science and Engineering at [Your Institution]. With a strong foundation in modern web technologies, I create responsive and user-friendly web experiences. I'm passionate about creating beautiful and functional interfaces that solve real-world problems.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-400">Freelance Frontend Developer</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-400">Intern at [Company Name]</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-400">React.js Certification</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-400">CSS Grid & Flexbox Masterclass</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center"
                >
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">💻</span>
                  </span>
                  <div>
                    <h3 className="font-semibold">Frontend Development</h3>
                    <p className="text-gray-400">React, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center"
                >
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">🎨</span>
                  </span>
                  <div>
                    <h3 className="font-semibold">UI/UX Design</h3>
                    <p className="text-gray-400">Figma, Adobe XD</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="md:text-right">
              <Image
                src="/profile.png"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-4 rounded-lg text-center"
              >
                <div className="mb-2">
                  <skill.icon className="text-4xl mx-auto" />
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">Email: your@email.com</li>
                <li className="text-gray-400">Location: Your Location</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-900 text-white"
                />
                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}