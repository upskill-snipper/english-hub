import type { Metadata } from 'next'

/**
 * Metadata shell for /help/report.
 *
 * The report page is a Client Component (interactive form) and cannot
 * export `metadata`, so without this layout it would inherit the shared
 * `title: 'Help Centre'` from src/app/help/layout.tsx - colliding with
 * the other /help routes. This gives the route its own unique title and
 * meta description.
 */
export const metadata: Metadata = {
  title: 'Report an Issue',
  description:
    'Report a bug, content error, accessibility problem, or security concern on The English Hub. Tell us what went wrong and we will investigate.',
  alternates: { canonical: 'https://theenglishhub.app/help/report' },
}

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return children
}
