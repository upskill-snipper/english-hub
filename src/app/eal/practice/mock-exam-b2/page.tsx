/**
 * EAL banded practice — B2 (Cambridge B2 First for Schools anchor).
 *
 * Real, scored, bilingual practice rendered from the calibrated
 * diagnostic bank filtered to the B2 band. CEFR anchor: Council of
 * Europe global scale; format anchor: Cambridge English B2 First.
 * https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
 */
import type { Metadata } from 'next'
import { MockExamClient } from '@/components/eal/MockExamClient'

export const metadata: Metadata = {
  title: 'EAL Practice — B2 (Upper Intermediate)',
  description:
    'Free B2-level English practice for Arabic speakers: conditionals, passives, relative clauses, phrasal verbs and false friends, with bilingual explanations. Modelled on Cambridge B2 First for Schools.',
  alternates: { canonical: 'https://theenglishhub.app/eal/practice/mock-exam-b2' },
}

export default function EALMockExamB2() {
  return <MockExamClient level="B2" />
}
