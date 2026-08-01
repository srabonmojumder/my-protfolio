import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaSass, FaGitAlt, FaBootstrap } from "react-icons/fa"
import {
  SiTailwindcss, SiNextdotjs, SiJavascript, SiTypescript, SiRedux, SiReact,
  SiElementor, SiJquery, SiVuedotjs, SiFramer, SiGreensock, SiJest,
  SiTestinglibrary, SiShadcnui, SiMui, SiGooglegemini, SiFigma,
} from "react-icons/si"
import {
  Award, Code, Heart, Globe, Mail, MapPin, Phone,
  FileText, Search, CheckCircle, Rocket, Sparkles, Smartphone, Layers,
  Server, Bug, Users,
} from "lucide-react"
import type {
  Testimonial, Stat, Skill, ContactInfo,
  WorkExperience, Education, ProcessStep, Service,
  StateManagementSkill, Certification, LanguageProficiency,
} from "../types"

// Testimonials shown in the constellation carousel. Replace placeholder
// entries (David Park onwards) with real client feedback when available.
export const testimonials: Testimonial[] = [
  {
    // TODO: Replace this draft quote with Moniruz Zaman's actual words.
    quote:
      "Srabon has been a standout member of our team at Luminous Labs. He consistently delivers clean, well-structured frontend work and brings a level of detail and reliability that's rare. He's dependable under deadlines, communicates clearly, and lifts the quality of every project he touches.",
    name: "Moniruz Zaman",
    role: "CEO",
    company: "Luminous Labs",
    image: "/images/shajal.png",
    badge: "Team Lead",
  },
  {
    quote:
      "Srabon is a skilled frontend developer who consistently delivers modern, user-friendly, and visually appealing designs. He focuses on creating unique UI experiences that are both functional and engaging, ensuring clean structure, smooth interactions, and a professional look in every project.",
    name: "Thompson Ikechukwu",
    role: "Founder & CEO",
    company: "AgroVue",
    image: "/images/agrovuec.png",
    badge: "Modern UI",
  },
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
]

export const stats: Stat[] = [
  {
    number: "3.5",
    label: "Years of Professional Frontend Development Experience",
    icon: Award,
    color: "from-[#64ffda] to-[#38bdf8]",
    bgColor: "bg-[#64ffda]/10",
  },
  {
    number: "25+",
    label: "Production Web Applications Delivered Across Industries",
    icon: Code,
    color: "from-[#38bdf8] to-[#64ffda]",
    bgColor: "bg-[#38bdf8]/10",
  },
  {
    number: "5",
    label: "Countries Served — US, UK, France, Colombia and Bangladesh",
    icon: Globe,
    color: "from-[#64ffda] to-[#38bdf8]",
    bgColor: "bg-[#64ffda]/10",
  },
  {
    number: "100%",
    label: "Responsive, Pixel-Perfect Delivery Across Every Device",
    icon: Heart,
    color: "from-[#38bdf8] to-[#64ffda]",
    bgColor: "bg-[#64ffda]/10",
  },
]

