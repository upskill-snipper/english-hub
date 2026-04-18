import dynamic from 'next/dynamic'
import { getServerBoard } from '@/lib/board/get-server-board'
import SectionSkeleton from '@/components/home/SectionSkeleton'
import BoardDashboardHero from '@/components/home/BoardDashboardHero'

/* ───────────────────── Anthology marketing sections (client, dynamic) ───────────────────── */

const AnthologyHero = dynamic(() => import('@/components/home/AnthologyHero'), {
  loading: () => <SectionSkeleton />,
})

const MarqueeStrip = dynamic(() => import('@/components/home/MarqueeStrip'), {
  loading: () => <div className="h-14 border-y border-cream-200/10" />,
})

const BentoFeatures = dynamic(() => import('@/components/home/BentoFeatures'), {
  loading: () => <SectionSkeleton />,
})

const RolesSection = dynamic(() => import('@/components/home/RolesSection'), {
  loading: () => <SectionSkeleton />,
})

const PoemOfTheDay = dynamic(() => import('@/components/home/PoemOfTheDay'), {
  loading: () => <SectionSkeleton />,
})

const AnthologyTestimonials = dynamic(() => import('@/components/home/AnthologyTestimonials'), {
  loading: () => <SectionSkeleton />,
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

  /* Board is set → personalised dashboard (existing component) */
  if (board) {
    return (
      <main className="min-h-screen bg-background">
        <BoardDashboardHero board={board} />
      </main>
    )
  }

  /* No board → Anthology marketing homepage */
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero — "Anthology Cover" */}
      <AnthologyHero />

      {/* 2. Marquee strip */}
      <MarqueeStrip />

      {/* 3. Features — "Playful Bento" */}
      <BentoFeatures />

      {/* 4. Roles section (dark bg) */}
      <RolesSection />

      {/* 5. Poem of the Day */}
      <PoemOfTheDay />

      {/* 6. Testimonials */}
      <AnthologyTestimonials />

      {/* 7. Pricing */}
      <AnthologyPricing />

      {/* 8. Final CTA */}
      <FinalCTA />
    </main>
  )
}
