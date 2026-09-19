'use client'

// The complete text of King Lear. See src/data/full-texts/king-lear.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { kingLearText } from '@/data/full-texts/king-lear'

export default function Page() {
  return <FullTextReader data={kingLearText} slug="king-lear" year="c. 1606" />
}
