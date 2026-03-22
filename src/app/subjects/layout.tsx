import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subjects — The English Hub',
  description:
    'Explore all subjects available on The English Hub. English Language, English Literature and more, with courses and resources for every exam board.',
  openGraph: {
    title: 'Subjects — The English Hub',
    description:
      'Explore all subjects available on The English Hub. English Language, English Literature and more, with courses and resources for every exam board.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
