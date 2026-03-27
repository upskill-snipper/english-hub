import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Animal Farm Revision Notes',
  description:
    'Free Animal Farm revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/animal-farm' },
  openGraph: {
    title: 'Animal Farm Revision Notes — The English Hub',
    description:
      'Free Animal Farm revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
