import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Remember Online, Free',
  description:
    'Read the full poem of Remember by Christina Rossetti online, free. Language highlighted inline.',
  alternates: { canonical: '/revision/texts/remember/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
