import type { Metadata } from 'next'

// The trial sentence, in the description, Open Graph, its image and Twitter.
// Until 16 October 2026 all five said "7-day free trial on every paid plan".
// Two plans have none: an annual plan bought with a discount code is charged
// at once (/api/promo/redeem sets no trial), and a school place is not a free
// trial. What every visitor can rely on is the account trial: a new account
// starts 7 free days with no card.
const TRIAL_SENTENCE = 'A new account starts with a 7-day free trial, no card needed.'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `AI-supported GCSE & IGCSE English revision built by English teachers. Plans for students, teachers and schools. ${TRIAL_SENTENCE}`,
  alternates: { canonical: 'https://theenglishhub.app/pricing' },
  openGraph: {
    title: 'Pricing - The English Hub',
    description: `AI-supported GCSE & IGCSE English revision built by English teachers. Plans for students, teachers and schools. ${TRIAL_SENTENCE}`,
    url: 'https://theenglishhub.app/pricing',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og?title=Pricing+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The English Hub pricing - a 7-day free trial for every new account, no card needed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - The English Hub',
    description: `AI-supported GCSE & IGCSE English revision built by English teachers. Plans for students, teachers and schools. ${TRIAL_SENTENCE}`,
    images: [
      '/api/og?title=English+Hub+Pricing&subtitle=7-day+free+trial+for+every+new+account,+no+card+needed',
    ],
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
