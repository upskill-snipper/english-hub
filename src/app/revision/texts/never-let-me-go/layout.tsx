import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/never-let-me-go'

// The study-guide sections this page did not have, and its animated story
// visuals, mounted after it. Written by scripts/mount-study-guide-supplement.mjs,
// which explains why a layout rather than the page.

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <GuideSupplement guide={guide} />
    </>
  )
}
