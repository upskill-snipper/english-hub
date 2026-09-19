'use client'

// The complete text of Antony and Cleopatra. See src/data/full-texts/antony-and-cleopatra.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { antonyAndCleopatraText } from '@/data/full-texts/antony-and-cleopatra'

export default function Page() {
  return <FullTextReader data={antonyAndCleopatraText} slug="antony-and-cleopatra" year="c. 1607" />
}
