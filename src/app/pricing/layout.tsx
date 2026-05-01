import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Plans for students, teachers and schools. Students from £3.99/month. Teachers from £6.99/month. School plans available. 7-day free trial on every paid plan.',
  alternates: { canonical: 'https://theenglishhub.app/pricing' },
  openGraph: {
    title: 'Pricing — The English Hub',
    description:
      'Plans for students, teachers and schools. Students from £3.99/month. Teachers from £6.99/month. School plans available. 7-day free trial on every paid plan.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
