import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspector Calls Revision Notes',
  description:
    'Free Inspector Calls revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/inspector-calls' },
  openGraph: {
    title: 'Inspector Calls Revision Notes — The English Hub',
    description:
      'Free Inspector Calls revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
