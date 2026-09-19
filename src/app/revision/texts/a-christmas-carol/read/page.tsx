'use client'

// The complete text of A Christmas Carol. See src/data/full-texts/a-christmas-carol.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { aChristmasCarolText } from '@/data/full-texts/a-christmas-carol'

export default function Page() {
  return <FullTextReader data={aChristmasCarolText} slug="a-christmas-carol" year="1843" />
}
