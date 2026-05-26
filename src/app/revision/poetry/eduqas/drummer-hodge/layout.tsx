import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drummer Hodge - Eduqas GCSE Poetry Analysis',
  description:
    'Drummer Hodge by Thomas Hardy - GCSE analysis for the WJEC Eduqas poetry anthology: war, displacement, structure, context and comparison poems.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/drummer-hodge' },
}

export default function EduqasDrummerHodgeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
