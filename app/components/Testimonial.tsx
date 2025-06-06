import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export default function Testimonial({ quote, name, role, company }: TestimonialProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-lg p-8 text-center"
    >
      <p className="text-gray-400 italic mb-6">"{quote}"</p>
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      <p className="text-gray-400">{role} at {company}</p>
    </motion.div>
  );
}
