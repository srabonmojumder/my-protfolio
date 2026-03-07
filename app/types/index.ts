import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons"

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  images: string[]
  githubUrl: string
  liveUrl: string
  role: string
  highlights: string[]
  category: string
  duration: string
  teamSize: string
  completedDate: string
  features: string[]
  challenges: { problem: string; solution: string }[]
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface Stat {
  number: string
  label: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export interface Skill {
  name: string
  icon: IconType
  level: string
}

export interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  color: string
}

export interface WorkExperience {
  title: string
  company: string
  period: string
  location: string
  type: string
  description: string
  responsibilities: string[]
  color: string
}

export interface Education {
  title: string
  institution: string
  period: string
  description: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
  borderColor: string
  hoverShadow: string
}
