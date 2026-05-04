import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Love and Relationships poetry — AQA GCSE revision — The English Hub',
  description:
    'AQA GCSE Love and Relationships anthology — all 15 poems analysed. Themes, voice, comparison pairs and Grade-9 essay plans for Paper 2 Section B.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/love-and-relationships' },
}

// 28 Apr 2026 — wrong-board cookie redirect intentionally removed. AQA's
// Love & Relationships cluster is one of the homepage CTAs; bouncing
// stale-cookie users to /revision/poetry?wrongBoard=1 meant the click
// silently failed. The page is now reachable directly. OCR's distinct
// Love & Relationships cluster stays at /revision/poetry/ocr/love-and-relationships.
export default function LoveAndRelationshipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
