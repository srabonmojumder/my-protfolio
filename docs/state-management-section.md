# State Management Section — Data Document

This document describes the content rendered by `StateManagementSection.tsx`
and how to edit it. It covers the data shape, the current entries, and
guidance on rewriting the placeholders with real project work.

---

## 1. Where the data lives

| File | Purpose |
| ---- | ------- |
| `app/types/index.ts` | `StateManagementSkill` interface |
| `app/constants/data.ts` | `stateManagement` array — the actual content |
| `app/components/sections/StateManagementSection.tsx` | Renders the cards |
| `app/components/sections/index.ts` | Re-exports the section |
| `app/page.tsx` | Mounts the section between Skills and Experience |
| `app/layout/Navbar.tsx` | "State" link → `#state-management` |

---

## 2. Data shape

```ts
export type AnyIcon = LucideIcon | IconType

export interface StateManagementSkill {
  name: string         // Tool name, shown as card title
  icon: AnyIcon        // Icon component (Lucide or react-icons)
  level: string        // Short proficiency label (1-2 words, uppercased in UI)
  tagline: string      // One-sentence positioning, ~6-12 words
  highlights: string[] // 3-5 bullet points with concrete implementation details
}
```

### Field rules

- **`name`** — Always the canonical tool name (e.g. `Redux Toolkit`, not `Redux`).
- **`icon`** — Import from `react-icons/si` for brand marks (Redux), or
  `lucide-react` for generic concepts (Layers, Boxes). Don't mix two icons
  for the same card.
- **`level`** — Honest signal: `Production`, `Daily Use`, `Preferred`,
  `Working Knowledge`. Avoid `Expert` unless you've shipped 3+ production
  systems with it and can debug internals.
- **`tagline`** — The *why* of the tool, not the *what*. Bad: "A state
  management library." Good: "Predictable global state for data-heavy
  applications."
- **`highlights`** — Each bullet should name a specific pattern, library, or
  outcome. Read the "Editing the highlights" section below before rewriting.

---

## 3. Current entries

The current data in `app/constants/data.ts` is **a placeholder template**
written from typical mid-level patterns. You must edit the highlights to
reflect real work before treating this as portfolio truth.

### 3.1 Redux Toolkit

```ts
{
  name: "Redux Toolkit",
  icon: SiRedux,
  level: "Production",
  tagline: "Predictable global state for data-heavy applications",
  highlights: [
    "Modeled feature-based slices with createSlice and entity adapters for normalized data",
    "Wrote createAsyncThunk flows handling pending / fulfilled / rejected states across REST endpoints",
    "Optimized re-renders with memoized selectors (createSelector) and shallow equality subscriptions",
    "Persisted auth tokens and UI preferences via redux-persist with versioned migrations",
  ],
}
```

**Card UI:** Cyan/blue gradient icon tile with the official Redux logo
(`SiRedux` from `react-icons/si`). Level pill reads `PRODUCTION`.

### 3.2 Context API

```ts
{
  name: "Context API",
  icon: SiReact,
  level: "Daily Use",
  tagline: "Lightweight cross-cutting concerns without external dependencies",
  highlights: [
    "Built Theme, Auth, and Locale providers split across separate contexts to localize re-renders",
    "Combined useReducer with custom hooks (useAuth, useTheme) for typed, ergonomic consumer APIs",
    "Default for app-shell state in Next.js App Router projects where bundle size matters",
    "Kept server-state out of context — paired it with TanStack Query / SWR for cache concerns",
  ],
}
```

**Card UI:** React logo (`SiReact`). Level pill reads `DAILY USE`.

### 3.3 Zustand

```ts
{
  name: "Zustand",
  icon: Layers,
  level: "Preferred",
  tagline: "Minimal, composable stores for feature-scoped state",
  highlights: [
    "Adopted for UI-heavy modules where Redux's boilerplate would slow iteration",
    "Used selector subscriptions with shallow equality to drop unnecessary re-renders",
    "Layered persist + immer middleware for local drafts (forms, multi-step wizards, filters)",
    "Co-located stores with feature folders — each module owns its state surface and exports its hooks",
  ],
}
```

