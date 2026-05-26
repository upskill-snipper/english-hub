/**
 * EAL banded practice - B1 (Cambridge B1 Preliminary for Schools anchor).
 *
 * Real, scored, bilingual practice rendered from the calibrated
 * diagnostic bank filtered to the B1 band. CEFR anchor: Council of
 * Europe global scale; format anchor: Cambridge English B1 Preliminary.
 * https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
 */
import type { Metadata } from 'next'
import { MockExamClient } from '@/components/eal/MockExamClient'

export const metadata: Metadata = {
  title: 'EAL Practice - B1 (Intermediate)',
  description:
    'Free B1-level English practice for Arabic speakers: tenses, prepositions, collocations and common errors, with bilingual explanations. Modelled on Cambridge B1 Preliminary for Schools.',
  alternates: { canonical: 'https://theenglishhub.app/eal/practice/mock-exam-b1' },
}

export default function EALMockExamB1() {
  return <MockExamClient level="B1" />
}
