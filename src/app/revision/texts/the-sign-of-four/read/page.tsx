'use client'

// The complete text of The Sign of Four. See src/data/full-texts/the-sign-of-four.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { theSignOfFourText } from '@/data/full-texts/the-sign-of-four'

export default function Page() {
  return <FullTextReader data={theSignOfFourText} slug="the-sign-of-four" year="1890" />
}
