'use client'

// The complete text of Piano. See src/data/full-texts/piano.ts for the edition;
// that one needed its hard-wrapped lines rejoined, or it would have shown a
// three-quatrain poem as eighteen lines. The analysis panels are deliberately
// empty because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { pianoText } from '@/data/full-texts/piano'

export default function Page() {
  return <FullTextReader data={pianoText} slug="piano" year="1918" />
}
