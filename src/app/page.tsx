import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardType, getIgcseHubUrl } from '@/lib/board/board-filter'
import SectionSkeleton from '@/components/home/SectionSkeleton'
import BoardDashboardHero from '@/components/home/BoardDashboardHero'

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
  const board = await getServerBoard()

  /* Board is set → route to the right place */
  if (board) {
    const boardType = getBoardType(board)

    // IGCSE → go straight to the board-specific IGCSE hub
    if (boardType === 'igcse') {
      const hubUrl = getIgcseHubUrl(board)
      if (hubUrl) redirect(hubUrl)
    }

    // KS3 → courses page
    if (boardType === 'ks3') {
      redirect('/courses')
    }

    // GCSE / IAL / fallback → existing personalised dashboard
    return (
      <main className="min-h-screen bg-background">
        <BoardDashboardHero board={board} />
      </main>
    )
  }

  /* No board → Cinematic marketing homepage */
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
