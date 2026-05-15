import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Pearson Edexcel A-Level English — The English Hub',
    description:
      'Pearson Edexcel A-Level English Literature (9ET0) and Language (9EN0) revision hub. Cross-board set text analysis, essay technique and language study while full Edexcel A-Level content is on our roadmap.',
  },
  title: 'Pearson Edexcel A-Level English — The English Hub',
  description:
    'Pearson Edexcel A-Level English Literature (9ET0) and Language (9EN0) revision hub. Cross-board set text analysis, essay technique and language study while full Edexcel A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/edexcel' },
  robots: { index: true, follow: true },
}

export default async function EdexcelALevelHubPage() {
  const boardName = await t('alevel.edexcel.board_name')
  const summary = await t('alevel.edexcel.summary')

  return (
    <ALevelBoardHub
      boardName={boardName}
      examCode="9ET0 / 9EN0"
      hubSlug="edexcel"
      summary={summary}
    />
  )
}
