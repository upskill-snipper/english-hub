import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jane Eyre Revision Notes',
  description:
    'Free Jane Eyre revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/jane-eyre' },
  openGraph: {
    title: 'Jane Eyre Revision Notes — The English Hub',
    description:
      'Free Jane Eyre revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
