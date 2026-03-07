"use client"

import { Toaster } from "react-hot-toast"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import {
  HeroSection,
  AboutSection,
  ProcessSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  StatsSection,
  ContactSection,
} from "./components/sections"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e0e0e0] overflow-x-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#112240",
            color: "#e0e0e0",
            border: "1px solid rgba(100, 255, 218, 0.2)",
          },
          success: {
            iconTheme: { primary: "#64ffda", secondary: "#112240" },
          },
          error: {
            iconTheme: { primary: "#f87171", secondary: "#112240" },
          },
        }}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
