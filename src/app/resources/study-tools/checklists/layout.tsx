import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revision Checklists',
  description:
    'Free GCSE English revision checklists. Track your progress across key topics, texts, and skills to ensure nothing is missed before exam day.',
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools/checklists' },
  openGraph: {
    title: 'Revision Checklists — The English Hub',
    description:
      'Free GCSE English revision checklists. Track your progress across key topics, texts, and skills to ensure nothing is missed before exam day.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
