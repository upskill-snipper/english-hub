import type { Metadata } from 'next'
import { RevisionShell } from './_components/revision-shell'
import { VisitTracker } from './_components/visit-tracker'

export const metadata: Metadata = {
  title: 'Your Hub',
  description:
    'Your unified home for English revision, study tools, progress tracking, and exam technique -- personalised to your exam board for KS3, GCSE, IGCSE and IAL success.',
  // NOTE: canonical is intentionally NOT set here. A layout-level canonical
  // is inherited by every nested leaf page and produces duplicate/parent-pointing
  // canonicals, suppressing rankings for sub-topics (SEO audit item #29).
  // Each leaf page owns its own `alternates.canonical` via generateMetadata /
  // metadata export. The self-referential canonical for `/revision` itself is
  // set in `./page.tsx`.
  openGraph: {
    title: 'Your Hub -- The English Hub',
    description:
      'Your unified home for English revision, study tools, progress tracking, and exam technique -- personalised to your exam board.',
  },
}

export default function RevisionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* THE HUB'S JSON-LD MOVED TO page.tsx ON 20 SEPTEMBER 2026.
          It described /revision, and a layout wraps every descendant, so all
          277 URLs under /revision carried a node naming a different page. On
          /revision/texts/macbeth a crawl found two LearningResource nodes: the
          guide's own, and "English Revision Hub" pointing at /revision. An
          answer engine reading "what is this page about" from JSON-LD was told
          the wrong thing on the deep pages that most need to be understood.
          Same rule the FAQ walls established: a node describing one URL is
          mounted from that URL's page, never from a layout. */}
      {/* Records which revision pages the student opens, so the hub's
          "In Progress" lens and RecentlyStudied panel have data to show.
          Nothing wrote those keys before, so both were always empty. */}
      <VisitTracker />
      <RevisionShell>{children}</RevisionShell>
    </>
  )
}
