import type { Metadata } from 'next'
import { ALevelBoardHub } from '@/app/a-level/_components/BoardHub'

export const metadata: Metadata = {
  title: 'OCR A-Level English — The English Hub',
  description:
    'OCR A-Level English Literature (H472) and Language (H470) revision hub. Cross-board set text analysis, essay technique and language study while full OCR A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level/ocr' },
  robots: { index: true, follow: true },
}

export default function OcrALevelHubPage() {
  return (
    <ALevelBoardHub
      boardName="OCR A-Level English"
      examCode="H472 / H470"
      hubSlug="ocr"
      summary="OCR A-Level covers English Literature (H472) and Language (H470). Students cover Shakespeare drama, pre- and post-1900 poetry and prose, and a close reading of modern texts with an independent NEA component."
    />
  )
}
