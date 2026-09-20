import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Report a Safeguarding Concern',
  description:
    'Report a safeguarding concern to The English Hub. Confidential reporting for students, parents, and teachers about child safety or wellbeing issues.',
  alternates: { canonical: 'https://theenglishhub.app/safeguarding/report' },
  openGraph: {
    title: 'Report a Safeguarding Concern - The English Hub',
    description:
      'Report a safeguarding concern to The English Hub. Confidential reporting for students, parents, and teachers about child safety or wellbeing issues.',
    images: [
      {
        url: '/api/og?title=Report+a+Safeguarding+Concern+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Report a Safeguarding Concern - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
