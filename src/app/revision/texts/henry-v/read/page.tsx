'use client'

// The complete text of King Henry V. See src/data/full-texts/henry-v.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { henryVText } from '@/data/full-texts/henry-v'

export default function Page() {
  return <FullTextReader data={henryVText} slug="henry-v" year="c. 1599" />
}
