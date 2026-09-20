import type { Metadata } from 'next'

// Section-level metadata for the whole /ielts tree. Individual leaf routes
// (reading, listening, writing, speaking, diagnostic, progress) add their own
// title/description via their own layout/metadata where they need a unique one.
export const metadata: Metadata = {
  title: 'IELTS Academic Prep - Starter to Band 9',
  description:
    'One IELTS Academic learning loop: placement test, personalised plan, practice in all four skills, AI band feedback and full mock tests.',
  alternates: { canonical: 'https://theenglishhub.app/ielts' },
}

export default function IeltsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
