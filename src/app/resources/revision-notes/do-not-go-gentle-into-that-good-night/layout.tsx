import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Do Not Go Gentle Into That Good Night | Dylan Thomas Notes',
  description:
    "Revise Dylan Thomas's villanelle for GCSE: form and refrains explained, themes of death and defiance, key quotations with analysis and exam tips.",
  alternates: { canonical: '/resources/revision-notes/do-not-go-gentle-into-that-good-night' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
