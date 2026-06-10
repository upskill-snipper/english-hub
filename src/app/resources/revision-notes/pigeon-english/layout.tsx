import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pigeon English by Stephen Kelman | AQA GCSE Revision Notes',
  description:
    "AQA GCSE notes on Stephen Kelman's Pigeon English: plot, Harri's voice, character profiles, themes, key quotes, the Damilola Taylor context and essay plans.",
  alternates: { canonical: '/resources/revision-notes/pigeon-english' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
