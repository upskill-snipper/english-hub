'use client'

// The complete text of Romeo and Juliet. See src/data/full-texts/romeo-and-juliet.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { romeoAndJulietText } from '@/data/full-texts/romeo-and-juliet'

export default function Page() {
  return <FullTextReader data={romeoAndJulietText} slug="romeo-and-juliet" year="c. 1595" />
}
