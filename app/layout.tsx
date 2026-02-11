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
  description: "Frontend Developer with 3 years of experience building responsive web applications with React, Next.js, and Tailwind CSS. I convert Figma and XD designs into clean, production-ready code. Based in Dhaka, Bangladesh.",
  keywords: "Frontend Developer, React Developer, Next.js Developer, Tailwind CSS, JavaScript, Responsive Web Development, Figma to Code, HTML CSS, Bootstrap",
  authors: [{ name: "Srabon Mozumder" }],
  openGraph: {
    title: "Srabon Mozumder | Frontend Developer",
    description: "Frontend Developer building responsive web apps with React, Next.js, and Tailwind CSS",
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
