'use client'

// The complete text of The Scarlet Letter. See src/data/full-texts/the-scarlet-letter.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { theScarletLetterText } from '@/data/full-texts/the-scarlet-letter'

export default function Page() {
  return <FullTextReader data={theScarletLetterText} slug="the-scarlet-letter" year="1850" />
}
