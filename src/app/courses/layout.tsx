import type { Metadata } from 'next'

export const metadata: Metadata = {
  // A `template` as well as a `default`, added 20 September 2026. Next applies
  // a parent template to its IMMEDIATE children only, so the root layout's
  // '%s - The English Hub' reached this segment and stopped. Every page under
  // /courses therefore had to brand itself, and `[id]/page.tsx` did it by hand
  // with ' | The English Hub' - a different separator from the rest of the
  // site, on 87 pages. Declaring the template here lets those pages set their
  // own title and nothing else.
  title: {
    default: 'Courses',
    template: '%s - The English Hub',
  },
  description:
    'Browse structured KS3, GCSE and IGCSE English courses with video lessons, quizzes and exam-style tasks across all major UK exam boards.',
  // NOTE: No canonical at layout level - it would be inherited by every
  // `/courses/<slug>` leaf page and suppress their rankings (SEO item #29).
  // `/courses` root canonical lives in `./page.tsx`; each course leaf sets its
  // own in `./[id]/page.tsx#generateMetadata`.
  openGraph: {
    title: 'Courses - The English Hub',
    description:
      'Browse structured KS3, GCSE and IGCSE English courses with video lessons, quizzes and exam-style tasks across all major UK exam boards.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courses - The English Hub',
    description:
      'Browse structured KS3, GCSE and IGCSE English courses with video lessons, quizzes and exam-style tasks across all major UK exam boards.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* THE HUB'S JSON-LD MOVED TO page.tsx ON 20 SEPTEMBER 2026. It describes
          /courses, and a layout wraps every descendant, so all 88 URLs beneath
          this one carried a node naming a different page. Same rule the FAQ
          walls established: a node describing one URL is mounted from that
          URL's page, never from a layout. */}
      {children}
    </>
  )
}
