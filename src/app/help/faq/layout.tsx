import type { Metadata } from 'next'

/**
 * Metadata shell for /help/faq.
 *
 * The page itself only issues a server-side redirect to the canonical
 * /faqs page, so it cannot export `metadata`. Without this layout the
 * route inherits the shared `title: 'Help Centre'` from
 * src/app/help/layout.tsx, which the SEO audit flags as a duplicate
 * title across the /help subtree. Giving it a unique title + canonical
 * pointing at /faqs resolves the collision for any crawler that records
 * metadata before following the redirect.
 */
export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Frequently asked questions about The English Hub - courses, mock exams, practice, accounts and billing. Redirects to our full FAQ page.',
  alternates: { canonical: 'https://theenglishhub.app/faqs' },
}

export default function HelpFaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
