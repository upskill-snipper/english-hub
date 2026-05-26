import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revision Planner',
  description:
    'Free GCSE English revision planner. Organise your study schedule, track topics covered, and build a personalised countdown to exam day.',
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools/revision-planner' },
  openGraph: {
    title: 'Revision Planner - The English Hub',
    description:
      'Free GCSE English revision planner. Organise your study schedule, track topics covered, and build a personalised countdown to exam day.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
