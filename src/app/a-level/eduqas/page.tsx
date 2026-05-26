import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'WJEC Eduqas A-Level English - The English Hub',
    description:
      'WJEC Eduqas A-Level English Literature and Language revision hub. Cross-board set text analysis, essay technique and language study while full Eduqas A-Level content is on our roadmap.',
  },
  title: 'WJEC Eduqas A-Level English',
  description:
    'WJEC Eduqas A-Level English Literature and Language revision hub. Cross-board set text analysis, essay technique and language study while full Eduqas A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/eduqas' },
  robots: { index: true, follow: true },
}

export default async function EduqasALevelHubPage() {
  const boardName = await t('alevel.eduqas.board_name')
  const summary = await t('alevel.eduqas.summary')

  return (
    <ALevelBoardHub
      boardName={boardName}
      examCode="Eduqas A-Level"
      hubSlug="eduqas"
      summary={summary}
    />
  )
}
