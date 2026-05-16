import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eduqas GCSE poetry anthology — 12-poem 2025 cluster',
  description:
    'WJEC Eduqas 2025 GCSE poetry anthology — all 12 prescribed poems analysed. Themes, voice, comparison pairs and exam-aligned Grade 9 essay plans.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas' },
}

// 28 Apr 2026 — wrong-board cookie redirect intentionally removed.
// Previously this layout bounced any user whose board cookie wasn't
// `'eduqas'` to /revision/poetry?wrongBoard=1. That meant a homepage
// click on the WJEC Eduqas card silently failed for anyone with a stale
// cookie from another board (e.g. an Edexcel-IGCSE user clicking GCSE
// Eduqas would be bounced and never see the requested page). We now
// trust the explicit URL the user clicked and render the page directly;
// any cross-board UX nudges should live on the unified `/revision` hub
// rather than on board-specific URLs.
export default function EduqasPoetryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
