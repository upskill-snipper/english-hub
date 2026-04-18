import dynamic from 'next/dynamic'
import SectionSkeleton from '@/components/home/SectionSkeleton'

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
  /* Always show the cinematic marketing homepage.
     If the user has a board set, they can navigate to their
     dashboard via "My Papers" in the header. The homepage is
     always accessible by clicking the brand logo. */
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Cinematic Hero — auto-advancing 4-chapter stage */}
      <CinematicHero />

      {/* 2. Marquee strip */}
      <MarqueeStrip />

      {/* 3. Trust strip */}
      <TrustStrip />

      {/* 4. Pricing */}
      <AnthologyPricing />

      {/* 5. Final CTA */}
      <FinalCTA />
    </main>
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
