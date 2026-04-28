import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaWordpress, FaSass, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiRedux, SiReact, SiElementor } from "react-icons/si"
import {
  Award, Code, Heart, Users, Mail, MapPin, Phone,
  FileText, Search, CheckCircle, Rocket, Sparkles, Zap, Smartphone, Layers,
} from "lucide-react"
import type {
  Testimonial, Stat, Skill, ContactInfo,
  WorkExperience, Education, ProcessStep, Service,
  StateManagementSkill,
} from "../types"

// Testimonials shown in the constellation carousel. Replace placeholder
// entries (David Park onwards) with real client feedback when available.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Srabon transformed our complex Figma designs into a pixel-perfect React application that exceeded our expectations. The attention to detail was remarkable - every spacing, color, and interaction was implemented exactly as designed. The code was clean, well-documented, and our development team could immediately work with it. Delivery was on time, and communication throughout the project was excellent.",
    name: "Michael Chen",
    role: "Lead Designer",
    company: "Creative Studio",
    badge: "Pixel Perfect",
  },
  {
    quote:
      "We needed a frontend developer who could translate our design vision into production-ready code without compromising on quality or performance. Srabon delivered beyond expectations, implementing responsive layouts that work flawlessly across all devices. The use of modern React patterns and TypeScript made the codebase maintainable and scalable. Highly recommend for any design-to-code projects.",
    name: "Sarah Williams",
    role: "Product Manager",
    company: "Tech Startup",
    badge: "On Time",
  },
  {
    quote:
      "Srabon turned our outdated WordPress site into a blazing-fast Next.js application. Lighthouse scores jumped from the 50s to all 90s, and the team finds the new codebase a joy to work in. Migration was smooth and zero downtime.",
    name: "David Park",
    role: "CTO",
    company: "SaaS Startup",
    badge: "10x Faster",
  },
  {
    quote:
      "The dashboard Srabon built handles thousands of data points without breaking a sweat. Smooth animations, responsive layouts, and a clean component architecture — exactly what our team needed to scale our analytics product.",
    name: "Anna Kowalski",
    role: "Engineering Lead",
    company: "Analytics Co",
    badge: "Scales Well",
  },
  {
    quote:
      "Srabon delivered our entire admin panel in two weeks — features, polished UI, accessibility, the works. Communication was clear throughout, and every milestone shipped exactly on schedule. Easiest dev hire we've made.",
    name: "Marcus Johnson",
    role: "Founder",
    company: "Logistics App",
    badge: "2 Weeks Flat",
  },
  {
    quote:
      "The marketing site Srabon built converts beautifully. Custom animations, butter-smooth scroll, and a flawless mobile experience — our bounce rate dropped 30% within a month of launch and signups went up.",
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "Health Tech",
    badge: "+30% CR",
  },
  {
    quote:
      "I needed someone who understood both Tailwind and design systems. Srabon refactored our chaotic styles into a clean, reusable component library that our whole team uses now. Documentation was thorough.",
    name: "Daniel Lee",
    role: "Design Director",
    company: "EdTech Platform",
    badge: "Design System",
  },
  {
    quote:
      "Srabon integrated our React frontend with three separate APIs without a hitch. Robust error handling, loading states, retries — it all just works. Our users haven't reported a single client-side issue since launch.",
    name: "Rachel Bennett",
    role: "Product Manager",
    company: "Fintech App",
    badge: "Zero Bugs",
  },
]

