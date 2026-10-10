import type { Metadata } from 'next'

// The description, until 10 October 2026, named steps the page does not have
// (annotation, planning and timed writing as steps). It now names the five the
// page teaches, for the one unseen poem in 4ET1 Paper 1 Section A.
export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/unseen-poetry/approach' },
  title: '5-Step Approach - Edexcel IGCSE Unseen Poetry',
  description:
    'Five steps for reading the unseen poem in Edexcel IGCSE Literature 4ET1 Paper 1: first impressions, meaning, language, form and structure, and effect.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
