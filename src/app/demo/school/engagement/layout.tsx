import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Engagement Demo | School Portal',
  description:
    'Track how often students practise, submit work and use revision tools across a sample school. An interactive engagement analytics demo.',
  alternates: { canonical: '/demo/school/engagement' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
