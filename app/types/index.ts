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
  badge?: string
  image?: string
}

export interface Stat {
  number: string
  label: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export type AnyIcon = LucideIcon | IconType

export interface Skill {
  name: string
  icon: AnyIcon
  level: string
}

export interface StateManagementSkill {
  name: string
  icon: AnyIcon
  level: string
  tagline: string
  highlights: string[]
  /** Idiomatic snippet shown in the code window beside the highlights. */
  code: { file: string; source: string }
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
  /** Optional experience/training certificate shown as a link on the card. */
  certificateUrl?: string
}

export interface Education {
  title: string
  institution: string
  period: string
  description: string
  location?: string
  status?: string
  fieldOfStudy?: string
  highlights?: string[]
  skills?: string[]
}

export interface Certification {
  title: string
  issuer: string
  issued: string
  period: string
  supervisor?: string
  description: string
  skills: string[]
  file?: string
}

export interface LanguageProficiency {
  name: string
  level: string
  /** Filled dots out of 5, matching the proficiency scale on the CV. */
  score: number
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  tag?: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  color: string
  borderColor: string
  hoverShadow: string
  subtitle?: string
  tags?: string[]
  highlights?: string[]
  quote?: string
}
