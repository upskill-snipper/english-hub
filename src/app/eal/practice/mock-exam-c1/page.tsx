/**
 * EAL banded practice — C1 (Cambridge C1 Advanced anchor).
 *
 * Real, scored, bilingual practice rendered from the calibrated
 * diagnostic bank filtered to the C1 band. CEFR anchor: Council of
 * Europe global scale; format anchor: Cambridge English C1 Advanced.
 * https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
 */
import type { Metadata } from 'next'
import { MockExamClient } from '@/components/eal/MockExamClient'

export const metadata: Metadata = {
  title: 'EAL Practice — C1 (Advanced)',
  description:
    'Free C1-level English practice for Arabic speakers: inversion, mixed conditionals, the subjunctive, cleft sentences and advanced vocabulary, with bilingual explanations. Modelled on Cambridge C1 Advanced.',
  alternates: { canonical: 'https://theenglishhub.app/eal/practice/mock-exam-c1' },
}

export default function EALMockExamC1() {
  return <MockExamClient level="C1" />
}
