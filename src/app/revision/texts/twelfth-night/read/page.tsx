'use client'

// The complete text of Twelfth Night. See src/data/full-texts/twelfth-night.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { twelfthNightText } from '@/data/full-texts/twelfth-night'

export default function Page() {
  return <FullTextReader data={twelfthNightText} slug="twelfth-night" year="c. 1602" />
}
