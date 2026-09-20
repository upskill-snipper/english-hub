import type { Metadata } from 'next'
import { selfCanonical } from '@/lib/seo/canonical'

/**
 * The marking hub had no metadata of its own, so it inherited the root's.
 *
 * THE DEFECT (20 September 2026, found in a full crawl of all 1,303 sitemap
 * URLs). `/marking` renders `<h1>AI Essay Marking</h1>` and is the product's
 * flagship paid feature, but it carried:
 *
 *   title      "The English Hub - GCSE & IGCSE English revision, AI marked"
 *   canonical  https://theenglishhub.app
 *
 * Both are the ROOT layout's, inherited because `page.tsx` is a client
 * component and cannot export `metadata`. Next inherits `alternates.canonical`
 * down the layout tree, which is the exact hazard `src/lib/seo/canonical.ts`
 * was written for: the page was telling Google it is a duplicate of the
 * homepage, so it could not rank for "AI essay marking" or "mark my GCSE
 * essay" - its own terms - and the homepage gained nothing from absorbing it.
 *
 * The crawl also measured 787 internal links pointing here, more than any page
 * outside the primary nav, all of them flowing into a self-declared duplicate.
 *
 * A layout is the fix rather than converting the page: metadata belongs on a
 * server component, and this keeps `page.tsx` a client component untouched.
 * `/marking/submit` and `/marking/history` stay out of the sitemap and keep
 * their own noindex - they are logged-in tools, not landing pages.
 */
export const metadata: Metadata = {
  title: 'AI Essay Marking for GCSE & IGCSE English',
  description:
    'Submit an exam-style answer and get instant feedback against the assessment objectives for your board, with a grade. AQA, Edexcel, OCR, Eduqas and Cambridge.',
  alternates: { canonical: selfCanonical('/marking') },
  openGraph: {
    title: 'AI Essay Marking for GCSE & IGCSE English',
    description:
      'Submit an exam-style answer and get instant feedback marked against your board’s assessment objectives, with a grade indication.',
    images: [
      {
        url: '/api/og?title=AI+Essay+Marking+for+GCSE+%26+IGCSE+English',
        width: 1200,
        height: 630,
        alt: 'AI Essay Marking for GCSE & IGCSE English',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