**Card UI:** Lucide `Layers` icon (Zustand has no official icon in
`react-icons` at this size). Level pill reads `PREFERRED`.

---

## 4. Editing the highlights

A mid-level highlight should answer at least two of:
*what pattern, on what scope, with what outcome.*

### Strong examples

> Replaced Context-based cart state with a Zustand store on the Voice Nimble
> Shopify embedded app — dropped re-renders from ~40/sec to <5/sec on the
> product list view.

> Designed Redux Toolkit slices for a CRM admin panel managing 12 entity
> types; entity adapters kept lookups O(1) on lists of 4k+ rows.

> Built a Theme + Auth Context pair with useReducer + custom hooks
> (`useAuth`, `useTheme`) used across 30+ components in the
> ieltsmocker.com dashboard.

### Weak examples (avoid)

> Used Redux for state management. *(no scope, no outcome)*

> Expert in all React state libraries. *(no specifics, unverifiable)*

> Implemented best practices. *(meaningless)*

### Rewrite checklist

For each bullet in `highlights`:

1. Name the **project / surface** (e.g. "Voice Nimble Shopify embed", "ieltsmocker dashboard").
2. Name the **pattern or library** (e.g. `entity adapters`, `redux-persist`, `useReducer + custom hooks`).
3. Name the **outcome** (e.g. "dropped re-renders by 8x", "lookups stayed O(1) on 4k rows", "no external dep added").
4. Trim to one line — if it doesn't fit on a 24" monitor at 14px, it's too long.
5. Cut the bullet entirely if you can't answer "what would I be asked in an interview about this?"

---

## 5. Adding or removing tools

To add a fourth tool (e.g. Jotai, Recoil, MobX, TanStack Query) — append a
new object to the `stateManagement` array. The grid in
`StateManagementSection.tsx` is `grid-cols-1 md:grid-cols-3`; with 4 entries
the layout will wrap to 2 rows on desktop. Either:

- accept the wrap and the empty 5th cell, or
- change the grid to `md:grid-cols-2 lg:grid-cols-4` for an even row, or
- restructure into a 2x2 grid by changing to `md:grid-cols-2`.

To remove a tool — delete its object from the array. Nothing else needs to change.

---

## 6. Level vocabulary

Use these labels consistently to keep the section honest:

| Label | Meaning |
| ----- | ------- |
| `Working Knowledge` | Used in 1-2 small projects, can read code, would need docs to ship |
| `Daily Use` | Reach for it without thinking; comfortable in any new project |
| `Production` | Shipped to users in 2+ real systems; can debug edge cases |
| `Preferred` | Production + actively choose it over alternatives for this domain |
| `Expert` | Production + can speak to internals / contribute to / teach others |

If two cards both say `Expert`, the signal collapses — vary the labels.

---

## 7. Visual / layout reference

| Element | Source |
| ------- | ------ |
| Section background | `bg-gradient` blurs in cyan/blue, matches `SkillsSection` |
| Card surface | `from-[#112240] to-[#0a192f]`, `border-[#64ffda]/10` |
| Icon tile | 48-56px, gradient border, dark inner |
| Level pill | `text-[#64ffda]/80`, uppercase, mono, tracked |
| Highlight bullet | `CheckCircle2` from `lucide-react`, cyan |
| Footer line | Architectural reasoning, dimmed `text-[#a0aec0]/60` |

The section ID is `state-management` (used by the Navbar anchor).

---

## 8. Where this shows up in the page flow

```
HeroSection
AboutSection
ProcessSection
SkillsSection            ← icon grid (tools you know)
StateManagementSection   ← THIS section (how you architect with state)
ExperienceSection
EducationSection
ProjectsSection
ServicesSection
TestimonialsSection
StatsSection
ContactSection
```

The section is positioned to read as a natural follow-up to Skills:
"Here are my tools" → "Here's how I think with them."
