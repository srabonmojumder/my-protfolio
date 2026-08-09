"use client"

import { motion } from "framer-motion"
import {
  Database,
  Layers,
  Cpu,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Check,
  RefreshCw,
  Lock,
  Sparkles,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  DATA — one array drives the entire section                         */
/* ------------------------------------------------------------------ */

interface StateCard {
  icon: LucideIcon
  category: string
  title: string
  description: string
  features: string[]
  /** Mini code-preview shown on the right side */
  codePreview: {
    filename: string
    badge: string
    lines: { text: string; color?: string; indent?: number }[]
    footer?: { left: string; right: string }
  }
  /** Accent used for the top-edge glow and highlights */
  accent: string
}

const stateCards: StateCard[] = [
  {
    icon: Database,
    category: "Global Enterprise State",
    title: "Redux Toolkit & RTK Query",
    description:
      "Predictable global state architecture with RTK slice normalization, RTK Query API caching, tag invalidation, and custom middleware for enterprise SaaS platforms.",
    features: [
      "Normalized Slices",
      "RTK Query Cache",
      "Custom Middleware",
      "Time-Travel Debug",
    ],
    codePreview: {
      filename: "features/auth/authSlice.ts",
      badge: "RTK Query",
      lines: [
        { text: "export const", color: "#38bdf8" },
        { text: " authSlice = ", color: "#e2e8f0" },
        { text: "createSlice", color: "#64ffda" },
        { text: "({", color: "#e2e8f0" },
        { text: "name: 'auth', initialState,", color: "#a0aec0", indent: 1 },
        { text: "reducers: {", color: "#e2e8f0", indent: 1 },
        { text: "signedOut: () => initialState,", color: "#a0aec0", indent: 2 },
        { text: "},", color: "#e2e8f0", indent: 1 },
        { text: "extraReducers: (builder) => {", color: "#e2e8f0", indent: 1 },
        { text: "builder.addCase(login.fulfilled, ...)", color: "#64ffda", indent: 2 },
        { text: "},", color: "#e2e8f0", indent: 1 },
        { text: "})", color: "#e2e8f0" },
      ],
      footer: { left: "Normalized State", right: "0ms Dispatch" },
    },
    accent: "#64ffda",
  },
  {
    icon: Layers,
    category: "High-Performance Atomic State",
    title: "Zustand Atomic Stores",
    description:
      "Ultra-fast, un-opinionated atomic state stores with selective component re-rendering, zero boilerplate, and seamless persistent storage middleware.",
    features: [
      "Selective Renders",
      "Atomic Stores",
      "Persist Middleware",
      "Immer Integration",
    ],
    codePreview: {
      filename: "stores/useBookingStore.ts",
      badge: "Zero Boilerplate",
      lines: [
        { text: "export const", color: "#38bdf8" },
        { text: " useBookingStore = ", color: "#e2e8f0" },
        { text: "create", color: "#64ffda" },
        { text: "<BookingState>()(", color: "#e2e8f0" },
        { text: "persist(", color: "#38bdf8", indent: 1 },
        { text: "immer((set) => ({", color: "#e2e8f0", indent: 2 },
        { text: "step: 0, draft: {},", color: "#a0aec0", indent: 3 },
        { text: "next: () => set(s => { s.step += 1 }),", color: "#64ffda", indent: 3 },
        { text: "})),", color: "#e2e8f0", indent: 2 },
        { text: "{ name: 'booking-draft' },", color: "#a0aec0", indent: 1 },
        { text: ")", color: "#e2e8f0" },
        { text: ")", color: "#e2e8f0" },
      ],
      footer: { left: "Selective (1) Render", right: "0.8 KB Overhead" },
    },
    accent: "#38bdf8",
  },
  {
    icon: Cpu,
    category: "Scoped Component Tree State",
    title: "Context API & Custom Hooks",
    description:
      "Lightweight feature-scoped context providers and reusable custom React hooks for UI themes, auth sessions, and localized modal states.",
    features: [
      "Scoped Providers",
      "Custom Hooks",
      "Modular Abstraction",
      "Zero Bundle Cost",
    ],
    codePreview: {
      filename: "providers/AppProviders.tsx",
      badge: "Scoped",
      lines: [
        { text: "export function", color: "#38bdf8" },
        { text: " AppProviders", color: "#64ffda" },
        { text: "({ children }) {", color: "#e2e8f0" },
        { text: "return (", color: "#e2e8f0", indent: 1 },
        { text: "<AuthProvider>", color: "#64ffda", indent: 2 },
        { text: "<ThemeProvider>", color: "#38bdf8", indent: 3 },
        { text: "<ModalProvider>", color: "#64ffda", indent: 4 },
        { text: "<ToastProvider>", color: "#38bdf8", indent: 5 },
        { text: "{children}", color: "#a0aec0", indent: 6 },
        { text: "</ToastProvider>", color: "#38bdf8", indent: 5 },
        { text: "</ModalProvider>", color: "#64ffda", indent: 4 },
        { text: "// scoped re-renders", color: "#4a5568", indent: 2 },
      ],
      footer: { left: "useAuthContext()", right: "Session Active" },
    },
    accent: "#64ffda",
  },
  {
    icon: Server,
    category: "Real-Time API & Cache Sync",
    title: "Async Data & Optimistic UI",
    description:
      "Managing asynchronous REST & AI API data flows with optimistic UI updates, automatic cache revalidation, error boundaries, and skeleton loaders.",
    features: [
      "Optimistic Updates",
      "Cache Revalidation",
      "Error Recovery",
      "Skeleton Loaders",
    ],
    codePreview: {
      filename: "hooks/useOptimisticMutation.ts",
      badge: "Synced",
      lines: [
        { text: "const mutation = ", color: "#e2e8f0" },
        { text: "useMutation", color: "#64ffda" },
        { text: "({", color: "#e2e8f0" },
        { text: "mutationFn: updateItem,", color: "#a0aec0", indent: 1 },
        { text: "onMutate:", color: "#38bdf8", indent: 1 },
        { text: " async (newData) => {", color: "#e2e8f0" },
        { text: "await queryClient.cancelQueries()", color: "#64ffda", indent: 2 },
        { text: "const prev = queryClient.getQueryData()", color: "#a0aec0", indent: 2 },
        { text: "queryClient.setQueryData(key, newData)", color: "#64ffda", indent: 2 },
        { text: "return { prev }", color: "#e2e8f0", indent: 2 },
        { text: "},", color: "#e2e8f0", indent: 1 },
        { text: "onError: (_, __, ctx) => rollback(ctx)", color: "#f87171", indent: 1 },
      ],
      footer: { left: "0ms UI Update", right: "Auto Rollback" },
    },
    accent: "#38bdf8",
  },
  {
    icon: ShieldCheck,
    category: "Security & Persistence",
    title: "Role-Based Auth & Sessions",
    description:
      "Securing frontend routes with role permission matrixes (Admin, Manager, User), encrypted session storage sync, and automated JWT token refresh handlers.",
    features: [
      "Role Matrix",
      "Auth Guards",
      "JWT Refresh",
      "Encrypted Storage",
    ],
    codePreview: {
      filename: "guards/RoleGuard.tsx",
      badge: "Encrypted",
      lines: [
        { text: "export function", color: "#38bdf8" },
        { text: " RoleGuard", color: "#64ffda" },
        { text: "({ children, roles }) {", color: "#e2e8f0" },
        { text: "const { user, token } = useAuth()", color: "#a0aec0", indent: 1 },
        { text: "const isExpired = ", color: "#e2e8f0", indent: 1 },
        { text: "isTokenExpired(token)", color: "#f87171" },
        { text: "", color: "#e2e8f0" },
        { text: "if (isExpired) return <Redirect />", color: "#f87171", indent: 1 },
        { text: "if (!roles.includes(user.role))", color: "#38bdf8", indent: 1 },
        { text: "  return <Forbidden />", color: "#f87171", indent: 1 },
        { text: "", color: "#e2e8f0" },
        { text: "return <>{children}</>", color: "#64ffda", indent: 1 },
      ],
      footer: { left: "Super Admin: Full Access", right: "Session: Valid" },
    },
    accent: "#64ffda",
  },
]

/* ------------------------------------------------------------------ */
/*  CODE PREVIEW — reusable right-side visual for each card            */
/* ------------------------------------------------------------------ */

function CodePreview({
  data,
  accent,
}: {
  data: StateCard["codePreview"]
  accent: string
}) {
  return (
    <div className="relative w-full h-full min-h-[260px] lg:min-h-[320px] rounded-2xl bg-[#060d1a] border border-white/[0.08] flex flex-col overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: accent }}
      />

      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="text-[11px] font-mono text-[#64748b] ml-2 truncate max-w-[180px]">
            {data.filename}
          </span>
        </div>
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded-md border"
          style={{
            color: accent,
            borderColor: `${accent}40`,
            backgroundColor: `${accent}15`,
          }}
        >
          {data.badge}
        </span>
      </div>

      {/* Code lines */}
      <div className="flex-1 px-4 py-3 font-mono text-[11px] sm:text-xs leading-[1.8] space-y-px overflow-hidden">
        {data.lines.map((line, i) => (
          <div key={i} style={{ paddingLeft: `${(line.indent || 0) * 14}px` }}>
            <span style={{ color: line.color || "#e2e8f0" }}>{line.text}</span>
          </div>
        ))}
      </div>

      {/* Footer stats */}
      {data.footer && (
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.06] text-[11px] font-mono">
          <span className="flex items-center gap-1.5" style={{ color: accent }}>
            <Check className="w-3.5 h-3.5" />
            {data.footer.left}
          </span>
          <span className="text-[#64748b]">{data.footer.right}</span>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  STICKY CARD — one reusable component rendered per data item        */
/* ------------------------------------------------------------------ */

function StickyCard({
  card,
  index,
  total,
}: {
  card: StateCard
  index: number
  total: number
}) {
  const Icon = card.icon

  /*  Progressive top offset — each card sticks a bit lower so previous
      cards peek from behind.  Desktop: starts at 80px, +40px per card.
      Mobile: starts at 64px, +28px per card.  */
  const topDesktop = 80 + index * 40
  const topMobile = 64 + index * 28

  return (
    <div
      className="sticky"
      style={{
        top: `${topMobile}px`,
        zIndex: 10 + index,
      }}
    >
      {/* Responsive top override for ≥640px */}
      <style>{`@media(min-width:640px){[data-sticky-idx="${index}"]{top:${topDesktop}px !important}}`}</style>
      <div data-sticky-idx={index}>
        <div
          className="relative rounded-[1.5rem] sm:rounded-[2rem] border border-white/[0.08] bg-[#0b1626]/[0.97] backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-white/[0.14] group"
          style={{
            boxShadow: `0 30px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.04)`,
          }}
        >
          {/* Top-edge accent glow */}
          <span
            className="pointer-events-none absolute inset-x-8 sm:inset-x-12 top-0 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
            }}
          />

          <div className="p-5 sm:p-8 lg:p-10">
            {/* Card header */}
            <div className="flex items-center justify-between pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/[0.08] bg-white/[0.03]"
                  style={{ color: card.accent }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span
                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.15em] block"
                    style={{ color: card.accent }}
                  >
                    {card.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#eef5ff] tracking-tight !mb-0 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                </div>
              </div>
              <span className="text-xl sm:text-3xl font-extrabold font-mono text-white/10 group-hover:text-white/25 transition-colors select-none">
                0{index + 1}
              </span>
            </div>

            {/* Two-column content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              {/* LEFT — text content */}
              <div className="lg:col-span-7 space-y-5">
                <p className="text-sm sm:text-[15px] text-[#8da2b5] leading-[1.7]">
                  {card.description}
                </p>

                {/* Feature pills */}
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-white/30 block mb-3">
                    What&apos;s Included
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {card.features.map((feat, fi) => (
                      <span
                        key={fi}
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#c1d1e0] transition-colors hover:border-white/[0.15] hover:text-white"
                      >
                        <CheckCircle2
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0"
                          style={{ color: card.accent }}
                        />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technology indicator + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.02]"
                      style={{ color: card.accent }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono text-[#64748b]">
                      {card.title.split(" ")[0]}
                    </span>
                  </div>
                  <button
                    className="group/btn flex items-center gap-1.5 text-xs font-medium transition-colors"
                    style={{ color: card.accent }}
                  >
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>

              {/* RIGHT — code visual */}
              <div className="lg:col-span-5 w-full">
                <CodePreview data={card.codePreview} accent={card.accent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  SECTION EXPORT                                                     */
/* ------------------------------------------------------------------ */

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#0A0F1A] px-4 sm:px-6 lg:px-8"
      style={{ paddingTop: "4rem", paddingBottom: "4rem", overflow: "visible" }}
    >
      {/* Ambient background glows */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-[#64ffda]/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-[#38bdf8]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex w-max mx-auto items-center gap-2 px-4 py-1.5 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda] text-xs font-mono mb-3"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Frontend State Architecture &amp; Data Management</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !mb-0"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#64ffda]">
              State Management
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#6b819a] mt-3 max-w-lg mx-auto"
          >
            Scroll to explore each architecture layer — cards stack as you go
          </motion.p>
        </div>

        {/* Sticky-scroll card stack — block flow (not flex) for reliable sticky */}
        <div className="sticky-card-stack">
          {stateCards.map((card, i) => (
            <StickyCard
              key={card.title}
              card={card}
              index={i}
              total={stateCards.length}
            />
          ))}
        </div>

        {/* Bottom spacer so last card has room to scroll into sticky */}
        <div style={{ height: "12vh" }} aria-hidden />
      </div>
    </section>
  )
}
