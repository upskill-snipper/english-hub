import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'

export const metadata: Metadata = {
  title: 'Pearson Edexcel A-Level English — The English Hub',
  description:
    'Pearson Edexcel A-Level English Literature (9ET0) and Language (9EN0) revision hub. Cross-board set text analysis, essay technique and language study while full Edexcel A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/edexcel' },
  robots: { index: true, follow: true },
}

export default function EdexcelALevelHubPage() {
  return (
    <ALevelBoardHub
      boardName="Pearson Edexcel A-Level English"
      examCode="9ET0 / 9EN0"
      hubSlug="edexcel"
      summary="Pearson Edexcel A-Level covers English Literature (9ET0) and Language (9EN0). Students tackle Shakespeare and drama, post-2000 poetry and prose, modernist texts, and a comparative independent study."
    />
  )
}
