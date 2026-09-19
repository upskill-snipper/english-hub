'use client'

// The complete text of Julius Caesar. See src/data/full-texts/julius-caesar.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { juliusCaesarText } from '@/data/full-texts/julius-caesar'

export default function Page() {
  return <FullTextReader data={juliusCaesarText} slug="julius-caesar" year="c. 1599" />
}
