import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Affordable plans for students, teachers, and schools. Start free, upgrade for AI essay marking, mock exams, and full analytics. From £8.99/month.',
  alternates: { canonical: 'https://theenglishhub.app/pricing' },
  openGraph: {
    title: 'Pricing — The English Hub',
    description:
      'Affordable plans for students, teachers, and schools. Start free, upgrade for AI essay marking, mock exams, and full analytics. From £8.99/month.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
