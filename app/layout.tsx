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
  description: "Frontend Developer with 3 years of experience building responsive web applications using React, Next.js, Tailwind CSS, and Bootstrap. I convert Figma and XD designs into clean, production-ready frontend code.",
  keywords: "Frontend Developer, React Developer, Next.js Developer, Tailwind CSS, Bootstrap, JavaScript, Responsive Web Development, Figma to Code, XD to Code, HTML, CSS",
  authors: [{ name: "Srabon Mozumder" }],
  openGraph: {
    title: "Srabon Mozumder | Frontend Developer",
    description: "Frontend Developer building responsive web applications with React, Next.js, and Tailwind CSS. Figma and XD to code.",
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
