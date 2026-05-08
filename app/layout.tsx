import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://srabonmozumder.web.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Srabon Mozumder | Frontend Developer | React, Next.js & TypeScript",
    template: "%s | Srabon Mozumder",
  },
  description:
    "Frontend Developer with 3+ years of experience building responsive, production-ready web applications using React, Next.js, TypeScript, Vue.js, and Tailwind CSS. I turn Figma and XD designs into pixel-perfect frontends — leveraging SSR, CSR, SSG, and ISR rendering, with REST and GraphQL APIs powering the data layer.",
  keywords: [
    "Srabon Mozumder",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Vue.js Developer",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "ES6+",
    "Redux",
    "Zustand",
    "Context API",
    "REST API Integration",
    "GraphQL API Integration",
    "SSR",
    "SSG",
    "ISR",
    "CSR",
    "Server-Side Rendering",
    "Static Site Generation",
    "Responsive Web Development",
    "Figma to Code",
    "XD to Code",
    "Pixel Perfect Frontend",
    "Production-Ready Code",
    "WordPress Developer",
    "Elementor Developer",
    "jQuery",
    "SASS",
    "HTML5",
    "CSS3",
    "Bangladesh Frontend Developer",
    "Luminous Labs",
  ],
  authors: [{ name: "Srabon Mozumder", url: siteUrl }],
  creator: "Srabon Mozumder",
  publisher: "Srabon Mozumder",
  applicationName: "Srabon Mozumder Portfolio",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Srabon Mozumder — Frontend Developer",
    title: "Srabon Mozumder | Frontend Developer | React, Next.js & TypeScript",
    description:
      "Frontend Developer building responsive, production-ready web apps with React, Next.js, TypeScript, Vue.js, and Tailwind CSS — Figma & XD to pixel-perfect code, REST + GraphQL APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srabon Mozumder — Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srabon Mozumder | Frontend Developer",
    description:
      "React, Next.js, TypeScript, Vue.js & Tailwind CSS — Figma & XD to pixel-perfect code.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Srabon Mozumder",
  alternateName: "Srabon Mojumder",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: "Luminous Labs",
  },
  description:
    "Frontend Developer with 3+ years of experience building responsive, production-ready web applications using React, Next.js, TypeScript, Vue.js, and Tailwind CSS.",
  sameAs: [
    "https://github.com/srabonmojumder",
    "https://www.linkedin.com/in/srabon-mozumder-8882a928a/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "SASS",
    "HTML5",
    "CSS3",
    "Redux",
    "Zustand",
    "Context API",
    "REST API Integration",
    "GraphQL API Integration",
    "Server-Side Rendering",
    "Static Site Generation",
    "Incremental Static Regeneration",
    "Responsive Web Design",
    "WordPress",
    "Elementor",
    "jQuery",
    "Git",
    "GitHub",
  ],
  knowsLanguage: ["English", "Bengali"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Srabon Mozumder — Frontend Developer Portfolio",
  url: siteUrl,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Srabon Mozumder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
