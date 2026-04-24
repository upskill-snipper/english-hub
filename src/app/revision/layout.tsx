import type { Metadata } from 'next'
import { RevisionShell } from './_components/revision-shell'

export const metadata: Metadata = {
  title: 'Your Hub -- The English Hub',
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
  return <RevisionShell>{children}</RevisionShell>
}
