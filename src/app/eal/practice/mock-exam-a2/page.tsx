/**
 * EAL banded practice - A2 (Cambridge A2 Key for Schools anchor).
 *
 * Real, scored, bilingual practice rendered from the calibrated
 * diagnostic bank filtered to the A2 band. CEFR anchor: Council of
 * Europe global scale; format anchor: Cambridge English A2 Key.
 * https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
 */
import type { Metadata } from 'next'
import { MockExamClient } from '@/components/eal/MockExamClient'

export const metadata: Metadata = {
  title: 'EAL Practice - A2 (Elementary)',
  description:
    'Free A2-level English practice for Arabic speakers: grammar, sentence structure, vocabulary and common errors, with bilingual explanations. Modelled on Cambridge A2 Key for Schools.',
  alternates: { canonical: 'https://theenglishhub.app/eal/practice/mock-exam-a2' },
}

export default function EALMockExamA2() {
  return <MockExamClient level="A2" />
}
