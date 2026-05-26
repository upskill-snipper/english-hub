import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poetry Techniques Guide',
  description:
    'Master poetry analysis techniques for GCSE English Literature. Learn to identify and discuss poetic devices, form, structure, and language features.',
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry/techniques' },
  openGraph: {
    title: 'Poetry Techniques Guide - The English Hub',
    description:
      'Master poetry analysis techniques for GCSE English Literature. Learn to identify and discuss poetic devices, form, structure, and language features.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
