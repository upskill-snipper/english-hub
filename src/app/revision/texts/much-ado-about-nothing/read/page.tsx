'use client'

// The complete text of Much Ado about Nothing. See src/data/full-texts/much-ado-about-nothing.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { muchAdoAboutNothingText } from '@/data/full-texts/much-ado-about-nothing'

export default function Page() {
  return (
    <FullTextReader data={muchAdoAboutNothingText} slug="much-ado-about-nothing" year="c. 1598" />
  )
}
