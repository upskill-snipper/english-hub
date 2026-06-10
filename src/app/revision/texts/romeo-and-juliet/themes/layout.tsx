import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Romeo and Juliet Themes | GCSE English',
  description:
    'Explore 7 themes in Romeo and Juliet, from love and conflict to fate, honour and light imagery, with key quotes and analysis for GCSE English essays.',
  alternates: { canonical: '/revision/texts/romeo-and-juliet/themes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
