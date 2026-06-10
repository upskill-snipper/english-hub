import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things Fall Apart Themes | IGCSE English',
  description:
    'Explore 7 themes in Things Fall Apart, from tradition and masculinity to colonialism, religion and chi, with quotes and analysis for IGCSE English essays.',
  alternates: { canonical: '/revision/texts/things-fall-apart/themes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
