"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={controls}
    className="container mx-auto px-4"
  >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            [Your Name]
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              Menu
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
