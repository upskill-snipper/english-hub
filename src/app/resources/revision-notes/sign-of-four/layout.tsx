import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Sign of Four Revision Notes',
  description:
    'The Sign of Four revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/sign-of-four' },
  openGraph: {
    title: 'The Sign of Four Revision Notes - The English Hub',
    description:
      'The Sign of Four revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=The+Sign+of+Four+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The Sign of Four Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
