import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import SectionSkeleton from '@/components/home/SectionSkeleton'
import { TrustBox } from '@/components/trustpilot/TrustBox'
import { TrackEvent } from '@/components/analytics/TrackEvent'

/* ───────────────────── Cinematic marketing sections (client, dynamic) ───────────────────── */

const CinematicHero = dynamic(() => import('@/components/home/CinematicHero'), {
  loading: () => <SectionSkeleton />,
})

const MarqueeStrip = dynamic(() => import('@/components/home/MarqueeStrip'), {
  loading: () => <div className="h-14 border-y border-cream-200/10" />,
})

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
      {/* 0. Trust pill row — above the hero */}
      <TrustPills />

      {/* 0b. Named hero H1 block — commercial-review item #02 */}
      <HeroHeadlineBlock />

      {/* 1. Cinematic Hero — auto-advancing 4-chapter stage */}
      <CinematicHero />

      {/* 2. Marquee strip */}
      <MarqueeStrip />

      {/* 3. Trust strip */}
      <TrustStrip />

      {/* 3a. Trustpilot TrustBox — horizontal */}
      <section className="bg-ink-950 pb-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <TrustBox variant="horizontal" theme="dark" />
        </div>
      </section>

      {/* 3b. School logo wall hidden until we have signed, consenting schools.
          Restore by re-rendering <UsedInSchools /> below once logos + consent
          are in place. */}

      {/* 4. Pricing */}
      <AnthologyPricing />

      {/* 5. Final CTA */}
      <FinalCTA />

      {/* 5b. MAT band — above footer */}
      <MATBand />
    </main>
  )
}

/* ───────────────────── Trust pill row (item #01) ───────────────────── */

function TrustPills() {
  const pills = [
    'Built by AQA \u00B7 Pearson \u00B7 Cambridge \u00B7 OCR \u00B7 WJEC examiners',
    'UK GDPR \u00B7 ICO ZC016690',
    'WCAG 2.1 AA target',
  ]
  return (
    <section className="bg-slate-50/50 border-b border-slate-200/60">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-3">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs md:text-sm text-slate-600">
          {pills.map((p) => (
            <li
              key={p}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 whitespace-nowrap"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ───────────────────── Hero headline block (item #02) ───────────────────── */

function HeroHeadlineBlock() {
  return (
    <section className="bg-ink-950">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 pb-10 sm:pt-16 sm:pb-12 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight">
          Built by examiners. Marked by AI.
          <br className="hidden sm:block" />
          <span className="text-clay-300 italic"> Trusted by 2,400 students across 6 exam boards.</span>
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-cream-100/80 leading-relaxed">
          GCSE &amp; IGCSE English revision, AI-marked essays and mocks &mdash; built by senior
          examiners from every major UK board.
        </p>
        <p className="mt-3 text-xs text-cream-200/55">
          *As of April 2026 &mdash; see our{' '}
          <a href="/growth" className="underline hover:text-cream-50 transition-colors">
            public growth dashboard
          </a>{' '}
          for current numbers.
        </p>
      </div>
    </section>
  )
}

/* ───────────────────── Used in these schools (item #03) ───────────────────── */

function UsedInSchools() {
  return (
    <section className="bg-ink-950 py-14 sm:py-16 border-t border-cream-200/5">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 text-center">
        <h2 className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-300 mb-8">
          Used in these schools
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale">
          {[1, 2, 3, 4, 5].map((n) => (
            <Image
              key={n}
              src={`/logos/school-${n}.svg`}
              alt={`School ${n} logo placeholder`}
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          ))}
        </div>
        <p className="mt-8 text-sm text-cream-200/70">
          <Link href="/for-schools#founding" className="underline hover:text-clay-300">
            Become a Founding School &mdash; 10 places.
          </Link>
        </p>
      </div>
    </section>
  )
}

/* ───────────────────── Trust strip (inline, server-rendered) ───────────────────── */

function TrustStrip() {
  const stats = [
    { value: '470+', label: 'Structured lessons' },
    { value: '130+', label: 'Mock papers' },
    { value: '2,400', label: 'Students learning' },
    { value: '6', label: 'Exam boards covered' },
    { value: '4.9', label: 'Student rating / 5' },
    { value: '1\u20139', label: 'Grade tracking' },
  ]

  return (
    <section className="py-14 sm:py-16 bg-ink-950">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1.5">
            <span className="font-serif italic text-3xl sm:text-[44px] font-normal tracking-tight leading-none text-clay-300">
              {s.value}
            </span>
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-300">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────── MAT band (item #26) ───────────────────── */

function MATBand() {
  return (
    <section className="w-full bg-teal-900/95 border-y border-teal-700/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-14 sm:py-16 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-cream-50 mb-3">
          For ambitious MATs
        </h2>
        <p className="text-cream-100/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          If you run 3+ schools, speak to the founder directly about a trust-wide rollout.
        </p>
        {/* TODO(founder): replace https://cal.com/theenglishhub/founder-mat with the real Cal.com URL once the event is live */}
        <a
          href="https://cal.com/theenglishhub/founder-mat"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-base font-bold text-ink-950 transition-colors hover:bg-emerald-300 shadow-lg shadow-emerald-400/20"
        >
          Speak to the founder &rarr;
        </a>
      </div>
    </section>
  )
}
