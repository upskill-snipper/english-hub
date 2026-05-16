import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Power and Conflict poetry — AQA GCSE revision',
  description:
    'AQA GCSE Power and Conflict anthology — all 15 poems analysed. Themes, language, structure, comparison guides for the AQA Paper 2 Section B exam.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict' },
}

// 28 Apr 2026 — wrong-board cookie redirect intentionally removed. AQA's
// Power & Conflict cluster is the headline GCSE AQA homepage CTA;
// bouncing stale-cookie users meant the click silently failed for any
// non-AQA user. The page is reachable directly now. Cross-board UX
// nudges belong on the unified `/revision` hub.
export default function PowerAndConflictLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
