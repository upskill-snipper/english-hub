import type { Metadata } from 'next'

import { BoardSelectorSection } from '@/components/board/BoardSelectorSection'

export const metadata: Metadata = {
  title: 'Choose your exam board — The English Hub',
  description:
    'Pick your GCSE or IGCSE English exam board so we can show you the right texts, poems, and past paper walkthroughs for your course.',
  alternates: { canonical: 'https://theenglishhub.app/board-select' },
  openGraph: {
    title: 'Choose your exam board — The English Hub',
    description:
      'Pick your GCSE or IGCSE English exam board to get a personalised study hub.',
  },
  robots: { index: false, follow: true },
}

export default function BoardSelectPage() {
  return (
    <main className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="flex flex-col gap-10">
        <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Welcome to The English Hub
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Which exam board do you study?
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Pick your board once and every page — set texts, poetry, past papers, mark schemes — will
            line up with your actual course. You can change it later from your settings.
          </p>
        </header>

        <BoardSelectorSection />

        <footer className="mx-auto max-w-2xl text-center text-xs text-muted-foreground">
          Studying a board that isn&apos;t listed? Email us and we&apos;ll add it — most of our
          content is exam-board agnostic and can help either way.
        </footer>
      </section>
    </main>
  )
}
