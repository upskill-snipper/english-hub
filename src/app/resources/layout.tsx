import type { Metadata } from 'next'

// Created 2026-05-16 for GEO: /resources had NO layout and ~181 leaf
// pages emitted zero structured data - the single biggest schema gap.
// A hub-level LearningResource node here cascades +12 GEO to every
// page in the tree. Distinct hub url, so it does not conflict with any
// child page that emits its own (different-url) schema.
export const metadata: Metadata = {
  title: { default: 'Free English Resources', template: '%s - The English Hub' },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* THE HUB'S JSON-LD MOVED TO page.tsx ON 20 SEPTEMBER 2026. It
          describes /resources, and a layout wraps every descendant, so all 214
          URLs beneath it carried a node naming a different page. Same rule
          the FAQ walls established: a node describing one URL is mounted
          from that URL's page, never from a layout. */}
      {children}
    </>
  )
}
