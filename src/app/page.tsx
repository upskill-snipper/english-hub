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

      {/* 1. Tight hero — short, named, kept as-is. */}
      <HeroHeadlineBlock />

      {/* 2. Board picker — the main job of the homepage. */}
      <BoardPickerSection />

      {/* 3. Try-a-feature row — three demo cards into the platform's strengths. */}
      <TryAFeatureSection />

      {/* 4. Pricing — folded in for visitors who scroll past the picker. */}
      <AnthologyPricing />

      {/* 5. Final CTA */}
      <FinalCTA />
    </main>
  )
}

/* ───────────────────── Hero headline block (kept) ───────────────────── */

function HeroHeadlineBlock() {
  return (
    <section className="bg-ink-950">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 pb-8 sm:pt-16 sm:pb-10 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight">
          Built by a teacher. Marked by AI.
          <br className="hidden sm:block" />
          <span className="text-clay-300 italic"> Against the real AO mark scheme.</span>
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-cream-100/80 leading-relaxed">
          GCSE &amp; IGCSE English revision, AI-marked essays and mocks &mdash; co-founded by a
          serving UK secondary English teacher.
        </p>
        <p className="mt-3 text-xs text-cream-200/55">
          We&rsquo;re at launch and we say so plainly. Founding pricing locked for the first cohort.
        </p>
      </div>
    </section>
  )
}

/* ───────────────────── Board picker (the main event) ───────────────────── */

type Board = {
  name: string
  initials: string
  href: string
  blurb: string
  // Tailwind classes for the initials disc.
  discClass: string
}

const BOARDS: Board[] = [
  {
    name: 'AQA',
    initials: 'AQA',
    href: '/revision/poetry/power-and-conflict',
    blurb: 'Power &amp; Conflict, Love &amp; Relationships, Worlds &amp; Lives.',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    name: 'Pearson Edexcel',
    initials: 'EDX',
    href: '/revision/poetry/edexcel',
    blurb: 'Time &amp; Place, Conflict, Relationships anthology.',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
  {
    name: 'OCR',
    initials: 'OCR',
    href: '/revision/poetry/ocr',
    blurb: 'Love, Conflict, Power &amp; Natural World, Youth &amp; Age.',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    name: 'WJEC Eduqas',
    initials: 'WJEC',
    href: '/revision/poetry/eduqas',
    blurb: 'Eduqas Anthology poems with annotated walkthroughs.',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
  {
    name: 'Cambridge IGCSE',
    initials: 'CIE',
    href: '/igcse/cambridge',
    blurb: '0500 and 0990 &mdash; Reading, Composition, model answers.',
    discClass: 'bg-emerald-400/15 text-emerald-300 ring-emerald-400/30',
  },
  {
    name: 'Edexcel IGCSE',
    initials: 'iEDX',
    href: '/igcse/edexcel',
    blurb: 'Drama, Prose, Shakespeare, Unseen Poetry.',
    discClass: 'bg-clay-300/15 text-clay-300 ring-clay-300/30',
  },
]

function BoardPickerSection() {
  return (
    <section
      aria-labelledby="board-picker-heading"
      className="bg-ink-950 pb-14 sm:pb-20 border-t border-cream-200/5"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="text-center mb-10 sm:mb-12">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-emerald-300 mb-3">
            Start here
          </p>
          <h2
            id="board-picker-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
          >
            Pick your exam board to start.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
            Six boards covered. Tap your board and you&rsquo;ll land straight on the texts, poems
            and papers you actually sit.
          </p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BOARDS.map((b) => (
            <li key={b.name}>
              <Link
                href={b.href}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-cream-200/10 bg-cream-50/[0.02] p-5 sm:p-6 transition-all hover:border-emerald-400/40 hover:bg-cream-50/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-1 ${b.discClass} font-mono text-xs sm:text-sm font-bold tracking-wide`}
                  >
                    {b.initials}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-cream-50 leading-tight">
                    {b.name}
                  </h3>
                </div>
                <p
                  className="text-sm text-cream-100/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: b.blurb }}
                />
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 transition-colors group-hover:text-emerald-200">
                  Open board <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-cream-200/55">
          Not sure which board?{' '}
          <Link href="/board-select" className="underline underline-offset-4 hover:text-clay-300">
            Choose by level instead.
          </Link>
        </p>
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
