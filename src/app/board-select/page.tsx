import type { Metadata } from 'next'

import { BoardSelectorSection } from '@/components/board/BoardSelectorSection'

export const metadata: Metadata = {
  title: 'Choose your level — The English Hub',
  description:
    'Pick KS3, GCSE, or IGCSE and your English exam board so we can show you the right texts, poems, and past paper walkthroughs for your course.',
  alternates: { canonical: 'https://theenglishhub.app/board-select' },
  openGraph: {
    title: 'Choose your level — The English Hub',
    description:
      'Pick KS3, GCSE, or IGCSE to get a personalised English study hub.',
  },
  robots: { index: false, follow: true },
}

export default function BoardSelectPage() {
  return (
    <main className="relative isolate min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      {/* Ambient background — soft gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute -top-24 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-[24rem] w-[32rem] translate-x-1/4 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[22rem] w-[28rem] -translate-x-1/4 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <BoardSelectorSection />
      </div>
    </main>
  )
}
