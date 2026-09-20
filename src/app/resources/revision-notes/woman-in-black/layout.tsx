import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Woman in Black Revision Notes',
  description:
    'The Woman in Black revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/woman-in-black' },
  openGraph: {
    title: 'The Woman in Black Revision Notes - The English Hub',
    description:
      'The Woman in Black revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=The+Woman+in+Black+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The Woman in Black Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
