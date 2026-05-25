import type { Metadata } from 'next'

// ─── /ielts/partners - section layout & metadata ───────────────────────────
// Section-level metadata for the IELTS partnerships tree. The overview page
// (this route) gets its title/description/canonical here; the focused B2B
// landing pages (for-schools, for-agencies) override these in their own
// sibling layouts. Server component - no client boundary needed.
//
// COMPLIANCE: copy across this section describes the British Council UK Agent
// Hub, the IELTS Partnership Programme and UK university recruitment routes as
// standards we ALIGN TO and accreditations we are PURSUING - never as
// affiliations already held. The English Hub is an independent IELTS
// preparation platform and is not (yet) an official British Council or IELTS
// partner, nor an accredited university recruitment agent.
// ────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Partner with The English Hub - IELTS Preparation for Schools, Centres & Agencies',
  description:
    'Bring AI-marked IELTS Academic preparation to your learners. The English Hub offers bulk access, a centre dashboard, bilingual English / Arabic delivery for Gulf students, and instant band feedback - with a partnership roadmap aligned to British Council and IELTS standards.',
  alternates: { canonical: 'https://theenglishhub.app/ielts/partners' },
  keywords: [
    'IELTS preparation for schools',
    'IELTS partner platform',
    'IELTS for education agencies',
    'bilingual IELTS preparation Gulf',
    'AI IELTS band feedback',
    'IELTS centre dashboard',
  ],
}

export default function IeltsPartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
