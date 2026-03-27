import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Schools — The English Hub',
  description:
    'Equip your school with a complete English learning platform. Bulk licences, admin dashboards and curriculum-aligned content for KS3 to IGCSE.',
  alternates: { canonical: 'https://theenglishhub.app/for-schools' },
  openGraph: {
    title: 'For Schools — The English Hub',
    description:
      'Equip your school with a complete English learning platform. Bulk licences, admin dashboards and curriculum-aligned content for KS3 to IGCSE.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
