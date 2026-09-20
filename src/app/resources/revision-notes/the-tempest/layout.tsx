import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Tempest Revision Notes',
  description:
    'Free The Tempest revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/the-tempest' },
  openGraph: {
    title: 'The Tempest Revision Notes - The English Hub',
    description:
      'Free The Tempest revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=The+Tempest+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The Tempest Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
