'use client'

// The complete text of A Midsummer Night's Dream. See src/data/full-texts/a-midsummer-nights-dream.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { aMidsummerNightsDreamText } from '@/data/full-texts/a-midsummer-nights-dream'

export default function Page() {
  return (
    <FullTextReader
      data={aMidsummerNightsDreamText}
      slug="a-midsummer-nights-dream"
      year="c. 1595"
    />
  )
}
