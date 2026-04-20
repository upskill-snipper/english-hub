import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Affordable plans for students, teachers, and schools. Students from £3.49/month (or £20/year with code 2026ENGLISH). Teachers from £7.99/month. 7-day free trial on every paid plan.',
  alternates: { canonical: 'https://theenglishhub.app/pricing' },
  openGraph: {
    title: 'Pricing — The English Hub',
    description:
      'Affordable plans for students, teachers, and schools. Students from £3.49/month (or £20/year with code 2026ENGLISH). Teachers from £7.99/month. 7-day free trial on every paid plan.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
