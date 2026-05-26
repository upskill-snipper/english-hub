import type { Metadata } from 'next'

// The reading-assessment page is a client component and cannot export
// metadata itself, so without this layout it inherited the root default
// title/description - colliding with six other metadata-less routes in a
// live SEO audit. A unique, descriptive title + meta description here
// resolves the duplicate for /assessment/reading specifically.
const TITLE = 'Free Reading Age Test for GCSE English'
const DESCRIPTION =
  'Free online reading age test measuring comprehension, decoding and fluency. Get an estimated GCSE English grade and personalised next steps in minutes.'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: 'https://theenglishhub.app/assessment/reading' },
    openGraph: {
      title: `${TITLE} - The English Hub`,
      description: DESCRIPTION,
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
