import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join a School',
  description:
    'Enter your school join code to connect with your school and access class materials on The English Hub.',
}

export default function JoinSchoolLayout({ children }: { children: React.ReactNode }) {
  return children
}
