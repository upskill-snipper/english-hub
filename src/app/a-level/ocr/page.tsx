import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'OCR A-Level English - The English Hub',
    description:
      'OCR A-Level English Literature (H472) and Language (H470). Cross-board set-text, essay technique and language tools while board guides are written.',
    images: [
      {
        url: '/api/og?title=OCR+A-Level+English+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'OCR A-Level English - The English Hub',
      },
    ],
  },
  title: 'OCR A-Level English',
  description:
    'OCR A-Level English Literature (H472) and Language (H470). Cross-board set-text, essay technique and language tools while board guides are written.',
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
