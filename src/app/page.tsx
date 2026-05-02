import dynamic from 'next/dynamic'
import Link from 'next/link'
import SectionSkeleton from '@/components/home/SectionSkeleton'
import { TrackEvent } from '@/components/analytics/TrackEvent'

/* ───────────────────── Below-the-fold sections (client, dynamic) ───────────────────── */

const AnthologyPricing = dynamic(() => import('@/components/home/AnthologyPricing'), {
  loading: () => <SectionSkeleton />,
})

const FinalCTA = dynamic(() => import('@/components/home/FinalCTA'), {
  loading: () => <SectionSkeleton />,
})

/* ───────────────────── Main Page ───────────────────── */

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
        kicker="Start here — pick your exam board"
        heading="GCSE boards"
        subheading="Year 10–11, ages 14–16. Tap your board and you’ll land on the exact specification you sit."
        showHelpLink={false}
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

      {/* 3. Try-a-feature row — three demo cards into the platform's strengths. */}
      <TryAFeatureSection />

      {/* 4. Pricing — folded in for visitors who scroll past the picker. */}
      <AnthologyPricing />

      {/* 5. Final CTA */}
      <FinalCTA />
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

// 02 May 2026 — hrefs use the canonical `/revision?setBoard=<id>` mechanism.
// Middleware reads ?setBoard=, validates against BOARDS, sets the cookie, and
// redirects to clean /revision. See business-docs/BOARD_NAVIGATION_MODEL.md.
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
}: BoardPickerSectionProps) {
  const headingId = `${sectionId}-heading`
  const isGcse = level === 'gcse'

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
          <h2
            id={headingId}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            {heading}
          </h2>
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

/* ───────────────────── Try a feature (3 demo cards) ───────────────────── */

type Feature = {
  title: string
  href: string
  description: string
  cta: string
}

const FEATURES: Feature[] = [
  {
    title: 'AI essay feedback',
    href: '/marking/sample/macbeth',
    description:
      'See a real Macbeth response marked against the AQA AO rubric &mdash; AO1 / AO2 / AO5 strengths and weaknesses, in under a minute.',
    cta: 'Try the sample',
  },
  {
    title: 'Mock exam preview',
    href: '/mock-exams',
    description:
      'Walk through a full mock paper the way pupils sit it &mdash; timed, AO-aligned, with grade 1&ndash;9 prediction at the end.',
    cta: 'Open the mocks',
  },
  {
    title: 'Build your study plan',
    href: '/revision/study-plan',
    description:
      'Tell us your board and exam date. We&rsquo;ll draft a week-by-week plan against the specification you actually sit.',
    cta: 'Build my plan',
  },
]

function TryAFeatureSection() {
  return (
    <section
      aria-labelledby="try-feature-heading"
      className="bg-ink-950 pb-14 sm:pb-20 border-t border-cream-200/5"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="text-center mb-10 sm:mb-12">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-clay-300 mb-3">
            Try a feature
          </p>
          <h2
            id="try-feature-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            See the platform in action.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
            No login. No card. Three free uses of the premium features before the trial even starts.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((f) => (
            <li key={f.title}>
              <Link
                href={f.href}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-cream-200/10 bg-cream-50/[0.02] p-6 transition-all hover:border-clay-300/40 hover:bg-cream-50/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-cream-50 leading-tight">
                  {f.title}
                </h3>
                <p
                  className="text-sm sm:text-base text-cream-100/75 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: f.description }}
                />
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-clay-300 transition-colors group-hover:text-clay-200">
                  {f.cta} <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
