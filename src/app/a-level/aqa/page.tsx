import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'AQA A-Level English - The English Hub',
    description:
      'AQA A-Level English Literature (7712) and Language (7702). Cross-board set-text, essay technique and language tools while board guides are written.',
    images: [
      {
        url: '/api/og?title=AQA+A-Level+English+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'AQA A-Level English - The English Hub',
      },
    ],
  },
  title: 'AQA A-Level English',
  description:
    'AQA A-Level English Literature (7712) and Language (7702). Cross-board set-text, essay technique and language tools while board guides are written.',
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
