import type { Metadata } from 'next'
import Link from 'next/link'
import { TrackEvent } from '@/components/analytics/TrackEvent'
import { GeoFaq, GCSE_BOARD_FAQS } from '@/components/seo/GeoFaq'

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: '/api/og?title=GCSE+and+IGCSE+English+revision,+AI+marked&subtitle=Pick+your+exam+board+to+start.',
        width: 1200,
        height: 630,
        alt: 'The English Hub — GCSE and IGCSE English revision, AI marked',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      '/api/og?title=GCSE+and+IGCSE+English+revision,+AI+marked&subtitle=Pick+your+exam+board+to+start.',
    ],
  },
}

/* ───────────────────── Main Page ───────────────────── */
//
// 02 May 2026 — homepage is now a single-purpose board picker. Marketing
// sections (TryAFeature / AnthologyPricing / FinalCTA) were removed at
// the founder's instruction so the homepage does one job: pick exam
// board, land in your hub. Pricing + product copy live on dedicated
// pages and are surfaced inside Your Hub (/revision) instead.
//
export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Funnel: home_viewed (consent-gated in src/lib/posthog.ts) */}
      <TrackEvent event="home_viewed" />

      {/* 1. Foundation + bilingual learning rail — sits at the very top
           because these two tracks (KS3 and EAL) were previously buried
           and most parents/learners need to see them before the GCSE
           board grid. KS3 is the year-7–9 curriculum that comes BEFORE
           exam boards; EAL is the dedicated Arabic-speaker English track
           that runs ALONGSIDE every board. They aren't exam boards, so
           a separate visually distinct section keeps the funnel clean. */}
      <FeatureRail />

      {/* 2. GCSE board picker — opens the page; clear level split. */}
      <BoardPickerSection
        level="gcse"
        boards={GCSE_BOARDS}
        sectionId="gcse-boards"
        kicker="Pick your exam board to start"
        heading="GCSE and IGCSE English revision, AI marked against the AO mark scheme."
        subheading="Year 10–11, ages 14–16. Tap your board and you’ll land on the exact specification you sit."
        showHelpLink={false}
        headingLevel="h1"
        showDivider
      />

      {/* 3. IGCSE board picker — international split with a thin divider on top. */}
      <BoardPickerSection
        level="igcse"
        boards={IGCSE_BOARDS}
        sectionId="igcse-boards"
        heading="IGCSE boards (international)"
        subheading="International routes for the same age group. Pick the spec your school enters."
        showHelpLink
        showDivider
      />
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <GeoFaq faqs={GCSE_BOARD_FAQS} heading="GCSE & IGCSE English: common questions" />
      </div>
    </main>
  )
}

/* ───────────────────── Foundation / bilingual rail ───────────────────── */

