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
    highlights: [
      "Built interactive data visualization dashboards",
      "Integrated satellite and AI-processed data via REST APIs",
      "Managed a team of 2 frontend developers",
      "Implemented authentication flows and role-based access",
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
    highlights: [
      "Developed booking interfaces and project dashboards",
      "Built advanced search filtering system",
      "Optimized image galleries for performance",
      "Integrated multiple REST APIs",
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
    highlights: [
      "Built subscription management UI components",
      "Implemented content generation interfaces",
      "Handled real-time data updates",
      "Ensured cross-device form validation",
    ],
  },
  {
    slug: "text-crm",
    title: "Text CRM",
    description: "Built dashboard interfaces for a CRM platform including analytics views, a real-time chat UI, and a product catalog with filtering.",
    longDescription: "Built dashboard interfaces for a CRM platform including analytics views, a real-time chat UI, and a product catalog with filtering. Styled with Material UI and followed accessibility best practices. The platform helps businesses manage customer relationships with integrated messaging and analytics.",
    technologies: ["React", "TypeScript", "CSS", "Material UI", "REST API"],
    images: ["/images/text-crm.png", "/images/textcrm.png", "/images/crm2.png", "/images/crm3.png", "/images/crm4.png", "/images/crm5.png",],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://textcrm.chat/",
    role: "Frontend Developer",
    highlights: [
      "Built comprehensive analytics dashboard",
      "Implemented real-time chat UI",
      "Created product catalog with advanced filtering",
      "Followed accessibility best practices (WCAG)",
    ],
  },
  {
    slug: "meridian-africa",
    title: "Meridian Africa",
    description: "Converted a Figma design into a fully responsive landing page. Implemented smooth scroll animations with Framer Motion.",
    longDescription: "Converted a Figma design into a fully responsive landing page. Implemented smooth scroll animations with Framer Motion and optimized assets for fast load times across all screen sizes. The landing page showcases the brand with immersive animations and a pixel-perfect implementation of the original design.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    images: ["/images/agrovue.png", "/images/meridian.png", "/images/meridian2.png", "/images/meridian3.png",],
    githubUrl: "https://github.com/srabonmojumder",
    liveUrl: "https://meridianafrica.io/",
    role: "Frontend Developer",
    highlights: [
      "Pixel-perfect Figma to code conversion",
      "Smooth scroll animations with Framer Motion",
      "Optimized assets for fast load times",
      "Fully responsive across all screen sizes",
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
    highlights: [
      "Built responsive interfaces for multiple clients",
      "Created reusable component libraries",
      "Integrated RESTful APIs with backend teams",
      "Developed interactive dashboard systems",
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
    highlights: [
      "Pixel-perfect Figma design implementation",
      "Interactive image galleries with optimized loading",
      "Smooth transitions and hover effects",
      "Mobile-first responsive design",
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
    highlights: [
      "Built interactive communication interfaces",
      "Integrated real-time data via REST APIs",
      "Cross-device testing (desktop, tablet, mobile)",
      "Responsive and accessible design",
    ],
  },
]
