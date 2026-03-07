"use client"

import { motion } from "framer-motion"
import { services, serviceIncludes } from "../../constants/data"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute left-1/4 top-0 w-72 h-72 bg-[#64ffda]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold relative !mb-0 inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r !mb-0 from-[#64ffda] to-[#38bdf8]">
              What I Offer
            </span>
          </motion.h2>
          <p className="text-base sm:text-lg text-[#a0aec0] mt-4">
            Frontend services focused on quality and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-[#112240] p-6 sm:p-8 rounded-2xl border ${service.borderColor} backdrop-blur-sm hover:shadow-xl ${service.hoverShadow} transition-all group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-[#0a192f] rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                    {service.title}
                  </h3>
                  <p className="text-[#a0aec0] leading-relaxed text-sm sm:text-base">{service.description}</p>
                </div>

                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${service.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#112240] p-8 rounded-2xl border border-[#64ffda]/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-[#64ffda]">Included With Every Project</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceIncludes.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-[#64ffda] flex-shrink-0" />
                  <span className="text-[#a0aec0]">{item.text}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
