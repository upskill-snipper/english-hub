import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Revision games — The English Hub',
  description:
    'Quick recall games for GCSE & IGCSE English: quote drills, technique spotting, character matching.',
  alternates: { canonical: 'https://theenglishhub.app/games' },
  openGraph: {
    title: 'Revision games — The English Hub',
    description:
      'Quick recall games for GCSE & IGCSE English: quote drills, technique spotting, character matching.',
    url: 'https://theenglishhub.app/games',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision games', url: 'https://theenglishhub.app/games' },
        ]}
      />
      {children}
    </>
  )
}