export const stats: Stat[] = [
  {
    number: "3+",
    label: "Years Experience",
    icon: Award,
    color: "from-[#64ffda] to-[#38bdf8]",
    bgColor: "bg-[#64ffda]/10",
  },
  {
    number: "10+",
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
  { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
  { name: "SASS", icon: FaSass, level: "Advanced" },
  { name: "HTML5", icon: FaHtml5, level: "Expert" },
  { name: "CSS3", icon: FaCss3Alt, level: "Expert" },
  { name: "Responsive Design", icon: Smartphone, level: "Expert" },
  { name: "WordPress", icon: FaWordpress, level: "Advanced" },
  { name: "Elementor", icon: SiElementor, level: "Advanced" },
  { name: "Git & GitHub", icon: FaGitAlt, level: "Advanced" },
]

// State management specialization shown in the dedicated section.
// Edit each `highlights` array with concrete project names, scale, and
// outcomes from your actual work — keep entries to 3-5 short bullet points.
export const stateManagement: StateManagementSkill[] = [
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    level: "Production",
    tagline: "Predictable global state for dashboards and authenticated apps",
    highlights: [
      "Built createSlice-based auth and user state for the VoiceNimble dashboard with redux-persist token hydration and route guards",
      "Modeled booking state on Beige with createEntityAdapter — kept O(1) lookups across paginated photographer and videographer listings",
      "Wrote createAsyncThunk flows for IELTSMocker timed tests covering pending / fulfilled / rejected across every test endpoint",
      "Tuned Text CRM chat list re-renders with memoized createSelector — dropped full-list updates to single-row on new messages",
    ],
  },
  {
    name: "Context API",
    icon: SiReact,
    level: "Daily Use",
    tagline: "Lightweight provider trees for app-shell concerns",
    highlights: [
      "Split Auth, Theme, and Locale into separate providers on Beige to localize re-renders to consuming subtrees only",
      "Wired a global Modal + Toast context with useReducer and custom hooks (useModal, useToast) reused across VoiceNimble and Beige",
      "Default for app-shell state on Next.js App Router projects (Meridian Africa, AI Avatar) — no extra state-lib added to the bundle",
      "Paired Context with REST API hooks instead of caching server data inside it — kept the Context surface to pure UI concerns",
    ],
  },
  {
    name: "Zustand",
    icon: Layers,
    level: "Preferred",
    tagline: "Minimal, composable stores for feature-scoped state",
    highlights: [
      "Migrated AI Avatar playground filters from Context to Zustand with shallow selectors — measurably dropped re-renders during prompt iteration",
      "Built feature-scoped stores for VoiceNimble dashboard filters, sort, and pagination — each module exports its own typed hook",
      "Layered persist + immer middleware on the Beige multi-step booking wizard so drafts survive refresh and route changes",
      "Drove IELTSMocker timed-test state (timer, current question, answers) through one store — eliminated prop drilling across nested test components",
    ],
  },
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
    description:
      "Build production frontends for SaaS, AI, and marketplace platforms across multiple regions.",
    responsibilities: [
      "Build responsive, cross-device UIs with React.js, Next.js, and Tailwind CSS — managing state via Redux, Zustand, and Context API",
      "Translate Figma designs into pixel-perfect, production-ready code using reusable component libraries",
      "Integrate REST APIs and AI services (including Gemini) for real-time, dynamic data across dashboards and platforms",
      "Build WordPress sites and develop custom Elementor widgets and landing-page components for client projects",
      "Leverage AI tools (Claude, ChatGPT, Copilot) to accelerate development, debugging, and code quality",
      "Collaborate with designers, backend, and QA across the full delivery cycle — resolving UI bugs, API issues, and performance bottlenecks",
    ],
    color: "from-[#64ffda] to-[#38bdf8]",
  },
  {
    title: "Frontend Developer Intern",
    company: "Luminous Labs",
    period: "Mar 2022 – Sep 2022",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    description:
      "Learned modern frontend development through hands-on work on real client projects.",
    responsibilities: [
      "Contributed to web app, e-commerce, and WordPress projects across UI implementation and QA",
      "Translated mockups into responsive HTML, CSS, and JavaScript components under senior developer mentorship",
      "Picked up React, Next.js, and Tailwind CSS through hands-on production work",
    ],
    color: "from-[#38bdf8] to-[#64ffda]",
  },
]

export const educationItems: Education[] = [
  {
    title: "Diploma in Computer Technology",
    institution: "Dash Polytechnic Institute, Dhaka",
    period: "Feb 2023 – Present",
    description:
      "Focusing on practical applications of web technologies, software development, database management, and modern programming principles.",
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
  { label: "Years Experience", value: "3+", icon: Award },
  { label: "Core Technologies", value: "11", icon: Code },
  { label: "Projects Delivered", value: "10+", icon: Rocket },
]
