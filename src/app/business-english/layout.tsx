import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { selfCanonical, SITE_ORIGIN } from '@/lib/seo/canonical'

/**
 * /business-english section metadata + breadcrumb.
 *
 * The page itself is a server component, but metadata lives here for the
 * same reason it does on /eal: it is section-level and inherited by any
 * future child route that does not set its own.
 *
 * Title is BRAND-FREE on purpose. The root layout applies the
 * `'%s - The English Hub'` template (src/app/layout.tsx), so writing
 * "… - The English Hub" here would render
 * "… - The English Hub - The English Hub" in the tab and the SERP.
 * That doubling was a real defect fixed sitewide earlier; do not
 * re-introduce it.
 *
 * Canonical is self-referential via `selfCanonical()` (SEO item #29):
 * a leaf marketing page that is meant to rank must point at itself, not
 * inherit a parent-pointing canonical.
 */
export const metadata: Metadata = {
  title: 'English training and IELTS preparation for organisations',
  description:
    'Structured EAL practice graded A2-C1, a free CEFR placement test and IELTS preparation with AI band feedback, run as a cohort for staff or students. Clear about what is included and what is not.',
  keywords: [
    'English training for organisations',
    'IELTS preparation for staff',
    'corporate English training',
    'EAL cohort training',
    'CEFR placement test for teams',
    'workplace IELTS preparation',
  ],
  alternates: { canonical: selfCanonical('/business-english') },
  openGraph: {
    title: 'English training and IELTS preparation for organisations - The English Hub',
    description:
      'Structured EAL practice graded A2-C1, a free CEFR placement test and IELTS preparation with AI band feedback, run as a cohort for staff or students.',
    url: selfCanonical('/business-english'),
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og?title=English+training+for+organisations&subtitle=EAL+practice,+CEFR+placement+and+IELTS+band+feedback',
        width: 1200,
        height: 630,
        alt: 'English training and IELTS preparation for organisations - The English Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'English training and IELTS preparation for organisations - The English Hub',
    description:
      'EAL practice graded A2-C1, a free CEFR placement test and IELTS preparation with AI band feedback, run as a cohort.',
    images: [
      '/api/og?title=English+training+for+organisations&subtitle=EAL+practice,+CEFR+placement+and+IELTS+band+feedback',
    ],
  },
}

export default function BusinessEnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_ORIGIN },
          { name: 'For organisations', url: selfCanonical('/business-english') },
        ]}
      />
      {children}
    </>
  )
}
