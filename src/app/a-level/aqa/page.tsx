import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'

export const metadata: Metadata = {
  title: 'AQA A-Level English — The English Hub',
  description:
    'AQA A-Level English Literature (7712) and Language (7702) revision hub. Cross-board set text analysis, essay technique and language study while full AQA A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/aqa' },
  robots: { index: true, follow: true },
}

export default function AqaALevelHubPage() {
  return (
    <ALevelBoardHub
      boardName="AQA A-Level English"
      examCode="7712 / 7702"
      hubSlug="aqa"
      summary="AQA A-Level covers English Literature (7712) and Language (7702). Students study Shakespeare tragedies, modern drama, pre- and post-1900 poetry, and a range of prose from Gothic to dystopian traditions."
    />
  )
}
