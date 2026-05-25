import type { Metadata } from 'next'

// Unique metadata for the IELTS progress dashboard. The dashboard itself is a
// client component (it reads localStorage), so its title/canonical live here
// in a server layout rather than via generateMetadata on the page.
export const metadata: Metadata = {
  title: 'My IELTS Progress — The English Hub',
  description:
    'Track your IELTS Academic progress: overall band, per-skill bands for Listening, Reading, Writing and Speaking, your weakest skill, band-over-time and recent attempts.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/progress' },
  robots: { index: false, follow: true },
}

export default function IeltsProgressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