// Mirrors the Technical Skills block on the CV, grouped the same way:
// languages → frameworks → state → styling → animation → testing → APIs → CMS → tools.
export const skills: Skill[] = [
  { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Advanced" },
  { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
  { name: "HTML5", icon: FaHtml5, level: "Expert" },
  { name: "CSS3", icon: FaCss3Alt, level: "Expert" },
  { name: "React.js", icon: FaReact, level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
  { name: "Vue.js", icon: SiVuedotjs, level: "Intermediate" },
  { name: "jQuery", icon: SiJquery, level: "Advanced" },
  { name: "Redux", icon: SiRedux, level: "Advanced" },
  { name: "Zustand", icon: Layers, level: "Advanced" },
  { name: "Context API", icon: SiReact, level: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
  { name: "Bootstrap", icon: FaBootstrap, level: "Advanced" },
  { name: "SASS / SCSS", icon: FaSass, level: "Advanced" },
  { name: "shadcn/ui", icon: SiShadcnui, level: "Advanced" },
  { name: "Material UI", icon: SiMui, level: "Intermediate" },
  { name: "Responsive Design", icon: Smartphone, level: "Expert" },
  { name: "Framer Motion", icon: SiFramer, level: "Advanced" },
  { name: "GSAP", icon: SiGreensock, level: "Intermediate" },
  { name: "Jest", icon: SiJest, level: "Intermediate" },
  { name: "React Testing Library", icon: SiTestinglibrary, level: "Intermediate" },
  { name: "Manual Testing", icon: Bug, level: "Advanced" },
  { name: "REST API", icon: Server, level: "Advanced" },
  { name: "Gemini AI API", icon: SiGooglegemini, level: "Advanced" },
  { name: "WordPress", icon: FaWordpress, level: "Advanced" },
  { name: "Elementor", icon: SiElementor, level: "Advanced" },
  { name: "Git & GitHub", icon: FaGitAlt, level: "Advanced" },
  { name: "Figma", icon: SiFigma, level: "Advanced" },
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
    code: {
      file: "features/auth/authSlice.ts",
      source: `const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signedOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    })
  },
})

// persisted so deep links survive a refresh
export const { signedOut } = authSlice.actions`,
    },
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
    code: {
      file: "app/providers/AppProviders.tsx",
      source: `// one provider per concern — re-renders stay
// scoped to the subtree that consumes them
export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}`,
    },
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
    code: {
      file: "stores/useBookingStore.ts",
      source: `export const useBookingStore = create<BookingState>()(
  persist(
    immer((set) => ({
      step: 0,
      draft: {},
      next: () => set((s) => { s.step += 1 }),
      reset: () => set(initialState),
    })),
    { name: 'booking-draft' },
  ),
)

// shallow selector — only this slice re-renders
const step = useBookingStore((s) => s.step)`,
    },
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
    value: "Mirpur 12, Dhaka, Bangladesh",
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
    period: "Mar 2022 – Jul 2026",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Built production frontends for SaaS, AI, POS, CRM and marketplace platforms for clients across 5 countries.",
    responsibilities: [
      "Delivered 20+ responsive, cross-device UIs with React.js, TypeScript, Next.js and SCSS for clients across 5 countries — cutting design-to-code cycle time ~30% through reusable TypeScript component libraries",
      "Converted 100+ Figma screens into pixel-perfect production code; built and maintained 50+ reusable components using Redux, Zustand and Context API across multiple live products",
      "Integrated 10+ REST APIs and Gemini AI services for real-time data rendering across 4 SaaS platforms",
      "Ran manual and cross-browser testing on 8+ projects with Jest and React Testing Library, resolving 100+ pre-release UI bugs alongside QA",
      "Improved page load performance 20–40% via lazy loading, code splitting and image optimisation",
      "Built 3+ WordPress sites with custom Elementor widgets and landing-page components",
    ],
    color: "from-[#64ffda] to-[#38bdf8]",
  },
  {
    title: "Frontend Developer Trainee",
    company: "Luminous Labs",
    period: "Oct 2021 – Mar 2022",
    location: "Dhaka, Bangladesh",
    type: "Traineeship",
    description:
      "Completed a supervised frontend traineeship under Ahsanul Haider Tanha (Software Engineer) — certified April 2022.",
    responsibilities: [
      "Contributed to 4+ web app, e-commerce and WordPress projects; translated 30+ mockups into responsive HTML, CSS/SCSS and JavaScript components under senior mentorship",
      "Built subscription and content-generation UI for 2 SaaS platforms; integrated REST APIs for real-time data",
      "Gained hands-on practice in HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS, REST API integration and Git/GitHub, plus a working understanding of MERN stack concepts",
      "Followed the full delivery workflow — analysis, design, development, testing and release",
    ],
    color: "from-[#38bdf8] to-[#64ffda]",
    certificateUrl: "/cv/Certificate_Professional.pdf",
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

export const certifications: Certification[] = [
  {
    title: "Trainee Experience Certificate",
    issuer: "Luminous Labs",
    issued: "Apr 2022",
    period: "Oct 2021 – Mar 2022",
    supervisor: "Ahsanul Haider Tanha · Software Engineer",
    description:
      "Certifies successful completion of a supervised Frontend Engineer traineeship — practical experience in modern frontend development, REST API integration and version control, along with a working understanding of MERN stack concepts, while building responsive, interactive and user-friendly web applications.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
      "REST API",
      "Git / GitHub",
      "MERN Concepts",
    ],
    file: "/cv/Certificate_Professional.pdf",
  },
]

export const languageProficiency: LanguageProficiency[] = [
  { name: "English", level: "Professional", score: 4 },
  { name: "Bangla", level: "Native", score: 5 },
]

export const keyStrengths = [
  "Problem solving & debugging",
  "Component architecture & design systems",
  "SCSS architecture (mixins, partials, vars)",
  "Cross-browser & cross-device compatibility",
  "Performance optimisation",
  "API integration & dynamic rendering",
  "Manual & functional testing",
]

export const softSkills = [
  "Problem-Solving",
  "Team Collaboration",
  "Clear Communication",
  "Attention to Detail",
  "Fast Learner",
  "Thrives Under Pressure",
]

export const reference = {
  name: "Moniruz Zaman",
  role: "CEO",
  company: "Luminous Labs",
}

export const interests = [
  "Programming & exploring tech",
  "Traveling",
  "Cricket, Badminton, Football",
]

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Receive Design",
    description: "You provide Figma files with design specs",
    icon: FileText,
    color: "from-[#64ffda] to-[#38bdf8]",
    tag: "Figma · Design Specs",
  },
  {
    step: "02",
    title: "Analysis",
    description: "I analyze components, breakpoints, interactions",
    icon: Search,
    color: "from-[#38bdf8] to-[#64ffda]",
    tag: "Components · Breakpoints",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Build with React/Next.js + Tailwind/Bootstrap",
    icon: Code,
    color: "from-[#64ffda] to-[#38bdf8]",
    tag: "React · Next.js · Tailwind",
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Pixel-perfect review, manual and cross-browser testing",
    icon: CheckCircle,
    color: "from-[#38bdf8] to-[#64ffda]",
    tag: "Cross-Browser · Responsive",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Production-ready code + documentation",
    icon: Rocket,
    color: "from-[#64ffda] to-[#38bdf8]",
    tag: "Production-Ready",
  },
]

export const services: Service[] = [
  {
    icon: Code,
    title: "Design to Code",
    description:
      "I take your Figma designs and build them in React or Next.js with TypeScript. Every spacing, color, and interaction — implemented exactly as designed with reusable, maintainable components.",
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
      "I connect your frontend to REST and AI APIs (including Gemini) for real-time data, and bring interfaces to life with smooth animations and transitions using Framer Motion and GSAP.",
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
  { label: "Years Experience", value: "3.5", icon: Award },
  { label: "Core Technologies", value: String(skills.length), icon: Code },
  { label: "Projects Delivered", value: "25+", icon: Rocket },
  { label: "Countries Served", value: "5", icon: Users },
]
