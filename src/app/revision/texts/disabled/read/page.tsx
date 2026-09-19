'use client'

// The complete text of Disabled. See src/data/full-texts/disabled.ts for the
// edition and how it was located; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { disabledText } from '@/data/full-texts/disabled'

export default function Page() {
  return <FullTextReader data={disabledText} slug="disabled" year="1917" />
}