// KS3 + EAL get a top-of-page rail with full-width cards. KS3 hits via
// `?setBoard=ks3` so the middleware writes the board cookie and the
// landing page loads the KS3-gated hub. EAL is its own route — no board
// cookie change, because EAL is a learning track that runs alongside
// any board choice.
function FeatureRail() {
  return (
    <section aria-labelledby="feature-rail-heading" className="bg-background pb-10 sm:pb-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-violet-600 dark:text-violet-300">
            Two tracks alongside the exam boards
          </p>
          <h2
            id="feature-rail-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight"
          >
            Build foundations early, or learn English alongside Arabic.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            KS3 covers Years 7–9, the curriculum before GCSE. EAL is the bilingual track for
            Arabic-speaking students preparing for UK exams. Both run independently of (and
            alongside) any GCSE / IGCSE board you pick below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Link
            href="/revision?setBoard=ks3"
            className="group relative flex flex-col gap-4 rounded-2xl border border-violet-500/30 bg-violet-500/[0.06] p-6 sm:p-7 transition-all hover:border-violet-500/60 hover:bg-violet-500/[0.10] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 inline-flex items-center rounded-full border border-violet-500/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase text-violet-600 dark:text-violet-300"
            >
              Foundation
            </span>
            <div className="flex items-center gap-4 pr-20">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 bg-violet-500/15 text-violet-600 dark:text-violet-300 ring-violet-500/30 font-mono text-sm font-bold tracking-wide"
              >
                KS3
              </span>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                  KS3 English — Years 7–9
                </h3>
                <p className="text-xs uppercase tracking-wider text-violet-600/80 dark:text-violet-300/80 mt-1">
                  Ages 11–14 · The curriculum before GCSE
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reading comprehension, creative writing, grammar foundations, and the year-by-year
              curriculum that primes students for GCSE English. Full Year 7, Year 8 and Year 9
              schemes of work with weekly lessons, set texts, and assessments.
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-300 group-hover:text-violet-700 dark:group-hover:text-violet-200 transition-colors">
              Open KS3 hub <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>

          <Link
            href="/eal"
            className="group relative flex flex-col gap-4 rounded-2xl border border-teal-500/30 bg-teal-500/[0.06] p-6 sm:p-7 transition-all hover:border-teal-500/60 hover:bg-teal-500/[0.10] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 inline-flex items-center rounded-full border border-teal-500/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase text-teal-600 dark:text-teal-300"
            >
              Bilingual
            </span>
            <div className="flex items-center gap-4 pr-20">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 bg-teal-500/15 text-teal-600 dark:text-teal-300 ring-teal-500/30 font-mono text-sm font-bold tracking-wide"
              >
                EAL
              </span>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                  English for Arabic Speakers
                </h3>
                <p className="text-xs uppercase tracking-wider text-teal-600/80 dark:text-teal-300/80 mt-1">
                  للناطقين بالعربية · Khaleeji explanations
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Focused lessons on the points Arabic L1 students most often stumble on: sentence
              structure (SVO vs VSO), articles, tenses, prepositions, common transfer errors. Every
              topic has examples, error remediation, and Khaleeji-Arabic explanations.
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 dark:text-teal-300 group-hover:text-teal-700 dark:group-hover:text-teal-200 transition-colors">
              Open EAL section <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Board picker (the main event) ───────────────────── */

type BoardLevel = 'gcse' | 'igcse' | 'ks3'

type Board = {
  name: string
  initials: string
  href: string
  blurb: string
  level: BoardLevel
  // Tailwind classes for the initials disc.
  discClass: string
}

// 02 May 2026 — every homepage card sends the user into their Your Hub
// at /revision with the board cookie set. The middleware validates
// `?setBoard=<id>` against BOARDS, writes the cookie, and 307-redirects
// to clean /revision — which then renders the personalised hub
// (Poetry, Set Texts, Mock Papers, Practice, Progress, etc.) keyed off
// that cookie. See business-docs/BOARD_NAVIGATION_MODEL.md.
const GCSE_BOARDS: Board[] = [
  {
    name: 'AQA',
    initials: 'AQA',
    href: '/revision?setBoard=aqa',
    blurb: 'Power & Conflict, Love & Relationships, Worlds & Lives.',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
  {
    name: 'Pearson Edexcel GCSE',
    initials: 'EDX',
    href: '/revision?setBoard=edexcel',
    blurb: 'Time & Place, Conflict, Relationships anthology.',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
  {
    name: 'OCR',
    initials: 'OCR',
    href: '/revision?setBoard=ocr',
    blurb: 'Love, Conflict, Power & Natural World, Youth & Age.',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
  {
    name: 'WJEC Eduqas',
    initials: 'WJEC',
    href: '/revision?setBoard=eduqas',
    blurb: 'Eduqas anthology with annotated walkthroughs.',
    level: 'gcse',
    discClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 ring-emerald-500/30',
  },
]

// KS3 surfaced through the <FeatureRail /> at the top of the page now —
// see above. We keep the `?setBoard=ks3` middleware pathway live so the
// cookie is written authoritatively and the user lands on /revision
// with KS3 content unlocked.

const IGCSE_BOARDS: Board[] = [
  {
    name: 'Cambridge IGCSE (CIE 0500 / 0990)',
    initials: 'CIE',
    href: '/revision?setBoard=cambridge-0500',
    blurb: '0500 and 0990 — Reading, Composition, model answers.',
    level: 'igcse',
    discClass: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 ring-orange-500/30',
  },
  {
    name: 'Pearson Edexcel IGCSE Literature (4ET1)',
    initials: 'iEDX-Lit',
    href: '/revision?setBoard=edexcel-igcse',
    blurb: 'Drama, Prose, Shakespeare, Unseen Poetry.',
    level: 'igcse',
    discClass: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 ring-orange-500/30',
  },
  {
    name: 'Pearson Edexcel IGCSE Language A (4EA1)',
    initials: 'iEDX-Lang',
    href: '/revision?setBoard=edexcel-igcse-lang',
    blurb: 'Anthology, non-fiction, transactional writing.',
    level: 'igcse',
    discClass: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 ring-orange-500/30',
  },
]

type BoardPickerSectionProps = {
  level: BoardLevel
  boards: Board[]
  sectionId: string
  heading: string
  subheading: string
  kicker?: string
  showHelpLink?: boolean
  showDivider?: boolean
  headingLevel?: 'h1' | 'h2'
}

function BoardPickerSection({
  level,
  boards,
  sectionId,
  heading,
  subheading,
  kicker,
  showHelpLink = false,
  showDivider = false,
  headingLevel = 'h2',
}: BoardPickerSectionProps) {
  const headingId = `${sectionId}-heading`
  const isGcse = level === 'gcse'
  const isKs3 = level === 'ks3'
  const HeadingTag = headingLevel
  // Per-level palette. KS3 picks violet to keep visual separation from
  // GCSE (emerald) and IGCSE (clay → orange). Each accent uses the
  // light/dark dual shade so the tint is legible on the cream :root
  // theme AND the ink .dark theme. The kicker line uses the same tint
  // so all three sections feel like siblings.
  const kickerClass = isGcse
    ? 'text-emerald-600 dark:text-emerald-300'
    : isKs3
      ? 'text-violet-600 dark:text-violet-300'
      : 'text-orange-700 dark:text-orange-300'
  const helpLinkClass = isKs3
    ? 'hover:text-violet-600 dark:hover:text-violet-300'
    : 'hover:text-orange-700 dark:hover:text-orange-300'

  return (
    <section
      aria-labelledby={headingId}
      className={`bg-background pb-14 sm:pb-20${showDivider ? ' border-t border-border/60' : ''}`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="text-center mb-10 sm:mb-12">
          {kicker ? (
            <p className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-3 ${kickerClass}`}>
              {kicker}
            </p>
          ) : null}
          <HeadingTag
            id={headingId}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight"
          >
            {heading}
          </HeadingTag>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {boards.map((b) => (
            <li key={b.name}>
              <Link
                href={b.href}
                className={`group relative flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card p-5 sm:p-6 transition-all hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  b.level === 'gcse'
                    ? 'hover:border-emerald-500/40 focus-visible:ring-emerald-500'
                    : b.level === 'ks3'
                      ? 'hover:border-violet-500/40 focus-visible:ring-violet-500'
                      : 'hover:border-orange-500/40 focus-visible:ring-orange-500'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute right-4 top-4 inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase ${
                    b.level === 'gcse'
                      ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-300'
                      : b.level === 'ks3'
                        ? 'border-violet-500/40 text-violet-600 dark:text-violet-300'
                        : 'border-orange-500/40 text-orange-700 dark:text-orange-300'
                  }`}
                >
                  {b.level === 'gcse' ? 'GCSE' : b.level === 'ks3' ? 'KS3' : 'IGCSE'}
                </span>
                <div className="flex items-center gap-4 pr-16">
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 ${b.discClass} font-mono text-xs sm:text-sm font-bold tracking-wide`}
                  >
                    {b.initials}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground leading-tight">
                    {b.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.blurb}</p>
                <span
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    b.level === 'gcse'
                      ? 'text-emerald-600 dark:text-emerald-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-200'
                      : b.level === 'ks3'
                        ? 'text-violet-600 dark:text-violet-300 group-hover:text-violet-700 dark:group-hover:text-violet-200'
                        : 'text-orange-700 dark:text-orange-300 group-hover:text-orange-800 dark:group-hover:text-orange-200'
                  }`}
                >
                  {b.level === 'ks3' ? 'Open KS3' : 'Open board'}{' '}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {showHelpLink ? (
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Not sure which spec your school sits?{' '}
            <Link href="/board-select" className={`underline underline-offset-4 ${helpLinkClass}`}>
              Choose by level instead.
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  )
}

/*
 * 02 May 2026 — TryAFeatureSection / FEATURES dataset removed.
 *
 * The board picker is the only thing the homepage does now. The 3 demo
 * cards (AI feedback, mock papers, study plan) live inside Your Hub
 * (/revision) where they are gated to the user's chosen exam board, so
 * showing them on the unkeyed homepage was duplication that distracted
 * from the single decision visitors are here to make: pick your board.
 *
 * AnthologyPricing + FinalCTA were similarly removed; pricing surfaces
 * inside Your Hub on a per-board basis (different tiers per spec) and
 * is also reachable directly via /pricing for ad-landers.
 */
