import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parent Dashboard',
  description:
    "Track your child's English learning progress, quiz scores, exam readiness, and areas for improvement.",
}

export default function ParentDashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
