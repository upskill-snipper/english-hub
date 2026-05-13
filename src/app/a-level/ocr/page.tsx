import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'OCR A-Level English — The English Hub',
  description:
    'OCR A-Level English Literature (H472) and Language (H470) revision hub. Cross-board set text analysis, essay technique and language study while full OCR A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/ocr' },
  robots: { index: true, follow: true },
}

export default async function OcrALevelHubPage() {
  const boardName = await t('alevel.ocr.board_name')
  const summary = await t('alevel.ocr.summary')

  return (
    <ALevelBoardHub boardName={boardName} examCode="H472 / H470" hubSlug="ocr" summary={summary} />
  )
}
