import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Power and Conflict Poetry Anthology',
  description:
    'AQA Power and Conflict poetry anthology guide. Analysis of all 15 poems with themes, techniques, key quotes, and comparison strategies.',
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry/power-and-conflict' },
  openGraph: {
    title: 'Power and Conflict Poetry Anthology — The English Hub',
    description:
      'AQA Power and Conflict poetry anthology guide. Analysis of all 15 poems with themes, techniques, key quotes, and comparison strategies.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
