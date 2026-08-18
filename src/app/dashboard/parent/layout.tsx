import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parent Dashboard',
  description:
    "Link to your child's account and see their real progress: marked essays, strengths and focus areas from their weekly reports.",
}

export default function ParentDashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
