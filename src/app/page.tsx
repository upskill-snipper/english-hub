import Link from 'next/link'
import { TrackEvent } from '@/components/analytics/TrackEvent'

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

      {/* 1. GCSE board picker — opens the page; clear level split. */}
      <BoardPickerSection
        level="gcse"
        boards={GCSE_BOARDS}
        sectionId="gcse-boards"
        kicker="Pick your exam board to start"
        heading="GCSE and IGCSE English revision, AI marked against the AO mark scheme."
        subheading="Year 10–11, ages 14–16. Tap your board and you’ll land on the exact specification you sit."
        showHelpLink={false}
        headingLevel="h1"
      />

      {/* 2. IGCSE board picker — international split with a thin divider on top. */}
      <BoardPickerSection
        level="igcse"
        boards={IGCSE_BOARDS}
        sectionId="igcse-boards"
        heading="IGCSE boards (international)"
        subheading="International routes for the same age group. Pick the spec your school enters."
        showHelpLink
        showDivider
      />
    </main>
  )
}

/* ───────────────────── Board picker (the main event) ───────────────────── */

type BoardLevel = 'gcse' | 'igcse'

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
    blurb: 'Power &amp; Conflict, Love &amp; Relationships, Worlds &amp; Lives.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    name: 'Pearson Edexcel GCSE',
    initials: 'EDX',
    href: '/revision?setBoard=edexcel',
    blurb: 'Time &amp; Place, Conflict, Relationships anthology.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    name: 'OCR',
    initials: 'OCR',
    href: '/revision?setBoard=ocr',
    blurb: 'Love, Conflict, Power &amp; Natural World, Youth &amp; Age.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    name: 'WJEC Eduqas',
    initials: 'WJEC',
    href: '/revision?setBoard=eduqas',
    blurb: 'Eduqas anthology with annotated walkthroughs.',
    level: 'gcse',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
]

const IGCSE_BOARDS: Board[] = [
  {
    name: 'Cambridge IGCSE (CIE 0500 / 0990)',
    initials: 'CIE',
    href: '/revision?setBoard=cambridge-0500',
    blurb: '0500 and 0990 &mdash; Reading, Composition, model answers.',
    level: 'igcse',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
  {
    name: 'Pearson Edexcel IGCSE Literature (4ET1)',
    initials: 'iEDX-Lit',
    href: '/revision?setBoard=edexcel-igcse',
    blurb: 'Drama, Prose, Shakespeare, Unseen Poetry.',
    level: 'igcse',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
  {
    name: 'Pearson Edexcel IGCSE Language A (4EA1)',
    initials: 'iEDX-Lang',
    href: '/revision?setBoard=edexcel-igcse-lang',
    blurb: 'Anthology, non-fiction, transactional writing.',
    level: 'igcse',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
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
  const HeadingTag = headingLevel

  return (
    <section
      aria-labelledby={headingId}
      className={`bg-ink-950 pb-14 sm:pb-20${showDivider ? ' border-t border-cream-200/10' : ''}`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="text-center mb-10 sm:mb-12">
          {kicker ? (
            <p
              className={`font-mono text-[11px] tracking-[0.14em] uppercase mb-3 ${
                isGcse ? 'text-emerald-300' : 'text-clay-300'
              }`}
            >
              {kicker}
            </p>
          ) : null}
          <HeadingTag
            id={headingId}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            {heading}
          </HeadingTag>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
            {subheading}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {boards.map((b) => (
            <li key={b.name}>
              <Link
                href={b.href}
                className={`group relative flex h-full flex-col gap-4 rounded-2xl border border-cream-200/10 bg-cream-50/[0.02] p-5 sm:p-6 transition-all hover:bg-cream-50/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
                  b.level === 'gcse'
                    ? 'hover:border-emerald-400/40 focus-visible:ring-emerald-400'
                    : 'hover:border-clay-300/40 focus-visible:ring-clay-300'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute right-4 top-4 inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase ${
                    b.level === 'gcse'
                      ? 'border-emerald-300/40 text-emerald-300'
                      : 'border-clay-300/40 text-clay-300'
                  }`}
                >
                  {b.level === 'gcse' ? 'GCSE' : 'IGCSE'}
                </span>
                <div className="flex items-center gap-4 pr-16">
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 ${b.discClass} font-mono text-xs sm:text-sm font-bold tracking-wide`}
                  >
                    {b.initials}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream-50 leading-tight">
                    {b.name}
                  </h3>
                </div>
                <p
                  className="text-sm text-cream-100/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: b.blurb }}
                />
                <span
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    b.level === 'gcse'
                      ? 'text-emerald-300 group-hover:text-emerald-200'
                      : 'text-clay-300 group-hover:text-clay-200'
                  }`}
                >
                  Open board <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {showHelpLink ? (
          <p className="mt-8 text-center text-xs text-cream-200/55">
            Not sure which spec your school sits?{' '}
            <Link href="/board-select" className="underline underline-offset-4 hover:text-clay-300">
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
