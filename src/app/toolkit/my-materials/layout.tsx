import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Materials - Saved GCSE English Revision Resources',
  description:
    'Your saved GCSE English revision materials - generated notes, practice tests and resources, all in one place to revisit and continue.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit/my-materials' },
}

export default function MyMaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
