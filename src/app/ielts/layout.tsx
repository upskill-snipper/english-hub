import type { Metadata } from 'next'

// Section-level metadata for the whole /ielts tree. Individual leaf routes
// (reading, listening, writing, speaking, diagnostic, progress) add their own
// title/description via their own layout/metadata where they need a unique one.
export const metadata: Metadata = {
  title: 'IELTS Academic Preparation — Starter to Band 9',
  description:
    'A complete IELTS Academic learning loop: placement test, personalised study plan, practice for Listening, Reading, Writing and Speaking, instant AI band feedback, and full mock tests. Bilingual English / Arabic.',
  alternates: { canonical: 'https://theenglishhub.app/ielts' },
}

export default function IeltsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
