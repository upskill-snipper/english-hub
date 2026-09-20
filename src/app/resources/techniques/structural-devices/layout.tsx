import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Structural Devices',
  description:
    'Master structural devices for GCSE English. Learn to identify and analyse narrative structure, paragraph organisation, and pacing techniques.',
  alternates: { canonical: 'https://theenglishhub.app/resources/techniques/structural-devices' },
  openGraph: {
    title: 'Structural Devices - The English Hub',
    description:
      'Master structural devices for GCSE English. Learn to identify and analyse narrative structure, paragraph organisation, and pacing techniques.',
    images: [
      {
        url: '/api/og?title=Structural+Devices+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Structural Devices - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
