'use client'

// The complete text of Othello. See src/data/full-texts/othello.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { othelloText } from '@/data/full-texts/othello'

export default function Page() {
  return <FullTextReader data={othelloText} slug="othello" year="c. 1604" />
}
