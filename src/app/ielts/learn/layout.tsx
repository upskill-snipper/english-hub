import type { Metadata } from 'next'

// Metadata + canonical for the IELTS LEARN hub. The hub page is a client
// component (it reads localStorage-backed lesson completion), so its title and
// canonical live here in a server layout rather than via the page itself. This
// layout also wraps the lesson pages (/ielts/learn/[skill]/[slug]), each of
// which sets its own unique title/canonical via its own nested layout.
export const metadata: Metadata = {
  title: 'Learn IELTS - Free Self-Study Lessons (Beginner to Band 9)',
  description:
    'A complete IELTS self-study library: short, original lessons for Listening, Reading, Writing and Speaking, plus a Foundation track for beginners. Work through each skill step by step, from the basics to a top band.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/learn' },
}

export default function IeltsLearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
