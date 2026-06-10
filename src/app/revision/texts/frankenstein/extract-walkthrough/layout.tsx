import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frankenstein Extract Walkthrough | GCSE Exam Practice',
  description:
    "Line by line walkthrough of the Creature's awakening in Chapter 5 of Frankenstein, with AO2 analysis and zoom out points for GCSE English exam practice.",
  alternates: { canonical: '/revision/texts/frankenstein/extract-walkthrough' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
