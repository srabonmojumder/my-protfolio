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
    <div className="min-h-screen bg-[#0A0F1A] text-[#e0e0e0]">
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
      {/* Professional Portfolio Flow:
          1. Hero (First Impression & CTA)
          2. About (Bio, Identity & Approach)
          3. Skills (Tech Stack Marquee)
          4. Services (State Architecture Showcase)
          5. Projects (Featured Works)
          6. Stats (Track Record)
          7. Experience (Work History)
          8. Education (Academic Background)
          9. Credentials (Certifications & Strengths)
          10. Process (Workflow)
          11. Testimonials (Social Proof)
          12. Contact (Call to Action) */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <ExperienceSection />
      <EducationSection />
      <CredentialsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
