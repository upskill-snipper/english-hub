'use client'

// The complete text of Hamlet. See src/data/full-texts/hamlet.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { hamletText } from '@/data/full-texts/hamlet'

export default function Page() {
  return <FullTextReader data={hamletText} slug="hamlet" year="c. 1601" />
}
