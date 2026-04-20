import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'

export const metadata: Metadata = {
  title: 'WJEC Eduqas A-Level English — The English Hub',
  description:
    'WJEC Eduqas A-Level English Literature and Language revision hub. Cross-board set text analysis, essay technique and language study while full Eduqas A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/eduqas' },
  robots: { index: true, follow: true },
}

export default function EduqasALevelHubPage() {
  return (
    <ALevelBoardHub
      boardName="WJEC Eduqas A-Level English"
      examCode="Eduqas A-Level"
      hubSlug="eduqas"
      summary="WJEC Eduqas A-Level covers English Literature and Language. Students work across poetry, drama, prose and unseen texts, with a comparative essay component and coursework worth 20% of the qualification."
    />
  )
}
