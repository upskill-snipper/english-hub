import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revision Notes',
  description:
    'Free GCSE English Literature revision notes for every set text. Character analysis, themes, key quotes, and exam tips for Macbeth, An Inspector Calls, and more.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes' },
  openGraph: {
    title: 'Revision Notes — The English Hub',
    description:
      'Free GCSE English Literature revision notes for every set text. Character analysis, themes, key quotes, and exam tips for Macbeth, An Inspector Calls, and more.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
