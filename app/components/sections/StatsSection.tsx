"use client"

import { motion } from "framer-motion"
import { stats } from "../../constants/data"

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38bdf8]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#64ffda]/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda] bg-clip-text text-transparent mb-4">
            By The Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className={`${stat.bgColor} backdrop-blur-sm border border-[#64ffda]/10 rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-300 group-hover:border-[#64ffda]/25`}>
                  <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <IconComponent className="w-24 h-24" />
                  </div>

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-[#0a192f] rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.number}
                  </motion.div>

                  <p className="text-[#a0aec0] text-lg font-medium leading-tight">{stat.label}</p>

                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100`}
                      style={{ top: `${20 + i * 20}%`, left: `${10 + i * 30}%` }}
                      animate={{ y: [-10, -20, -10], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-[#64ffda] to-[#38bdf8] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
