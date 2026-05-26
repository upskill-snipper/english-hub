import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essay Plans - Edexcel GCSE Poetry',
  description:
    'Grade 9 comparative essay plans for the Pearson Edexcel 1ET0 poetry anthology: Conflict and Time and Place. Model theses, structures and quotations.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/edexcel/essay-plans' },
}

export default function EdexcelEssayPlansLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
