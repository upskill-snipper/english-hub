import type { Metadata } from 'next'
import { SchoolLayoutClient } from '@/components/school/SchoolLayoutClient'

export const metadata: Metadata = {
  title: 'School Dashboard | The English Hub',
  description:
    'Manage your school, track student performance, monitor class progress, and identify areas for improvement across your English department.',
  robots: { index: false, follow: false },
}

export default function SchoolLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SchoolLayoutClient>{children}</SchoolLayoutClient>
}
