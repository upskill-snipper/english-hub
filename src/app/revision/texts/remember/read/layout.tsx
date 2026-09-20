import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Remember Online, Free',
  description:
    'Read Remember by Christina Rossetti in full, free. The complete public-domain sonnet in a clean, distraction-free reader with three reading modes.',
  alternates: { canonical: '/revision/texts/remember/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
