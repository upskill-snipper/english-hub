import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth Revision Notes',
  description:
    'Free Macbeth revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/macbeth' },
  openGraph: {
    title: 'Macbeth Revision Notes — The English Hub',
    description:
      'Free Macbeth revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
