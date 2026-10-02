import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'The Prelude: stealing the boat (Wordsworth)',
  description:
    'The boat-stealing episode from The Prelude by William Wordsworth, annotated: the extract AQA and Pearson Edexcel GCSE set, not the one Eduqas printed.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/the-prelude' },
}

export default function EduqasThePreludeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
