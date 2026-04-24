import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Early Access / Founding pricing in place until August 2026. Students from £3.99/month (or £20/year with code 2026ENGLISH). Teachers from £6.99/month. Founding Schools £4,000/year (first 10 only) — Standard £8,000 from August 2026. 7-day free trial on every paid plan.',
  alternates: { canonical: 'https://theenglishhub.app/pricing' },
  openGraph: {
    title: 'Pricing — The English Hub',
    description:
      'Early Access / Founding pricing in place until August 2026. Students from £3.99/month (or £20/year with code 2026ENGLISH). Teachers from £6.99/month. Founding Schools £4,000/year (first 10 only) — Standard £8,000 from August 2026. 7-day free trial on every paid plan.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
