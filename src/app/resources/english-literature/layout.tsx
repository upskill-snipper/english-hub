import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Literature Revision — GCSE & IGCSE',
  description:
    'Complete GCSE and IGCSE English Literature revision. Study guides for Shakespeare, prose, drama, and poetry with character analysis, themes, quotations, and essay techniques.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature' },
  openGraph: {
    title: 'English Literature Revision — The English Hub',
    description:
      'Complete GCSE and IGCSE English Literature revision. Study guides, essay techniques, and exam preparation.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
