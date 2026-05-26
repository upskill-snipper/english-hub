import type { Metadata } from 'next'

// Sibling note: /assessment/reading now sets its own metadata via
// ../layout.tsx. Next.js metadata cascades to nested routes, so without
// this file the test step would inherit the landing page's title and
// create a fresh duplicate. A distinct title + description keeps the
// test-taking step unique in a live SEO audit.
const TITLE = 'Take the Reading Age Test'
const DESCRIPTION =
  'Start the free reading age test: timed reading passages, comprehension questions and word decoding to estimate reading age and GCSE English grade.'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: 'https://theenglishhub.app/assessment/reading/test' },
    openGraph: {
      title: `${TITLE} - The English Hub`,
      description: DESCRIPTION,
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
