import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jane Eyre Revision Notes',
  description:
    'Free Jane Eyre revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/jane-eyre' },
  openGraph: {
    title: 'Jane Eyre Revision Notes - The English Hub',
    description:
      'Free Jane Eyre revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=Jane+Eyre+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Jane Eyre Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
