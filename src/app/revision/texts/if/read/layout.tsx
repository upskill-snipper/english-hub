import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read If— Online, Free',
  description:
    'Read the poem If by Rudyard Kipling in full, free. The complete public-domain text in a clean, distraction-free reader with three reading modes.',
  alternates: { canonical: '/revision/texts/if/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
