import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Techniques',
  description:
    'Master language and structural techniques for GCSE English. Learn to identify and analyse literary devices, rhetorical techniques, and structural features.',
  alternates: { canonical: 'https://theenglishhub.app/resources/techniques' },
  openGraph: {
    title: 'English Techniques — The English Hub',
    description:
      'Master language and structural techniques for GCSE English. Learn to identify and analyse literary devices, rhetorical techniques, and structural features.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
