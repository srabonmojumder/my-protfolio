"use client"

import { motion } from "framer-motion"
import {
  BadgeCheck, Languages, Target, Sparkles, Heart, UserCheck,
  CalendarDays, Clock3, Check, Code2, Plane, Trophy, ArrowUpRight, Quote,
} from "lucide-react"
import type { AnyIcon } from "../../types"
import {
  certifications,
  languageProficiency,
  keyStrengths,
  softSkills,
  interests,
  reference,
} from "../../constants/data"

const interestIcons: AnyIcon[] = [Code2, Plane, Trophy]

/** Glass panel with a hairline top highlight and a glow that fades in on hover. */
function Panel({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:border-[#64ffda]/30 hover:bg-white/[0.04] ${className}`}
    >
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#64ffda]/40 to-transparent" />
      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#38bdf8]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  )
}

function PanelHead({ icon: Icon, title, accent = "#64ffda" }: { icon: AnyIcon; title: string; accent?: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        className="grid h-10 w-10 place-items-center rounded-xl border"
        style={{ backgroundColor: `${accent}1f`, borderColor: `${accent}33` }}
      >
        <Icon className="h-[18px] w-[18px]" style={{ color: accent }} />
      </span>
      <h3 className="text-lg font-bold text-[#e6f1ff]  !mb-0">{title}</h3>
    </div>
  )
}

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#64ffda_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#64ffda]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#38bdf8]/10 blur-[130px]" />

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
          <h2 className="!mb-0 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#64ffda] to-[#38bdf8] bg-clip-text text-transparent">
              Certifications &amp; Strengths
            </span>
          </h2>
          <p className="mt-4 text-base text-[#a0aec0] sm:text-lg">
            Verified training, languages, and the strengths I bring to a team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Certificate — featured, gradient-ring card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {certifications.map((cert) => {
              const [supervisorName, supervisorRole] = (cert.supervisor ?? "").split(" · ")
              const meta = [
                { icon: CalendarDays, label: "Issued", value: cert.issued },
                { icon: Clock3, label: "Training period", value: cert.period },
              ]

              return (
                <div
                  key={cert.title}
                  className="group relative h-full rounded-[1.75rem] bg-gradient-to-br from-[#64ffda]/50 via-white/[0.08] to-[#38bdf8]/50 p-px transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#0b1526] p-6 sm:p-9">
                    {/* Decorative seal */}
                    <svg
                      aria-hidden
                      viewBox="0 0 200 200"
                      className="pointer-events-none absolute -right-10 -top-12 h-56 w-56 text-[#64ffda] opacity-[0.07]"
                    >
                      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="100" cy="100" r="74" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 7" />
                      <circle cx="100" cy="100" r="54" fill="none" stroke="currentColor" strokeWidth="6" />
                    </svg>
                    <span className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#38bdf8]/10 blur-3xl" />

                    <div className="relative z-10 flex flex-1 flex-col">
                      {/* Top row */}
                      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#64ffda] to-[#38bdf8] shadow-lg shadow-[#64ffda]/20">
                            <BadgeCheck className="h-7 w-7 text-[#0A0F1A]" />
                          </span>
                          <div>
                            <h3 className="text-xl font-bold leading-tight text-[#e6f1ff] sm:text-2xl !mb-0">
                              {cert.title}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-[#38bdf8]">{cert.issuer}</p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-2 rounded-full border border-[#64ffda]/25 bg-[#64ffda]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#64ffda]">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#64ffda] opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#64ffda]" />
                          </span>
                          Verified
                        </span>
                      </div>

                      {/* Meta tiles */}
                      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {meta.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3"
                          >
                            <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#64ffda]/70">
                              <item.icon className="h-3.5 w-3.5" />
                              {item.label}
                            </span>
                            <p className="mt-1.5 text-sm font-semibold text-[#e6f1ff]">{item.value}</p>
                          </div>
                        ))}

                        {cert.supervisor && (
                          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
                            <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#64ffda]/70">
                              <UserCheck className="h-3.5 w-3.5" />
                              Supervised by
                            </span>
                            <p className="mt-1.5 text-sm font-semibold text-[#e6f1ff]">{supervisorName}</p>
                            {supervisorRole && (
                              <p className="text-[11px] text-[#8892b0]">{supervisorRole}</p>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="text-sm leading-relaxed text-[#a0aec0] sm:text-[15px]">
                        {cert.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#9fb3c8] transition-colors hover:border-[#64ffda]/35 hover:text-[#e6f1ff]"
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
                          className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#64ffda] to-[#38bdf8] px-6 py-3.5 text-sm font-bold text-[#0A0F1A]! transition-transform duration-300 hover:scale-[1.03] sm:mt-8"
                        >
                          View Certificate
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* Languages + Interests */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            <Panel className="p-6 sm:p-7">
              <div className="relative z-10">
                <PanelHead icon={Languages} title="Languages" accent="#38bdf8" />
                <ul className="space-y-5">
                  {languageProficiency.map((lang, i) => (
                    <li key={lang.name}>
                      <div className="mb-2 flex items-baseline justify-between gap-3">
                        <span className="text-sm font-semibold text-[#e6f1ff]">{lang.name}</span>
                        <span className="text-xs font-medium text-[#64ffda]">{lang.level}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(lang.score / 5) * 100}%` }}
                          transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-[#64ffda] to-[#38bdf8]"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>

            <Panel className="flex-1 p-6 sm:p-7">
              <div className="relative z-10">
                <PanelHead icon={Heart} title="Interests" />
                <ul className="space-y-3">
                  {interests.map((item, i) => {
                    const Icon = interestIcons[i % interestIcons.length]
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-[#a0aec0] transition-colors hover:border-[#64ffda]/25 hover:text-[#e6f1ff]"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#64ffda]/20 to-[#38bdf8]/20">
                          <Icon className="h-4 w-4 text-[#64ffda]" />
                        </span>
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Panel>
          </motion.div>

          {/* Key strengths */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Panel className="h-full p-6 sm:p-8">
              <div className="relative z-10">
                <PanelHead icon={Target} title="Key Strengths" accent="#38bdf8" />
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {keyStrengths.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 text-sm text-[#a0aec0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#64ffda]/25 hover:text-[#e6f1ff]"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#64ffda]/25 to-[#38bdf8]/25">
                        <Check className="h-3.5 w-3.5 text-[#64ffda]" />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            <Panel className="p-6 sm:p-7">
              <div className="relative z-10">
                <PanelHead icon={Sparkles} title="Soft Skills" />
                <div className="flex flex-wrap gap-2.5">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-[#9fb3c8] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#38bdf8]/35 hover:bg-[#38bdf8]/[0.08] hover:text-[#e6f1ff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Panel>

            {/* Reference */}
            <Panel className="flex-1 p-6 sm:p-7">
              <div className="relative z-10 flex h-full flex-col">
                <PanelHead icon={Quote} title="Reference" accent="#38bdf8" />
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#64ffda]/25 to-[#38bdf8]/25 text-lg font-bold text-[#64ffda]">
                    {reference.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-base font-bold text-[#e6f1ff]">{reference.name}</p>
                    <p className="text-sm text-[#8892b0]">
                      {reference.role} · <span className="text-[#38bdf8]">{reference.company}</span>
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-[#8892b0]">
                  Full contact details available on request.
                </p>
              </div>
            </Panel>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
