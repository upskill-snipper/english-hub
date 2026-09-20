import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Piano Online, Free',
  description:
    'Read Piano by D. H. Lawrence in full, free. The complete public-domain poem in a clean, distraction-free reader with three reading modes.',
  alternates: { canonical: '/revision/texts/piano/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
