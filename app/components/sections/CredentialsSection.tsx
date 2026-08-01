"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Languages, Target, Sparkles, Heart, ExternalLink, UserCheck } from "lucide-react"
import {
  certifications,
  languageProficiency,
  keyStrengths,
  softSkills,
  interests,
} from "../../constants/data"

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#64ffda]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#64ffda]/20 bg-[#64ffda]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#64ffda]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#64ffda]" />
            Credentials
          </span>
          <h2 className="!mb-0 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">
              Certifications &amp; Strengths
            </span>
          </h2>
          <p className="mt-4 text-base text-[#a0aec0] sm:text-lg">
            Verified training, languages, and the strengths I bring to a team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Certificate */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="group relative h-full overflow-hidden rounded-2xl border border-[#64ffda]/10 bg-[#112240] p-6 transition-all hover:border-[#64ffda]/30 hover:shadow-lg hover:shadow-[#64ffda]/5 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#64ffda]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#64ffda]/25 bg-[#64ffda]/10">
                        <BadgeCheck className="h-5 w-5 text-[#64ffda]" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[#e0e0e0] sm:text-xl">{cert.title}</h3>
                        <p className="text-sm text-[#38bdf8]">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-[#64ffda]/20 bg-[#64ffda]/15 px-3 py-1 text-xs font-medium text-[#64ffda]">
                      Issued {cert.issued}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#a0aec0]">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                      Training period: {cert.period}
                    </span>
                    {cert.supervisor && (
                      <span className="inline-flex items-center gap-2">
                        <UserCheck className="h-3.5 w-3.5 text-[#38bdf8]" />
                        {cert.supervisor}
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-[#a0aec0] sm:text-base">{cert.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[#64ffda]/15 bg-[#64ffda]/[0.06] px-3 py-1.5 text-xs font-medium text-[#9fb3c8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#64ffda]/40 bg-[#64ffda]/10 px-5 py-2.5 text-sm font-semibold text-[#64ffda] transition-all hover:border-[#64ffda]/60 hover:bg-[#64ffda]/20"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </motion.div>

          {/* Languages + Interests */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            <div className="rounded-2xl border border-[#64ffda]/10 bg-[#112240] p-6 transition-colors hover:border-[#64ffda]/30">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#38bdf8]/25 bg-[#38bdf8]/10">
                  <Languages className="h-5 w-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-lg font-bold text-[#e0e0e0]">Languages</h3>
              </div>
              <ul className="space-y-4">
                {languageProficiency.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#e0e0e0]">{lang.name}</p>
                      <p className="text-xs text-[#a0aec0]">{lang.level}</p>
                    </div>
                    <div className="flex gap-1.5" aria-label={`${lang.level} proficiency`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-2.5 w-2.5 rounded-full ${
                            i < lang.score
                              ? "bg-gradient-to-r from-[#64ffda] to-[#38bdf8]"
                              : "bg-[#64ffda]/15"
                          }`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 rounded-2xl border border-[#64ffda]/10 bg-[#112240] p-6 transition-colors hover:border-[#64ffda]/30">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#64ffda]/25 bg-[#64ffda]/10">
                  <Heart className="h-5 w-5 text-[#64ffda]" />
                </span>
                <h3 className="text-lg font-bold text-[#e0e0e0]">Interests</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#a0aec0]">
                {interests.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64ffda]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Key strengths */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#64ffda]/10 bg-[#112240] p-6 transition-colors hover:border-[#64ffda]/30 sm:p-8 lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#38bdf8]/25 bg-[#38bdf8]/10">
                <Target className="h-5 w-5 text-[#38bdf8]" />
              </span>
              <h3 className="text-lg font-bold text-[#e0e0e0]">Key Strengths</h3>
            </div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-[#a0aec0] sm:grid-cols-2 sm:text-base">
              {keyStrengths.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#64ffda]">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#64ffda]/10 bg-[#112240] p-6 transition-colors hover:border-[#64ffda]/30 lg:col-span-5"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#64ffda]/25 bg-[#64ffda]/10">
                <Sparkles className="h-5 w-5 text-[#64ffda]" />
              </span>
              <h3 className="text-lg font-bold text-[#e0e0e0]">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[#38bdf8]/15 bg-[#38bdf8]/[0.06] px-3 py-1.5 text-xs font-medium text-[#9fb3c8] sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
