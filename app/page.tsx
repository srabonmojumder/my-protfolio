"use client"
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ProjectCard from "./components/ProjectCard";
import Testimonial from "./components/Testimonial";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    title: "E-commerce Website",
    description: "A modern e-commerce platform built with Next.js and Stripe integration",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/project1.jpg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Social Media App",
    description: "A real-time social media application with chat and notifications",
    technologies: ["React", "Firebase", "Material UI"],
    imageUrl: "/project2.jpg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my work and skills",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/project3.jpg",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const testimonials = [
  {
    quote: "Working with [Your Name] was an absolute pleasure. Their attention to detail and understanding of modern web development practices is outstanding.",
    name: "John Doe",
    role: "CEO",
    company: "Tech Company"
  },
  {
    quote: "The quality of work delivered by [Your Name] is exceptional. They have a great understanding of both frontend development and design principles.",
    name: "Jane Smith",
    role: "Product Manager",
    company: "Design Agency"
  }
];

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={controls}
    className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
  >
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm [Your Name]
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                I'm a passionate frontend developer with a keen eye for design and user experience. 
                I love creating beautiful, responsive websites that solve real problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">💻</span>
                  </span>
                  <div>
                    <h3 className="font-semibold">Frontend Development</h3>
                    <p className="text-gray-400">React, Next.js, TypeScript</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white">🎨</span>
                  </span>
                  <div>
                    <h3 className="font-semibold">UI/UX Design</h3>
                    <p className="text-gray-400">Figma, Adobe XD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:text-right">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
