import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Wife in London - Eduqas GCSE Poetry Analysis',
  description:
    'A Wife in London by Thomas Hardy - GCSE analysis for the WJEC Eduqas poetry anthology: war, irony, structure, context and comparison poems.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/a-wife-in-london' },
}

export default function EduqasAWifeInLondonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
