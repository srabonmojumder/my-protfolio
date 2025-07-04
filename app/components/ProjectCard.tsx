import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 border border-gray-700/30 hover:border-cyan-500/30 transition-all h-full flex flex-col"
    >
      <div className="relative h-48 w-full overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 mt-auto">
          <motion.a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg transition-all group flex-1"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub className="mr-2 text-lg group-hover:scale-110 transition-transform" />
            GitHub
          </motion.a>
          <motion.a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all group flex-1"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <CgWebsite className="mr-2 text-lg group-hover:scale-110 transition-transform" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
