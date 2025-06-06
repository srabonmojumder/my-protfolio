import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">[Your Name]</h3>
            <p className="text-gray-400">
              Frontend Developer & UI/UX Designer
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Social Links</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
