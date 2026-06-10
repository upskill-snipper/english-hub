import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Department Overview Demo | School Portal',
  description:
    'See how heads of English track department health: attainment, marking workload and progress in one view. Interactive demo with sample data.',
  alternates: { canonical: '/demo/school/department' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
