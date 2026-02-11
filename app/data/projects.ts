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

export const projects: Project[] = [
  {
    slug: "agrovue-overwatch",
    title: "Agrovue Overwatch",
    description: "Led the frontend for an agricultural monitoring platform. Built data visualization dashboards, authentication flows, and analytics interfaces.",
    longDescription: "Led the frontend for an agricultural monitoring platform. Built data visualization dashboards, authentication flows, and analytics interfaces. Integrated REST APIs for satellite and AI-processed data. Managed a team of 2 frontend developers. The platform provides real-time monitoring of agricultural assets with satellite imagery overlays and AI-driven insights for crop health analysis.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    images: ["/images/overwatch.png", "/images/overwatch2.png", "/images/overwatch3.png", "/images/overwatch4.png", "/images/overwatch5.png", "/images/over6.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://overwatch.agrovue.io/Auth/Login",
    role: "Lead Frontend Developer",
    category: "SaaS Platform",
    duration: "4 months",
    teamSize: "3 developers",
    completedDate: "2026",
    highlights: [
      "Built interactive data visualization dashboards",
      "Integrated satellite and AI-processed data via REST APIs",
      "Managed a team of 2 frontend developers",
      "Implemented authentication flows and role-based access",
    ],
    features: [
      "Real-time satellite imagery overlays on interactive maps",
      "AI-driven crop health analysis dashboards",
      "Role-based authentication with JWT tokens",
      "Data export and report generation",
      "Responsive dashboard with chart.js visualizations",
      "Multi-language support for global users",
    ],
    challenges: [
      {
        problem: "Rendering large satellite image datasets without lag",
        solution: "Implemented lazy loading with image tiling and viewport-based rendering to load only visible map sections",
      },
      {
        problem: "Complex role-based access control across multiple dashboard views",
        solution: "Built a centralized permission system with route guards and conditional component rendering based on user roles",
      },
    ],
  },
  {
    slug: "beige",
    title: "Beige",
    description: "Built the frontend for a creative marketplace connecting clients with videographers and photographers. Developed booking interfaces and optimized image galleries.",
    longDescription: "Built the frontend for a creative marketplace connecting clients with videographers and photographers. Developed booking interfaces, project dashboards, search filtering, and optimized image galleries with API integration. The platform enables seamless collaboration between creative professionals and clients with real-time project tracking.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    images: ["/images/beige2.png", "/images/beige.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://beige.app/",
    role: "Frontend Developer",
    category: "Marketplace",
    duration: "5 months",
    teamSize: "5 developers",
    completedDate: "2025",
    highlights: [
      "Developed booking interfaces and project dashboards",
      "Built advanced search filtering system",
      "Optimized image galleries for performance",
      "Integrated multiple REST APIs",
    ],
    features: [
      "Advanced search with filters for location, price, and style",
      "Booking system with calendar availability and scheduling",
      "Portfolio galleries with lightbox and lazy loading",
      "Client-creative messaging and project tracking dashboard",
      "Review and rating system for creative professionals",
      "Responsive design optimized for mobile browsing",
    ],
    challenges: [
      {
        problem: "Image gallery performance with hundreds of high-res photos",
        solution: "Used Next.js Image component with blur placeholders, progressive loading, and intersection observer for lazy rendering",
      },
      {
        problem: "Complex search filtering with multiple criteria combinations",
        solution: "Built a dynamic filter state management system with URL query sync for shareable search results",
      },
    ],
  },
  {
    slug: "ai-avatar",
    title: "AI Avatar",
    description: "Developed the frontend for an AI-powered workflow platform. Built UI components for subscription management, content generation, and product analysis.",
    longDescription: "Developed the frontend for an AI-powered workflow platform. Built UI components for subscription management, content generation, and product analysis. Handled real-time data updates and form validation across all devices. The platform leverages AI to generate personalized avatars and content for users.",
    technologies: ["React", "Next.js", "Tailwind CSS", "API Integration"],
    images: ["/images/ai-avatar.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://avatarplayground.luminousdemo.com",
    role: "Frontend Developer",
    category: "AI Platform",
    duration: "3 months",
    teamSize: "4 developers",
    completedDate: "2025",
    highlights: [
      "Built subscription management UI components",
      "Implemented content generation interfaces",
      "Handled real-time data updates",
      "Ensured cross-device form validation",
    ],
    features: [
      "AI avatar generation with customizable parameters",
      "Subscription management with plan comparison UI",
      "Real-time content generation preview",
      "Product analysis dashboard with visual reports",
      "Multi-step form wizards with validation",
      "Download and share generated content",
    ],
    challenges: [
      {
        problem: "Handling real-time AI generation status updates on the UI",
        solution: "Implemented polling with optimistic UI updates and loading skeleton states to keep the interface responsive during generation",
      },
      {
        problem: "Complex subscription flow with multiple plan tiers",
        solution: "Built a flexible plan comparison component with dynamic feature toggling and seamless upgrade/downgrade transitions",
      },
    ],
  },
  {
    slug: "text-crm",
    title: "Text CRM",
    description: "Built dashboard interfaces for a CRM platform including analytics views, a real-time chat UI, and a product catalog with filtering.",
    longDescription: "Built dashboard interfaces for a CRM platform including analytics views, a real-time chat UI, and a product catalog with filtering. Styled with Material UI and followed accessibility best practices. The platform helps businesses manage customer relationships with integrated messaging and analytics.",
    technologies: ["React", "TypeScript", "CSS", "Material UI", "REST API"],
    images: ["/images/text-crm.png", "/images/textcrm.png", "/images/crm2.png", "/images/crm3.png", "/images/crm4.png", "/images/crm5.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://textcrm.chat/",
    role: "Frontend Developer",
    category: "CRM Platform",
    duration: "3 months",
    teamSize: "6 developers",
    completedDate: "2025",
    highlights: [
      "Built comprehensive analytics dashboard",
      "Implemented real-time chat UI",
      "Created product catalog with advanced filtering",
      "Followed accessibility best practices (WCAG)",
    ],
    features: [
      "Real-time chat interface with message threading",
      "Analytics dashboard with interactive charts and graphs",
      "Product catalog with category filtering and search",
      "Contact management with detailed customer profiles",
      "WCAG-compliant accessible UI components",
      "Export functionality for reports and data",
    ],
    challenges: [
      {
        problem: "Building an accessible real-time chat UI that works with screen readers",
        solution: "Implemented ARIA live regions for new messages, keyboard navigation for chat threads, and proper focus management",
      },
      {
        problem: "Rendering analytics dashboards with large datasets without performance drops",
        solution: "Used virtualized lists for data tables and memoized chart components to prevent unnecessary re-renders",
      },
    ],
  },
  {
    slug: "meridian-africa",
    title: "Meridian Africa",
    description: "Converted a Figma design into a fully responsive landing page. Implemented smooth scroll animations with Framer Motion.",
    longDescription: "Converted a Figma design into a fully responsive landing page. Implemented smooth scroll animations with Framer Motion and optimized assets for fast load times across all screen sizes. The landing page showcases the brand with immersive animations and a pixel-perfect implementation of the original design.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    images: ["/images/agrovue.png", "/images/meridian.png", "/images/meridian2.png", "/images/meridian3.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://meridianafrica.io/",
    role: "Frontend Developer",
    category: "Landing Page",
    duration: "2 weeks",
    teamSize: "Solo",
    completedDate: "2025",
    highlights: [
      "Pixel-perfect Figma to code conversion",
      "Smooth scroll animations with Framer Motion",
      "Optimized assets for fast load times",
      "Fully responsive across all screen sizes",
    ],
    features: [
      "Scroll-triggered animations using Framer Motion",
      "Parallax scrolling effects on hero section",
      "Optimized image loading with WebP and lazy loading",
      "Mobile-first responsive layout with fluid typography",
      "Interactive navigation with smooth scroll anchoring",
      "SEO-optimized meta tags and semantic HTML",
    ],
    challenges: [
      {
        problem: "Achieving pixel-perfect accuracy from Figma to code across all breakpoints",
        solution: "Used Figma's inspect mode for exact spacing and sizing values, built a custom spacing scale matching the design tokens",
      },
      {
        problem: "Smooth scroll animations causing layout jank on mobile devices",
        solution: "Optimized animations with will-change property, reduced animation complexity on mobile, and used GPU-accelerated transforms only",
      },
    ],
  },
  {
    slug: "keos-llc",
    title: "Keos LLC",
    description: "Worked on multiple client projects building responsive interfaces and interactive dashboards. Created reusable component libraries.",
    longDescription: "Worked on multiple client projects building responsive interfaces and interactive dashboards. Created reusable component libraries and integrated RESTful APIs in collaboration with backend teams. Delivered consistent, high-quality frontend solutions across various business domains.",
    technologies: ["React", "JavaScript", "Bootstrap", "API Integration"],
    images: ["/images/keos-llc.png", "/images/keos2.png", "/images/keos3.png", "/images/keos4.png", "/images/keos5.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://keos.co/",
    role: "Frontend Developer",
    category: "Web Application",
    duration: "Ongoing",
    teamSize: "14 developers",
    completedDate: "2023 - 2024",
    highlights: [
      "Built responsive interfaces for multiple clients",
      "Created reusable component libraries",
      "Integrated RESTful APIs with backend teams",
      "Developed interactive dashboard systems",
    ],
    features: [
      "Reusable component library with 30+ UI components",
      "Interactive dashboards with data tables and charts",
      "Form systems with complex validation rules",
      "Responsive grid layouts with Bootstrap customization",
      "API integration layer with error handling and loading states",
      "Cross-browser compatible interfaces (Chrome, Firefox, Safari, Edge)",
    ],
    challenges: [
      {
        problem: "Maintaining consistency across multiple client projects with different requirements",
        solution: "Built a shared component library with configurable themes and props, enabling rapid development while keeping a consistent UI",
      },
      {
        problem: "Coordinating API integration across frontend and backend teams with changing endpoints",
        solution: "Created an API abstraction layer with centralized endpoint configs, making endpoint changes a single-file update",
      },
    ],
  },
  {
    slug: "carpentier-agency",
    title: "Carpentier Agency",
    description: "Converted a Figma design into a responsive landing page for a photography agency. Built interactive image galleries.",
    longDescription: "Converted a Figma design into a responsive landing page for a photography agency. Built interactive image galleries with optimized loading, smooth transitions, and hover effects. The site showcases the agency's portfolio with stunning visual presentations.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    images: ["/images/carpentier-agency.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://www.carpentieragency.com/",
    role: "Frontend Developer",
    category: "Portfolio Website",
    duration: "2 weeks",
    teamSize: "Solo",
    completedDate: "2024",
    highlights: [
      "Pixel-perfect Figma design implementation",
      "Interactive image galleries with optimized loading",
      "Smooth transitions and hover effects",
      "Mobile-first responsive design",
    ],
    features: [
      "Masonry-style image gallery with lightbox viewer",
      "Smooth CSS transitions and hover effects on portfolio items",
      "Contact form with client-side validation",
      "Fast page loads with image optimization and lazy loading",
      "Mobile-first responsive design for all screen sizes",
      "Clean typography and whitespace-focused layout",
    ],
    challenges: [
      {
        problem: "Maintaining image quality while keeping fast load times for a photography portfolio",
        solution: "Used Next.js Image optimization with responsive srcsets, serving appropriately sized images per device and connection speed",
      },
      {
        problem: "Creating smooth gallery transitions without CSS animation jank",
        solution: "Used CSS transforms with hardware acceleration and optimized transition timing for buttery-smooth gallery interactions",
      },
    ],
  },
  {
    slug: "alertcomm",
    title: "AlertComm",
    description: "Developed a responsive frontend for a communication platform. Built interactive pages and integrated REST APIs for real-time data.",
    longDescription: "Developed a responsive frontend for a communication platform. Built interactive pages, integrated REST APIs for real-time data, and tested across desktop, tablet, and mobile devices. The platform enables efficient team communication with real-time notifications and messaging.",
    technologies: ["React", "Next.js", "Tailwind CSS", "REST API"],
    images: ["/images/alertcomm.png"],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://alertcomm1.com/",
    role: "Frontend Developer",
    category: "Communication Platform",
    duration: "6 weeks",
    teamSize: "3 developers",
    completedDate: "2025",
    highlights: [
      "Built interactive communication interfaces",
      "Integrated real-time data via REST APIs",
      "Cross-device testing (desktop, tablet, mobile)",
      "Responsive and accessible design",
    ],
    features: [
      "Real-time notification system with priority levels",
      "Team communication channels with message organization",
      "Alert management dashboard with filtering and search",
      "User profile and settings management",
      "Responsive layout tested across 10+ device sizes",
      "Dark-themed UI optimized for readability",
    ],
    challenges: [
      {
        problem: "Displaying real-time alerts without disrupting the user's current workflow",
        solution: "Built a non-intrusive notification system with priority-based positioning and auto-dismiss timers for low-priority alerts",
      },
      {
        problem: "Ensuring consistent UI across desktop, tablet, and mobile with complex layouts",
        solution: "Used a mobile-first approach with Tailwind's responsive utilities and thorough testing on real devices via BrowserStack",
      },
    ],
  },
]
