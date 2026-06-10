import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Management Demo | School Portal',
  description:
    'Manage staff and student accounts, roles and permissions in this interactive school portal demo. All sample data, no signup required.',
  alternates: { canonical: '/demo/school/users' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
