import type { Metadata } from 'next'
import { MarkSchemeViewer } from '@/components/school/MarkSchemeViewer'

export const metadata: Metadata = {
  openGraph: {
    title: 'Mark Scheme Reference | The English Hub',
    description:
      'Browse GCSE English mark schemes for AQA, Edexcel, OCR, and WJEC. View level descriptors, top tips, and common mistakes for every question.',
  },
  alternates: { canonical: 'https://theenglishhub.app/school/tools/mark-schemes' },
  title: 'Mark Scheme Reference | The English Hub',
  description:
    'Browse GCSE English mark schemes for AQA, Edexcel, OCR, and WJEC. View level descriptors, top tips, and common mistakes for every question.',
  robots: { index: false, follow: false },
}

export default function MarkSchemesPage() {
  return <MarkSchemeViewer />
}
