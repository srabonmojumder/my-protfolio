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

export const metadata: Metadata = {
  title: "Srabon Mozumder | Frontend Developer | React & Next.js Specialist",
  description: "Frontend Developer with 3 years of experience specializing in React, Next.js, and Tailwind CSS. Expert in transforming Figma designs into pixel-perfect, production-ready web applications. Based in Dhaka, Bangladesh.",
  keywords: "Frontend Developer, React Developer, Next.js, Tailwind CSS, JavaScript, Web Development, UI Developer, Figma to Code, Bangladesh Developer",
  authors: [{ name: "Srabon Mozumder" }],
  openGraph: {
    title: "Srabon Mozumder | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
