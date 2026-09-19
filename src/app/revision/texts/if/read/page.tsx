'use client'

// The complete text of If—. See src/data/full-texts/if.ts for the
// edition and how it was located; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { ifText } from '@/data/full-texts/if'

export default function Page() {
  return <FullTextReader data={ifText} slug="if" year="1910" />
}
