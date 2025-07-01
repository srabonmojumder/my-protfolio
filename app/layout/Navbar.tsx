"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={controls}
    className="fixed w-full bg-gradient-to-b from-gray-900 to-gray-800 z-50"
  >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            Srabon Mozumder
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
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="space-y-4">
              <Link 
                href="/"
                className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#projects"
                className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#testimonials"
                className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
