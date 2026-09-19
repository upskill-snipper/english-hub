'use client'

// The complete text of The Tyger. See src/data/full-texts/the-tyger.ts for the
// edition and how it was located; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { theTygerText } from '@/data/full-texts/the-tyger'

export default function Page() {
  return <FullTextReader data={theTygerText} slug="the-tyger" year="1794" />
}
