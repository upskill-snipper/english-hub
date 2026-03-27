import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silas Marner Revision Notes',
  description:
    'Free Silas Marner revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/silas-marner' },
  openGraph: {
    title: 'Silas Marner Revision Notes — The English Hub',
    description:
      'Free Silas Marner revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
