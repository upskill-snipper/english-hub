import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Othello Revision Notes',
  description:
    'Free Othello revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/othello' },
  openGraph: {
    title: 'Othello Revision Notes — The English Hub',
    description:
      'Free Othello revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
