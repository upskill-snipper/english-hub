import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'AQA A-Level English - The English Hub',
    description:
      'AQA A-Level English Literature (7712) and Language (7702) revision hub. Cross-board set text analysis, essay technique and language study while full AQA A-Level content is on our roadmap.',
  },
  title: 'AQA A-Level English',
  description:
    'AQA A-Level English Literature (7712) and Language (7702) revision hub. Cross-board set text analysis, essay technique and language study while full AQA A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/aqa' },
  robots: { index: true, follow: true },
}

export default async function AqaALevelHubPage() {
  const boardName = await t('alevel.aqa.board_name')
  const summary = await t('alevel.aqa.summary')

  return (
    <ALevelBoardHub boardName={boardName} examCode="7712 / 7702" hubSlug="aqa" summary={summary} />
  )
}
