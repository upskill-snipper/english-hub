import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Printable English Resources',
  description:
    'Free printable English worksheets and resources for the classroom. Revision mats, quote cards, technique lists, and display materials for teachers.',
  alternates: { canonical: 'https://theenglishhub.app/resources/teaching/printables' },
  openGraph: {
    title: 'Printable English Resources - The English Hub',
    description:
      'Free printable English worksheets and resources for the classroom. Revision mats, quote cards, technique lists, and display materials for teachers.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
