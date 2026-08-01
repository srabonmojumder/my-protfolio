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
  CredentialsSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  StatsSection,
  ContactSection,
} from "./components/sections"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-[#e0e0e0] overflow-x-clip">
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
      {/* Order: intro → capability → proof of work → career history →
          credentials → what I offer → social proof → contact */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <StatsSection />
      <ExperienceSection />
      <EducationSection />
      <CredentialsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
