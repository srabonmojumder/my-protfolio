import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare, FaVuejs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiJquery, SiJavascript } from "react-icons/si"
import {
  Award, Code, Heart, Users, Mail, MapPin, Phone,
  FileText, Search, CheckCircle, Rocket, Sparkles, Zap, Smartphone,
} from "lucide-react"
import type {
  Testimonial, Stat, Skill, ContactInfo,
  WorkExperience, Education, ProcessStep, Service,
} from "../types"

export const testimonials: Testimonial[] = [
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

export const stats: Stat[] = [
  {
    number: "3",
    label: "Years Experience",
    icon: Award,
    color: "from-[#64ffda] to-[#38bdf8]",
    bgColor: "bg-[#64ffda]/10",
  },
  {
    number: "50+",
    label: "Projects Delivered",
    icon: Code,
    color: "from-[#38bdf8] to-[#64ffda]",
    bgColor: "bg-[#38bdf8]/10",
  },
  {
    number: "8+",
    label: "Happy Clients",
    icon: Users,
    color: "from-[#64ffda] to-[#38bdf8]",
    bgColor: "bg-[#64ffda]/10",
  },
  {
    number: "100%",
    label: "Responsive Builds",
    icon: Heart,
    color: "from-[#38bdf8] to-[#64ffda]",
    bgColor: "bg-[#64ffda]/10",
  },
]

export const skills: Skill[] = [
  { name: "React.js", icon: FaReact, level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
  { name: "JavaScript", icon: FaJsSquare, level: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
  { name: "HTML5", icon: FaHtml5, level: "Expert" },
  { name: "CSS3", icon: FaCss3Alt, level: "Expert" },
  { name: "Responsive Design", icon: Smartphone, level: "Expert" },
  { name: "ES6+", icon: SiJavascript, level: "Advanced" },
  { name: "jQuery", icon: SiJquery, level: "Advanced" },
  { name: "Vue.js", icon: FaVuejs, level: "Intermediate" },
  { name: "Bootstrap", icon: FaBootstrap, level: "Advanced" },
]

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "srabonmozumder29@gmail.com",
    color: "from-[#64ffda] to-[#38bdf8]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    color: "from-[#38bdf8] to-[#64ffda]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1827-621312",
    color: "from-[#64ffda] to-[#38bdf8]",
  },
]

export const workExperiences: WorkExperience[] = [
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
    color: "from-[#64ffda] to-[#38bdf8]",
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
    color: "from-[#38bdf8] to-[#64ffda]",
  },
]

export const educationItems: Education[] = [
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
]

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Receive Design",
    description: "You provide Figma/XD files with design specs",
    icon: FileText,
    color: "from-[#64ffda] to-[#38bdf8]",
  },
  {
    step: "02",
    title: "Analysis",
    description: "I analyze components, breakpoints, interactions",
    icon: Search,
    color: "from-[#38bdf8] to-[#64ffda]",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Build with React/Next.js + Tailwind/Bootstrap",
    icon: Code,
    color: "from-[#64ffda] to-[#38bdf8]",
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Pixel-perfect review, responsive testing",
    icon: CheckCircle,
    color: "from-[#38bdf8] to-[#64ffda]",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Production-ready code + documentation",
    icon: Rocket,
    color: "from-[#64ffda] to-[#38bdf8]",
  },
]

export const services: Service[] = [
  {
    icon: Code,
    title: "Design to Code",
    description:
      "I take your Figma or Adobe XD designs and build them in React or Next.js. Every spacing, color, and interaction — implemented exactly as designed with reusable, maintainable components.",
    color: "from-[#64ffda] to-[#38bdf8]",
    borderColor: "border-[#64ffda]/20",
    hoverShadow: "hover:shadow-[#64ffda]/20",
  },
  {
    icon: Sparkles,
    title: "Responsive Development",
    description:
      "Mobile-first layouts that look great on every screen. I build with proper breakpoints, optimized images, and test across real devices to make sure nothing breaks.",
    color: "from-[#38bdf8] to-[#64ffda]",
    borderColor: "border-[#38bdf8]/20",
    hoverShadow: "hover:shadow-[#38bdf8]/20",
  },
  {
    icon: Heart,
    title: "API Integration & Interactivity",
    description:
      "I connect your frontend to REST APIs and bring interfaces to life with smooth animations, transitions, and interactive elements using Framer Motion and CSS.",
    color: "from-[#64ffda] to-[#38bdf8]",
    borderColor: "border-[#64ffda]/20",
    hoverShadow: "hover:shadow-[#64ffda]/20",
  },
]

export const serviceIncludes = [
  { icon: CheckCircle, text: "Pixel-perfect implementation" },
  { icon: Code, text: "Clean, documented code" },
  { icon: Sparkles, text: "Performance optimized" },
  { icon: Users, text: "Cross-browser compatible" },
]

export const skillStats = [
  { label: "Years Experience", value: "3", icon: Award },
  { label: "Core Technologies", value: "7", icon: Code },
  { label: "Projects Delivered", value: "50+", icon: Rocket },
]
