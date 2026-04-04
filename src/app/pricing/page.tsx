import type { Metadata } from 'next'
import PricingSection from '@/components/home/PricingSection'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, honest pricing for The English Hub. Try everything free for 30 days with full access to all courses, mock exams, AI feedback, and more. Cancel anytime.',
  alternates: { canonical: 'https://theenglishhub.app/pricing' },
  openGraph: {
    title: 'Pricing — The English Hub',
    description:
      'Simple, honest pricing for The English Hub. Try everything free for 30 days with full access to all courses, mock exams, AI feedback, and more. Cancel anytime.',
  },
}

export default function PricingPage() {
  return (
    <main>
      <PricingSection />
    </main>
  )
}
