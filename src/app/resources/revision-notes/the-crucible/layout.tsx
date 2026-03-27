import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Crucible Revision Notes',
  description:
    'Free The Crucible revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/the-crucible' },
  openGraph: {
    title: 'The Crucible Revision Notes — The English Hub',
    description:
      'Free The Crucible revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
