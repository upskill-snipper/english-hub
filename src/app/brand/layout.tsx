import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand guidelines | The English Hub',
  description:
    'Brand guidelines for The English Hub \u2014 name usage, logo marks, colour palette, typography, spacing, and tone of voice.',
  alternates: { canonical: 'https://theenglishhub.app/brand' },
  openGraph: {
    type: 'website',
    url: 'https://theenglishhub.app/brand',
    title: 'Brand guidelines | The English Hub',
    description:
      'Brand guidelines for The English Hub \u2014 name usage, logo marks, colour palette, typography, spacing, and tone of voice.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand guidelines | The English Hub',
    description: 'Name usage, logo, colour, typography, and tone.',
  },
  robots: { index: true, follow: true },
}

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
